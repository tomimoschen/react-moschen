import React, { useState } from "react";

const ItemCount = ({ stock=10, initial=1, onAdd }) => {
    const [count, setCount] = useState(initial);
    return (
    <div className="grupo-botones">
    <button className="boton-restar" onClick={() => {count > initial ? 
        setCount(count-1) : setCount(initial);}}>-</button>
        <button className="boton" onClick={() => onAdd(count)}>Agregar al carrito</button>
        <button className="boton-agregar" onClick={() => {count < initial ? 
        setCount(count+1) : setCount(initial);}}>+</button>
                {count}
    </div> 
    );};
                    
    export default ItemCount;
                    