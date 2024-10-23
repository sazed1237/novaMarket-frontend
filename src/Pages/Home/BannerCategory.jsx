import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { config } from '../../../config';
import { getData } from '../../utils/getData';
import { Link } from 'react-router-dom';
import CustomRightArrow from '../../components/CustomRightArrow';
import CustomLeftArrow from '../../components/CustomLeftArrow';

const BannerCategory = () => {

    const [categories, setCategories] = useState([])



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    useEffect(() => {

        const fetchData = async () => {
            const url = `${config?.baseUrl}/categories`;
            // console.log("url", url)
            try {
                const data = await getData(url)
                // console.log("data", data)
                setCategories(data)

            } catch (error) {
                console.log("error fetching data", error)
            }
        }

        fetchData()
    }, [])

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            transitionDuration={1000}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            className='flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative'
        >
            {
                categories.map(category => (
                    <Link
                        key={category?._id}
                        to={`category/${category?._base}`}
                        className='flex items-center gap-2 p-1 border border-gray-100 mr-1 rounded-md hover:border-sky-400 hover:shadow-lg'
                    >
                        <img src={category?.image} alt="category image" className='h-10 w-10 rounded-full object-cover ' />
                        <p className='text-sm font-semibold'>{category?.name}</p>
                    </Link>
                ))
            }
        </Carousel>
    );
};

export default BannerCategory;