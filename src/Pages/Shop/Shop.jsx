import React, { useEffect, useState } from 'react';
import { config } from '../../../config';
import { getData } from '../../utils/getData';

const Shop = () => {

    const [allProduct, setAllProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            const endpoint = `${config?.baseUrl}/products`;
            console.log("url", endpoint)
            try {
                setLoading(true)
                const data = await getData(endpoint)
                console.log("data", data)
                setLoading(false)
                setAllProduct(data)

            } catch (error) {
                console.log("error fetching data", error)
            }
        }

        fetchData()
    }, [])
    console.log("product by id", allProduct)


    return (
        <div>
            <h1>product: {allProduct.length} </h1>
        </div>
    );
};

export default Shop;