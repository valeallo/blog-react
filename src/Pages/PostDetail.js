import React from 'react'
import useFetch from '../Hooks/useFetch'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const { id } = useParams()
    const url = `http://localhost:3030/posts/${id}`
    const { data, loading, error } = useFetch(url)
   

    
    return (
        <>
            {loading && !error && <p>page is loading</p>}
            {!data && !loading && error && (
                <p>Oops qualcosa non è andata a buon fine...</p>
            )}
            {data && !error && (
                <div>
                  <img src={data.img} />
                    <h1 className="font-bold-600">{data.title}</h1>
                    <p>{data.author}</p>
                    <p>{data.body}</p>
                </div>
            )}
        </>
    )
}

export default PostDetail
