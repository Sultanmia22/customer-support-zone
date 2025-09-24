import React from "react";
import bgImg1 from "../assets/vector1.png";


const Countbox = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex gap-10 my-[70px] ">
      <div className=" relative flex-1 flex justify-center items-center  flex-col p-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg overflow-hidden">
       
 
          <img src={bgImg1} alt="vector" className="absolute top-0 left-0 h-full " />       
          <img src={bgImg1} alt="vector" className="absolute top-0 right-0  h-full object-contain " />       
      

        <h2 className="text-2xl font-medium">In-Progress</h2>
        <span className="text-[60px] font-semibold ">0</span>
      </div>
      <div className=" flex-1 flex justify-center items-center  flex-col p-10 bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white rounded-lg ">
        <h2 className="text-2xl font-medium">Resolved</h2>
        <span className="text-[60px] font-semibold ">0</span>
      </div>
    </div>
  );
};

export default Countbox;
