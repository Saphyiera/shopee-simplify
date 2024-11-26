import React, { useState } from 'react';
import './Checkout.css';
import Product1 from "../assest/products/mouse/ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse (2.4GHz Wireless, Bluetooth, Quiet Blue) 2.webp";

const Checkout = () => {
  const [products, setProducts] = useState([
    {
      name: "ASUS Marshmallow Mouse",
      category: "Silent, Bluetooth",
      price: 230000,
      quantity: 1,
      image: Product1,
    },
    {
      name: "ASUS Marshmallow Mouse",
      category: "Silent, Bluetooth",
      price: 230000,
      quantity: 1,
      image: Product1,
    },
    {
      name: "ASUS Marshmallow Mouse",
      category: "Silent, Bluetooth",
      price: 230000,
      quantity: 1,
      image: Product1,
    },
  ]);

  const [address, setAddress] = useState({
    name: 'Nam ăn cut',
    phone: '0123456789',
    street: '1 Trần Đại Nghĩa',
    city: 'Hà Nội',
    district: 'Hoàng Mai',
  });

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div className="checkout-container">
      {/* Địa chỉ */}
      <div className="address-section">
        <h2>Địa chỉ giao hàng</h2>
        <form className="address-form">
          <div className="form-group">
            <label>Tên người nhận:</label>
            <input
              type="text"
              name="name"
              value={address.name}
              onChange={handleAddressChange}
              placeholder="Nhập tên người nhận"
              required
            />
          </div>
          <div className="form-group">
            <label>Số điện thoại:</label>
            <input
              type="tel"
              name="phone"
              value={address.phone}
              onChange={handleAddressChange}
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
          <div className="form-group">
            <label>Địa chỉ:</label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleAddressChange}
              placeholder="Số nhà, đường, phường"
              required
            />
          </div>
          <div className="form-group">
            <label>Quận/Huyện:</label>
            <input
              type="text"
              name="district"
              value={address.district}
              onChange={handleAddressChange}
              placeholder="Nhập quận/huyện"
              required
            />
          </div>
          <div className="form-group">
            <label>Thành phố:</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
              placeholder="Nhập thành phố"
              required
            />
          </div>
        </form>
      </div>

      {/* Sản phẩm */}
      <div className="product-section">
        <table className="product-table">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="product-info">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                  </div>
                </td>
                <td className="price1">₫{product.price.toLocaleString()}</td>
                <td className="quantity">{product.quantity}</td>
                <td className="total">₫{(product.price * product.quantity).toLocaleString()}</td>
              </tr>
            ))}
            <tr className="insurance">
              <td colSpan={4} style={{ textAlign: 'left' }}>
                <input type="checkbox" style={{ marginRight: '15px' }} />
                Bảo hiểm bảo vệ người tiêu dùng: <span>₫2,999</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Phần còn lại */}
      <div className="voucher-section">
        <select name="" id="" style={{ marginRight: "20px" }}>
          <option value="">Danh sách Voucher</option>
        </select>
        <button>Chọn Voucher</button>
      </div>

      <div className="shipping-section" style={{ display: "flex", textAlign: "right", fontSize: '18px' }}>
        <p style={{ marginRight: "20px" }}>Phương thức vận chuyển:
          <select style={{ marginLeft: '15px', fontWeight: 'bold' }}>
            <option>Nhanh</option>
          </select>
        </p>
        <p>Phí vận chuyển: ₫5,000</p>
      </div>

      <div className="payment-method">
        <h2>Phương thức thanh toán</h2>
        <div className="payment-options">
          <button>Thẻ Tín dụng/Ghi nợ</button>
          <button>VNPay</button>
          <button>Ví ShopeePay</button>
          <button className="selected">Thanh toán khi nhận hàng</button>
        </div>
        <p style={{ marginTop: "20px" }}>Phí thu hộ: ₫0 VND</p>
      </div>

      <div className="total-section">
        <div style={{ fontSize: '18px' }}>
          <p>Tổng tiền hàng: ₫{products.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}</p>
          <p>Phí vận chuyển: ₫5,000</p>
          <h3 style={{ fontWeight: 'bold' }}>Tổng thanh toán: <span style={{ marginLeft: "10px", fontWeight: 'bold' }}>₫{(products.reduce((acc, item) => acc + item.price * item.quantity, 0) + 5000).toLocaleString()}</span></h3>
          <button className="order-button">Đặt hàng</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
