import React, { useState } from "react";

const Suggestions = () => {
  const [follow,setFollow] = useState({
    span1:false,
    span2:false,
    span3:false,
    span4:false
  })
  return (
    <div className="fixed right-8 top-20 w-[270px]">
      <span className="text-xs text-gray-500 font-bold pr-24">
        Suggestions for you
      </span>
      <div className="flex flex-col p-5 pt-5">
        <div className="flex p-2 relative">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
            alt=""
            className="h-9 w-9 rounded-full"
          />
          <div className="flex flex-col pl-1">
            <span className="text-sm">Gabriallo</span>
            <span className="text-xs pl-2">Follows you</span>
          </div>
          {follow.span1 ? (
            <span
              className="text-sm text-blue-500 ml-auto pl-4 cursor-pointer fixed right-8"
              onClick={() => setFollow({ ...follow, span1: !follow.span1 })}
            >
              Following
            </span>
          ) : (
            <span
              className="text-sm text-blue-500 ml-auto pl-4 cursor-pointer fixed right-8"
              onClick={() => setFollow({ ...follow, span1: !follow.span1 })}
            >
              Follow
            </span>
          )}
        </div>
        <div className="flex p-2 relative">
          <img
            src="https://pixlr.com/images/index/remove-bg.webp"
            alt=""
            className="h-9 w-9 rounded-full"
          />
          <div className="flex flex-col pl-1">
            <span className="text-sm">haileyyyy</span>
            <span className="text-xs pl-2">Follows you</span>
          </div>
          {follow.span2 ? (
            <span
              className="text-sm text-blue-500 ml-auto pl-4 cursor-pointer fixed right-8"
              onClick={() => setFollow({ ...follow, span2: !follow.span2 })}
            >
              Following
            </span>
          ) : (
            <span
              className="text-sm text-blue-500 ml-auto pl-4 cursor-pointer fixed right-8"
              onClick={() => setFollow({ ...follow, span2: !follow.span2 })}
            >
              Follow
            </span>
          )}
        </div>
        <div className="flex p-2 relative">
          <img
            src="https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
            alt=""
            className="h-9 w-9 rounded-full"
          />
          <div className="flex flex-col pl-1">
            <span className="text-sm pr-6">jiannqep</span>
            <span className="text-xs pl-2">New to Instagram</span>
          </div>
          {follow.span3 ? (
            <span
              className="text-sm text-blue-500 ml-auto pl-4 cursor-pointer fixed right-8"
              onClick={() => setFollow({ ...follow, span3: !follow.span3 })}
            >
              Following
            </span>
          ) : (
            <span
              className="text-sm text-blue-500 ml-auto pl-4 cursor-pointer fixed right-8"
              onClick={() => setFollow({ ...follow, span3: !follow.span3 })}
            >
              Follow
            </span>
          )}
        </div>
        <div className="flex p-2 relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8pjltxTUqO8mOLwgKxmIptY2csnz7aw4VSCHxsG4PWhs7FLwLq-Wkj5uhPMnVQDTSsM"
            alt=""
            className="h-9 w-9 rounded-full"
          />
          <div className="flex flex-col pl-1">
            <span className="text-sm pr-6">Adonisss</span>
            <span className="text-xs pl-2">New to Instagram</span>
          </div>
          {follow.span4 ? (
            <span
              className="text-sm text-blue-500 ml-auto pl-4 cursor-pointer fixed right-8"
              onClick={() => setFollow({ ...follow, span4: !follow.span4 })}
            >
              Following
            </span>
          ) : (
            <span
              className="text-sm text-blue-500 ml-auto pl-4 cursor-pointer fixed right-8"
              onClick={() => setFollow({ ...follow, span4: !follow.span4 })}
            >
              Follow
            </span>
          )}
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap gap-2 ml-8 mt-2">
          <li className="text-xs text-gray-500 font-semibold cursor-pointer">
            About
          </li>
          <li className="text-xs text-gray-500 font-semibold cursor-pointer">
            Help
          </li>
          <li className="text-xs text-gray-500 font-semibold cursor-pointer">
            Press
          </li>
          <li className="text-xs text-gray-500 font-semibold cursor-pointer">
            API
          </li>
          <li className="text-xs text-gray-500 font-semibold cursor-pointer">
            Jobs
          </li>
          <li className="text-xs text-gray-500 font-semibold cursor-pointer">
            Privacy
          </li>
          <li className="text-xs text-gray-500 font-semibold cursor-pointer">
            Meta
          </li>
          <li className="text-xs text-gray-500 font-semibold cursor-pointer">
            Terms
          </li>
          <li className="text-xs text-gray-500 font-semibold cursor-pointer">
            Location
          </li>
          <li className="text-xs text-gray-500 font-semibold cursor-pointer">
            Meta-Verified
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Suggestions;

// https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg
