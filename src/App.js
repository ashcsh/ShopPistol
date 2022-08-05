import './App.css';
import {useState} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './components/HomePage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Navigation from './components/Navigation';

function App() {

  const [product, setProduct] = useState([
    {
      id:1,
      name:"Hoody",
      image:"https://picsum.photos/300",
    },
    {
      id:2,
      name:"Skirt",
      image:"https://picsum.photos/300"
    },
    {
      id:3,
      name:"Pants",
      image:"https://picsum.photos/300"
    }
  ])
  
  const [cartList, setCartList] = useState([])

  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/shop" element={<Shop product={product} cartList={cartList} setCartList={setCartList} />} />
          <Route exact path="/cart" element={<Cart cartList={cartList} setCartList={setCartList}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
