import React from 'react'
import useFetch from '../Hooks/useFetch'
import SingleFeatured from './SingleFeatured'

const FeaturedPosts = () => {
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/featured`
    
    const {data, loading, error}= useFetch(url)
  return (
    <>
        <div className='flex flex-row justify-start w-full flex-wrap space-y-3  '>
        {loading && !error && <p>page is loading</p> }
      {!data && !loading && error && (
        <p>Oops qualcosa non è andata a buon fine...</p>
      )}
      {data &&
        !error &&
        data.slice(0, 12).map((post, index) => {
          
          return (
            <SingleFeatured key={index} post={post}/>
          );
        })}
        </div>
    </>
  )

}

export default FeaturedPosts