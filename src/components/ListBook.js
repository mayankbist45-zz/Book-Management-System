const { REACT_APP_URL } = process.env;

const ListBook = (props) => {
    const { book, user } = props;

    const handleDelete = () => {
        props.deleteItem(book._id);
    }

    const handleIncrease = () => {
        fetch(`${REACT_APP_URL}/increaseBookCopies?id=${book._id}`, { method: "PUT" }).then(props.updateTable);
    }

    const issueBook = () => {
        fetch(`${REACT_APP_URL}/issueBook?id=${book._id}`, { method: "PUT" }).then(props.updateTable);
    }

    const handleDecrease = () => {
        fetch(`${REACT_APP_URL}/decreaseBookCopies?id=${book._id}`, { method: "PUT" }).then(props.updateTable);
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