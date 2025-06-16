
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductDetails from './Pages/ProductDetails'
import Login from './Pages/Login'
import Checkout from './Pages/Checkout'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Seller from './Pages/Seller'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Register from './Pages/Register'
import UserAccount from './Pages/UserAccount'
import Otp from './Pages/Otp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Pages/Blog'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product-details/:id' element={<ProductDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/seller' element={<Seller/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/user' element={<UserAccount/>}/>
      <Route path='/otp-login' element={<Otp/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    {/* <Footer/> */}
     
    </>
  )
}

export default App
