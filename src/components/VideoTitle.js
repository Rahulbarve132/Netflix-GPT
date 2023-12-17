import React from "react";
import { FaPlay } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="sm:pt-[15%] pt-14 sm:px-24 px-10 absolute text-white sm:w-full w-[435px] aspect-video bg-gradient-to-r from-black ">
      <h1 className="sm:text-5xl text-lg font-bold">{title}</h1>
      <p className="mt-4 sm:mt-0 sm:py-6 sm:w-1/3 w-2/3 font-light sm:text-lg text-xs"> {overview}</p>
      <div className="flex mt-4 sm:mt-0" >
        <button className="sm:px-12 sm:py-4 px-4 bg-white  rounded-md font-semibold justify-center text-black text-lg flex hover:bg-opacity-80">
          <FaPlay className="mt-1 mr-1" /> Play
        </button>
        <button className="sm:px-12 sm:py-4 px-4 bg-gray-500 mx-2 rounded-md font-semibold text-white text-lg flex bg-opacity-50">
          <AiOutlineInfoCircle className="mt-1 mr-1 " /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
