import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CartItem = (props) => {

    const {id, url, descr, price} = props;

    const handleRemove = (e) => {
        console.log(e.target.id)
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