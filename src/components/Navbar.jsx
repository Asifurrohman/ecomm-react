import { Link } from "react-router-dom";

export default function Navbar(){
    return <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-brand">EcommReact</Link>
            <div className="navbar-links">
                <Link to='/'>Home</Link>
                <Link to='/checkout'>Cart</Link>
            </div>
        </div>
    </nav>
}