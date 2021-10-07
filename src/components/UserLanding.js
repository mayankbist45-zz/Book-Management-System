import { Link } from "react-router-dom";

import useFetch from "../Hooks/useFetch";
import BookCard from "./BookCard";

const UserLanding = () => {
    const { data: booksData, isPending } = useFetch('http://localhost:8000/books');

    return (
        <div>
            <div className="container">
                <div className="container-1">
                    <p>We have handpicked some of the best books for you.</p>
                    <h1>Our Top Picks</h1>
                    <button className="btn"><Link to="/search/user">SEARCH YOUR FAVOURITE BOOKS</Link></button>
                </div>
                <div className="container-2">
                    {isPending && <h2>Loading...</h2>}
                    {!isPending && booksData.map((book) => <BookCard book={book} key={book.id} />)}
                </div>
            </div>
        </div>
    );
}

export default UserLanding;