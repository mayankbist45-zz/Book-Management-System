import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import useFetch from "../Hooks/useFetch";
import BookCard from "./BookCard";

const { REACT_APP_URL } = process.env;

const UserLanding = () => {
    const { data, isPending } = useFetch(REACT_APP_URL);
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        if (data) {
            data.sort((a, b) => b.timesBought - a.timesBought)
            setBooksData(data.slice(0, 4));
        }
    }, [data]);

    const updateBooks = () => {
        fetch(REACT_APP_URL)
            .then((data) => data.json())
            .then((data) => {
                data.sort((a, b) => b.timesBought - a.timesBought)
                setBooksData(data.slice(0, 4))
            })
    }

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
                    {!isPending && booksData.map((book) => <BookCard book={book} key={book._id} updateBooks={updateBooks} />)}
                </div>
            </div>
        </div>
    );
}

export default UserLanding;