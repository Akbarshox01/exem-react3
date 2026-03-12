import './Detales.css'

const Detales = ({ deatales = [] }) => {
  return (
    <section className="detales">

      <div className="detales_header">
        <div className="detales_text">
          <h2>Today’s Deals of the day</h2>
        </div>

        <div className="detales_right">
          <p className="timer">16d : 21h : 57m : 23s</p>
          <button className="view_btn">VIEW ALL</button>
        </div>
      </div>

      <div className="detales_value">
        {deatales.map((item, index) => (
          <div className="phones_detalx" key={index}>
            <div className="img_box">
              <img src={item.img} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <button className="buy_btn">
              {item.button}
            </button>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Detales
