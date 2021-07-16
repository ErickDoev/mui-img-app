import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import {IconButton, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useSelector} from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'; 
import Grid from '@material-ui/core/Grid';
import { favoritesAdd } from '../../actions/favorites';

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
    }
});
export const ImgItem = ({data}) => {

    const classes = useStyles();
    const {favorites} = useSelector(state => state.favorites);
    const [isSelected, setIsSelected] = useState(false);
    const dispatch = useDispatch();

    const handleButtonFavorite = () => {
        dispatch(favoritesAdd(data));
        setIsSelected(true);
    }
    useEffect(() => {

        favorites.forEach(e=>{
            (e.id === data.id) && setIsSelected(true) 
            
        });

    }, [favorites,data.id]);
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={3}
        >
            <Box m={.5}>
                <ImageListItem key={data.id} >
                    <div className={classes.imageContainer}>
                        <img src={data.previewURL} alt={data.tags} className={classes.image}/>
                    </div>
                    <ImageListItemBar 
                        subtitle={<span>by: {data.user}</span>}
                        actionIcon={
                            isSelected
                            ?
                            <IconButton disabled={true} aria-label="favorite" onClick={handleButtonFavorite}>
                                <FavoriteIcon color="secondary"/>
                                
                            </IconButton>
                            :
                            <IconButton disabled={false} aria-label="favorite" onClick={handleButtonFavorite}>
                                <FavoriteBorderIcon className={classes.icon}/>
                             </IconButton>
                            
                        }
                    />

                </ImageListItem>
            </Box>      
        </Grid>
    )
}
