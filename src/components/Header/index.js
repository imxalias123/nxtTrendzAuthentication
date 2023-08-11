// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="nav-logo"
        alt="website logo"
      />

      <button type="button" className="logout-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="nav-logout"
          alt="nav logout"
        />
      </button>
      <div className="link-logout">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
        </ul>
        <button type="button" className="logout">
          logout
        </button>
      </div>
    </nav>
    <div className="header-icon">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
        className="icon"
        alt="nav home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        className="icon"
        alt="nav products"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        className="icon"
        alt="nav cart"
      />
    </div>
  </>
)

export default Header
