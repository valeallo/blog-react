import React from 'react'
import useFetch from '../Hooks/useFetch'
import BlogPost from './BlogPost'


const AllPosts = () => {
    const url = "http://localhost:3030/posts"
    //const url = "https://jsonplaceholder.typicode.com/posts"
    const {data, loading, error}= useFetch(url)
  return (
    <>
        <div className='flex flex-row justify-evenly w-full flex-wrap space-y-4'>
        {loading && !error && <p>page is loading</p> }
      {!data && !loading && error && (
        <p>Oops qualcosa non è andata a buon fine...</p>
      )}
      {data &&
        !error &&
        data.slice(0, 6).map((post, index) => {
          
          return (
            <BlogPost key={index} post={post}/>
          );
        })}
        </div>
    </>
  )
}

export default AllPosts