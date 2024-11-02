import React, { useState, useEffect } from 'react';

function BookForm({ addBook, updateBook, existingBook }) {
    const [book, setBook] = useState({
        title: '',
        author: '',
        price: '',
    });

    useEffect(() => {
        if (existingBook) {
            setBook(existingBook);
        }
    }, [existingBook]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (book.title && book.author && book.price) {
            if (existingBook) {
                updateBook(book);
            } else {
                addBook(book);
            }
            setBook({ title: '', author: '', price: '' });
        }
    };

    return (
        <div className="book-form">
            <h2>{existingBook ? 'Editar Libro' : 'Agregar Libro'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Título:
                    <input
                        type="text"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Autor:
                    <input
                        type="text"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Precio:
                    <input
                        type="number"
                        name="price"
                        value={book.price}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">{existingBook ? 'Actualizar' : 'Agregar'}</button>
            </form>
        </div>
    );
}

export default BookForm;
