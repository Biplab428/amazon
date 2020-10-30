import React from 'react'
import Checkout from './Checkout'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home__container">

             <img className="home__banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/Oct/GW/DesktopHero_1500x600._CB402740210_.jpg" />
    
              <div className="home__row">
                    <Product 
                       id="123456"
                       title="djdbkdjbwkjdbqkwd dwkdqbwjkd wkd vqwkd d qk"
                       image = "https://images-na.ssl-images-amazon.com/images/I/51kyY5T0nKL._UL1140_.jpg"
                       rating= {4}
                       price= {124} />
    
                     <Product 
                      id="127456"
                       title="b"
                       image = "https://images-na.ssl-images-amazon.com/images/I/51kyY5T0nKL._UL1140_.jpg"
                       rating= {3}
                       price= {124} />
           </div>
           <div className="home__row">
           <Product 
                       id="123456"
                       title="c"
                       image = "https://images-na.ssl-images-amazon.com/images/I/51kyY5T0nKL._UL1140_.jpg"
                       rating= {4}
                       price= {124} />
    
                     <Product 
                      id="127456"
                       title="d"
                       image = "https://images-na.ssl-images-amazon.com/images/I/51kyY5T0nKL._UL1140_.jpg"
                       rating= {3}
                       price= {124} />
                        <Product 
                       id="123456"
                       title="c"
                       image = "https://images-na.ssl-images-amazon.com/images/I/51kyY5T0nKL._UL1140_.jpg"
                       rating= {4}
                       price= {124} />
    
           </div>
           <div className="home__row">
           <Product 
                       id="123456"
                       title="x"
                       image = "https://images-na.ssl-images-amazon.com/images/I/51kyY5T0nKL._UL1140_.jpg"
                       rating= {4}
                       price= {124} />
    
           </div>
    </div>
             
      
    )
}

export default Home
