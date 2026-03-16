import React, { useState } from 'react'
import './categorybtn.css'
import { IoChevronDownOutline } from 'react-icons/io5'

const Categorybtn = ({ categories }) => {

  const [open, setOpen] = useState(false)

  return (
    <div className="category-container">

      <div className="category-btns">

        <button
          className="btn"
          onClick={() => setOpen(true)}
        >
          All category <IoChevronDownOutline />
        </button>

        <button className="btn">Premium Fruits <IoChevronDownOutline/></button>
        <button className="btn">Home & Kitchen <IoChevronDownOutline/></button>
        <button className="btn">Fashion <IoChevronDownOutline/></button>
        <button className="btn">Electronics <IoChevronDownOutline/></button>
        <button className="btn">Beauty <IoChevronDownOutline/></button>
        <button className="btn">Home Improvement <IoChevronDownOutline/></button>
        <button className="btn">Sports, Toys & Luggage <IoChevronDownOutline/></button>

      </div>

      {open && (
        <div className="modal">

          <div className="modal-content">

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              X
            </button>

            <div className="modal-left">
              {categories.map((cat, index) => (
                <div key={index} className="modal-category">
                  {cat}
                </div>
              ))}
            </div>

            <div className="modal-middle">
              <h3>FEATURED PHONES</h3>

              <div className="phone-card">
                <p>Samsung Galaxy S21 5G</p>
                <span>Rs 160</span>
              </div>

              <div className="phone-card">
                <p>Simple Mobile Gaming Phone</p>
                <span>Rs 1,500</span>
              </div>

              <div className="phone-card">
                <p>Sony High Zoom Camera</p>
                <span>Rs 2,300</span>
              </div>

            </div>

            <div className="modal-right">
              <h2>21% Discount</h2>
              <p>Xiaomi Earbuds</p>
              <button>SHOP NOW</button>
            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default Categorybtn
