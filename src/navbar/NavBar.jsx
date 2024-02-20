import { Link } from "react-router-dom";
import './navbar.css'
const NavBar = () => {
    return ( 
    <div className="navbar1">
        <div className="logo"><Link to="/">logo here</Link></div>
        <div className="nav1">
            <Link to="/about">About us</Link>
            <Link to="/">FAQ’S</Link>
            <Link to="/">Our services</Link>
            <Link to="/pay">Payment</Link>
             <Link to="/contact">Contact us</Link>
             <Link to="/sign">Sign up</Link>
        </div>

    </div> );
}
 
export default NavBar;