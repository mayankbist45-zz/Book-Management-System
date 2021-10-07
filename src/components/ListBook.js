const ListBook = (props) => {
    const { book, user } = props;

    const handleDelete = () => {
        props.deleteItem(book.id);
    }

    const handleIncrease = () => {
        book.availableCopies = book.availableCopies + 1;
        fetch('http://localhost:8000/books/' + book.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        }).then(props.updateTable);
    }

    const handleDecrease = () => {
        book.availableCopies = Math.max(0, book.availableCopies - 1);
        if (book.availableCopies === 0) {
            fetch('http://localhost:8000/books/' + book.id, {
                method: "DELETE",
            }).then(props.updateTable);
        }
        else {
            fetch('http://localhost:8000/books/' + book.id, {
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
        </tr>
    );
}

export default ListBook;