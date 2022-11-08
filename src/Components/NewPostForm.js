import React, {useState, useEffect} from 'react'
import usePost from '../Hooks/usePost'
import axios from 'axios'


const NewPostForm = () => {
    const url = "http://localhost:3030/posts"
    const [formData, setFormData] = useState({})
    // const {data, loading, error} =usePost(url, formData)

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then(console.log)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <form className='flex flex-col '>
                <input
                    className="p-2 rounded-lg mb-2"
                    type="title"
                    placeholder="title"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            title: e.target.value,
                        })
                    }
                ></input>
                 <input
                    className="p-2 rounded-lg mb-2"
                    type="img"
                    placeholder="url immagine"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            img: e.target.value,
                        })
                    }
                ></input>
                 <input
                    className="p-2 rounded-lg mb-2"
                    type="body"
                    placeholder="articolo"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            body: e.target.value,
                        })
                    }
                ></input>
                <input
                    className="p-2 rounded-lg mb-2"
                    type="author"
                    placeholder="author"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            author: e.target.value,
                            
                        })
                    }
                ></input>
                <button onClick={handleClick}>Add post</button>
            </form>
        </>
    )
}

export default NewPostForm
