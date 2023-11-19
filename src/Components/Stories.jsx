import React from "react";

const Stories = ({ profileUrl, username }) => {
  return (
    <div className="flex flex-col items-center space-x-1 ">
      <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5">
        <div className="block bg-white p-1  rounded-full">
          <img src={profileUrl} alt="" className="h-12 w-12 rounded-full " />
        </div>
      </div>
      <span className="text-xs">{username}</span>
    </div>
  );
};

export default Stories;
