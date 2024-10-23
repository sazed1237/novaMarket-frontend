import React from 'react';
import { Link } from 'react-router-dom';

const AddToCartBtn = ({ className, title }) => {
    return (
        <div className='bg-[#f7f7f7] uppercase text-xs py-2 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer'>
            <Link className=''>{title}</Link>
        </div>
    );
};

export default AddToCartBtn;