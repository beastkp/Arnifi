import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineSearch } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";
import { MdNotificationsNone } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import logo from '../assets/instalogo.png'

const SideBar = () => {
  const {currentUser} = useSelector((state)=>state.user) 
  return (
    <div className="fixed w-[250px] h-screen p-2 border border-gray-300 shadow-md left-0 top-0">
      <img
        className="w-32 h-14 text-3xl abosulte mt-10 ml-4"
        src={logo}
        alt="Instagram Logo"
      />
      <div className="flex flex-col mt-5 pt-">
        <ul>
          <li className="flex gap-2 p-3 ">
            <BiHomeAlt className="w-7 h-5" />
            <span>Home</span>
          </li>
          <li className="flex gap-2 p-3 ">
            <MdOutlineSearch className="w-7 h-5" />
            <span>Search</span>
          </li>
          <li className="flex gap-2 p-3 ">
            <MdExplore className="w-7 h-5" />
            <span>Explore</span>
          </li>
          <li className="flex gap-2 p-3 ">
            <BsCameraReels className="w-7 h-5" />
            <span>Reels</span>
          </li>
          <li className="flex gap-2 p-3 ">
            <SiGooglemessages className="w-7 h-5" />
            <span>Messages</span>
          </li>
          <li className="flex gap-2 p-3 ">
            <MdNotificationsNone className="w-7 h-5" />
            <span>Notifications</span>
          </li>
          <li className="flex gap-2 p-3 ">
            <IoCreateOutline className="w-7 h-5" />
            <span>Create</span>
          </li>
          <li className="flex gap-2 p-3 ">
            <FaRegCircleUser className="w-7 h-5" />
            <span>
              {currentUser?.username ? `${currentUser?.username}` : "Profile"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
