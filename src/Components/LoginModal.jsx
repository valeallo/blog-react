import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loggedInUser, user } from '../States/loginSlice'

const LoginModal = ({ close }) => {
    const [formData, setFormData] = useState({})
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/login`
    const data = {
        email: formData.email,
        password: formData.password
    }
    
    
    const dispatch = useDispatch()
    
    
    const loginUser = () => {
        console.log('1: ' + formData.password)
        console.log('2: ' + formData.email)
        
        dispatch(loggedInUser(data))
    }

    return (
        <div className="w-screen h-screen fixed top-1/2 left-1/2 flex items-center transform -translate-y-1/2 -translate-x-1/2 backdrop-blur-lg">
            <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-stone-100 min-w-[500px] p-4 rounded-xl h-fit ">
                <div className="flex flex-col relative justify-center items-center w-[500px] h-fit p-4 bg-stone-100">
                    <div
                        className="absolute right-2 top-2 cursor-pointer"
                        onClick={() => close(false)}
                    >
                        X
                    </div>

                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="w-full max-w-md space-y-8">
                            <div>
    
                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                    Sign in to your account
                                </h2>
                                
                            </div>
                            <form
                                className="mt-8 space-y-6"
                                action=''
                                method='POST'
                                onSubmit={loginUser}
                            >
                                <div className="-space-y-px rounded-md shadow-sm">
                                    <div>
                                        
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                            onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value })
                                            }}
                                        />
                                    </div>
                                    <div>
                                        
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Password"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    password: e.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        
                                        <p
                                           
                                            className="ml-2 block text-sm text-gray-900"
                                        >
                                            You don't have an account?
                                        </p>
                                    </div>

                                    <div className="text-sm">
                                        <Link
                                            to={`/login`}
                                            className="font-medium text-[#4e38b3] hover:text-indigo-500"
                                        >
                                            Register now!
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type='submit'
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#4e38b3] py-2 px-4 text-sm font-medium text-white hover:bg-[#3D2C8D] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >

                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginModal
