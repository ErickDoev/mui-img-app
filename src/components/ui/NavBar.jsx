import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import {
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolBar:{
        display:'flex',
        justifyContent:'space-between'
    },
    list:{
        listStyle:'none',
        display:'flex',
        flexDirection:'row'
    },
    listItem:{
        margin:'5px',
        color:'white'
    },
    listItemA:{
        textDecoration:'none',
        color:'white'
    }
  }));

 
  
  export const NavBar = () => {

    const classes = useStyles();

      return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            
            <div>
                <ul className={classes.list}>
                    <li className={classes.listItem}>
                        <Link className={classes.listItemA} to="/">Home</Link>
                    </li>
                    <li className={classes.listItem}>
                        <Link className={classes.listItemA} to="/favorites">Favorites</Link>
                    </li>
                </ul>   
            </div>
            
           <div><p>ImgApp</p></div>
          </Toolbar>
        </AppBar>
      </div>
      )
  }
  