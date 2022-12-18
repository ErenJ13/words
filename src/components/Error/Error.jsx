import error from "../../image/error.jpeg"
import "../Error/error.css"
import {Link} from "react-router-dom";

export default function Erro(){
    return(
        <div className="error">
            <h1>Whoops!</h1>
            <p>404 Page Not Found</p>
            <img src={error} alt="" className="error_img"/>
            <div className="link_error">
                <p>Try our</p>
              <Link to="/" className="link">Home</Link>
              <p>or</p>
              <Link to="/game" className="link">Game</Link>
              <p>instead</p>
            </div>
        </div>
    )
}