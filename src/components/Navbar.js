import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="header">
                <Link to='/'> <i className="fas fa-book"></i></Link>
                <h2><Link to='/'>Books Management System</Link></h2>
            </div>
            <div style={{ marginLeft: 'auto' }}></div>
            <div className="navbar-content"><Link to="/">Home</Link></div>
            <div className="navbar-content"><Link to="/pricing">Pricing</Link></div>
            <div className="navbar-content"><Link to="/contact">Contact Us</Link></div>
        </div>
    );
}

export default Navbar;