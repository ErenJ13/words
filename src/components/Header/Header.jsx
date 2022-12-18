import {Link} from "react-router-dom";
import "../Header/Header.css"
import logo from "../../image/logo.png"

function Header() {
    return (
        <div className="head">
               <ul>
            <li >
              <Link to="/" className="logo"><img src={logo} alt="" /></Link>
            </li>
            <li className="link">
              <Link to="/game" className="link">Game</Link>
            </li>
          </ul>
        </div>
    );
}

export default Header;