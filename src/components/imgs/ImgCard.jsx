import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Card,CardActionArea,CardActions,CardMedia,IconButton, Box } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'; 
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import { favoritesAdd } from '../../actions/favorites';


const useStyles = makeStyles({
    root: { 
      maxWidth: 345,
      
    },
  });

export const ImgCard = ({data}) => {

    const {favorites} = useSelector(state => state.favorites);
    const [isSelected, setIsSelected] = useState(false);

    const classes = useStyles();
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

                        {
                            isSelected
                            ?<IconButton disabled={true} aria-label="favorite">
                                <FavoriteIcon color="secondary" />
                             </IconButton>

                            :<IconButton disabled={false} aria-label="favorite" onClick={handleButtonFavorite}>
                                <FavoriteBorderIcon color="action"/>
                             </IconButton>
                        }

                        <IconButton aria-label="view">
                            <VisibilityIcon/>
                        </IconButton>

                    </CardActions>
                </Card>
            </Box>
        </Grid>
    )
}
