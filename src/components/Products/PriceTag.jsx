import React from 'react';
import FormattedPrice from '../FormattedPrice';

const PriceTag = ({ regularPrice, discountPrice }) => {
    return (
        <div className='flex items-center gap-2 text-lg py-1'>
            <p className='line-through text-gray-500 font-medium text-lg'>
                <FormattedPrice amount={regularPrice} />
            </p>
            <p className='text-sky-400 font-bold'>
                <FormattedPrice amount={discountPrice} />
            </p>
        </div>
    );
};

export default PriceTag;