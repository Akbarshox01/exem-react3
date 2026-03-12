import './Tops.css'
const Tops = ({topshop}) => {
  return (
    <div>
        <div className="section2_text">
            <h2>Shop From Top CateGories</h2>
            <button className='section2_text_btn'>VIEW ALL</button>
        </div>


      <div className="topshop-main">
        {topshop.map((item,index) =>(
            <div key={index} className="topshop">
                <img  src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
            </div>
        ))}

      </div>


    </div>
  );
}

export default Tops;
