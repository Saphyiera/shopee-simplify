import React from 'react'
import { useState, useEffect } from 'react';

const Profile = () => {
    return (
        <div class="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md mb-10">
          <h1 class="text-2xl font-semibold text-gray-800 mb-2">Hồ Sơ Của Tôi</h1>
          <p class="text-gray-500 mb-6">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
          
          <form>
              <div class="mb-4">
                  <label class="block text-gray-600 mb-1">Tên đăng nhập</label>
                  <input type="text" value="--Nick name--" disabled class="w-full bg-gray-200 text-gray-500 rounded p-2"/>
              </div>

              <div class="mb-4">
                  <label class="block text-gray-600 mb-1">Tên</label>
                  <input type="text" value="--Tên người dùng--" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>
              </div>

              <div class="mb-4">
                  <label class="block text-gray-600 mb-1">Địa chỉ</label>
                  <input type="text" value="--Địa chỉ người dùng--" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>
              </div>

              <div class="mb-4">
                  <label class="block text-gray-600 mb-1">Email</label>
                  <div class="flex items-center">
                      <input type="text" value="**********@gmail.com" disabled class="w-full bg-gray-200 text-gray-500 rounded p-2"/>
                      <a href="#" class="text-red-500 ml-2 hover:text-red-600">Thay Đổi</a>
                  </div>
              </div>

              <div class="mb-4">
                  <label class="block text-gray-600 mb-1">Số điện thoại</label>
                  <div class="flex items-center">
                      <input type="text" value="0123456789" disabled class="w-full bg-gray-200 text-gray-500 rounded p-2"/>
                      <a href="#" class="text-red-500 ml-2 hover:text-red-600">Thay Đổi</a>
                  </div>
              </div>

              <div class="mb-4">
                  <label class="block text-gray-600 mb-1">Giới tính</label>
                  <div class="flex items-center space-x-4">
                      <label class="flex items-center">
                          <input type="radio" name="gender" checked class="text-orange-500 focus:ring-orange-500"/>
                          <span class="ml-2">Nam</span>
                      </label>
                      <label class="flex items-center">
                          <input type="radio" name="gender" class="text-orange-500 focus:ring-orange-500"/>
                          <span class="ml-2">Nữ</span>
                      </label>
                      <label class="flex items-center">
                          <input type="radio" name="gender" class="text-orange-500 focus:ring-orange-500"/>
                          <span class="ml-2">Khác</span>
                      </label>
                  </div>
              </div>

              <div class="mb-6">
                  <label class="block text-gray-600 mb-1">Ngày sinh</label>
                  <div class="flex items-center">
                      <input type="text" value="DD/MM/YY" disabled class="w-full bg-gray-200 text-gray-500 rounded p-2"/>
                      <a href="#" class="text-red-500 ml-2 hover:text-red-600">Thay Đổi</a>
                  </div>
              </div>

              <button type="submit" class="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600">Lưu</button>
          </form>
      </div>
    )
}

export default Profile
