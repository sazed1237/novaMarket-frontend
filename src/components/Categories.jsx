import React, { useEffect, useState } from 'react';
import Title from './Title';
import { config } from '../../config';
import { getData } from '../utils/getData';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([])


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
        <div className='mb-10'>
            <Title heading={"Popular Categories"} subHeading={"View All Categories"} link={"/Categories"} />

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                {
                    categories.map(category => (
                        <Link
                            to={`/categories/${category?._base}`}
                            key={category?._id}
                            className='w-full h-auto group relative overflow-hidden'
                        >
                            <img src={category?.image} className='w-full h-auto rounded-md group-hover:scale-110 duration-300' alt="category image" />

                            <div className='absolute bottom-3 w-full text-center'>
                                <p className='text-sm md:text-base font-semibold text-ellipsis line-clamp-1'>{category?.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default Categories;