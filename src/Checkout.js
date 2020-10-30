import { Title } from '@material-ui/icons';
import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Checkoutproduct from './Checkproduct'
import { Link } from 'react-router-dom';
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
        {basket?.length === 0 ?(
            <div className="goshop">
                 <Link to="/" className="tito">
                    <p>add items</p>
                    </Link>
            </div>
                   
            ):(
                    <div>
                    {basket.map((item)=>(
                    <Checkoutproduct 
                      id={item.id}
                     title={item.title}
                     rating={item.rating}
                     image={item.image}
                     price={item.price}
                      />))}
                    </div>
            )}
        </div>
    )
}

export default Checkout
