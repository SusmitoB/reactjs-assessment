import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../actions/actions'

const Create = () => {
    const formInitData = { userId: "", title: "", body: "" }
    const [ isPostCreated, setIsPostCreated ] = useState(false)
    const [ formValues, setFormValues ] = useState(formInitData)
    const { userId, title, body } = formValues
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormValues(formInitData)
        dispatch(addPost(formValues))
        setIsPostCreated(true)
        setTimeout(() => setIsPostCreated(false), 1000)
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormValues({
            ...formValues, [name]: value
        })
    }

    // console.log(useSelector(st => st.posts))

    return (
        <div className="createpost">
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

                <button type="submit">Create Post</button>
            </form>
            { isPostCreated && <h2>New post added !</h2> }
        </div>
    )
}

export default Create