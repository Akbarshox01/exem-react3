import './FirstBanner.css';
import banner from '../../assets/nike.png';
const FirstBanner = () => {
  return (

<div>

    <div className='banner'>
        <div>
      <h4>Best Deal Online on smart watches</h4>
      <h2>LATEST NIKE SHOES</h2>
      <h5>UP to 80% OFF</h5>
        </div>
    <img className='banner-img' src={banner} alt="nike" />  
    </div>


    </div>
  );
}

export default FirstBanner;
