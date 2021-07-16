import React from 'react';

import {useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { ImgItem } from './ImgItem';
import { ImageList } from '@material-ui/core';
export const ImgCardsList = () => {
    const {imgs} = useSelector(state => state.imgs);  
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                
            <ImageList>

                {imgs.map(data => {
                    return <ImgItem key={data.id} data={data}/>
                })}

            </ImageList>
        </Grid>
    )
}

