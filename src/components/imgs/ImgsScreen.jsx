import React from 'react';

import {useDispatch} from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import {Button} from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';

import { makeStyles } from '@material-ui/core/styles';
import { useForm } from '../../hooks/useForm';
import { startImagesAdd } from '../../actions/images';
import { ImgCardsList } from './ImgCardsList';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

      },
    },
    form:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'25px',
        marginBottom:'25px'

    }

  }));

export const ImgsScreen = () => {
    const classes = useStyles();

    const [formValues,handleInputChange] = useForm({
        category:''
    });
    const {category} = formValues;
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(category === '') return;
        dispatch(startImagesAdd(category));

    }   

    const handleChangePage = (e,p) => {

        dispatch(startImagesAdd(category,p));
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit} className={classes.form}>
                <InputLabel htmlFor="input-with-icon-adornment">Buscar algo</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    name="category"
                    value={category}
                    onChange={handleInputChange}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
                <Button type="submit" variant="contained" color="primary">
                    Buscar
                </Button>
            </form>

            <div>
                <ImgCardsList />
            </div>

            <div className={classes.root}>
                <Pagination count={10} color="primary" onChange={handleChangePage}/>

            </div>
        </div>
    )
}
