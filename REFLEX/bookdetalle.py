from reflex import Reflex, html

def BookDetail(books, id):
    book = next((book for book in books if book["id"] == int(id)), None)
    if not book:
        return html.p("Libro no encontrado")

    return html.div({"class": "book-detail"}, [
        html.h3(book["title"]),
        html.p(f"Autor: {book['author']}"),
        html.p(f"Precio: ${book['price']}"),
        html.a("Regresar", href="/"),
    ])
