
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import kid_banner from './components/Assets/banner_kids.png';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShopCategory from './pages/Shopcategory';
function App(){


  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner ={men_banner}category ="men"/>} />
        <Route path='/womens' element={<ShopCategory banner ={women_banner} category ="women"/>} />
        <Route path='/kids' element={<ShopCategory banner ={kid_banner} category ="kid"/>} />
        <Route path="/Product" element={<Product/>}>
          <Route path=':productId' element ={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>} />
        <Route path='/Login' element={<LoginSignup/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
