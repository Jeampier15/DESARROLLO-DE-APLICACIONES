from reflex import Reflex, html
from components.book_detail import BookDetail

def Home(books):
    def render_books():
        return [
            html.div({"class": "book-item"}, [
                html.h3(book["title"]),
                html.p(f"Autor: {book['author']}"),
                html.p(f"Precio: ${book['price']}"),
                html.a("Ver Detalles", href=f"/book/{book['id']}"),
            ]) for book in books
        ]

    return html.div({"class": "book-list"}, [
        html.h2("Libros Disponibles"),
        *render_books()
    ])
