import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='w-full h-full bg-black/80 absolute top-0 left-0 flex flex-col items-center justify-center'>
            <RotatingLines
                visible={true}
                height="70"
                width="70"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <p className='text-white/70 pt-1 pl-2 text-md font-bold tracking-widest'>Loading...</p>
        </div>
    );
};

export default Loading;