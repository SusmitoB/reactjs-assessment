import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { getPosts, modifyPost } from '../actions/actions'

const Modify = () => {
    const dispatch = useDispatch()
    const postInitData = {id: "", userId: "", title: "", body : ""}
    const { id } = useParams()
    const [ post, setPost ] = useState(postInitData)
    const [ isPostModified, setIsPostModified ] = useState(false)
    const posts = useSelector(st => st.posts.data)
    const { userId, title, body } = post

    const dispatchCall = useCallback(() => {
        dispatch(getPosts())
        setPost(posts.find(item => item.id === Number(id)) || 
        {id: "", userId: "", title: "", body : ""})
    }, [dispatch, posts, id])

    useEffect(() => {
        dispatchCall()
    }, [dispatchCall])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPost({
            ...post, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(modifyPost(post))
        setPost(postInitData)
        setIsPostModified(true)
        setTimeout(() => setIsPostModified(false), 2000)
    }

    return (
        <div className="modifypost">
            {
            post.id === '' ? 
            <h2>Not a valid id</h2> : <>
            <h4>
                Modifying post - id : {id}
            </h4>
            <form onSubmit={handleSubmit}>
            <div className="formElement">
                <label htmlFor="useridID">User Id:</label>
                <input type="text" id="useridID" name="userId" 
                value={userId} pattern="[0-9]*" title="Must be a number"
                onChange={handleChange} placeholder="Enter User Id here" 
                required/>
                </div>
                
                <div className="formElement">
                <label htmlFor="titleID">Title:</label>
                <textarea name="title" id="titleID" 
                cols="30" rows="5" value={title} 
                onChange={handleChange} placeholder="Enter the title here" 
                required/>
                </div>

                <div className="formElement">
                <label htmlFor="bodyID">Body:</label>
                <textarea name="body" id="bodyID" 
                cols="30" rows="10" value={body} 
                onChange={handleChange} placeholder="Enter the body here" 
                required/>
                </div>

                <button type="submit">Modify Post</button>                
            </form>
            <Link to="/">Go to all Posts</Link>
            { isPostModified && <h2>Post updated !</h2> }
            </>
            }
        </div>
    )
}

export default Modify
