import { types } from "../types/types";



export const favoritesAdd = (fav) => ({
   type:types.favoriteAdd,
   payload:fav 
});


export const favoritesUnlike = (id) => ({
   type:types.favoriteUnlike,
   payload:id
});

export const favoriteActive = (fav) => ({
   type:types.favoriteActive,
   payload:fav
});