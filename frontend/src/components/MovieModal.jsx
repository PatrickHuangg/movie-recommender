import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Slider/Slider.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: '#333333',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

export default function MovieModal({movie, services, index}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(movie)

  return (
    <>
      <Button className='movieCard' onClick={handleOpen}>
        {/* <img src={movie.services.imageSet.horizontalPoster.w1080} alt={`Slide ${index}`} key={index} /> */}
        <img src={movie.Poster} alt={`Slide ${index}`} key={index} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1>{movie.Title}</h1>
            {/* {movie.originalTitleText.text !== movie.titleText.text && (
              <div>{movie.originalTitleText.text}</div>
            )} */}
            <div>
              <h3>{movie.Rated} {movie.Year} {movie.Runtime} </h3>
              <b>Genres:</b> {movie.Genre} <br></br>
              <b>Directors:</b>  {movie.Director} <br></br>
              <b>Casts:</b>  {movie.Actors} <br></br>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>Plot</h3>
            {movie.Plot}
          </Typography>
          <br></br>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>Ratings</h3>
            IMDb: {movie.imdbRating} <br></br>
            Rotten Tomatoes: {movie.Ratings[1].Value}
          </Typography>
          <br></br>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>Where to Watch</h3>
            {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              {movie.services.streamingOptions.au.map((option) => {
                if (option.type === "buy" || option.type === "rent") {
                  return (
                    <span>
                      <img src={option.service.imageSet.darkThemeImage} alt="SVG Image" />
                      <div style={{ fontSize: '16px'}}>
                        Price: {option.price.formatted}
                        <br />
                        Type: {option.type}
                      </div>
                    </span>
                )}
                if (option.type === "subscription") {
                  return (
                    <span>
                        <img src={option.service.imageSet.darkThemeImage} alt="SVG Image" />
                        <div style={{ fontSize: '16px'}}>
                          Type: {option.type}
                        </div>
                      </span>
                )}
                return null;
              })}
            </div> */}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}