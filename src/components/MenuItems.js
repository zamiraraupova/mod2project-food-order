import React from 'react'
import { connect } from "react-redux"
import { addToCart } from '../actions'

function MenuItems(props) {
console.log(props)
    return (
        <div className="item-section">
            <div id="img"> <img src={props.item.image} /> </div>
            <div id="name"> <h3> {props.item.name} </h3> </div>
            <br/>
            <div id="desr"> <h5> {props.item.description} </h5> </div>
            <br/>
            <div id="price"> <h4> ${props.item.price} </h4> </div>
            
            <button onClick={()=> props.addToCart(props.item)}>Add</button>
        </div>
    )
}

export default connect(null, {addToCart})(MenuItems)
