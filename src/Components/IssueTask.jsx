import React from 'react';
import TaskCard from './TaskCard';
import ResolveCard from './ResolveCard';

const IssueTask = ({clickedData,handleResolveData,resolve,handleRemove,handleCard}) => {
  const data = clickedData
    return (
     <div>
      <h2 className='text-2xl font-semibold mb-3 border-b-2 border-gray-200  pb-2 '>Task Status</h2>
       {
        data.map( taskData => <TaskCard
        taskData={taskData}
        handleResolveData={handleResolveData}
        handleRemove={handleRemove}
        handleCard={handleCard}
        ></TaskCard> )
       }   

       <div>
        <h2 className='text-2xl font-semibold mb-4 mt-10 border-b-2 border-gray-200  pb-2 '>Resolved Task</h2>
        <div>
          {
            resolve.map(reData => <ResolveCard
             reData={reData}
            ></ResolveCard>)
          }
        </div>
        
       </div>
     </div>
      
    );
};

export default IssueTask;