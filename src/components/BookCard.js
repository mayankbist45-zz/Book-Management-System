const BookCard = (props) => {
    const { title, yop, author, availableCopies } = props.book;
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
                <button className="button-buy">Issue this book</button>
            </div>
        </div>
    );
}

export default BookCard;