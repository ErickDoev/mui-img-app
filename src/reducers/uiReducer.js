import { types } from "../types/types";

const initialState = {
    isOpen:false,
    loading:false
}

export const uiReducer = (state=initialState,action) => {
    
    switch (action.type) {
        case types.modalOpen:
            
        return {
            ...state,
            isOpen:true
        }

        case types.modalClose:

        return {
            ...state,
            isOpen:false
        }
            
    
        default:
            return state;
    }
}
