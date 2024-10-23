import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';
import { config } from '../../../config';
import { getData } from '../../utils/getData';
import Title from '../Title';
import { useParams } from 'react-router-dom';



const Products = ({ currentProducts }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {currentProducts &&
                currentProducts.map((product, index) => <ProductCard
                    key={product?._id}
                    product={product}
                />)
            }
        </div>
    );
}


const ProductList = () => {

    const [itemOffset, setItemOffset] = useState(0);
    const [itemStart, setItemStart] = useState(0);
    const [products, setProducts] = useState([])

    

    useEffect(() => {

        const fetchData = async () => {
            const url = `${config?.baseUrl}/products`;
            // console.log("url", url)
            try {
                const data = await getData(url)
                // console.log("Products", data)
                setProducts(data)

            } catch (error) {
                console.log("error fetching data", error)
            }
        }

        fetchData()
    }, [])

    // console.log("Products", products)


    const productPerPage = 10;

    const endOffset = itemOffset + productPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);


    const currentProducts = products.slice(itemOffset, endOffset);
    // console.log("current items form pagination", currentProducts)

    const pageCount = Math.ceil(products?.length / productPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * productPerPage) % products?.length;
        const newStart = newOffset + 1;

        setItemOffset(newOffset);
        setItemStart(newStart)
    };

    return (
        <>
            <Title heading={"Top Selling Products"} subHeading={"View All Products"} link={'product'} />
            <Products currentProducts={currentProducts} />
            <div className='md:flex items-center justify-between pt-10  '>
                <ReactPaginate
                    nextLabel=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={3}
                    pageCount={pageCount}
                    previousLabel=""
                    pageLinkClassName=' flex justify-center items-center w-8 h-8 border-[1px] border-lightColor hover:border-gray-500 duration-300 '
                    pageClassName='mr-2'
                    containerClassName='flex text-base font-semibold pb-2 md:pb-0'
                    activeClassName='bg-black text-white'
                />
                <p>Products from {itemStart} to {Math.min(endOffset, products?.length)} of {products?.length}</p>
            </div>
        </>
    );
};

export default ProductList;