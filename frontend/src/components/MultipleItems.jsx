import React from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'; // Import custom CSS for overrides

function MultipleItems() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "10px",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };

  const cards = [
    { title: "Card 1", image: "image1.jpg" },
    { title: "Card 2", image: "image2.jpg" },
    { title: "Card 3", image: "image3.jpg" },
    { title: "Card 4", image: "image4.jpg" },
    { title: "Card 5", image: "image5.jpg" },
    { title: "Card 6", image: "image6.jpg" },
    { title: "Card 7", image: "image7.jpg" },
    { title: "Card 8", image: "image8.jpg" },
    { title: "Card 9", image: "image9.jpg" },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="carousel-item">
            <Card className="carousel-card">
              <CardMedia
                component="img"
                height="150"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;