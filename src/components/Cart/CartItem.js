import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../CartContext";

const CartItem = (props) => {
    const {cartItems, setCartItems} = useContext(CartContext)
    const {id, url, descr, price} = props;

    /// implement changing usecontext
    const handleRemove = (e) => {
        console.log(e.target.id)
        const newState = cartItems.filter( (item) => {
          if(item.id !== e.target.id) {
            return item;
          }
          
        })
        setCartItems(newState)
    }

    return (
        <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{price}€</Card.Title>
          <Button id={id} onClick={handleRemove} variant="dark"> Abandon that poor kitty..</Button>
        </Card.Body>
      </Card>
    )
}

export default CartItem