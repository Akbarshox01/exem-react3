import { useState } from "react"
import "./Store.css"

const Store = ({ store }) => {

const [count,setCount] = useState([1,1,1,1])

const plus = (i)=>{
let newCount=[...count]
newCount[i]++
setCount(newCount)
}

const minus = (i)=>{
let newCount=[...count]
if(newCount[i]>1){
newCount[i]--
}
setCount(newCount)
}

let total = 0

return(

<div className="Stor-page">

<h1>My Store</h1>

<div className="Stor-container">

<div className="Stor-items">

{store.slice(0,4).map((item,index)=>{

let price = 125
total += price * count[index]

return(

<div className="Stor-item" key={index}>

<img src={item.img} alt=""/>

<div>
<h4>{item.name}</h4>
<p>{item.s}</p>
</div>

<div className="qty">

<button onClick={()=>minus(index)}>-</button>

<span>{count[index]}</span>

<button onClick={()=>plus(index)}>+</button>

</div>

</div>

)

})}

</div>

<div className="order-summary">

<h3>Order Summary</h3>

<p>Price ₹{total}</p>
<p>Shipping ₹0</p>
<p>Tax ₹0</p>

<h2>Total ₹{total}</h2>

<button>SHOP NOW</button>

</div>

</div>

</div>

)

}

export default Store
