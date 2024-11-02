import React from 'react';
import { Link } from 'react-router-dom';

function Home({ books }) {
    return (
        <div className="book-list">
            <h2>Libros Disponibles</h2>
            {books.map(book => (
                <div key={book.id} className="book-item">
                    <h3>{book.title}</h3>
                    <p>Autor: {book.author}</p>
                    <p>Precio: ${book.price}</p>
                    <Link to={`/book/${book.id}`} className="details-link">Ver Detalles</Link>
                </div>
            ))}
        </div>
    );
}

export default Home;
