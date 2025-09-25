import React, { use, useState,} from "react";
import IssueCard from "./IssueCard";
import IssueTask from "./IssueTask";
import Countbox from "./Countbox";

const IssueManagement = ({ fetchPromise,  }) => {
  const data = use(fetchPromise);

  const [currentData,setCurrentData] = useState(data)

  const [clickedData , setClickedData] = useState([])

  //! task status
  const handleData = (data) => {
      const newData = [...clickedData,data]
      setClickedData(newData)
  }

  //! resolve status
const [resolve,setResolve] = useState([])

const handleResolveData = (resolveData) => {
    const newResolve = [...resolve,resolveData]
    setResolve(newResolve)
}



//! Remove function 

const handleRemove = (removeData) => {
  const filterData = clickedData.filter( data =>  data.customer != removeData.customer)
  setClickedData(filterData)
} 

//! Remove card function 

const handleCard = (cardData) => {
   const filterData = currentData.filter( filterItem => filterItem.customer !== cardData.customer )
   setCurrentData(filterData)
}
 

  return (
    <div className=" max-w-[1440px] mx-auto ">
      <Countbox
       clickedData={clickedData}
       resolve={resolve}
      ></Countbox>

      
      <div className="grid grid-cols-12 gap-6 mb-[80px]">

      <div className=" grid col-span-9">
           <IssueCard 
          currentData={currentData}
          handleData={handleData}
          resolve={resolve}
          
          ></IssueCard>
      </div>

        <div className=" grid col-span-3 ">
            
          <IssueTask
           clickedData={clickedData}
           handleResolveData={handleResolveData}
           resolve={resolve}
           handleRemove={handleRemove}
          handleCard={handleCard}
          ></IssueTask>
        </div>

      </div>


    </div>
    
  );
};

export default IssueManagement;
