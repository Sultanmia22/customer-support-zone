import React from "react";
import doneImg from "../assets/correct.png";
const ResolveCard = ({ reData }) => {
  return (
<div>
    

       <div className="bg-[#E0E7FF] p-5 text-start  font-semibold mt-3 rounded-lg text-gray-900">
            <h2> {reData.title} </h2>

           <div className="flex items-center gap-2">
              <img src={doneImg} alt="" className="w-5" />
              <p>Completed</p>
           </div>
      </div>

</div>
  );
};

export default ResolveCard;
