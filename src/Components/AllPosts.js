import React, { useEffect } from 'react'
import BlogPost from './BlogPost'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, post, error, loading } from '../States/postSlice'



const AllPosts = () => {
    const dispatch = useDispatch()
    const Posts = useSelector(post)
    const err = useSelector(error)
    const isLoading = useSelector(loading)
  
  useEffect(()=>{
    dispatch(getPosts(post))
  }, [dispatch])
  return (
    <>
        <div className='flex justify-evenly w-full flex-wrap space-y-4 items-center'>
        {isLoading && !err && <p>page is loading</p> }
      {!Posts && !isLoading && err && (
        <p>Oops qualcosa non è andata a buon fine...</p>
      )}
      {Posts &&
        !err &&
        Posts.map((post, index) => {
          
          return (
            <BlogPost key={index} post={post}/>
          );
        })}
        </div>
    </>
  )
}

export default AllPosts