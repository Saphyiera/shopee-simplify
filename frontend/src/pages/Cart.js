import React, { useState } from 'react';
import './Cart.css';
import product3 from "../assest/products/mobile/realme 9 Pro 5G (Midnight Black, 128 GB) (6 GB RAM) 2.webp"
import product1 from "../assest/products/TV/LG 123 cm (49 inch) Ultra HD (4K) LED Smart WebOS TV (49UK7500PTA) 4.webp"
import product2 from "../assest/products/speakers/boAt Rugby Plus 2.webp"

function Cart() {
  const initialCartItems = [
    {
      shop: 'Shop thứ 1',
      products: [
        {
          name: 'Sản phẩm 1',
          price: 230000,
          image: product3,
          quantity: 1,
          sizes: ['L', 'XL'],
        },
      ],
    },
    {
      shop: 'Shop thứ 2',
      products: [
        {
          name: 'Sản phẩm 1',
          price: 5800000,
          image: product1,
          quantity: 1,
          sizes: ['M', 'L', 'XL'],
        },
        {
          name: 'Sản phẩm 2',
          price: 280000,
          image: product2,
          quantity: 1,
          sizes: ['M', 'L', 'XL'],
        },
      ],
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, shop) => {
      return total + shop.products.reduce((shopTotal, product) => {
        return shopTotal + product.price * product.quantity;
      }, 0);
    }, 0);
  };

  const handleIncreaseQuantity = (shopIndex, productIndex) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[shopIndex].products[productIndex].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (shopIndex, productIndex) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[shopIndex].products[productIndex].quantity > 1) {
      updatedCartItems[shopIndex].products[productIndex].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div>
      <div className="cart-container">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Sản Phẩm</th>
              <th>Đơn Giá</th>
              <th>Số Lượng</th>
              <th>Số Tiền</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((shop, shopIndex) => (
              <React.Fragment key={shopIndex}>
                {shopIndex > 0 && (
                  <tr className="shop-separator-row">
                    <td colSpan="6"></td>
                  </tr>
                )}
                <tr>
                  <td><input type="checkbox" /></td>
                  <td colSpan="6" style={{ fontWeight: 'bold', textAlign: 'left', backgroundColor: '#fff' }}>
                    {shop.shop}
                  </td>
                </tr>
                {shop.products.map((product, productIndex) => (
                  <tr key={productIndex}>
                    <td><input type="checkbox" /></td>
                    <td>
                      <div className="product-info">
                        <img src={product.image} alt={product.name} />
                        <div className="product-details">
                          <span>{product.name}</span>
                          <select className="product-category">
                            {product.sizes.map((size, sizeIndex) => (
                              <option key={sizeIndex}>Phân loại hàng: Size: {size}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </td>
                    <td>{`₫${product.price.toLocaleString()}`}</td>
                    <td>
                      <div className="quantity-controls">
                        <button onClick={() => handleDecreaseQuantity(shopIndex, productIndex)}>-</button>
                        <input
                          type="text"
                          value={product.quantity}
                          readOnly
                          style={{ width: '40px', height: '30px', textAlign: 'center', border: '2px solid grey', borderRadius: '5px' }}
                        />
                        <button onClick={() => handleIncreaseQuantity(shopIndex, productIndex)}>+</button>
                      </div>
                    </td>
                    <td style={{ color: '#DC2626' }}>{`₫${(product.price * product.quantity).toLocaleString()}`}</td>
                    <td style={{ width: '100px' }}>
                      <div>
                        <span className="remove-link">Xóa</span>
                        <select style={{ color: '#DC2626', wordWrap: 'break-word' }}>
                          <option>Tìm sản phẩm tương tự</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={7}>
                    <div style={{ marginTop: '10px', textAlign: 'left' }}>
                      Giảm ₫300.000 phí vận chuyển đơn tối thiểu ₫0; Giảm ₫500.000 phí vận
                      chuyển đơn tối thiểu ₫500.000.
                      <li className='link-style' style={{ display: 'inline', marginTop: '10px' }}>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer">Tìm hiểu thêm</a>
                      </li>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className="checkout-section">
          <div className="voucher-section">
            <input type="text" placeholder="Nhập mã giảm giá" style={{ border: '2px solid grey', borderRadius: '5px', marginRight: '5px' }} />
            <button className='apply-button'>Áp dụng</button>
          </div>
          <div className='checkout-final'>
            <h3>
              Tổng thanh toán ({cartItems.reduce((acc, shop) => acc + shop.products.length, 0)} sản phẩm):
              <span style={{ color: '#DC2626' }}>₫{totalPrice.toLocaleString()}</span>
            </h3>
            <button className="checkout-button" style={{ marginLeft: '10px' }}>Mua Hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
