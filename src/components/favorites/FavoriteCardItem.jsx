import React from 'react';
import {useDispatch} from 'react-redux';
import {Card,CardActionArea,CardActions,CardMedia,IconButton, Box } from '@material-ui/core';

import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import { favoriteActive, favoritesUnlike } from '../../actions/favorites';
import { modalOpen } from '../../actions/ui';



const useStyles = makeStyles({
    icon:{
        color:'white'
    },
    image:{
        objectFit:'cover',
        width:'100%',
        height:'100%',
    
    },
    imageContainer:{
        width:'100%',
        height:'400px',
        overflow:'hidden'
    },
    root:{
        width:'250px'
    }
});

export const FavoriteCardItem = ({data}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
   

    const handleButtonUnlike = () => {
        dispatch(favoritesUnlike(data.id));
    }

    const handleButtonActive = () => {
        dispatch(favoriteActive(data));
        dispatch(modalOpen());
        
    }
    
    return (
        <>
            
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Box m={1}>
                    <Card className={classes.root} >
                        <CardActionArea>
                            <CardMedia 
                                component="img"
                                alt = {data.tags}
                                height="250"
                                image={data.previewURL}
                            />
                        </CardActionArea>
                        <CardActions>

                        <IconButton aria-label="favorite" onClick={handleButtonUnlike}>
                                <FavoriteIcon color="secondary" />
                            </IconButton>

            
                            <IconButton aria-label="view" onClick={handleButtonActive}>
                                <VisibilityIcon/>
                            </IconButton>

                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </>
    )
}
