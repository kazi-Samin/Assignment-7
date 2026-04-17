
import useFrindsData from '../../Hooks/useFrindsData';
import Friend from '../../ui/Friend';
import { FriendContext } from '../../ContextApi/CreateContext';

const Friends = () => {

   
    const { friends, loading } = useFrindsData();
    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-gray-500 font-medium animate-pulse">Friends data loading...</p>
            </div>
        );
    }
    return (
        <div className='max-w-[1110px] mx-auto mt-8'>
            <h2 className='text-[#1F2937] mb-4 font-semibold text-2xl'>Your Friends</h2>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    friends.map((friend, idx) => <Friend key={idx} friend={friend}></Friend>)
                }
            </section>
        </div>
    );
};

export default Friends;

