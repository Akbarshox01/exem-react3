import { FiShoppingCart, FiUser } from "react-icons/fi"
import { GiShakingHands } from "react-icons/gi"
import { HiMenuAlt2 } from "react-icons/hi"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">

      <div className="header-left">
        <button className="menu-btn">
          <HiMenuAlt2 />
        </button>

        <h1 className="logo">UNITED DEALS</h1>
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search essentials, groceries and more..."
      />

      <div className="header-right">

        <Link to="/unit" className="header-item deals">
          <GiShakingHands />
          <span>My Deals</span>
        </Link>

        <Link to="/zara" className="header-item">
          <FiUser />
          <span>Sign In</span>
        </Link>

        <Link to="/store" className="header-item cart">
          <FiShoppingCart />
          <span>Cart</span>
        </Link>

      </div>

    </header>
  )
}

export default Header
