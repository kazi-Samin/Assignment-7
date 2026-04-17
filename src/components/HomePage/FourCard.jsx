import React from 'react';

const FourCard = () => {
    return (
        <div>
            <section className="max-w-[1110px] mx-auto px-4 py-10 text-center">
                <h1 className="text-5xl text-[#1F2937] font-bold">
                    Friends to keep close in your life
                </h1>
                <p className="text-[#64748B] text-[16px] my-4">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className="bg-[#244D3F] text-white px-6 py-2 rounded-md mb-10">
                    + Add a Friend
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

                    <div className="bg-[#FFFFFF] p-8 rounded-xl shadow-sm">
                        <h2 className="text-4xl text-[#244D3F] font-bold">8</h2>
                        <p className="text-[#64748B] text-lg">Total Friends</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-4xl text-[#244D3F] font-bold">3</h2>
                        <p className="text-[#64748B] text-lg">On Track</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-4xl text-[#244D3F] font-bold">6</h2>
                        <p className="text-[#64748B] text-lg">Need Attention</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-4xl text-[#244D3F] font-bold">12</h2>
                        <p className="text-[#64748B] text-lg">Interactions This Month</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default FourCard;