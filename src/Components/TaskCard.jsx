import React from 'react';
import { toast } from 'react-toastify';

const TaskCard = ({taskData,handleResolveData,handleRemove,handleCard , handleResolveTaskInfo}) => {
    const handleResolve = (data) => {
        toast('Completed')
        handleResolveData(data)
        handleRemove(data)
       handleCard(data)
       handleResolveTaskInfo(true)
    }
    return (
        <div>
           <div className='bg-white shadow-md p-3 rounded-lg mb-3 text-center md:text-start mx-7 md:mx-0 '>
              <h2 className='text-xl font-bold'> {taskData.title} </h2>
              <button onClick={() => handleResolve(taskData)} className='btn rounded-lg bg-[#02A53B] w-full text-white mt-2 '>Complete</button>
           </div>
        </div>
    );
};

export default TaskCard;