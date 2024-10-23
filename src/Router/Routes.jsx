import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";
import Orders from "../Pages/Orders/Orders";
import MyAccount from "../Pages/MyAccount/MyAccount";
import Blog from "../Pages/Blog/Blog";
import NotFound from "../Pages/NotFound/NotFound";
import Favorite from "../Pages/Favorite/Favorite";
import ProductDetails from "../components/Products/ProductDetails";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            // {
            //     path: "/product",
            //     element: <Shop></Shop>
            // },
            {
                path: "/product",
                element: <Shop></Shop>
            },
            {
                path: "/product/:id",
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/orders",
                element: <Orders></Orders>
            },
            {
                path: "/profile",
                element: <MyAccount></MyAccount>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/favorite",
                element: <Favorite></Favorite>
            },
            {
                path: "*",
                element: <NotFound></NotFound>
            },
        ]

    },

]);