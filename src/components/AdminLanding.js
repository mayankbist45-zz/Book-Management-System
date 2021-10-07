import { Link } from "react-router-dom";

const AdminLanding = () => {
    return (
        <div className="container">
            <div className="container-1" id="admin-container">
                <p>ADD OR MODIFY THE BOOKS DATABASE SEAMLESSLY</p>
                <h1>Welcome to the admin Panel</h1>
                <button className="btn"><Link to="/search/admin">Explore The Database</Link></button>
                <button className="btn"><Link to="/add">Add More Books</Link></button>
            </div>
            <div className="container-2">
            </div>
        </div>
    );
}

export default AdminLanding;