import React from "react";
import { useEffect, useState } from "react";

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

    const fetchCats = async () => { 
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=6', {mode: 'cors'});
        const data = await response.json()
        return data
    }

    useEffect( () => {
    fetchCats().then((data) => {
    
    const newState = [...state].map((stateObject, index) => {
        return ({...stateObject, ...data[index]});
    });
    console.log(newState)
    
    });
    
    }, []);
   
    return (
        <div className="shop"> 
        fekor

        
        </div>
    )
}

export default Shop;