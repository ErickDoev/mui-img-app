
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from "react-router-dom";
import { startLoadingImages } from '../../actions/images';
import { Fav } from '../favorites/FavoritesScreen.jsx';

import { ImgsScreen } from '../imgs/ImgsScreen';
import { NavBar } from '../ui/NavBar';





export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingImages());
    }, [dispatch]);

    return (
        
        <Router>
            
            <NavBar/>

            <Switch>
                <Route
                    exact
                    path="/" 
                    component={ImgsScreen}/>
                <Route
                    exact
                    path="/favorites" 
                    component={Fav}/>

                <Redirect to='/'/>
            </Switch>
        </Router>
    )
}
