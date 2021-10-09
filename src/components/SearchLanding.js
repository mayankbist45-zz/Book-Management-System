import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../Hooks/useFetch";
import ListBook from "./ListBook";

const { REACT_APP_URL } = process.env;

const SearchLanding = () => {
    const { usertype } = useParams();
    const { data, isPending } = useFetch(REACT_APP_URL);
    const [booksData, setBooksData] = useState([]);
    const [authorName, setAuthorName] = useState('');
    const [title, setTitle] = useState('');
    const [startP, setStartP] = useState('');
    const [startE, setStartE] = useState('');

    const generateUrl = () => {
        // use axios later 
        return `${REACT_APP_URL}/search?authorName=${authorName}&title=${title}&startP=${startP === '' ? 0 : startP}&startE=${startE === '' ? Number.MAX_SAFE_INTEGER : startE}`;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        updateTable();
    }

    const deleteItem = (id) => {
        fetch(REACT_APP_URL + `/${id}`, {
            method: "DELETE"
        }).then(updateTable);
    }

    const updateTable = () => {
        fetch(generateUrl())
            .then((data) => data.json())
            .then((response) => {
                console.log(response);
                setBooksData(response)
            });
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
                                {usertype === 'user' && <th>Issue Book</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {booksData.map((book) => <ListBook book={book} user={usertype} key={book._id} deleteItem={deleteItem} updateTable={updateTable} />)}
                        </tbody>
                    </table>
                }
            </div >
        </div >
    );
}

export default SearchLanding;