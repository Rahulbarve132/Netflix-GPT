import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm , setIsSignInForm] = useState(true);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      <form className="w-4/12 absolute p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl mb-6">{isSignInForm ?"Sign In" : "Sign Up"} </h1>
       { !isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-[#333333] rounded-lg" />)}
        <input type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-[#333333] rounded-lg" />
        <input type="password" placeholder="password" className="p-4  my-2 w-full bg-[#333333] rounded-lg" />
        <button className="bg-red-700 w-full p-4 my-10 rounded-lg">{isSignInForm ?"Sign In" : "Sign Up"} </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ?" New to Netflix? Sign In" : "Already Ragistered User "}</p>
      </form>
    </>
  );
};

export default Login;