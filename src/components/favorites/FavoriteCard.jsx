import React from 'react';

import {Card,CardActionArea,CardActions,CardMedia,IconButton, Box } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorderOutlined'; 
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'; 


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    icon:{
        color:'white'
    }
  });

export const FavoriteCard = ({data}) => {
    const classes = useStyles();

    const handleButtonFavorite = () => {
        console.log('hola');
    }

    return (
        <Grid item xs={3} >
            <Box m={1}>
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            alt = {data.tags}
                            height="140"
                            image={data.previewURL}
                        />
                    </CardActionArea>
                    <CardActions>

                        <IconButton aria-label="favorite" onClick={handleButtonFavorite}>
                            <FavoriteBorderIcon/>
                            
                        </IconButton>

                        <IconButton aria-label="view">
                            <VisibilityIcon/>
                        </IconButton>

                        

                        <IconButton aria-label="delete">
                            <DeleteOutlineIcon/>
                        </IconButton>   

                    </CardActions>
                </Card>
            </Box>
        </Grid>
    )
}
