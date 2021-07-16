import { types } from "../types/types";

const initialState = {
    favorites:[],
    active:''
}

export const favoritesReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.favoriteAdd:
           return{
               ...state,
               favorites:[...state.favorites,action.payload]
           }

        case types.favoriteUnlike:
            return{
                ...state,
                favorites:state.favorites.filter(e => e.id !== action.payload)
            }
        case types.favoriteActive:
            return{
                ...state,
                active:action.payload
            }
    
        default:
            return state;
    }
}
