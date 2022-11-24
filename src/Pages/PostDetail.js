import React from 'react'
import useFetch from '../Hooks/useFetch'
import { useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const PostDetail = () => {
    const { id } = useParams()
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/posts/${id}`
    const { data, loading, error } = useFetch(url)

    return (
        <>
            <NavBar />
            {loading && !error && <p>page is loading</p>}
            {!data && !loading && error && (
                <p>Oops qualcosa non è andata a buon fine...</p>
            )}
            {data && !error && (
                <div className="bg-white m-auto max-w-[80%] rounded-md min-h-screen space-y-2 mt-5">
                    <div ></div>
                    <div className="w-full p-10">
                        <h1 className="font-bold-600 text-3xl mb-3">{data.title}</h1>
                        <p>{data.body}</p>
                        <div className='flex w-full justify-end'>
                        <p className="text-zinc-500 mb-5">{data.author}</p>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}

export default PostDetail
