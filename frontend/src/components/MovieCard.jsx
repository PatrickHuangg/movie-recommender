import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ margin: "10px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Movie
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
