import React from 'react';
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
const Footer = () => {
    return (
        <div className='mt-20'>
            <footer class="bg-[#244D3F] text-white py-12 px-6">

                <div class="max-w-6xl mx-auto text-center">
                    <h2 className='text-6xl'>KeenKeeper</h2>
                    <p class="mt-4 text-[#FAFAFA] mb-8">Your personal shelf of meaningful connections...</p>

                    <div class="flex justify-center gap-4">
                        <a class="bg-white p-2 rounded-full">
                           <img src={Instagram} alt="" />
                        </a>
                        <a class="bg-white p-2 rounded-full">
                            <img src={Facebook} alt="" />
                        </a>
                        <a class="bg-white p-2 rounded-full">
                            <img src={Twitter} alt="" />
                        </a>
                    </div>
                </div>

                <div class="max-w-6xl mx-auto mt-10 pt-6 border-t border-dashed border-white/20 
              flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-sm">© 2026 KeenKeeper. All rights reserved.</p>

                    <div class="flex gap-6 text-sm">
                        <a>Privacy Policy</a>
                        <a>Terms of Service</a>
                        <a>Cookies</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;