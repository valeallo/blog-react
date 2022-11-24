import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loggedInUser } from '../../States/loginSlice'

const FormModalLogin = () => {
    const [formValue, setFormValue] = useState({})
    console.log(formValue);


    const dispatch = useDispatch()
    
    
    const loginUser = () => {
        console.log('clicked')
        const formData = {
            email:formValue.email,
            password: formValue.password
        }
        const content = JSON.stringify(formValue)
       
        dispatch(loggedInUser(content))
    }
    return (
        <form >
            
                <div>
                    <input
                        className="p-2 rounded-lg mb-2"
                        type="email"
                        placeholder="e-mail"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                email: e.target.value,
                            })
                        }
                    ></input>
                </div>
                <div>
                    <input
                        className="p-2 rounded-lg mb-2"
                        type="password"
                        placeholder="password"
                        onChange={(e) => {
                            setFormValue({
                                ...formValue,
                                password: e.target.value,
                            })
                            }
                        }
                    ></input>
                </div>
                <button onClick={console.log('clicked')}>Click</button>
            
        </form>
    )
}

export default FormModalLogin
