import { GET_IMG } from '../actions/type';

const initialState = {};

export default function(state = initialState, action){
    switch(action.type){
        case GET_IMG:

            const result = action.payload;
            
            return {
                ...state,
                ...result
            };
        default:
            return state;
    }
}