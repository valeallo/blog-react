import React, {useState} from 'react'
import CreateNewAccount from './CreateNewAccount'
import { useDispatch, useSelector } from 'react-redux'
import { loggedInUser } from '../States/loginSlice'

function ModalLogin({ close }) {
    const [formData, setFormData] = useState({})
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
                    
            
                <div>
                <input
                    className="p-2 rounded-lg mb-2"
                    type="email"
                    placeholder="email"
                    onChange={(e) =>{
                        setFormData({
                            ...formData,
                            email: e.target.value,
                        }) 
                        console.log(formData.email)
                    }
                    }
                ></input>
                 <input
                    className="p-2 rounded-lg mb-2"
                    type="password"
                    placeholder="password"
                    onChange={(e) =>{
                        setFormData({
                            ...formData,
                            password: e.target.value,
                            
                        })
                        console.log(formData.password)}
                    }
                ></input>
                </div>
                
                <button onClick={loginUser}>Click Me</button>
           
        
                    


                   
            
                </div>
            </div>
        </div>
    )
}

export default ModalLogin
