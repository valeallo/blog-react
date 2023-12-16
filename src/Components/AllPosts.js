import React, { useEffect } from 'react'
import BlogPost from './BlogPost'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, post, error, loading } from '../States/postSlice'
import ScrollToTopButton from './ScrollToTopButton'
import useFetch from '../Hooks/useFetch'



const AllPosts = () => {
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/posts`
    
    const {data, loading, error}= useFetch(url)


  return (
    <>
        <div className='flex justify-evenly w-full flex-wrap space-y-4 items-center'>
        {loading && !error && <p>page is loading</p> }
      {!data && !loading && error && (
        <p>Oops qualcosa non è andata a buon fine...</p>
      )}
      {data &&
        !error &&
        data.map((post, index) => {
          return (
            //<div>{post.title}</div>
             <BlogPost key={index} post={post}/>
          );
        })}
        </div>
        <ScrollToTopButton />
    </>
  )
}

export default AllPosts