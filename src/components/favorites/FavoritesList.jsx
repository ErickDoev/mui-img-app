import React from 'react';

import Grid from '@material-ui/core/Grid';
import {useSelector} from 'react-redux';

import ImageList from '@material-ui/core/ImageList';

import { FavoriteCardItem } from './FavoriteCardItem';

export const FavoriteList = () => {

    const {favorites} = useSelector(state => state.favorites);
 
    return (
        <Grid
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
    )
}
