import React from 'react'
import { Link } from 'react-router-dom'


const SingleFeatured = ({ post }) => {
    return (
        <div className="flex flex-row max-h-[100px] bg-[#ffffff] rounded-md hover:scale-105 hover:shadow-xl">
            <div className="h-[100%] w-[20%] overflow-hidden rounded-md">
                <img
                    src={post.img}
                    className="object-cover object-center h-full"
                />
            </div>
            <div className="flex flex-col justify-between items-center space-y-1 p-4  text-ellipsis w-full overflow-hidden">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between w-full ">
                        <span className="text-sm font-bold">
                            {post.title.slice(0, 20)}
                        </span>
                        <span className="text-xs text-[#1C0C5B]">
                            {post.author}
                        </span>
                    </div>
                    <small className="text-sm text-[#a49ea6]">
                        {post.body.slice(0, 10)}...
                    </small>
                </div>
                <div className="flex flex-row w-full justify-end">
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

export default SingleFeatured
