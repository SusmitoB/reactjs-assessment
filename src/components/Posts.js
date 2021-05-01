import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPosts } from '../actions/actions'

const Posts = () => {
    const dispatch = useDispatch()
    const {data : posts} = useSelector(state => state.posts)
    const [ filteredArray, setFilteredArray ] = useState(posts)

    const filterArray = (e) => {
        setFilteredArray(posts.filter(({ userId, title, body }) => {
            const str = userId + title + body
            return str.includes(e.target.value)
        }))
    }

    const dispatchCall = useCallback(() => {
        dispatch(getPosts())
        setFilteredArray(posts)
    }, [dispatch, posts])

    useEffect(() => {
        dispatchCall()
    }, [dispatchCall])

    return (
        <div className="posts">
            {
            posts.length > 0 
            ? <>
            <input style={{ minWidth:"200px" }} 
            type="text" onChange={filterArray}
            placeholder="Search with User Id, title or body"/> 
            <table>
                <thead>
                    <tr>
                        <th><h2>UserID</h2></th>
                        <th><h2>Title</h2></th>
                        <th colspan="2"><h2>Body</h2></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredArray.map(({ id, userId, title, body }) => {
                        return <tr key = {Math.floor(Math.random()*1000000000)}>
                            <td>
                                <h3>{userId}</h3>
                            </td>
                            <td>
                                <h3>{title}</h3>
                            </td>
                            <td>
                                <h3 style={{display:"block"}}>{body}</h3>
                            </td>
							<td>
								<Link style={{display:"block", textAlign:"center"}} to={`/modifypost/${id}`}>
									<strong>Codify</strong>
                                </Link>
							</td>
                        </tr>
                    })}
                </tbody>
            </table> 
            </>
            : <h3>Loading the posts.....</h3>
            }
        </div>
    )
}

export default Posts
