import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Lost SomeWhere?</h1>
            <button className="btn"><Link to='/'>Back to the HomePage...</Link></button>
        </div>
    );
}

export default NotFound;