import React, { useState } from 'react';
import { MdOutlineStarOutline } from 'react-icons/md';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Star, ThinStar, RoundedStar, ThinRoundedStar, StickerStar } from '@smastrom/react-rating';
import AddToCartBtn from '../AddToCartBtn';
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import FormattedPrice from '../FormattedPrice';
import ProductCardSideNav from './ProductCardSideNav';
import { useNavigate } from 'react-router-dom';
import ProductRating from './ProductRating';


const ProductCard = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigation = useNavigate()

    // console.log("product from card", product)
    const percentage = ((product?.regularPrice - product?.discountedPrice) / product?.regularPrice) * 100;
    const sellingPrice = product?.regularPrice - percentage

    // const includedShapesStyles = [ThinStar].map(
    //     (itemShapes) => ({ itemShapes, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' })
    // );

    const handleProductDetails = () => {
        navigation(`/product/${product?._id}`)
    }

    return (
        <div
            className='border border-gray-200  rounded-lg p-1 overflow-hidden hover:border-black duration-300'>
            <div className='w-full h-60 relative p-1 group'>
                <span
                    onClick={(e) => setIsOpen(true)}
                    className='bg-black text-sky-400 text-xs absolute left-0 text-center p-1 rounded-md font-semibold z-10 '

                >
                    save {percentage.toFixed(2)}%
                </span>
                <img
                    onClick={handleProductDetails}
                    src={product?.images[0]}
                    alt="product image"
                    className='w-full h-full rounded-md object-cover group-hover:scale-110 duration-300 cursor-pointer'
                />

                {/* card side nav */}
                <ProductCardSideNav />
            </div>

            <div className='flex flex-col gap-2 p-2'>
                <h3 className='text-xs uppercase font-semibold text-lightText'>{product?.overView}</h3>
                <h2 className='text-lg font-bold line-clamp-2'>{product?.name}</h2>

                {/* rating */}
                <div>
                   <ProductRating product={product}/>
                </div>
                {/* price */}
                <div>
                    <h3 className='text-sky-400 text-sm flex gap-2'><span className='text-lightText'>${product?.regularPrice}</span>${sellingPrice.toFixed(2)} </h3>
                </div>

                <AddToCartBtn title={"add to cart"} />
            </div>

            <Transition show={isOpen} appear >
                <Dialog
                    as={"div"}
                    className={"relative z-10 focus:outline-none"}
                    onClose={() => setIsOpen(false)}
                >
                    <div className='fixed inset-0 z-10 w-screen overflow-y-hidden'>
                        <div className='flex min-h-full items-center justify-center p-4'>
                            <TransitionChild
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 transform-[scale(95%)]'
                                enterTo='opacity-100 transform-[scale(100%)]'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 transform-[scale(100%)]'
                                leaveTo='opacity-0 transform-[scale(95%)]'
                            >
                                <DialogPanel className={"w-full max-w-md rounded-xl bg-black z-50 p-6"}>
                                    <DialogTitle as='h3' className="text-base/7 font-medium text-white">
                                        Hurry up!
                                    </DialogTitle>
                                    <p className='mt-2 text-sm/6 text-white/50'>
                                        You are going to save{" "}
                                        <span className='text-sky-400'>
                                            <FormattedPrice amount={product?.regularPrice - product?.discountedPrice} />
                                        </span> {" "}
                                        from this product.
                                    </p>
                                    <p className='text-sm/6 text-white/50'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas beatae consequuntur odit, mollitia molestias esse?
                                    </p>
                                    <div className='mt-4'>
                                        <Button
                                            className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 open:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Got it, thanks!
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div >
    );
};

export default ProductCard;