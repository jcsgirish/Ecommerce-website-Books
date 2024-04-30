import React from "react";
import './Navbar.styles.css';
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from '../../../App'
import {ReactComponent as Cart } from '../../../Pages/Pics/cart.svg'
import { getAuth,signOut } from "firebase/auth";
import app from "../../../FireBase/FireBase";

const Navbar =({darkTheme})=>{

    const user = useContext(UserContext);
    const navigate=useNavigate();

    const auth = getAuth(app);

    const handlelogout =()=>{
        signOut(auth).then(()=>{
            navigate('/Login')
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    const showLoginAndSignup = (
    <nav className="nav-links-cotainer">
        <Link to="/" className="nav-links">Home </Link>
        <Link to="/books"className="nav-links">books</Link> 
        <Link to= "/Signup" className="nav-links">Signup</Link>
        <Link to = "/Login"  className="nav-links">Login</Link>
    </nav>

    )
    const showLogoutAndCart=(
        <nav className="nav-links-container">
        <Link to="/" className="nav-links">Home </Link>
        <Link to="/books"className="nav-links">books</Link> 
        <a  onClick={handlelogout} className="nav-links">Logout</a>
        <Link to = '/cart' className="Cart-link"><Cart/></Link>
        </nav>
    
    


    )

    return (
        <section className= { darkTheme  ?  'background-dark'  :  'background-transparent navbar-container'  }>
            
         <div className="navbar-content">
            <h1 className="logo">Book<span style={{color:"Darkorange"}}>Hive</span></h1>

           
            {user ? showLogoutAndCart : showLoginAndSignup}

            </div>

           
        </section>
    )
}


export default Navbar