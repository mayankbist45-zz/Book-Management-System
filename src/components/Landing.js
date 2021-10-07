import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="blocks">
            <div className="block-1">
                <p>Creator: Mayank Bist</p>
                <h1>Manage Books</h1>
                <div className="button-group">
                    <button className="btn"><Link to='/user'>Enter As User</Link></button>
                    <button className="btn"><Link to='/admin'>Enter As Admin</Link></button>
                </div>
            </div>
            <div className="block-2">
                <img className="landing-logo"
                    src="https://raw.githubusercontent.com/mayankbist45/Single_Page_Web_Template/main/assets/header-img.png"
                    alt="Book Cover" />
            </div>
        </div>
    );
}

export default Landing;