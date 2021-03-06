import { GET_CATEGORY } from '../actions/type';

const initialState = {};

export default function(state = initialState, action){
    switch(action.type){
        case GET_CATEGORY:

            const result = action.payload.reduce((map, obj) => {
                map[obj.id] = obj;
                return map
            }, {})
            
            return {
                ...state,
                ...result
            };
        default:
            return state;
    }
}