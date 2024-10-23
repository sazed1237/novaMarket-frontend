import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import { brandFive, brandFour, brandOne, brandSix, brandThree, brandTwo, discountImgOne, discountImgTwo } from '../assets';

const DiscountBanner = () => {

    const popularSearchItems = [
        { title: "Smart Watches", link: "smartwatches" },
        { title: "Headphone", link: "headphones" },
        { title: "Camera", link: "camerasAndPhotos" },
        { title: "Tv", link: "tvAndAudio" },
        { title: "Laptop", link: "computesAndLaptop" },
        { title: "Mobile", link: "cellPhones" },
    ]

    return (
        <div className='py-10'>
            <Title heading={"Popular Search"} />

            {/* top search */}
            <div className='py-2 flex items-center flex-wrap gap-2'>
                {
                    popularSearchItems.map((item, index) => (
                        <Link
                            key={index}
                            to={`/category/${item?.link}`}
                            className='border text-sm md:text-base border-gray-200 px-5 py-1.5 rounded-full capitalize font-medium hover:bg-black hover:text-white duration-200 '
                        >
                            {item?.title}
                        </Link>
                    ))
                }
            </div>

            {/* discount banner */}
            <div className='w-full my-12 bg-[#f6f6f6] rounded-lg flex items-center justify-between overflow-hidden'>
                <img src={discountImgOne} alt="discounted image" className='hidden lg:flex h-36' />
                <div className=' flex flex-col flex-1 gap-1 items-center py-7 lg:py-0'>
                    <div className='flex flex-col  md:flex-row items-center justify-center gap-3 '>
                        <h2 className='text-xl md:text-4xl font-bold'>Sony Headphone</h2>
                        <Link to={'/product'} className='border border-red-600 px-4 py-2 text-xl md:text-3xl text-red-600 font-bold rounded-full'>Discount 20%</Link>
                    </div>
                    <p className='text-sm text-gray-600 font-medium'>You are out play or stepping out to make!</p>
                </div>
                <img src={discountImgTwo} alt="discounted image" className='hidden lg:flex h-36' />
            </div>

            {/* brands  */}
            <div className='mt-7'>
                <h3 className='font-bold text-2xl'>Brands We Distribute</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-5 '>
                    <div className='border border-r-0 border-gray-300 flex items-center justify-center cursor-pointer group'>
                        <img src={brandOne} alt="brand one" className='w-32 h-auto group-hover:opacity-50 duration-200' />
                    </div>
                    <div className='border  border-gray-300 flex items-center justify-center cursor-pointer group'>
                        <img src={brandTwo} alt="brand one" className='w-32 h-auto group-hover:opacity-50 duration-200' />
                    </div>
                    <div className='border border-r-0 border-gray-300 flex items-center justify-center cursor-pointer group'>
                        <img src={brandThree} alt="brand one" className='w-32 h-auto group-hover:opacity-50 duration-200' />
                    </div>
                    <div className='border  border-gray-300 flex items-center justify-center cursor-pointer group'>
                        <img src={brandFour} alt="brand one" className='w-32 h-auto group-hover:opacity-50 duration-200' />
                    </div>
                    <div className='border border-r-0 border-gray-300 flex items-center justify-center cursor-pointer group'>
                        <img src={brandFive} alt="brand one" className='w-32 h-auto group-hover:opacity-50 py-2 duration-200' />
                    </div>
                    <div className='border  border-gray-300 flex items-center justify-center cursor-pointer group'>
                        <img src={brandSix} alt="brand one" className='w-32 h-auto group-hover:opacity-50 py-2 duration-200' />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DiscountBanner;