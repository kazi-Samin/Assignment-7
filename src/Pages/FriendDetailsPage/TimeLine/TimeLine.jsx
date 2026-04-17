import React, { useContext, useState } from 'react';
import { FriendContext } from '../../../ContextApi/CreateContext';
import { HiCheck } from 'react-icons/hi2';
import AddCard from '../../../ui/AddCard';

const TimeLine = () => {
    const { calladd } = useContext(FriendContext);
    // console.log(calladd);
    const [filterType, setFilterType] = useState(''); 
    const displayData = calladd.filter(item => {
        if (filterType === '') {
            return true; 
        }
        else
        { 
            //return item.type === filterType;
        if(item.type === filterType) return true;
        else
            {
              return false;
            } 
            
        }
    });

    return (
        <div className='max-w-[1110px] mt-20 mx-auto'>
            <h2 className='text-5xl font-bold text-[#1F2937] mb-6'>Timeline</h2>
            
            <div className="dropdown dropdown-bottom mb-6">
                <div tabIndex={0} role="button" className="btn m-1">
                    {filterType ? filterType : "Filter Timeline"} <HiCheck />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm border">
                    <li><a onClick={() => setFilterType('text')}>Text</a></li>
                    <li><a onClick={() => setFilterType('call')}>Call</a></li>
                    <li><a onClick={() => setFilterType('video')}>Video</a></li>
                  
                </ul>
            </div>
             
             <div>
                {displayData.map((data, idx) => (
                    <AddCard key={idx} data={data} />
                ))}
             </div>
        </div>
    );
};

export default TimeLine;