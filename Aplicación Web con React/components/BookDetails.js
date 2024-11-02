import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../utils/Cart';

function BookDetails({ books }) {
    const { id } = useParams();
    const book = books.find(b => b.id === parseInt(id));
    const { addToCart } = useCart();

    if (!book) return <p>Libro no encontrado.</p>;

    return (
        <div className="book-details">
            <h2>{book.title}</h2>
            <p>Autor: {book.author}</p>
            <p>Precio: ${book.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(book)}>Añadir al Carrito</button>
        </div>
    );
}

export default BookDetails;
