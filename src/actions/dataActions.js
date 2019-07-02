import { GET_CATEGORY, GET_IMG } from './type';
import axios from 'axios';

export const getCategory = () => async dispatch => {

    const url = "https://api.thecatapi.com/v1/categories";


    const res = await axios.get(url);
    dispatch({
        type: GET_CATEGORY,
        payload: res.data
    })
};

export const getImg = (amount, category) => async dispatch => {

    console.log("Number of pics: "+amount+"; cat_id: "+category);

    const url = `https://api.thecatapi.com/v1/images/search?limit=${amount}&category_ids=${category}`;


    const res = await axios.get(url);
    dispatch({
        type: GET_IMG,
        payload: res.data
    })
};