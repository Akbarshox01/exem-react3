import { SiZara } from 'react-icons/si';
import './Brands.css';
import { CgChanel } from 'react-icons/cg';
const Brands = () => {
  return (
    <div>
      <div className='brands-btn'>
        <button className='brandes-btn'><SiZara /></button>
        <button className='brandes-btn'>D&G</button>
        <button className='brandes-btn'>H2M</button>
        <button className='brandes-btn'><CgChanel /></button>
        <button className='brandes-btn'>PRADA</button>
        <button className='brandes-btn'>BIBA</button>
      </div>
    </div>
  );
}

export default Brands;
