import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="links">
            <Link to='/about'>About</Link>
            <Link to='/new'>New</Link>
            <Link to='/'>Home</Link>
            
        </div>
    )
}

export default NavBar;