import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Navbar from "./components/Navbar/Navbar"

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/shop" element={<Shop></Shop>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;