// Replicated Web Dev Simplified Netflix Slider UI but changed it to use reactJs hooks
// https://github.com/WebDevSimplified/netflix-sliding-movie-ui/blob/main/script.js -> his github repo linked
import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import MovieModal from '../MovieModal';
import './Slider.css';

const throttle = (cb, delay = 1000) => {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
};

const Slider = ({ images, title }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const itemsPerScreen = 4;
  const progressBarRef = useRef();
  const sliderRef = useRef();

  const calculateProgressBar = () => {
    if (!progressBarRef.current) return;

    progressBarRef.current.innerHTML = "";
    const itemCount = images.length;
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div");
      barItem.classList.add("progress-item");
      if (i === sliderIndex) {
        barItem.classList.add("active");
      }
      progressBarRef.current.append(barItem);
    }
  };

  useEffect(() => {
    calculateProgressBar();
  }, [sliderIndex, images]);

  useEffect(() => {
    const handleResize = throttle(calculateProgressBar, 250);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  const handleLeftClick = () => {
    setSliderIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + Math.ceil(images.length / itemsPerScreen)) % Math.ceil(images.length / itemsPerScreen);
      sliderRef.current.style.setProperty('--slider-index', newIndex);
      return newIndex;
    });
  };

  const handleRightClick = () => {
    setSliderIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % Math.ceil(images.length / itemsPerScreen);
      sliderRef.current.style.setProperty('--slider-index', newIndex);
      return newIndex;
    });
  };

  return (
    <div className="row">
      <div className="header">
        <h3 className="title">{title}</h3>
        <div className="progress-bar" ref={progressBarRef}></div>
      </div>
      <div className="container">
        <button className="handle left-handle" onClick={handleLeftClick}>
          <div className="text">&#8249;</div>
        </button>
        <div className="slider" ref={sliderRef} style={{ '--slider-index': sliderIndex, '--items-per-screen': itemsPerScreen }}>
          {images.map((img, index) => (
            <MovieModal img={img} index={index}/>
          ))}
        </div>
        <button className="handle right-handle" onClick={handleRightClick}>
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
};

export default Slider;
