import React, { useState } from 'react'

const CreateNewAccount = () => {
    const [formValue, setFormValue] = useState({})

    const saveToLocalStorage = () => {
        localStorage.setItem('new_user', JSON.stringify(formValue))
    }
    return (
        <form className='bg-[#d5d5fa] w-full h-full p-10 flex flex-col items-center justify-center'>
            
            <div className="container flex flex-col items-center justify-center">
            <h3 className='text-xl mb-4'>Create a New Account</h3>
                <div>
                    <input
                        className="p-2 rounded-lg mb-2"
                        type="text"
                        placeholder="Username"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                userName: e.target.value,
                            })
                        }
                    ></input>
                </div>
                <div>
                    <input
                        className="p-2 rounded-lg mb-2"
                        type="text"
                        placeholder="First name"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                firstName: e.target.value,
                            })
                        }
                    ></input>
                </div>
                <div>
                    <input
                        className="p-2 rounded-lg mb-2"
                        type="text"
                        placeholder="Last name"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                lastName: e.target.value,
                            })
                        }
                    ></input>
                </div>

                <div>
                    <input
                        className="p-2 rounded-lg mb-2 w-full"
                        type="date"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                dateOfBird: e.target.value,
                            })
                        }
                    ></input>
                </div>




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
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                password: e.target.value,
                            })
                        }
                    ></input>
                </div>
                <button
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 duration-300  p-2 rounded-lg mb-2 bg-purple-100 "
                    onClick={() => saveToLocalStorage()}
                >
                    Create Account
                </button>
            </div>
        </form>
    )
}

export default CreateNewAccount
