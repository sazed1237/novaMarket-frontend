import React, { useEffect, useState } from 'react';
import Title from './Title';
import { config } from '../../config';
import { getData } from '../utils/getData';

const Blog = () => {

    const [blogData, setBlogData] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            const url = `${config?.baseUrl}/blogs`;
            // console.log("url", url)
            try {
                const data = await getData(url)
                // console.log("data", data)
                setBlogData(data)

            } catch (error) {
                console.log("error fetching data", error)
            }
        }

        fetchData()
    }, [])
    console.log("blog data", blogData)

    return (
        <div className='my-5 '>
            <h1 className='text-center text-xl md:text-3xl lg:text-4xl font-bold'>Our Blog Post</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-7'>
                {
                    blogData.map(blog => (
                        <div key={blog?._id} className='group cursor-pointer'>
                            <div className='overflow-hidden'>
                                <img
                                    src={blog?.image}
                                    alt="blog image"
                                    className='w-full h-auto object-cover group-hover:scale-110 duration-300' />
                            </div>
                            <div className='mt-3 px-2'>
                                <p className='text-sm uppercase font-medium text-gray-500'>{blog?._base}</p>
                                <h2 className='text-2xl font-bold line-clamp-2'>{blog?.title}</h2>
                                <p className='text-sm text-gray-600 line-clamp-6 pt-3'>{blog?.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blog;