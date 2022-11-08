import React from 'react'

const BlogPost = ({post}) => {
  return (
    <div className='max-w-[250px] flex flex-row space-x-3'>
      <div>
        <img src={post.img} className="object-cover object-center w-full rounded-md h-72"/>
      </div>
      <div className='flex flex-col justify-between p-6 space-y-8'>
        <div className='space-y-2'>
          <h2  className='text-xl font-bold'>{post.author}</h2>
          <p>{post.body}</p>
        </div>
        
      </div>
    </div>
  )
}

export default BlogPost