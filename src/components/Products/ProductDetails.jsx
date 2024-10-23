import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { config } from '../../../config';
import { getData } from '../../utils/getData';
import Loading from '../Loading';
import PriceTag from './PriceTag';
import ProductRating from './ProductRating';
import { FaRegEye } from 'react-icons/fa';
import FormattedPrice from '../FormattedPrice';

const ProductDetails = () => {
    const { id } = useParams()
    // console.log(id)
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [imgUrl, setImgUrl] = useState([])
    const [color, setColor] = useState([])


    // const endpoint = id 
    // ? `${config?.baseUrl}/products/${id}`
    // : `${config?.baseUrl}/products`

    useEffect(() => {

        const fetchData = async () => {
            const endpoint = `${config?.baseUrl}/products/${id}`;
            // console.log("url", endpoint)
            try {
                setLoading(true)
                const data = await getData(endpoint)
                console.log("data", data)
                setLoading(false)
                setProduct(data)
                setImgUrl(data?.images[0])
                setColor(data?.colors[0])

            } catch (error) {
                console.log("error fetching data", error)
            }
        }

        fetchData()
    }, [id])
    console.log("product by id", product)

    // useEffect(() => {
    //     if (product) (
    //         setImgUrl(product?.images[0])
    //     )
    // }, [])


    return (
        <div>
            {
                loading ? <Loading /> : (
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5'>
                        <div className='flex flex-start gap-2'>
                            <div className=''>
                                {product?.images?.map((item, index) => (
                                    <img
                                        src={item}
                                        alt="img"
                                        key={index}
                                        className={`w-20 cursor-pointer hover:opacity-100 duration-300 overflow-hidden ${imgUrl === item ? "border border-gray-500 rounded-sm opacity-100" : "opacity-50"}`}
                                        onClick={() => setImgUrl(item)}
                                    />
                                ))}
                            </div>

                            <div>
                                <img src={imgUrl} alt="main image" className=' lg:h-[90%] border border-gray-300' />
                            </div>

                        </div>

                        <div className=''>
                            <h1 className='text-xl md:text-3xl font-bold'>{product?.name}</h1>
                            <div className='flex items-center justify-between'>
                                <PriceTag
                                    regularPrice={product?.regularPrice}
                                    discountPrice={product?.discountedPrice}
                                />
                                <div className='flex items-center'>
                                    <ProductRating product={product} />
                                    <p>({product.reviews} Reviews)</p>
                                </div>
                            </div>

                            <p className='flex items-center gap-1'>
                                <FaRegEye /> <span className='font-semibold text-sm'>
                                    {product?.reviews} peoples are viewing this product now.
                                </span>
                            </p>

                            <p>
                                You are saving{" "}
                                <span className='text-base font-semibold text-green-500'>
                                    <FormattedPrice amount={product?.regularPrice - product?.discountedPrice} />
                                </span>{" "}
                                upon purchase
                            </p>

                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default ProductDetails;