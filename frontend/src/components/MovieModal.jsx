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
};

export default function MovieModal({img, index}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(img)
  console.log(img.primaryImage)
  console.log(img.primaryImage.url)



  return (
    <>
      <Button className='movieCard' onClick={handleOpen}>
        <img src={img.primaryImage.url} alt={`Slide ${index}`} key={index} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {img.titleText.text}
            {img.originalTitleText.text !== img.titleText.text && (
              <div>{img.originalTitleText.text}</div>
            )}
            <div>
              {`${img.releaseDate.day} / ${img.releaseDate.month} / ${img.releaseDate.year}`}
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}