import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import SummaryApi from '../common';
// import { toast } from 'react-toastify'
// import { setUserDetails } from '../store/userSlice';
// import ROLE from '../common/role';
// import Context from '../context';


const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
          <div className=''>
                <Link to={"/"}>
                    <Logo w={40} h={70}/>
                </Link>
          </div>

          <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
            <input type='text' placeholder='Tìm kiếm sản phẩm...' className='w-full outline-none' />
            <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
              <GrSearch/>
            </div>
          </div>


          <div className='flex items-center gap-7'>

            <div className='text-3xl cursor-pointer relative flex justify-center'>
            <Link to="/profile">
                <span><FaRegCircleUser/></span>
              </Link>
            </div>

            <div className="text-2xl relative">
              <Link to="/cart">
                <span><FaShoppingCart /></span>
                <div className="bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-3">
                  <p className="text-sm">0</p>
                </div>
              </Link>
            </div>

            <div>
              <Link to={'/login'} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Đăng nhập</Link>
            </div>

          </div>

      </div>
    </header>
  )
}

export default Header
