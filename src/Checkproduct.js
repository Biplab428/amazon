import { Remove } from '@material-ui/icons'
import React from 'react'
import './Checkproduct.css'
import { useStateValue } from './StateProvider'

function Checkproduct({id , image , rating  , title , price }) {
    const[{basket}, dispatch]=useStateValue()
   const remove = () => {
    dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id,
    
    })
   };
    return (
        <div>
        <div className="product__info">
    <p>{ title }</p>
            <p className="product__price"> 
                 <small>$</small>
             <strong>{ price }</strong>
           </p>
           <div className="product__rating">
             {Array(rating).fill().map((_) => (
                 <p>⭐</p>
             ))}
             </div>
            </div>
          

             <img className="ita" src={image} alt="lol"/> 
             <button onClick={remove}>remove</button>
        </div>

    )
}

export default Checkproduct
