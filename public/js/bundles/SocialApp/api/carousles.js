import axios from 'axios';
import store from '../../stores/socialStore'

import { getData, setLoadData } from '../actions/carousles'

export const getNearColleges = (page) => {
    store.dispatch(setLoadData('near'))
    return axios({
        method: 'get',
        url: 'getCarouselItems/near/' + page,
    })
    .then(res => {
        store.dispatch(getData(res.data, 'near'))
    })
    .catch(error => {
        console.log(error)
    })
}

export const getTopRankings = (page) => {
    store.dispatch(setLoadData('ranking'))
    return axios({
        method: 'get',
        url: 'getCarouselItems/ranking/' + page,
    })
    .then(res => {
        store.dispatch(getData(res.data, 'ranking'))
    })
    .catch(error => {
        console.log(error)
    })
}
export const getVirtualTours = (page) => {
    store.dispatch(setLoadData('virtual'))
    return axios({
        method: 'get',
        url: 'getCarouselItems/virtual/' + page,
    })
    .then(res => {
        store.dispatch(getData(res.data, 'virtual'))
    })
    .catch(error => {
        console.log(error)
    })
}

export const getCollegeNews = (page) => {
    store.dispatch(setLoadData('news'))
    return axios({
        method: 'get',
        url: 'getCarouselItems/news/' + page,
    })
    .then(res => {
        store.dispatch(getData(res.data, 'news'))
    })
    .catch(error => {
        console.log(error)
    })
}
