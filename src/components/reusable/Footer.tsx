import { facebook, instagram, linkedin, russtrade_logo, twitter } from '@/constants/image';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='bg-header-text text-white py-[150px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div>
                        <img src={russtrade_logo} className='w-[100px]' />
                        <div className='mt-3 text-[14px]'>88/89 Peter Odili Road, Port Harcourt,<br /> Rivers State.</div>
                    </div>
                   <div className='flex space-x-20 mt-10 md:mt-0'>
                   <div className='flex flex-col space-y-7'>
                        <div className='text-[14px] hover:bg-[#020080] p-2 rounded-sm text-center'>Home</div>
                        <div className='text-[14px] hover:bg-[#020080] p-2 rounded-sm text-center'>About</div>
                        <div className='text-[14px] hover:bg-[#020080] p-2 rounded-sm text-center'>Sign Up</div>
                    </div>
                    <div className='flex flex-col space-y-7'>
                        <div className='text-[14px] hover:bg-[#020080] p-2 rounded-sm text-center'>Services</div>
                        <div className='text-[14px] hover:bg-[#020080] p-2 rounded-sm text-center'>Contact</div>
                        <div className='text-[14px] hover:bg-[#020080] p-2 rounded-sm text-center'>Privacy Policy</div>
                    </div>
                   </div>
                    <div className='mt-10 md:mt-0'>
                        <div>Connect with us</div>
                        <div className='flex flex-wrap space-x-4 mt-4'>
                            <img src={twitter} className='w-[20px] h-[20px]' />
                            <img src={facebook} className='w-[20px] h-[20px]' />
                            <img src={linkedin} className='w-[20px] h-[20px]' />
                            <img src={instagram} className='w-[20px] h-[20px]' />
                        </div>
                    </div>
                </div>
                <p className='mt-20 text-[14px] text-center'>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;