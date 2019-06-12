import axios from 'axios';
import store from '../../stores/socialStore'

import { getHomePost, publishPostComplete, getHomePostFailureAction } from '../actions/posts'
import {toastr} from 'react-redux-toastr'

export const getHomePosts = (data) => {
    return axios({
        method: 'post',
        url: '/get-home-posts',
        data: data,
    })
    .then(res => {
        if(res.statusText == "OK"){
            store.dispatch(getHomePost(res.data))
        }
    })
    .catch(error => {
        store.dispatch(getHomePostFailureAction())
    })
}

export const savePost = (data, is_shared) => {
    return axios({
        method: 'post',
        url: '/save-post',
        data: data,
    })
    .then(res => {
        if(is_shared == 2){
            toastr.success('Hide Post', 'Hide Post Successfully');
        }
        else if(is_shared){
            toastr.success('Shared Post', 'Shared Post Successfully');
        }else{
            toastr.success('Save Post', 'Save Post Successfully');
        }
        store.dispatch(publishPostComplete());
    })
    .catch(error => {
        store.dispatch(publishPostComplete());
    })
}
export const deletePost = (data) => {
    return axios({
        method: 'delete',
        url: '/delete-post',
        data: data,
    })
    .then(res => {
        if(res.statusText == "OK"){
            toastr.success('Delete Post', 'Delete Post Successfully');
        }
    })
    .catch(error => {
        toastr.error('Delete Post', 'Delete Post Failure');
    })
}

export const saveComment = (data) => {
    return axios({
        method: 'post',
        url: '/save-post-comment',
        data: data,
    })
    .then(res => {
        if(res.statusText == "OK"){
            toastr.success('Save Comment', 'Save Comment Successfully');
        }
    })
    .catch(error => {
        toastr.error('Save Comment', 'Save Comment Failure');
    })
}