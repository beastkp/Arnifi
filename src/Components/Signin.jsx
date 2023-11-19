import React, { useState } from "react";
import SigninImage from "../assets/Signin.png";
import logo from '../assets/instalogo.png'
import { BiLogoFacebookSquare } from "react-icons/bi";
import {useDispatch} from "react-redux"
import {signInData} from "../redux/features/userSlice";
import {useNavigate} from "react-router-dom"

const Signin = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInData(data)); 
    navigate('/');
  }
  return (
    <div className="flex relative">
      <div className="w-1/2 relative right-0">
        <img
          src={SigninImage}
          alt=""
          className="w-3/4 right-0 absolute p-2 m-5"
        />
      </div>
      <div className="w-1/2 relative p-5 m-5 left-0">
        <div className="h-1/2">
          <form
            action=""
            className="flex flex-col justify-center items-center w-3/4 mx-auto border border-gray-300 shadow-md rounded-xl h-[530px] "
            onSubmit={handleSubmit}
          >
            <img
              className="w-30 h-16 text-3xl mt-14"
              src={logo}
              alt="Instagram Logo"
            />
            <div className="flex flex-col p-3 m-3 w-3/4">
              <input
                type="text"
                placeholder="Phone number,username or email"
                className="p-3 m-3 border border-gray-300"
                id="username"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 m-3 border border-gray-300"
                id="password"
                onChange={handleChange}
              />
              <button className="bg-blue-500 text-white p-3 m-3 rounded-xl font-bold">
                Log in
              </button>
              <hr className="m-5 w-full" />
              <span>OR</span>
              <div className="flex gap-2 mx-auto p-4">
                <BiLogoFacebookSquare className="text-blue-900 text-xl cursor-pointer " />
                <span className=" text-blue-900 cursor-pointer">
                  Log in with Facebook
                </span>
              </div>
              <span className="cursor-pointer text-blue-900 pt-2">
                Forgot password ?
              </span>
            </div>
          </form>
          <div className="border border-gray-300 shadow-md rounded-xl p-5 w-3/4 mx-auto mt-5">
            <p>
              Dont have an account?
              <span className="text-blue-500 cursor-pointer"> Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
