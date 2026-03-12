import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">

        <div className="footer_col">
          <h2 className="logo">UNITED DEAL</h2>
          <p>Customer Supports:</p>
          <p>(629) 555-0129</p>
          <p>4517 Washington Ave.</p>
          <p>Manchester, Kentucky 39495</p>
          <p>info@kinbo.com</p>
        </div>

        <div className="footer_col">
          <h3>TOP CATEGORY</h3>
          <ul>
            <li>Computer & Laptop</li>
            <li>SmartPhone</li>
            <li>Headphone</li>
            <li>Accessories</li>
            <li>Camera & Photo</li>
            <li>TV & Homes</li>
            <li className="browse">Browse All Product →</li>
          </ul>
        </div>

        <div className="footer_col">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Shop Product</li>
            <li>Shoping Cart</li>
            <li>Wishlist</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer_col">
          <h3>DOWNLOAD APP</h3>
          <div className="apps">
            <button className="app_btn">Get it now Google Play</button>
            <button className="app_btn">Get it now App Store</button>
          </div>
        </div>

        <div className="footer_col">
          <h3>POPULAR TAG</h3>
          <div className="tags">
            <span>Game</span>
            <span>iPhone</span>
            <span>TV</span>
            <span>Asus Laptops</span>
            <span>Macbook</span>
            <span>SSD</span>
            <span>Graphics Card</span>
            <span>Power Bank</span>
            <span>Smart TV</span>
            <span>Speaker</span>
            <span>Tablet</span>
            <span>Microwave</span>
            <span>Samsung</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
