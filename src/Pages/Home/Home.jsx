import React from 'react';
import BannerCategory from './BannerCategory';
import HomeBanner from './HomeBanner';
import Highlights from './Highlights';
import Categories from '../../components/Categories';
import ProductList from '../../components/Products/ProductList';
import DiscountBanner from '../../components/DiscountBanner';
import Blog from '../../components/Blog';

const Home = () => {
    return (
        <div>
            <BannerCategory />
            <HomeBanner />
            <Highlights />
            <Categories />
            <ProductList />
            <DiscountBanner />
            <Blog />
        </div>
    );
};

export default Home;