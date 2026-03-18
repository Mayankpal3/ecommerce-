import { Link } from 'react-router-dom'
import './header.css'

export function Header (){
   return(<div className="header">
      <div className="left-section">
        <Link to ="/" className="header-link">
          <img className="logo"
            src="images/ChatGPT Image Feb 19, 2026, 12_49_27 PM.png" />
          <img className="mobile-logo"
            src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <Link  className="orders-link header-link" to ="/Orders">

          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/Checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>)
}