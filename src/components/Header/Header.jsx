import "./Header.css"
import logo from "../../images/logo.svg"
import avatar from "../../images/avatar.png"
function Header() { 
      return(
            <header className="header">
                  <img src={logo} alt="header logo" className="header__logo" />
                  <p className="header__date-and-location">Date, Location</p>
                  <button className="header__add-clothes-btn">+ Add clothes</button>
                  <div className="header__user-container">
                        <p className="header__username">Terrence Tegegne</p>
                        <img src={avatar} alt="avatar" className="header__avatar" />
                  </div>
            </header>
      )
}

export default Header