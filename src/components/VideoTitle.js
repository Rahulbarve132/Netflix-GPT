import React from "react";
import { FaPlay } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-24 absolute text-white w-full aspect-video bg-gradient-to-r from-black ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className=" py-6 w-1/3"> {overview}</p>
      <div className="flex">
        <button className="px-12 py-4 bg-white  rounded-md font-semibold text-black text-lg flex hover:bg-opacity-80">
          <FaPlay className="mt-1 mr-1" /> Play
        </button>
        <button className="px-12 py-4 bg-gray-500 mx-2 rounded-md font-semibold text-white text-lg flex bg-opacity-50">
          <AiOutlineInfoCircle className="mt-1 mr-1 " /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
