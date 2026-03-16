import FirstBanner from "./components/banner/FirstBanner";
import Brands from "./components/brands/Brands";
import Categorybtn from "./components/categoryesbtn/Categorybtn";
import Detales from "./components/detalisoftheday/Detales";
import Header from "./components/header/Header";
import readmi13c from './assets/readmi13c.png';
import poco from './assets/poco.png';
import bike from './assets/bike.png';
import iqoo from './assets/iqoo.png';
import Tops from "./components/shoptopcategory/Tops";
import mobile from './assets/mobile.png';
import cosmetic from './assets/cosmetic.png';
import electronisc from './assets/electronistic.png';
import furniture from './assets/furniture.png';
import watches from './assets/watches.png';
import decor from './assets/decor.png';
import accessories from './assets/accesories.png';
import Electrobrend from "./components/electronicsbrands/Electrobrend";
import iphone from './assets/iphone.jpg';
import realme from './assets/realme.jpg';
import xiomi from './assets/Mi.jpg';
import { ImAppleinc } from "react-icons/im";
import { SiXiaomi } from "react-icons/si";
import Frequantly from "./components/frequantly/Frequantly";
import ps5 from './assets/ps5.png';
import dron from './assets/dron.png';
import Tv from './assets/Tv.png';
import vivo from './assets/vivo.png';
import sms from './assets/sms.png';
import pultdron from './assets/pultdron.png';
import gamepad from './assets/gamepad.png';
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Unitdetales from "./pages/unitdetales/Unitdetales";
import shim from './assets/jensi.png';
import Zara from "./pages/zara/Zara";
import Store from "./pages/store/Store";
import { useState } from "react";



const deatales = [
   {
      img: readmi13c,
      title:'ADIDAS 4DFWD X PARLEY  RUNNING SHOES',
      button:'BUY NOW -  ₹125',
   },
   {
      img: poco,
      title:'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
      button:'BUY NOW - ₹125'
   },
      {
      img: bike,
      title:'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
      button:'BUY NOW - ₹125'
   },
      {
      img: iqoo,
      title:'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
      button:'BUY NOW - ₹125'
   },
]


const topshop = [
   {
      img: mobile,
      title:'Mobile'
   },
   {
      img: cosmetic,
      title:'Cosmetic'
   },
   {
      img: electronisc,
      title:'Electronisc'
   },
   {
      img: furniture,
      title:'Furniture'
   },
   {
      img: watches,
      title:'Watches'
   },
   {
      img: decor,
      title:'Decor'
   },
   {
      img: accessories,
      title:'Accessories'
   }, 
   
]

const electroshop =[
   {
      img:iphone,
      name:'IPHONE',
      icon:<ImAppleinc />,
      title:'UP to 80% OFF',
   },
      {
      img:realme,
      name:'REALME',
      icon: 'realme',
      title:'UP to 80% OFF',
   },
      {
      img:xiomi,
      name:'XIAOMI',
      icon:<SiXiaomi />,
      title:'UP to 80% OFF',
   },
]
const products = [
{
  name: "Xbox Series S - 512GB SSD Console",
  desc: "Games built using the Xbox Series X|S development kit",
  price: "$442.12",
  oldPrice: "$865.99",
  img: ps5
},
{
  name: "Bose Sport Earbuds",
  desc: "Wireless Earphones - Bluetooth",
  price: "$2,300",
  oldPrice: "",
  img:  dron
},

{
  name: "Bose Sport Earbuds",
  desc: "Wireless Earphones - Bluetooth",
  price: "$2,300",
  oldPrice: "",
  img:  sms
},

{
  name: "Bose Sport Earbuds",
  desc: "Wireless Earphones - Bluetooth",
  price: "$2,300",
  oldPrice: "",
  img:  vivo
},

{
  name: "Bose Sport Earbuds",
  desc: "Wireless Earphones - Bluetooth",
  price: "$2,300",
  oldPrice: "",
  img:  pultdron
},

{
  name: "Bose Sport Earbuds",
  desc: "Wireless Earphones - Bluetooth",
  price: "$2,300",
  oldPrice: "",
  img:  gamepad
},

{
  name: "Bose Sport Earbuds",
  desc: "Wireless Earphones - Bluetooth",
  price: "$2,300",
  oldPrice: "",
  img:  Tv
},

]
const categoriesData = [
  { name: 'Mobile', img: mobile  },
  { name: 'Cosmetics', img: cosmetic },
  { name: 'Electronics', img:electronisc  },
  { name: 'Furniture', img: furniture },
  { name: 'Watches', img: watches },
  { name: 'Decor', img: decor },
    { name: 'Mobile', img: mobile  },
  { name: 'Cosmetics', img: cosmetic },
  { name: 'Electronics', img:electronisc  },
  { name: 'Furniture', img: furniture },
  { name: 'Watches', img: watches },
  { name: 'Decor', img: decor },
    { name: 'Mobile', img: mobile  },
  { name: 'Cosmetics', img: cosmetic },
  { name: 'Electronics', img:electronisc  },
  { name: 'Furniture', img: furniture },
  { name: 'Watches', img: watches },
  { name: 'Decor', img: decor },
    { name: 'Mobile', img: mobile  },
  { name: 'Cosmetics', img: cosmetic },
  { name: 'Electronics', img:electronisc  },
  { name: 'Furniture', img: furniture },
  { name: 'Watches', img: watches },
  { name: 'Decor', img: decor },
    { name: 'Mobile', img: mobile  },
  { name: 'Cosmetics', img: cosmetic },
  { name: 'Electronics', img:electronisc  },
  { name: 'Furniture', img: furniture },
  { name: 'Watches', img: watches },
  { name: 'Decor', img: decor },
    { name: 'Mobile', img: mobile  },
  { name: 'Cosmetics', img: cosmetic },
  { name: 'Electronics', img:electronisc  },
  { name: 'Furniture', img: furniture },
  { name: 'Watches', img: watches },
  { name: 'Decor', img: decor },
    { name: 'Mobile', img: mobile  },
  { name: 'Cosmetics', img: cosmetic },
  { name: 'Electronics', img:electronisc  },
  { name: 'Furniture', img: furniture },
  { name: 'Watches', img: watches },
  { name: 'Decor', img: decor },
];


const categories = [
"Computer & Laptop",
"Computer Accessories",
"SmartPhone",
"Headphone",
"Mobile Accessories",
"Gaming Console",
"Camera & Photo",
"TV & Home Appliances",
"Watches & Accessories",
"GPS & Navigation",
"Wearable Technology"
]

  const reap= [
   {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },


  ]

  const cards =[
    {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
      {
     img:shim,
     name:'ZARA Suit Blazer Midnight Black Cotton',
     p:'⭐⭐⭐⭐⭐',
     s:'BUY NOW - ₹125'
   },
]

const Home = () => {



  return (
    <div>
<Categorybtn categories={categories} /> 
<FirstBanner/> 
<Brands /> 
<Detales Deatales={deatales}/>
 <Tops topshop={topshop}/> 
 <Electrobrend electroshop={electroshop}/> 
 <Frequantly products={products}/> 
 <Footer/>

    </div>
  )
}



const App = () => {
  const [store, setStore] = useState([])

  const addToStore = (item) => {
    setStore([...store, item])
  }

  return (
    <div>
      <Header/>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/unit"
          element={<Unitdetales category={categoriesData} />}
        />

        <Route
          path="/zara"
          element={<Zara reap={reap} addToStore={addToStore} />}
        />

        <Route
          path="/store"
          element={<Store store={cards} />}
        />

      </Routes>

    </div>
  )
}

export default App


