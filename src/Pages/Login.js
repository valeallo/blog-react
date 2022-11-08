import React from "react";
import FormModalLogin from "../Components/FormModalLogin";
import ModalLogin from "../Components/ModalLogin";


const Login = () => {
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
      <div className=" w-[50%] flex flex-col justify-center items-center">
        
        <FormModalLogin className="m-auto"/>
        
      </div>
      </section>
    </>
  );
};

export default Login;
