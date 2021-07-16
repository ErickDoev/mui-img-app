import React from 'react';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import {IconButton, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';

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
export const FavoriteItem = ({data}) => {

    const classes = useStyles();
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
                            <IconButton aria-label="view" className={classes.icon}>
                                    <VisibilityIcon/>
                            </IconButton>
                            
                        }
                    />

                </ImageListItem>
            </Box>      
        </Grid>
    )
}
