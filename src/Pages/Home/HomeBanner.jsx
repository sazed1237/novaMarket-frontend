import React from 'react';
import { homeBanner } from '../../assets';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomRightArrow from '../../components/CustomRightArrow';
import CustomLeftArrow from '../../components/CustomLeftArrow';

const HomeBanner = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            // slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            // slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            // slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            transitionDuration={2000}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            className='relative'
        >

            <div className='relative overflow-hidden '>
                <div className='relative'>
                    <img src={homeBanner} alt="home banner" className='w-full h-[200px] md:h-full object-fill rounded-md' />
                </div>

                <div className='absolute w-full h-full top-0 left-0 bg-black/20' />

                <div className='absolute inset-0 flex flex-col justify-center px-2'>
                    <h2 className='text-xl md:text-5xl font-bold text-white'>Mi Air Purifier</h2>
                    <p className='text-base md:text-lg font-semibold leading-6 text-white/90 max-w-[250px] mt-4'>The new tech gift you are wishing for right here.</p>

                    <div className='flex  mt-5 md:mt-10'>
                        <Link to={'/'} className='bg-white/85 text-black px-4 py-2 text-sm md:text-base  rounded-full hover:bg-white duration-200'>Start Shopping</Link>
                    </div>
                </div>

            </div>

            <div className='relative overflow-hidden '>
                <div className='relative'>
                    <img src={homeBanner} alt="home banner" className='w-full h-[200px] md:h-full object-fill rounded-md' />
                </div>

                <div className='absolute w-full h-full top-0 left-0 bg-black/20' />

                <div className='absolute inset-0 flex flex-col justify-center px-2'>
                    <h2 className='text-xl md:text-5xl font-bold text-white'>Gree Air Purifier</h2>
                    <p className='text-base md:text-lg font-semibold leading-6 text-white/90 max-w-[250px] mt-4'>The new tech gift you are wishing for right here.</p>

                    <div className='flex mt-5 md:mt-10'>
                        <Link to={'/'} className='bg-white/85 text-black px-4 py-2 text-sm md:text-base  rounded-full hover:bg-white duration-200'>Start Shopping</Link>
                    </div>
                </div>

            </div>

        </Carousel>


    );
};

export default HomeBanner;