import { FiShoppingCart, FiUser } from 'react-icons/fi'
import { GiShakingHands } from 'react-icons/gi'
import { HiMenuAlt2 } from 'react-icons/hi'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
  return (
    <header className='header'>

      <button className='header-button-icon'>
        <HiMenuAlt2 />
      </button>

      <h1>UNITED DEALS</h1>

      <input
        className='main-input'
        type="text"
        placeholder='Search essentials, groceries and more...'
      />

      <div className='header-right'>

        <h5 style={{color:'orange', gap:'20px'}}>
          <GiShakingHands />
          <span>My Deals |</span>
        </h5>

        <h5>
          <FiUser />
          <span>Sign Up/Sign In</span>
        </h5>

        <Link to="/unit">
          <h5>
            <FiShoppingCart />
            <span>Cart</span>
          </h5>
        </Link>

      </div>

    </header>
  )
}

export default Header
