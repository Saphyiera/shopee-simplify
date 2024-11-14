import React, { useEffect, useState } from 'react';
import './productDetail.css';

const ProductDetail = () => {
  const product = {
    name: "Tạ Tay + Tạ Đẩy kết hợp (2 in 1) FEIERDUN- TT22 bộ sản phẩm-20-30-40kg(HN)",
    rating: 4,
    reviews: 416,
    sold: "1.3k",
    discountedPrice: "₫460.275",
    originalPrice: "₫510.000",
    mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ly07opyi4p951b@resize_w450_nl.webp",
    weights: ["Tạ 20KG Vàng Cạnh", "Tạ 40KG Vàng", "Tạ 30KG Vàng"],
    buyNowText: "Mua Với Voucher ₫460.275"
  };
  const shop = {
    name: 'ODIN CLUB',
    status: 'Online 4 phút trước',
    imageSrc: 'https://down-vn.img.susercontent.com/file/vn-11134233-7qukw-lkfom3tedyug5e@resize_w80_nl',
    imageSrc2x: 'https://down-vn.img.susercontent.com/file/vn-11134233-7qukw-lkfom3tedyug5e@resize_w160_nl',
    reviews: '187k',
    responseRate: '100%',
    joined: '4 năm',
    products: '260',
    responseTime: 'vài phút',
    followers: '836,5k'
  };

  const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
  const [countdownTime, setCountdownTime] = useState({ hours: 4, minutes: 53, seconds: 0 });
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, '0');

  return (
    <div className="body">
      <div className="product-container">
      <div className="product-images">
        <div className="main-image">
          <img src={product.mainImage} alt="Main Product Image" />
          <div className="image-details">
            <p>Chất liệu thân thiện với môi trường</p>
            <p>Lõi bê tông bọc nhựa PP</p>
          </div>
        </div>
        <div className="thumbnail-images">
          {product.weights.map((weight, index) => (
            <img
              key={index}
              src={product.mainImage}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(product.mainImage)} // Thay đổi ảnh chính khi bấm vào thumbnail
              className={selectedImage === product.mainImage ? 'active-thumbnail' : ''}
            />
          ))}
        </div>
      </div>
      
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <div className="product-rating">
          <div className="product-rating-pro">Điểm đánh giá {product.rating}/5</div>
          <div className="product-rating-pro">{product.reviews} Đánh Giá</div>
          <div className="product-rating-pro">{product.sold} Đã Bán</div>
        </div>
        
        <div className="flash-sale">
          <p>FLASH SALE</p>
          <p className="countdown">
            Kết thúc trong {formatTime(countdownTime.hours)} : {formatTime(countdownTime.minutes)} : {formatTime(countdownTime.seconds)}
          </p>
        </div>
        
        <div className="price">
          <span className="discounted-price">{product.discountedPrice}</span>
          <span className="original-price">{product.originalPrice}</span>
        </div>

        <section className="transport">
          <h3 className="transport-title">Vận chuyển</h3>
          <div className="transport-info">
            <div className="flex freeship">
              <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png" height="20" alt="Free Shipping" className="transport-image" />
              <div className="freeship-text">
                <div className="freeship-text-status">Miễn phí vận chuyển</div>
              </div>
            </div>
            <div className="flex transport-location">
              <p>Vận chuyển tới</p>
              <input type="text" className="transport-input-location" placeholder="nhập địa chỉ giao hàng" />
            </div>
          </div>
        </section>

        <div className="selection">
          <label htmlFor="weight">Chọn sản phẩm:</label>
          <select id="weight" onChange={(e) => setSelectedWeight(e.target.value)} value={selectedWeight}>
            {product.weights.map((weight, index) => (
              <option key={index} value={weight}>{weight}</option>
            ))}
          </select>
        </div>

        <div className="actions">
          <button className="add-to-cart">Thêm Vào Giỏ Hàng</button>
          <button className="buy-now">{product.buyNowText}</button>
        </div>
      </div>
      
     </div>
     <div className="shop-info">
      <div className="shop-intro">
        <div className="shop-image">
          <img
            width="80"
            loading="lazy"
            className="uXN1L5 lazyload Qm507c"
            srcSet={`${shop.imageSrc} 1x, ${shop.imageSrc2x} 2x`}
            src={shop.imageSrc}
            alt="click here to visit shop"
            height="80"
          />
        </div>
        <div className="shop-name">
          <p className="shop-name-text">{shop.name}</p>
          <p className="shop-status">{shop.status}</p>
          <div className="shop-button">
            <button className="shop-contact-but">Liên hệ shop</button>
            <button className="shop-visit">Xem shop</button>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div className="info-item">
          <span className="label">Đánh Giá :</span>
          <span className="value red">{shop.reviews}</span>
        </div>
        
        <div className="info-item">
          <span className="label">Tham Gia :</span>
          <span className="value red">{shop.joined}</span>
        </div>
        <div className="info-item">
          <span className="label">Sản Phẩm :</span>
          <span className="value red">{shop.products}</span>
        </div>
        <div class="info-item">
              <span class="label">Tỉ Lệ Phản Hồi :</span>
              <span class="value red">100%</span>
            </div>
        
        <div className="info-item">
          <span className="label">Người Theo Dõi :</span>
          <span className="value red">{shop.followers}</span>
        </div>
      </div>
    </div>
     {/* đánh giá sản phẩm */}
     <div className="review-section">
      <h2 className="review-title">Đánh Giá Sản Phẩm</h2>
      
      {/* Đánh giá 1 */}
      <div className="review">
        <div className="review-header">
          <img src="https://via.placeholder.com/40" alt="User avatar" className="user-avatar" />
          <div className="user-info">
            <span className="username">newgame1203</span>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <span className="review-date">2024-06-26 18:47</span>
            <span className="product-type">| Phân loại hàng: Be,L</span>
          </div>
        </div>
        
        <p className="review-text">Áo đẹp lắm nha mọi người. Vải thoáng mát màu thì dễ phối lắm. Mình 1m7 60kg mặc size L ôm người đẹp rồi á</p>
        
        <div className="review-media">
          <img src="https://via.placeholder.com/80" alt="Product image 1" />
          <img src="https://via.placeholder.com/80" alt="Product image 2" />
          <div className="video-thumbnail">
            <img src="https://via.placeholder.com/80" alt="Video thumbnail" />
            <span className="video-duration">0:07</span>
          </div>
        </div>
        
        <div className="review-footer">
          <span className="like-count">👍 9</span>
        </div>
      </div>

      {/* Đánh giá 2 */}
      <div className="review">
        <div className="review-header">
          <img src="https://via.placeholder.com/40" alt="User avatar" className="user-avatar" />
          <div className="user-info">
            <span className="username">newgame1203</span>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <span className="review-date">2024-06-26 18:47</span>
            <span className="product-type">| Phân loại hàng: Be,L</span>
          </div>
        </div>
        
        <p className="review-text">Áo đẹp lắm nha mọi người. Vải thoáng mát màu thì dễ phối lắm. Mình 1m7 60kg mặc size L ôm người đẹp rồi á</p>
        
        <div className="review-media">
          <img src="https://via.placeholder.com/80" alt="Product image 1" />
          <img src="https://via.placeholder.com/80" alt="Product image 2" />
          <div className="video-thumbnail">
            <img src="https://via.placeholder.com/80" alt="Video thumbnail" />
            <span className="video-duration">0:07</span>
          </div>
        </div>
        
        <div className="review-footer">
          <span className="like-count">👍 9</span>
        </div>
      </div>

      {/* Đánh giá 3 */}
      <div className="review">
        <div className="review-header">
          <img src="https://via.placeholder.com/40" alt="User avatar" className="user-avatar" />
          <div className="user-info">
            <span className="username">newgame1203</span>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <span className="review-date">2024-06-26 19:32</span>
            <span className="product-type">| Phân loại hàng: đen,XL</span>
          </div>
        </div>
        
        <p className="review-text">áo như cứt luôn á</p>
        
        <div className="review-media">
          <img src="https://via.placeholder.com/80" alt="Product image 1" />
          <img src="https://via.placeholder.com/80" alt="Product image 2" />
          <div className="video-thumbnail">
            <img src="https://via.placeholder.com/80" alt="Video thumbnail" />
            <span className="video-duration">0:07</span>
          </div>
        </div>
        
        <div className="review-footer">
          <span className="like-count">👍 8</span>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default ProductDetail;
