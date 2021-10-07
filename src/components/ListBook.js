const { REACT_APP_URL } = process.env;

const ListBook = (props) => {
    const { book, user } = props;

    const handleDelete = () => {
        props.deleteItem(book._id);
    }
    const handleIncrease = () => {
        book.availableCopies = book.availableCopies + 1;
        fetch(REACT_APP_URL + '/' + book._id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        }).then(props.updateTable);
    }

    const issueBook = () => {
        book.timesBought++;
        handleDecrease();
        props.updateTable();
    }

    const handleDecrease = () => {
        book.availableCopies = Math.max(0, book.availableCopies - 1);
        if (book.availableCopies === 0) {
            fetch(REACT_APP_URL + '/' + book._id, {
                method: "DELETE",
            }).then(props.updateTable);
        }
        else {
            fetch(REACT_APP_URL + '/' + book._id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(book)
            }).then(props.updateTable);
        }
    }

    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.yop}</td>
            <td>
                <div className="table-row-copy">
                    {user === 'admin' && <button onClick={handleDecrease}><i className="fas fa-minus"></i></button>}
                    {book.availableCopies}
                    {user === 'admin' && <button onClick={handleIncrease}><i className="fas fa-plus"></i></button>}
                </div>
            </td>
            {user === 'admin' && <td><button className="delete-record-button" onClick={handleDelete}>Delete</button></td>}
            {user === 'user' && <td><button className="delete-record-button" onClick={issueBook}>Issue Book</button></td>}
        </tr>
    );
}

export default ListBook;