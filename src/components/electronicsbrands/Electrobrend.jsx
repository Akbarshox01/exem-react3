import './Electrobrend.css'

const Electrobrend = ({ electroshop = [] }) => {
  return (
    <section className="electro-wrapper">
      <div className="electroshop-preview">
        <h2>Top Electronics Brands</h2>
        <button className="electrobtn">VIEW ALL</button>
      </div>

      <div className="electroshop">
        {electroshop.map((item, index) => (
          <div key={index} className="electroshoped">
            <div className="electro-value">
              <h3>{item.name}</h3>
              <span className="electro-icon">{item.icon}</span>
              <p>{item.title}</p>
            </div>

            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Electrobrend
