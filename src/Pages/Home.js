import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import Posts from '../Components/Posts'
import Footer from '../Components/Footer'
import AllPosts from '../Components/AllPosts'
import NewPostForm from '../Components/NewPostForm'

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <AllPosts />
            <Footer />
        </>
    )
}

export default Home
