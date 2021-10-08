import { types } from "../types/types";
import {getImages} from '../helpers/getImages';

export const startImagesAdd = (category='',page='1') => {
    return async(dispatch) => {
        const dataImgs = await getImages(category,page);
        dispatch(imagesAdd(dataImgs));
    }
}


const imagesAdd = (images) => ({
    type:types.imagesAdd,
    payload:images
});




//iamagenes que se muestran al inicio de la app por primera vez
export const startLoadingImages = () => {
    return async(dispatch) => {
        const dataImgs = await getImages('');
        dispatch(loadingImages());
        dispatch(imagesAdd(dataImgs));
    }
}

const loadingImages = () => ({
    type:types.imagesStartLoading
});