import React from 'react';
import { exchange, shipping, warranty } from '../assets';


const incentives = [
    {
        name: "Free Shipping",
        image: shipping,
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
        name: "10-year warranty",
        image: warranty,
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
        name: "Exchanges",
        image: exchange,
        description: "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
]


const FooterTop = () => {
    return (
        <section className='py-0'>
            <div className='bg-[#f6f6f6] px-6 py-14 sm:p-14 rounded-xl'>

                <div className='mx-auto max-w-xl lg:max-w-none'>
                    <div className='text-center'>
                        <h2 className='text-xl sm:text-2xl font-bold tracking-tight text-gray-900'>We built our business on customer service</h2>
                    </div>
                </div>

                <div className='mx-auto max-w-sm sm:max-w-none grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 '>
                    {
                        incentives.map((item, index) => {
                            return (
                                <div key={index} className='text-center sm:flex sm:text-left lg:block lg:text-center'>
                                    <div className='sm:flex-shrink-0'>
                                        <div className='flex-root'>
                                            <img className='mx-auto h-16 w-16 ' src={item?.image} alt={item.name} />
                                        </div>
                                    </div>

                                    <div className='mt-3 sm:ml-6 lg:ml-0'>
                                        <h1 className='text-base font-medium text-gray-900'>{item?.name}</h1>
                                        <p className='text-sm mt-2 text-gray-500'>{item?.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    );
};

export default FooterTop;