/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const SignUp = () => {
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()

        console.log('login',e)
        navigate("/home");
    }
  return (
    <div className=" flex w-[100vw] h-[100vh] justify-center items-center bg-[url('./assets/bg1.jpg')] background-cover bg-no-repeat">
        <div className="w-[50vw] h-[100vh] flex justify-center items-center">
        <div className="flex w-[90%] h-[100vh] flex-col justify-start items-center bg-white/30 pt-16 backdrop-blur-md">
            <h3 className="w-full text-4xl font-bold text-yellow-400 pt-[5rem] pl-[6rem]">Blog<span className="text-yellow-800">Ai</span></h3>
            <h2 className="w-full text-normal text-[52px] pt-8 pl-[6rem]">Get access to<br/> thousands of<br/> high-quality<br/> <span className="font-bold text-black">mockups.</span></h2>
        </div>
        </div>
      <div className="w-[50vw] h-[100vh] flex justify-center items-center">
        <div className="flex w-[90%] h-[90vh] flex-col justify-center items-center bg-white rounded-md">
        <h1 className="text-3xl font-bold text-black">
          WellCome<span className="text-yellow-600">.</span>
        </h1>
        <p className="text-black font-normal text-lg">
          Create an account or login to access{" "}
          <span className="font-bold">BlogAi</span>
        </p>
        <form action="#" className="pt-8 w-[auto] h-[50%]">
          <div className="form-item pb-3">
            <label htmlFor="userName" className="text-sm text-black">
              Username or Email address
            </label>
            <input
              type="text"
              name="userName"
              className="rounded w-full px-3 py-2.5 border-none outline-none bg-slate-400"
            />
          </div>
          <div className="form-item pb-3">
            <label htmlFor="userName" className="text-sm text-black">
              Username or Email address
            </label>
            <input
              type="text"
              name="userName"
              className="rounded w-full px-3 py-2.5 border-none outline-none bg-slate-400"
            />
            <Link to={"/login"}>

            <p className="text-sm text-right w-full text-black">
              Forgot password?
            </p>
            </Link>
          </div>
          <div className="form-item pt-2">
            <input
              type="submit"
              name="submit"
              value={"Login"}
              onClick={(e) => handleLogin(e)}
              className="rounded w-full px-3 py-2.5 text-center border-none outline-none bg-blue-600 text-black font-semibold text-sm"
            />
          </div>
        </form>

        <div className="bellow">
          <p className="text-sm font-normal text-black">
            Don't have an account yet?{" "}
            <span className="font-bold text-yellow-600">Sign Up.</span>
          </p>
          <p className="text-sm font-bold  text-yellow-600 py-3 w-full text-center">
            Or sign in with
          </p>
          {/* icon down arrow */}
          <div className="w-full flex items-center justify-center gap-1">
            {" "}
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-md bg-slate-300">
              <FcGoogle className="text-2xl "  />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-md bg-slate-300">
              <FaApple  className="text-2xl " />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-md bg-slate-300">
              <FaFacebook  className="text-2xl " />
            </div>
          </div>
          {/* logo */}
          <div className="pt-4">
            <p className="w-full text-lg font-bold text-center text-yellow-400">
              Blog<span className="text-yellow-800">Ai</span>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
