import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Item = (props) => {

    const {url, descr, price} = props;
    return (
                    <Card style={{ width: '30rem' }}>
                      <Card.Img variant="top" src={url} />
                      <Card.Body>
                        <Card.Title>{price}€</Card.Title>
                        <Card.Text>
                            {descr}.
                          A little cat lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores inventore cumque dicta quis sit incidunt architecto similique. Nemo architecto omnis ea corporis velit quis quae est eveniet ratione, repellat aut.
                        </Card.Text>
                        <Button variant="dark">Save that poor little cat</Button>
                      </Card.Body>
                    </Card>
          );
}

export default Item;