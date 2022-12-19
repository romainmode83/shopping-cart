import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item";

const Shop = () => {
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
                console.log(newState)
                setState(newState);
        });
        }, []);
    
        const items = state.map( (item, index) => {
            if(item.id){
            return <Item 
            key={item.id}
            url={item.url}
            descr={item.alt_description}
            price={item.price}
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