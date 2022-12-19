import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CartContext from '../CartContext';

const Item = (props) => {
    

    const {id, url, descr, price, handleAdd} = props;
    return (
                    <Card style={{ width: '30rem' }}>
                      <Card.Img variant="top" src={url} />
                      <Card.Body>
                        <Card.Title>{price}€</Card.Title>
                        <Card.Text>
                            {descr}.
                          A little cat lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores inventore cumque dicta quis sit incidunt architecto similique. Nemo architecto omnis ea corporis velit quis quae est eveniet ratione, repellat aut.
                        </Card.Text>
                        <Button id={id} onClick={handleAdd} variant="dark">Save that poor little cat</Button>
                      </Card.Body>
                    </Card>
          );
}

export default Item;