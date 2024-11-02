// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart'; // Verifica que la ruta sea correcta
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import BookForm from './components/BookForm';
import booksData from './data/booksData';
import { CartProvider } from './utils/Cart'; // Verifica que la ruta sea correcta

function App() {
    const [books, setBooks] = useState(booksData);

    const addBook = (newBook) => {
        setBooks([...books, { id: books.length + 1, ...newBook }]);
    };

    const updateBook = (updatedBook) => {
        setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    };

    return (
        <Router>
            <CartProvider>
                <div className="App">
                    <header>
                        <h1>LibroHub</h1>
                        <nav>
                            <Link to="/">Inicio</Link>
                            <Link to="/cart">Carrito</Link>
                            <Link to="/login">Iniciar Sesión</Link>
                        </nav>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home books={books} />} />
                            <Route path="/book/:id" element={<BookDetails books={books} />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/dashboard" element={<UserDashboard />} />
                            <Route path="/add-book" element={<BookForm addBook={addBook} />} />
                            <Route path="/edit-book/:id" element={<BookForm books={books} updateBook={updateBook} />} />
                        </Routes>
                    </main>
                </div>
            </CartProvider>
        </Router>
    );
}

export default App;
