import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item";
import { useContext } from "react";
import CartContext from "../CartContext";

const Shop = () => {
    let cartItems = useContext(CartContext);

    const [state, setState] = useState([
        {   price: '65',
        },
        {   price: '45',
        },
        {   price: '67',
        },
        {   price: '10',
        },
        {   price: '08',
        },
        {   price: '46',
        },
    ]);

    const fetchUnsplash = async () => {
        const response = await fetch('https://api.unsplash.com/search/photos?query=cat&per_page=6&client_id=mxPH4oyOeGFY4rQ5z8ePaddc6aRF7GSqKfD3wh74F08', {mode: 'cors'});
        const data = await response.json();
        return data;
    }

        useEffect( () => {
            fetchUnsplash().then((data) => {
                const newState = [...state].map( (stateObject, index) => {
                    return ({
                        ...stateObject,
                         url: data.results[index].urls.small,
                         alt_description: data.results[index].alt_description,
                         id: data.results[index].id
                        })
                        
                });
                setState(newState);
        });
        }, []);
        
        const handleAdd = (e) => {
            console.log(e.target.id)
            const item = state.map( (stateItem, index) => {
                if (e.target.id === stateItem.id) {
                    console.log(stateItem)
                    cartItems.push(stateItem)
                }
            })
        }
    
        const items = state.map( (item, index) => {
            if(item.id){
            return <Item 
            key={item.id}
            id={item.id}
            url={item.url}
            descr={item.alt_description}
            price={item.price}
            handleAdd={handleAdd}
            ></Item>
            }
        });
   
    return (
        <div className="container shop"> 
        {items}
        </div>
    )
}

export default Shop;