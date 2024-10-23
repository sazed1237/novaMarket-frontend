import React, { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { logo } from '../assets';
import { IoClose, IoSearchOutline } from 'react-icons/io5';
import { FiShoppingCart, FiStar, FiUser } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { getData } from '../utils/getData';




const MenuList = [
    { title: "Home", link: '/' },
    { title: "Shop", link: '/product' },
    { title: "Cart", link: '/cart' },
    { title: "Orders", link: '/orders' },
    { title: "My Account", link: '/profile' },
    { title: "Blog", link: '/blog' },
]

const Header = () => {

    const [searchText, setSearchText] = useState('')
    const [categories, setCategories] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            const url = `${config?.baseUrl}/categories`;
            // console.log("url", url)
            try {
                const data = await getData(url)
                // console.log("data", data)
                setCategories(data)

            } catch (error) {
                console.log("error fetching data", error)
            }
        }

        fetchData()
    }, [])


    return (
        <div className='w-full bg-whiteText md:sticky md:top-0 z-50 '>

            <div className='max-w-screen-xl mx-auto h-16 md:h-20 flex items-center justify-between gap-2 px-4 lg:px-0'>
                <Link to={'/'}>
                    <img className='h-10 md:h-16' src={logo} alt="logo" />
                </Link>

                {/* search */}
                <div className='hidden md:inline-flex items-center md:max-w-3xl w-full relative '>
                    <input
                        className='w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide placeholder:text-gray-400 placeholder:font-normal  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-darkText  px-3 py-1.5 '
                        type="text"
                        placeholder='Search products...'
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                    />

                    {
                        searchText ? (
                            <IoClose
                                onClick={() => setSearchText("")}
                                className='absolute right-4 text-xl text-gray-800 hover:text-red-400 hover:cursor-pointer'
                            />

                        ) :
                            (
                                <IoSearchOutline
                                    className='absolute right-4 text-xl text-gray-800'
                                />

                            )
                    }
                </div>

                {/* Menu bar */}
                <div className='flex items-center gap-6 text-2xl '>
                    <Link to={'/profile'}>
                        <FiUser className='hover:text-sky-400 duration-200 cursor-pointer' />
                    </Link>

                    <div className='relative block'>
                        <Link to={'/favorite'}>
                            <FiStar className='hover:text-sky-400 duration-200 cursor-pointer' />
                            <span className='inline-flex items-center justify-center absolute bg-red-500 -top-1.5 -right-1.5 text-sm rounded-full w-4 h-4 text-whiteText'>0</span>
                        </Link>
                    </div>

                    <div className='relative block'>
                        <Link to={'/cart'}>
                            <FiShoppingCart className='hover:text-sky-400 duration-200 cursor-pointer' />
                            <span className='inline-flex items-center justify-center absolute bg-red-500 -top-1.5 -right-1.5 text-sm rounded-full w-4 h-4 text-whiteText'>0</span>
                        </Link>
                    </div>

                </div>
            </div>


            <div className='w-full bg-darkText text-whiteText'>

                <div className='py-2 px-2 max-w-4xl mx-auto flex items-center gap-5 justify-between'>

                    {/* using headless UI plugin */}
                    <Menu>
                        <MenuButton className=" text-sm md:text-base flex items-center gap-2 rounded-md border border-gray-400 hover:border-whiteText md:px-3 px-1 py-1 text-gray-300 hover:text-whiteText font-semibold ">
                            Select Category <FaChevronDown className='text-sm mt-1' />
                        </MenuButton>
                        <Transition
                            enter='transition ease-out duration-75'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <MenuItems anchor="bottom end" className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50">
                                {
                                    categories.map(category => {
                                        return (
                                            <MenuItem key={category?._id}>
                                                <Link to={`/categories/${category?._base}`} className='flex items-center rounded-lg tracking-wide gap-2 px-3 py-2 hover:bg-gray-600'>
                                                    <img
                                                        src={category?.image}
                                                        alt="category image"
                                                        className='w-6 h-6 rounded-md'
                                                    />
                                                    {category?.name}
                                                </Link>
                                            </MenuItem>
                                        )
                                    })
                                }
                            </MenuItems>
                        </Transition>

                    </Menu>

                    {
                        MenuList?.map((menu, index) => {
                            return (
                                <ul key={index}>
                                    <li className='uppercase text-sm hidden md:flex font-semibold text-whiteText/90 relative overflow-hidden group '>
                                        <Link to={menu.link}>{menu.title}  <span className='inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300 '></span> </Link>
                                    </li>
                                </ul>
                            )

                        })
                    }


                </div>

            </div>

        </div>
    );
};

export default Header;