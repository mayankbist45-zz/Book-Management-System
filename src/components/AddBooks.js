import { useState } from "react";

const AddBooks = () => {
    const [authorName, setAuthorName] = useState('');
    const [title, setTitle] = useState('');
    const [yop, setYop] = useState('');
    const [availableCopies, setAvailableCopies] = useState('');
    const [recordAdded, setRecordAdded] = useState(false);

    const addRecord = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ author: authorName, title, yop, availableCopies, timesBought: 0 })
        }).then(() => {
            setRecordAdded(true)
            setTimeout(() => setRecordAdded(false), 1000)
        })
    };

    return (
        <div className="add-form">
            <div className="form-container">
                <div>
                    <h1>Enter the Details of New Record</h1>
                </div>
                <form onSubmit={addRecord}>
                    <div className="form-content">
                        <div>
                            <input type="text" placeholder="Author Name" required value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" placeholder="Title " required value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <input type="number" placeholder="Year Of Publication" required value={yop} onChange={(e) => setYop(e.target.value)} />
                        </div>
                        <div>
                            <input type="number" placeholder="Available Copies" required value={availableCopies} onChange={(e) => setAvailableCopies(e.target.value)} />
                        </div>
                        <div>
                            <button type='submit' onClick={addRecord}>Add Record</button>
                        </div>
                    </div>
                </form>
                {recordAdded && <h1 className="record-add">Record Added</h1>}
            </div>
        </div>
    );
}

export default AddBooks;