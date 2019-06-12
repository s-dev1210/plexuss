export function getHomePost(payload){
    return{
        type: "GET_HOME_POSTS",
        payload,
    }
}
export function publishPostComplete(){
    return{
        type: "PUBLISH_POST_COMPLETE",
    }
}
export function getHomePostFailureAction(){
    return{
        type: "GET_HOME_POSTS_FAILURE",
    }
}
export function publishPost(payload){
    return{
        type: "ADD_POST",
        payload,
    };
}
export function deletePostAction(payload){
    return{
        type: "DELETE_POST",
        payload,
    }
}
export function addCommentSuccess(payload){
    return{
        type: "ADD_COMMENT",
        payload,
    };
}
