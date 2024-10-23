import React, { useEffect, useState } from 'react';
import { config } from '../../../config';
import { getData } from '../../utils/getData';
import { Link } from 'react-router-dom';

const Highlights = () => {
    const [highlights, setHighlights] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            const url = `${config?.baseUrl}/highlights`;
            // console.log("url", url)
            try {
                const data = await getData(url)
                // console.log("data", data)
                setHighlights(data)

            } catch (error) {
                console.log("error fetching data", error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
            {
                highlights.map(item => (
                    <div key={item?._id} className='relative h-52 md:h-60 rounded-lg shadow-md cursor-pointer overflow-hidden group'>
                        <div className='absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-110'
                            style={{
                                backgroundImage: `url(${item?.image})`, color: item?.color,
                            }} />

                        <div className='relative z-10 p-6 flex flex-col justify-between h-full'
                            style={{ color: item?.color }}
                        >

                            <div>
                                <h3 className='text-2xl font-bold max-w-44'>{item?.name}</h3>
                                <p className='text-base font-bold mt-4'>{item?.title}</p>
                            </div>

                            <div className=''>
                                <Link to={item?._base} className='text-base font-normal text-red-500 px-2 py-1 rounded-full bg-white tracking-tight' style={{ backgroundColor: item?.color }} >{item?.buttonTitle}</Link>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Highlights;