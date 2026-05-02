import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Showcase from './pages/Showcase';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import About from './pages/About';
import GetQuote from './pages/GetQuote';
import Privacy from './pages/Privacy';
import Termsofservices from './pages/Termsofservices';


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:slug' element={<ProductDetails />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/showcase' element={<Showcase/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/get-quote' element={<GetQuote/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/termsofservices' element={<Termsofservices/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
