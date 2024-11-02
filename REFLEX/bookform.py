from reflex import Reflex, html, use_state

def BookForm(add_book=None, update_book=None, book=None):
    title = use_state(book["title"] if book else "")
    author = use_state(book["author"] if book else "")
    price = use_state(book["price"] if book else "")

    def submit():
        if book:
            update_book({"id": book["id"], "title": title, "author": author, "price": price})
        else:
            add_book({"title": title, "author": author, "price": price})

    return html.form({"class": "book-form"}, [
        html.label("Título"),
        html.input(type="text", value=title, on_change=title.set),

        html.label("Autor"),
        html.input(type="text", value=author, on_change=author.set),

        html.label("Precio"),
        html.input(type="number", value=price, on_change=price.set),

        html.button("Guardar", on_click=submit)
    ])
