import React from 'react';
import { Link } from 'react-router';

const Friend = ({ friend }) => {
    const { picture,id, name, days_since_contact, tags, status } = friend;
    return (
        <Link to={`/friend/${id}`} className='bg-[#FFFFFF] shadow-lg rounded-lg text-center space-y-2 py-8'>
           <div className='flex justify-center'>
             <img src={picture} alt="" />
           </div>
            <p className='text-[#1F2937] text-lg font-semibold'>{name}</p>
            <p className='text-[12px] text-[#64748B]'>{days_since_contact}d ago</p>
            {
                    tags.map((tag,idx)=> <div key={idx} className="badge mr-3 text-black py-3.5 bg-green-300">{tag}</div>)  
            }
            <br />
            <div className={`badge badge-success p-4
          ${status === 'overdue' ? 'bg-[#EF4444] text-white' : status === 'on-track' ? 'bg-[#244D3F] text-white' : 'bg-[#EFAD44] text-white'} `}>{status}</div>

        </Link>
    );
};

export default Friend;



// {
//     "id": 1,
//     "name": "John Doe",
//     "picture": "https://i.ibb.co.com/QFWDdnkg/Ellipse-1.png",
//     "email": "john.doe@example.com",
//     "days_since_contact": 12,
//     "status": "overdue",
//     "tags": [
//         "college",
//         "close friend"
//     ],
//     "bio": "Met during university days while studying computer science. We often talk about tech and hiking plans.",
//     "goal": 14,
//     "next_due_date": "2025-07-20"
// }