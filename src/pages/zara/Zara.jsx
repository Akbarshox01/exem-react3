import { FaShoppingCart } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
import './Zara.css'
const Zara = ({reap,addToCart}) => {
return(

<div className="product-grid">

{reap.map((item,index)=>(
<div className="product-card" key={index}>

<div className="product-img">

<img src={item.img} alt=""/>

<div className="overlay">

<div className="icon-btn"
onClick={()=>addToCart(item)}
>
<FaShoppingCart/>
</div>

<div className="icon-btn">
<FaPlus/>
</div>

</div>

</div>

<h3>{item.name}</h3>
<p>{item.p}</p>

<button>{item.s}</button>

</div>
))}

</div>

)
}

export default Zara
