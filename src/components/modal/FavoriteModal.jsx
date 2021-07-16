import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { modalClose } from '../../actions/ui';
import {makeStyles} from '@material-ui/core/styles'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
Modal.setAppElement('#root');

const useStyles = makeStyles({
    imgContainer:{
        width:'500px',
        height:'100%',
        overflow:'hidden'
    },
    img:{
        objectFit:'cover',
        width:'100%',
        height:'100%',
    },
    imgUserContainer:{
        width:'50px',
        height:'50px',
        overflow:'hidden',
        borderRadius:'100px'
    },
    contentContaier:{
        display:'flex',
        flexDirection:'row'
    },
    contentItem:{
        flex:'1'
    },
    textEnd:{
        textAlign: 'end'
    }
});

export const FavoriteModal = () => {

    const classes = useStyles();
    const {isOpen} = useSelector(state => state.ui);
    const {active} = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const onRequestClose = () => {
        dispatch(modalClose());
    }
    return (
        <div>
            <Modal
                isOpen={isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={onRequestClose}
                style={customStyles}
                contentLabel="Example Modal"
                closeTimeoutMS={200}
            >
                <div className={classes.imgContainer}>
                    <img className={classes.img } src={active.largeImageURL} alt={active.tags}/>
                </div>
                <div className={classes.contentContaier}>
                    <div className={classes.imgUserContainer}>
                        <img className={classes.img} src={active.userImg} alt="user"/>
                    </div>
                    <p> {active.user}</p>
                </div>
                <hr/>
                <div className={classes.contentContaier}>
                    <p className={classes.contentItem}>likes: {active.likes}</p>
                    <hr/>
                    <p className={classes.contentItem}>views: {active.views}</p>
                </div>
                <div className={classes.contentContaier}>
                    <p className={classes.contentItem}>tags: {active.tags}</p>
                    <hr/>
                    <p className={classes.contentItem}>type: {active.type}</p>
                </div>
 
                
            </Modal>
        </div>
    )
}
