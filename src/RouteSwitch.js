import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import CartContext from "./components/CartContext";
import { useState } from "react";

const RouteSwitch = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={{cartItems, setCartItems }}>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/shop" element={<Shop/>} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
        </CartContext.Provider>
    )
}

export default RouteSwitch;