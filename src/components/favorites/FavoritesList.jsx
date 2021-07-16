import React from 'react';

import Grid from '@material-ui/core/Grid';
import {useSelector} from 'react-redux';

import ImageList from '@material-ui/core/ImageList';

import { FavoriteCardItem } from './FavoriteCardItem';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    
    noFav:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    parr:{
        fontSize:'150px'
    }

  }));
  
export const FavoriteList = () => {
    const classes = useStyles();
    const {favorites} = useSelector(state => state.favorites);

    return (    

        <>
            {!favorites.length
                ? 
                    <div className={classes.noFav}>
                        <p className={classes.parr}>No hay favs</p>
                    </div>
                : <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center" 
                >
                    <ImageList >
                        {favorites.map(data => {
                            return <FavoriteCardItem key={data.id} data={data}/>
                        })}

                    </ImageList>       
                    
                </Grid>
            }
            
        </>
    )
}
