import React from 'react';
import celanderImg from '../assets/ri_calendar-line.png'
const IssueCard = ({data}) => {
    console.log(data)
    return (
        <div className=' rounded-sm p-4 bg-white shadow-lg'>

            <div className='flex justify-between items-center'>
                <h2 className={`text-xl font-semibold `}> {data.title} </h2>
                <div className={`flex items-center gap-1 ${data.status == 'Open' ? 'bg-green-200' : 'bg-yellow-100'} px-3 py-1 rounded-full`}>
                    <div className={`w-4 h-4 ${data.status == 'Open' ? 'bg-green-400' : 'bg-amber-300'} rounded-full`}></div>
                    <h2 className={`font-semibold`}> {data.status} </h2>
                </div>
            </div>

            <p className='my-3 text-[#627382]'> {data.description} </p>

            <div className='flex justify-between items-center gap-5'>
                <div className='flex items-center gap-3 text-[#627382]'>
                    <p> #{data.id} </p>
                    <h2 className={`${data.priority == 'High Priority' ? 'text-red-500' : 'text-amber-400'}`} > {data.priority} </h2>
                </div>
                <div className='flex items-center gap-3 text-[#627382]'>
                    <h2> {data.customer} </h2>
                    <div className='flex items-center gap-1'>
                        <img src={celanderImg} alt="" /> 
                        {data.createdAt}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueCard;