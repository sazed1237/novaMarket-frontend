import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({ heading, subHeading, style, subStyle, link }) => {
    return (
        <div>
            <div className='w-full flex justify-between items-center'>
                <h1 className={`text-xl md:text-3xl lg:text-4xl font-bold ${style}`}>{heading}</h1>

                <Link to={`/${link}`} className='font-medium text-sm md:text-base relative group overflow-hidden '>
                    {subHeading}
                    <span className='absolute bottom-0 left-0 w-full h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300' ></span>
                </Link>
            </div>
            <div className='w-full h-[1px] bg-gray-200 my-3' />
        </div>
    );
};

export default Title;