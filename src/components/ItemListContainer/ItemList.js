import React, { useEffect, useState } from 'react'
import Item from './Item';
import productos from "../../data.json"
import "../../styles/item.css";

const ItemList = () => {
  const [items, setItem] = useState([]);
  
  useEffect(()=>{
    const task = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(productos);
        }, 1000)
    });
    task.then((res)=>{
        setItem(res)
    });
  },[]);
  return (
    <div className="productos_container">
        {
            items.map((item)=>{
                return <Item
                key={item.id}
                src={item.src}
                name={item.name}
                price={item.price}
                brand={item.brand}
                />
            })
        }
    </div>
  )
}

export default ItemList