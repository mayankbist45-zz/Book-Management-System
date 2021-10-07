const BookCard = (props) => {
    const { title, yop, author, availableCopies } = props.book;
    const book = props.book;

    const issueBook = () => {
        book.timesBought++;
        handleDecrease();
        props.updateBooks();
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
        <div className="book-container">
            <div className="book-heading">
                <h1>{title}</h1>
                <p>Written By : {author}</p>
            </div>
            <hr />
            <div className="book-details">
                <p className="text-mute">Year Of Publication: {yop}</p>
                <p className="text-mute"> Available Copies: {availableCopies}</p>
            </div>

            <div>
                <button className="button-buy" onClick={issueBook}>Issue this book</button>
            </div>
        </div>
    );
}

export default BookCard;