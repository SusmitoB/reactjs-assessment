export const fetchPosts = () => fetch('https://jsonplaceholder.typicode.com/posts')

export const createPost = (data) => fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})

export const editPost = (data) => fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})