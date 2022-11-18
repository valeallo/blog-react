import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { insertInFavorite, favorite, resetFavorite } from '../States/favoriteSlice'

const BlogPost = ({ post }) => {
    const dispatch = useDispatch()

    const AllFavorites = useSelector(favorite)

    
    return (
        <div className="flex flex-col bg-[#ffffff] max-w-[300px] max-h-[300px] rounded-md hover:scale-105 hover:shadow-xl">
            <div className="h-[70%] w-[100%] overflow-hidden rounded-md">
                <img
                    src={post.img}
                    className="object-cover object-center w-full"
                />
            </div>
            <div className="flex flex-col justify-between items-center space-y-1 p-4 h-[35%]">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between w-full">
                        <span className="text-md font-bold">{post.title}</span>
                        <span className="text-sm text-[#1C0C5B]">
                            {post.author}
                        </span>
                    </div>

                    <button className='p-2 bg-red-200'
                        onClick={() => {
                            
                            dispatch(insertInFavorite(post))
                            console.log(AllFavorites)
                        }}
                    >
                        favs
                    </button>

                    <small className="text-sm text-[#a49ea6]">
                        {post.body.slice(0, 50)}...
                    </small>
                </div>
                <div className="flex flex-row justify-end w-full">
                    <Link
                        to={`/posts/${post._id}`}
                        className="text-xs text-[#916BBF] underline"
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogPost