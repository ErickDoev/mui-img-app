
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Fav } from '../favorites/FavoritesScreen.jsx';

import { ImgsScreen } from '../imgs/ImgsScreen';
import { NavBar } from '../ui/NavBar';





export const AppRouter = () => {

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

                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}
