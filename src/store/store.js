import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import { favoritesReducer } from "../reducers/favoritesReducer";
import { imgsReducer } from "../reducers/imgsReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reucers = combineReducers({
    imgs:imgsReducer,
    favorites:favoritesReducer,
    ui:uiReducer
});

export const store = createStore(
    reucers,
    composeEnhancers(applyMiddleware(thunk))
);
