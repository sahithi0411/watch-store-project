
import { BrowserRouter,Routes, Route } from 'react-router'
import LoginForm from '../Login.jsx' 
import Home from '../Home/index.jsx'
import Products from '../Products/index.jsx'
import Cart from '../Cart/index.jsx'
import BuyNow from '../BuyNow/index.jsx'

const Watches = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginForm />} />

            <Route path='/' element={<Home />} />

            <Route path='/products' element={<Products />} />

            <Route path='/cart' element={<Cart />} />

            <Route path='/buynow' element={<BuyNow />} />
        </Routes>
        </BrowserRouter>
    )
}
export default Watches