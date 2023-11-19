import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
// import { CiBookmark } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { LuMoreVertical } from "react-icons/lu";


const Post = ({
  username,
  postUrl,
  likes,
  comments,
  profileUrl,
  time,
  caption,
}) => {
  const [like, setLike] = useState(false);
  const style = {color:'red'}
  return (
    <div className="max-h-max flex flex-col p-2 m-2 pb-[100px] border border-gray-300 shadow-md rounded-xl w-[500px] ml-[100px]">
      <div className="relative">
        <div className="flex justify-between p-2">
          <div className="flex">
            <img
              src={profileUrl}
              alt=""
              className="rounded-full h-10 w-10 object-cover"
            />
            <span className="font-bold text-sm ml-2 mt-2">{username}</span>
          </div>
          <LuMoreVertical className="text-xl mt-3" />
        </div>
        <img src={postUrl} alt="Couldn't load image" className="p-3" />
        <div className="flex ">
          {}
          <div className="p-1 flex-col px-2">
            {like ? (
              <button onClick={() => setLike(!like)}>
                <FaHeart className="text-2xl cursor-pointer" style={style}/>
              </button>
            ) : (
              <button onClick={() => setLike(!like)}>
                <FaRegHeart className="text-2xl "  />
              </button>
            )}
          </div>
          <div className="p-1">
            <FaRegComment className="text-2xl"/>
          </div>
          <div className="p-1">
            <LuSend className="text-2xl"/>
          </div>
          <div className="p-1 ml-auto">
            <FaRegBookmark className="text-2xl" />
          </div>
        </div>
        <span className="text-md absolute left-0 pl-2 ">
          {like ? likes + 1 : likes} likes
        </span>
        <span className="text-md absolute left-0 pt-6 pl-2">{caption}</span>
        <span className="text-sm absolute left-0 pt-[52px] pl-2">
          View all {comments} comments
        </span>
        <span className="text-xs absolute left-0 pt-[75px] pl-2">{time}</span>
      </div>
    </div>
  );
};

export default Post;
