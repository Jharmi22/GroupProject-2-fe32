import './App.css';
import Header from './components/Home/Header';
import Beranda from './components/Home/Beranda';
import Products from './components/Products/Products';
import {Routes, Route} from 'react-router-dom';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Service from './components/Service/Service';
import About from './components/About/About';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Beranda />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </>
  );
}

export default App;
