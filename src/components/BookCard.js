const { REACT_APP_URL } = process.env;

const BookCard = (props) => {
    const { title, yop, author, availableCopies } = props.book;
    const book = props.book;

    const issueBook = () => {
        fetch(`${REACT_APP_URL}/issueBook?id=${book._id}`, { method: "PUT" })
            .then(props.updateBooks);
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