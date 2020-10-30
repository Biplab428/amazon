import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'

function Header() {
    const [{basket}] = useStateValue();
    console.log(basket)
    return (
        <nav className="header">
            {/* logo */}
            <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>
          
            { /* seacrch box */}
            <div className="search">
              <input className="header__searchInput"/>
              <SearchIcon className="header__searchIcon"/>
            </div>

            {/* 3 links */}
            <div className="header__nav">
                

            {/* 1st link */}
            <Link to="/login" className="header__link">
                    <div className="header__option">
                    <span className="option__lineone">hello name</span>
                    <span className="option__linetwo">sign in</span>
                    </div>
                </Link>
            {/* 2st link */}
            <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="option__lineone">return</span>
                    <span className="option__linetwo">& orders</span>
                    </div>
                </Link>
            {/* 3st link */}
            <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="option__lineone">prime</span>
                    <span className="option__linetwo">stram</span>
                    </div>
                </Link>
                {/* link 4 */}
        <Link to="/checkout">
        <div className="header__basket">
                 {/* shopping basket icon */}
                <ShoppingBasketIcon  className="header__basketicon"/>
                 {/* qty of basket */}
    <span className="option__linetwo basket__count">{basket.length}</span>
                    </div>
                   
                </Link>
            </div>
         
            {/* basket with qty */}
        </nav>
    )
}

export default Header
