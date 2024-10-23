import React from 'react';
import { payment } from '../assets';
import FooterTop from '../components/FooterTop';

const Footer = () => {
    return (
        <div className='mt-10'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-0'>
                <FooterTop />

                <div className=' md:flex justify-between gap-4 items-center py-8 '>
                    <p className='text-sm md:text-base'>@2024 sazed creations. All rights reserved.</p>

                    <img src={payment} className='object-cover' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;