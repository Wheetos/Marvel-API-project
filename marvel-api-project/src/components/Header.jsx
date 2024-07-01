import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css"; 
import logo from '../assets/marvel-logo.png';

function Header(){
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    console.log(logo);

    return(
        <header>
            <img src={logo} width="150px" /> 
            <nav ref={navRef}>
                <a href="/#">Characters</a>
                <a href="/#">Events</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Header