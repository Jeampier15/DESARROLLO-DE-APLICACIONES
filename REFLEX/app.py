from reflex import Reflex, Router, use_state
from components.home import Home
from components.book_detail import BookDetail
from components.cart import Cart
from components.login import Login
from components.register import Register
from components.book_form import BookForm
from utils.cart import CartProvider

app = Reflex()

def main():
    books = use_state([
        {"id": 1, "title": "1984", "author": "George Orwell", "price": 15.99},
        {"id": 2, "title": "El Principito", "author": "Antoine de Saint-Exupéry", "price": 10.99},
        {"id": 3, "title": "Cien Años de Soledad", "author": "Gabriel García Márquez", "price": 20.00},
    ])

    def add_book(new_book):
        books.update(books + [new_book])

    def update_book(updated_book):
        books.update([
            book if book['id'] != updated_book['id'] else updated_book for book in books
        ])

    app.use_router(
        Router([
            ("/", Home, {"books": books}),
            ("/book/<id>", BookDetail, {"books": books}),
            ("/cart", Cart, {}),
            ("/login", Login, {}),
            ("/register", Register, {}),
            ("/add-book", BookForm, {"add_book": add_book}),
            ("/edit-book/<id>", BookForm, {"books": books, "update_book": update_book}),
        ])
    )

    app.start()

if _name_ == "_main_":
    main()
