import { types } from "../types/types";

const initialState = {
    imgs:[],
    active:null,
    loading:true
}

export const imgsReducer = (state=initialState,action) => {
    switch (action.type) {

        case types.imagesAdd:
            return{
                ...state,
                imgs:action.payload
            }

        case types.imagesStartLoading:
            return{
                ...state,
                loading:true
            }

        case types.imagesFinishLoading:
            return{
                ...state,
                loading:false
            }
        default:
            return state
    }
}
