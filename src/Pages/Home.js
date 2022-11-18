import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import AllPosts from '../Components/AllPosts'
import FeaturedPosts from '../Components/FeaturedPosts'

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <div className="min-h-screen  w-full flex flex-row justify-evenly">
                <div className="w-[65%] h-full">
                    <AllPosts />
                </div>
                <div className="hidden md:block w-[35%]">
                    <h2>Discover our Featured Posts:</h2>
                    <FeaturedPosts />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home
