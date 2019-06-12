import _ from 'lodash';
import initialState from './initialState';

const posts = (state = initialState.posts, action) => {
    switch(action.type){
        case "GET_HOME_POSTS":
            return {...state, posts: _.cloneDeep(newPosts), startPoint: startPoint}
        case "GET_HOME_POSTS_FAILURE":
            return{
                ...state,
                isNextPost: false,
            }
        case "ADD_POST":
            return { ...state, posts: _.cloneDeep(newPosts), singlePost: _.cloneDeep(action.payload)};
        default:
            return { ...state }
    }
}
export default posts;
