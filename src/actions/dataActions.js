import { GET_CATEGORY } from './type';
import axios from 'axios';

export const getCategory = () => async dispatch => {

    const url = "https://api.thecatapi.com/v1/categories";


    const res = await axios.get(url);
    dispatch({
        type: GET_CATEGORY,
        payload: res.data
    })
};