import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUsStory from './Pages/AboutUsStory'
import './index.css'
import Home from './Pages/Home'
import OurContacts from './Pages/OurContacts'
import PageNotFound from './Pages/PageNotFound'
import Privacy from './Pages/Privacy'
import Login from './Pages/Login'
import AddPost from './Pages/AddPost'
import PostDetail from './Pages/PostDetail'

function App() {
    return (
        <div className='bg-gradient-to-b from-[#ece8fc] via-[#f3f0fd] to-[#916BBF]'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About-us" element={<AboutUsStory />} />
                <Route path="/our-contacts" element={<OurContacts />} />
                <Route path="/create-post" element={<AddPost/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App
