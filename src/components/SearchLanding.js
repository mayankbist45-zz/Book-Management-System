import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../Hooks/useFetch";
import ListBook from "./ListBook";

const SearchLanding = () => {
    const { usertype } = useParams();
    const { data, isPending } = useFetch('http://localhost:8000/books');
    const [booksData, setBooksData] = useState([]);
    const [authorName, setAuthorName] = useState('');
    const [title, setTitle] = useState('');
    const [startP, setStartP] = useState(0);
    const [startE, setStartE] = useState(9999);

    const processToRules = (response) => {
        const updatedBooks = [];
        response.forEach((book) => {
            if (title === '' || book.title.toUpperCase() === title.toUpperCase()) {
                if (authorName === '' || book.author.toUpperCase() === authorName.toUpperCase()) {
                    if (startP <= book.yop) {
                        if (startE >= book.yop) {
                            updatedBooks.push(book);
                        }
                    }
                }
            }
        })
        return updatedBooks;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/books`)
            .then(data => data.json())
            .then(response => {
                setBooksData(processToRules(response));
            });

    }

    const deleteItem = (id) => {
        fetch(`http://localhost:8000/books/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch('http://localhost:8000/books')
                .then((data) => data.json())
                .then((response) => setBooksData(processToRules(response))))
    }

    const updateTable = () => {
        fetch('http://localhost:8000/books')
            .then((data) => data.json())
            .then((response) => setBooksData(processToRules(response)));
    }

    useEffect(() => {
        setBooksData(data);
    }, [data])

    return (
        <div>
            <div className="search-bar-container">
                <form onSubmit={handleSearch}>
                    <div className="search-form">
                        <div className="search-form-box">
                            <label htmlFor="authorName">Author Name: </label>
                            <input type="text" id="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                        </div>
                        <div className="search-form-box">
                            <label htmlFor="startP">Year of Publication Start: </label>
                            <input type="number" id="startP" value={startP} onChange={(e) => setStartP(e.target.value)} />
                        </div>
                        <div className="search-form-box">
                            <label htmlFor="startE">Year of Publication End: </label>
                            <input type="number" id="startE" value={startE} onChange={(e) => setStartE(e.target.value)} />
                        </div>
                        <div className="search-form-box">
                            <label htmlFor="title">Title: </label>
                            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                    </div>
                    <div className="search-button-container">
                        <div>
                            <button className="search-button">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container-2">
                {isPending && <h2>Loading...</h2>}
                {!isPending &&
                    <table className="book-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author Name</th>
                                <th>Year of Publication</th>
                                <th>Available Copies</th>
                                {usertype === 'admin' && <th>Delete Record</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {booksData.map((book) => <ListBook book={book} user={usertype} key={book.id} deleteItem={deleteItem} updateTable={updateTable} />)}
                        </tbody>
                    </table>
                }
            </div >
        </div >
    );
}

export default SearchLanding;