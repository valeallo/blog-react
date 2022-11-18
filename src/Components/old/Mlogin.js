import React from 'react'

const MLogin  = () => {
  return (
    <>
    <section className="h-screen w-full flex flex-wrap">
                <div className="w-[50%]" style={{
                    backgroundImage: `url("https://i.ibb.co/Ny5mQnf/1.jpg")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>

                </div>
                <div className="w-[50%] flex justify-center items-center">
                    <div className="flex flex-col h-fit max-w-md p-6 rounded-md sm:p-10">
                        <div className="mb-8 text-center">
                            <h1 className="my-3 text-4xl font-bold">Login</h1>
                            <p className="text-sm">Per accedere alle funzionalitÃ  del sito.</p>
                        </div>
                        <form noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm">Indirizzo Email</label>
                                    <input type="email" name="email" id="email" placeholder="faty@gmail.com"
                                           className="w-full px-3 py-2 border rounded-md"/>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm">Password</label>
                                        <a rel="noopener noreferrer" href="#"
                                           className="text-xs hover:underline">Password dimenticata?</a>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="*****"
                                           className="w-full px-3 py-2 border rounded-md"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <button type="button"
                                            className="w-full px-8 py-3 font-semibold rounded-md">Sign
                                        in
                                    </button>
                                </div>
                                <p className="px-6 text-sm text-center">Non hai ancora un account?
                                    <a rel="noopener noreferrer" href="#"
                                       className="hover:underline">Registrati</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

    
    
    
    
    </>
  )
}

export default MLogin