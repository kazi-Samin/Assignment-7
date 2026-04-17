import { useParams } from 'react-router';
import useFrindsData from '../../Hooks/useFrindsData';
import { MdDelete } from 'react-icons/md';
import { HiBellSnooze, HiMiniArchiveBox } from 'react-icons/hi2';
import CallImg from '../../assets/call.png'
import TextImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import { useContext } from 'react';
import { FriendContext } from '../../ContextApi/CreateContext';
import { toast } from 'react-toastify';
const FriendDetails = () => {
    const { id } = useParams();
    const { friends, loading } = useFrindsData();
  
//   ,textAdd,setTextAdd
    const { calladd,setCalladd}=useContext(FriendContext);

    function handleCallAdded(currentCall)
    {

        // const exist=calladd.find(data=>data.id===currentCall.id);
        // if(exist)
        // {
        //   toast.error(`${currentCall.name} already Exist`);
        // }
        // else
        // {
            toast.success(`Call With ${currentCall.name}`);
            setCalladd([...calladd, { ...currentCall, type: 'call' }]);
            
        
    }
    
    function handleTextAdded(currentCall)
    {

       
         toast.success(`Text With ${currentCall.name}`);
           setCalladd([...calladd, { ...currentCall, type: 'text' }]);
             
        
    }
     function handleVideoAdded(currentCall)
    {

       
         toast.success(`video With ${currentCall.name}`);
         setCalladd([...calladd, { ...currentCall, type: 'video' }]);
    
        
    }

   




    if (loading) {
        return <div className="text-center p-20 font-bold">Loading...</div>;
    }

    const exceptedFriend = friends?.find((friend) => friend.id === Number(id));

    const { picture, name, status, bio, email, days_since_contact, goal, next_due_date, tags } = exceptedFriend;

    return (
        <div className="max-w-6xl mt-6 mx-auto p-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-4">
                    <div className="card bg-white shadow-sm border border-gray-100  flex flex-col items-center text-center">
                        <div className="avatar mb-4">
                            <div className="w-24 rounded-ful">

                                <img src={picture} alt={name} />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-[#1F2937]">{name}</h2>

                        <div className="flex flex-col gap-2 my-3">
                            <div className='text-center'>
                                <div className={`badge badge-success p-4
                              ${status === 'overdue' ? 'bg-[#EF4444] text-white' : status === 'on-track' ? 'bg-[#244D3F] text-white' : 'bg-[#EFAD44] text-white'} `}>{status}</div>
                            </div>
                            <div className='flex'>
                                {
                                    tags.map((tag, idx) => <div key={idx} className="badge mr-3 text-black py-3.5 bg-green-300">{tag}</div>)
                                }
                            </div>
                        </div>
                        <p className="text-gray-500 italic text-sm">"{bio}"</p>
                        <p className="text-gray-400 text-xs mt-2 font-medium">Preferred: {email}</p>
                    </div>

                    <div className="space-y-2">
                        <button className="btn btn-block bg-white bg-red-400 border-gray-200 "><HiBellSnooze />
                            Snooze 2 Weeks</button>
                        <button className="btn btn-block bg-white border-gray-200 "><HiMiniArchiveBox /> Archive</button>
                        <button className="btn btn-block bg-white border-gray-200 text-red-500 "><MdDelete /> Delete</button>
                    </div>
                </div>

                {/* Right Column */}
                <div className="md:col-span-2 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="card bg-white shadow-sm border border-gray-100 px-4 py-8 text-center">
                            <div className="text-3xl font-bold text-gray-700">{days_since_contact}</div>
                            <div className="text-[10px] text-gray-400 mt-1 uppercase font-bold">Days Since Contact</div>
                        </div>
                        <div className="card bg-white shadow-sm border border-gray-100 p-4 text-center">
                            <div className="text-3xl font-bold text-gray-700">{goal}</div>
                            <div className="text-[10px] text-gray-400 mt-1 uppercase font-bold">Goal (Days)</div>
                        </div>
                        <div className="card bg-white shadow-sm border border-gray-100 p-4 text-center">
                            <div className="text-xl font-bold text-gray-700 mt-1">{next_due_date}</div>
                            <div className="text-[10px] text-gray-400 mt-1 uppercase font-bold">Next Due</div>
                        </div>
                    </div>

                    <div className="card bg-white shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-700">Relationship Goal</h3>
                            <button className="btn btn-xs bg-gray-100">Edit</button>
                        </div>
                        <p className="text-gray-500 mt-2">Connect every <span className="font-bold text-gray-800">{goal} days</span></p>
                    </div>
                    <div>
                        <p className='text-[#244D3F] mt-6 mb-4 font-medium text-lg'>Quick Check-In</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <div onClick={()=>handleCallAdded(exceptedFriend)} className='bg-[#E9E9E9] rounded-lg flex justify-center items-center flex-col py-4'>
                                <img src={CallImg} alt="" />
                                <p className='text-[#1F2937] text-lg'>Call</p>
                            </div>
                            <div onClick={()=>handleTextAdded(exceptedFriend)} className='bg-[#E9E9E9] rounded-lg flex justify-center items-center flex-col py-4'>
                                <img src={TextImg} alt="" />
                                <p className='text-[#1F2937] mt-2 text-lg'>Text</p>
                            </div>
                            <div onClick={()=> handleVideoAdded(exceptedFriend)} className='bg-[#E9E9E9] rounded-lg flex justify-center items-center flex-col py-4'>
                                <img src={videoImg} alt="" />
                                <p className='text-[#1F2937] text-lg'>Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;