import React from 'react'
import "../../styles/item.css";

const Item = (props) => {
  return (
    <div className="card">
    <img className="card-img" src={props.src} alt="{props.name}"/>
        <h4 className="card-title">
        {props.name}
        </h4>
        <h5 className="card-sub">
        Camiseta marca {props.brand}. Equipación ${props.kit}
        </h5>
        <p className="precio">
        ${props.price}
        </p>
    </div>
  )
}

export default Item