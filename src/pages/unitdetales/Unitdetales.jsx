import './Unitdetales.css';

const Unitdetales = ({ category = [] }) => {
  return (
    <div className="categories-container">
      {category.map((item, index) => (
        <div className="category-item" key={index}>
          <div className="category-img">
            <img src={item.img} alt={item.name} />
          </div>
          <p className="category-name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Unitdetales;
