
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Fav } from '../favorites/FavoritesScreen.jsx';

import { ImgsScreen } from '../imgs/ImgsScreen';
import { NavBar } from '../ui/NavBar';





export const AppRouter = () => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(startLoadingImages());
    // }, [dispatch]);

    return (
        
        <Router>
            
            <NavBar/>

            <Switch>
                <Route
                    exact
                    path="/" 
                    component={ImgsScreen}/>
                <Route
                    path="/favorites" 
                    component={Fav}/>

                <Route
                    path="*"
                    component={()=>(<h1>Not Found</h1>)}/>
            </Switch>
        </Router>
    )
}
