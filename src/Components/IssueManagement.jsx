import React, { use } from 'react';
import IssueCard from './IssueCard';
import IssueTask from './IssueTask';

const IssueManagement = ({fetchPromise}) => {
    const data = use(fetchPromise)
    console.log(data)
    return (
        <div className='max-w-[1440px] mx-auto grid grid-cols-12'>
            
            <div className='grid col-span-9 grid-cols-2 gap-4'>
            {
                data.map(data => <IssueCard data={data}></IssueCard>)
            }
            </div>
         
          
           <div className=' grid col-span-3 grid-cols-1'>
             <IssueTask></IssueTask> 
            </div>    


        </div>
    );
};

export default IssueManagement;