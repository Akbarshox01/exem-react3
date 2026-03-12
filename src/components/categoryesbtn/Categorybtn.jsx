import React, { useState } from 'react';
import './Categorybtn.css';
import { IoChevronDownOutline } from 'react-icons/io5';

const Categorybtn = ({categories}) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="category-container">
      <div className="category-btns">
        <button 
          className="btn" 
          onClick={() => setIsOpen(!isOpen)}
        >
          All category <IoChevronDownOutline />
        </button>
        {isOpen && (
          <div className="dropdown-modal">
            {categories.map((cat, index) => (
              <div key={index} className="dropdown-item">
                {cat}
              </div>
            ))}
          </div>
        )}

        <button className="btn">Premium Fruits <IoChevronDownOutline/></button>
        <button className="btn">Home & Kitchen <IoChevronDownOutline/></button>
        <button className="btn">Fashion <IoChevronDownOutline/></button>
        <button className="btn">Electronics <IoChevronDownOutline/></button>
        <button className="btn">Beauty <IoChevronDownOutline/></button>
        <button className="btn">Home Improvement <IoChevronDownOutline/></button>
        <button className="btn">Sports, Toys & Luggage <IoChevronDownOutline/></button>
      </div>
    </div>
  );
}

export default Categorybtn;
