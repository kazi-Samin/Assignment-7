import React from 'react';
import CallImg from '../assets/call.png';
import TextImg from '../assets/text.png';
import VideoImg from '../assets/video.png';

const AddCard = ({ data }) => {
    const currentDate = new Date().toLocaleDateString();

    let statusIcon;
    if (data.type === 'call') {
        statusIcon = CallImg;
    } else if (data.type === 'text') {
        statusIcon = TextImg;
    } else {
        statusIcon = VideoImg;
    }

    return (
        <div>
            <div className='flex gap-4 bg-[#E9E9E9] rounded-lg py-4 px-5 mb-6'>
                <img src={statusIcon} alt={data.type} className="w-10 h-10" />

                <div>

                    <p>
                        {`${data.type === 'call' ? 'Call' : data.type === 'text' ? 'Text' : 'Video'} with ${data.name}`}
                    </p>
                    <p className='text-[#64748B]'>March {currentDate}</p>
                </div>
            </div>
        </div>
    );
};

export default AddCard;