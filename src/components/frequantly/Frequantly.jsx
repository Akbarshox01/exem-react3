import React from 'react';
import'./Frequantly.css'
const Frequantly = ({products}) => {
  return (
        <div className="products">
      {products.map((item, index) => (
        <div key={index} className="product-card">
          
          <div className="product-img">
            <img src={item.img} alt={item.name} />
          </div>

          <h3 className="product-name">{item.name}</h3>

          <p className="product-desc">{item.desc}</p>

          <div className="product-price">
            <span className="old-price">{item.oldPrice}</span>
            <span className="new-price">{item.price}</span>
          </div>

          <div className="product-actions">
            <button className="add-btn">ADD TO CARD</button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Frequantly;
