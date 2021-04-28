import * as Constants from "../constants/constant";

const { GET_POSTS, CREATE_POSTS, MODIFY_POSTS } = Constants
const posts = (state = { data: [], error: '' }, action) => {
    switch(action.type){
        case GET_POSTS: 
            if (state.data.length === 0)
                return { 
                    ...state, 
                    data: action.payload.data 
                }
            return state
        case CREATE_POSTS: 
            return { 
                data: [...state.data, action.payload.data], 
                error: action.payload.error 
            };
        case MODIFY_POSTS: 
            return {
                data: state.data.map(item => 
                    item.id === action.payload.data.id ? 
                    action.payload.data : item), 
                error: action.payload.error
            };
        default: 
            return state;
    }
}

export default posts