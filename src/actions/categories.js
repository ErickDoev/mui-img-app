import { types } from "../types/types";


export const categorieAdd = (category) => ({
    type:types.categoriesAdd,
    payload:category
});