import React from "react";
import FormModalLogin from "../Componentes/FormModalLogin";
import ModalLogin from "../Componentes/ModalLogin";


const Login = () => {
  return (
    <>
     
      <div className="h-screen flex items-center justify-center">
        <div className="w-50 h-screen"
        style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1702949/pexels-photo-1702949.jpeg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
        ></div>
        <FormModalLogin/>
      </div>
      
    </>
  );
};

export default Login;
