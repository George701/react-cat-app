import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import imgReducer from './imgReducer';

export default combineReducers({
    category:  categoryReducer,
    images: imgReducer
});