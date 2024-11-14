import React from 'react'
import { useState, useEffect } from 'react';
import label1 from "../assest/banner/img1.webp"
import label2 from "../assest/banner/img2.webp"
import label3 from "../assest/banner/img3.jpg"
import label4 from "../assest/banner/img4.jpg"
import label5 from "../assest/banner/img5.webp"
import topproduct1 from "../assest/products/airpodes/boAt Airdopes 111 2.webp"
import topproduct2 from "../assest/products/mouse/ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse (2.4GHz Wireless, Bluetooth, Quiet Blue) 3.webp"
import topproduct3 from "../assest/products/trimmers/Ambrane AGK-11 Trimmer 60 min Runtime 18 Length Settings (Black) 2.webp"


const Home = () => {
  // các sản phẩm gợi ý
  const products = [
    {
      name: "Mặt hàng 1",
      price: "giá khuyến mãi",
      originalPrice: "giá gốc",
      discount: "Giảm x%",
      numsold: "Đã bán: ?",
      image: topproduct3,
    },
    {
      name: "Mặt hàng 2",
      price: "giá khuyến mãi",
      originalPrice: "giá gốc",
      discount: "Giảm x%",
      numsold: "Đã bán: ?",
      image: topproduct3,
    },
    {
      name: "Mặt hàng 3",
      price: "giá khuyến mãi",
      originalPrice: "giá gốc",
      discount: "Giảm x%",
      numsold: "Đã bán: ?",
      image: topproduct3,
    },
    {
      name: "Mặt hàng 4",
      price: "giá khuyến mãi",
      originalPrice: "giá gốc",
      discount: "Giảm x%",
      numsold: "Đã bán: ?",
      image: topproduct3,
    },
    {
      name: "Mặt hàng 5",
      price: "giá khuyến mãi",
      originalPrice: "giá gốc",
      discount: "Giảm x%",
      numsold: "Đã bán: ?",
      image: topproduct3,
    },
    {
      name: "Mặt hàng 6",
      price: "giá khuyến mãi",
      originalPrice: "giá gốc",
      discount: "Giảm x%",
      numsold: "Đã bán: ?",
      image: topproduct3,
    },

  ];

  const banners = [label1, label2, label3, label4, label5];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="w-10/12 mx-auto">
      <div className="text-lg font-semibold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        <h1>Danh mục</h1>
      </div>
      <div className="bg-red-500 p-4 h-60 rounded-md flex flex-col items-center justify-center transition duration-200 border border-gray-500 mt-4 mr-">
        <div className="mt-1 grid grid-cols-7 gap-8 ">
          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">Airpods</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>
          </div>

          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">Camera</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
          </div>

          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">Earphone</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          </div>

          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">Mobile</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>

          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">Mouse</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>
          </div>

          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">Printers</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
            </svg>
          </div>
          <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-8">
          <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
          </div>
          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold ">Processor</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
            </svg>
          </div>

          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">Refrigerator</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
          </div>

          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">Speakers</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          </div>

          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">Trimmers</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
            </svg>
          </div>

          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">TV</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
          </div>

          <div className="bg-gray-200 p-4 w-24 h-24 rounded-md text-center flex flex-col items-center hover:bg-gray-300">
            <p className="text-xs font-semibold">Watches</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>

        </div>
      </div>

      <div className="text-2xl font-semibold text-center mt-10 mb-3">Các sản phẩm nổi bật</div>

      <div className="grid grid-cols-3 gap-x-3 bg-red-500 rounded-lg">
        <div className="mt-3 ml-3 mr-3 mb-3">
          <img src={topproduct1} className="rounded-lg object-cover w-full"/>
          <h1 className="text-center font-medium text-1xl mt-2 bg-gray-300 rounded-md w-2/3 mx-auto">Airpods bán chạy nhất phân khúc</h1>
        </div>
        <div className="mt-3 ml-3 mr-3 mb-3">
          <img src={topproduct2} className="rounded-lg"/>
          <h1 className="text-center font-medium text-1xl mt-2 bg-gray-300 rounded-md w-2/3 mx-auto">Chuột máy tính bán chạy nhất phân khúc</h1>
        </div>
        <div className="mt-3 ml-3 mr-3 mb-3">
          <img src={topproduct3} className="rounded-lg"/>
          <h1 className="text-center font-medium text-1xl mt-2 bg-gray-300 rounded-md w-2/3 mx-auto">Máy cạo râu bán chạy nhất phân khúc</h1>
        </div>
      </div>

      {/* phần gợi ý mua sắm */}
      <div className="text-2xl font-semibold text-center mt-10 underline">Gợi ý mua sắm</div>
        <div className="container mx-auto px-4 py-8 bg">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <img src={product.image} alt="Product Image" className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-gray-800 font-semibold mt-2 text-sm">{product.name}</h3>
              <p className="text-red-500 font-bold mt-1">{product.price}</p>
              <p className="text-gray-500 line-through text-xs">{product.originalPrice}</p>
              <div className="flex justify-between">
                <p className="text-xs text-green-500">{product.discount}</p>
                <p className="text-xs text-gray-500 text-right">{product.numsold}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* hết phần gợi ý mua sắm */}

      <div className="overflow-hidden relative mt-4">
        <img
          src={banners[currentBanner]}
          className="mt-3 h-60 w-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

    </div>
  )
}

export default Home
