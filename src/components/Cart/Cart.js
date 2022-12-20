import { useContext } from "react";
import CartContext from "../CartContext";
import Item from "../Shop/Item";
import CartItem from "./CartItem";


const Cart = () => {

    const {cartItems, setCartItems} = useContext(CartContext);

   const itemList = cartItems.map( item => {
        console.log(cartItems.length)
        return <CartItem 
            key={item.id}
            id={item.id}
            url={item.url}
            descr={item.alt_description}
            price={item.price}
            ></CartItem>
    });


    return (
        <div className=" container cart">
             { (cartItems.length >= 1) ? 
             <h1 className="text-center p-5"> You have saved {cartItems.length} cats already. Spend more money to save more cats!</h1>
             : <h1 className="text-center p-5"> You have no cat in your cart yet..</h1>
            }
                
            <div className="d-flex justify-content-center gap-5">{itemList}</div>

            </div>
               
    )
}

export default Cart;