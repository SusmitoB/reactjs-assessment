import { createPost, fetchPosts, editPost } from '../api/api'
import { GET_POSTS, ERR_FOUND, CREATE_POSTS, MODIFY_POSTS } from '../constants/constant'

export const getPosts = () => async (dispatch) => {
    try {
        const res = await fetchPosts()
        const data = await res.json()
        dispatch({ 
            type: GET_POSTS, 
            payload: { 
                data: data,
                error: ''
            }})
    } catch (error) {
        console.log(error)
        dispatch({ 
            type: ERR_FOUND, 
            payload: error 
        })
    }
}

export const addPost = (data) => async (dispatch) => {
    try {
        const res = await createPost(data)
        const msg = await res.json()
        dispatch({
            type: CREATE_POSTS,
            payload: {
                data: msg,
                error: ''
            }})
    } catch (error) {
        console.log(error)
        dispatch({ 
            type: ERR_FOUND, 
            payload: error 
        })
    }
}

export const modifyPost = (data) => async (dispatch) => {
    try {
        const res = await editPost({
            id: data.id,
            title: data.title,
            body: data.body,
            userId: data.userId,
        })
        const msg = await res.json()
        dispatch({
            type: MODIFY_POSTS,
            payload: {
                data: msg,
                error: ''
            }})
    } catch (error) {
        console.log(error)
        dispatch({ 
            type: ERR_FOUND, 
            payload: error 
        })
    }
}