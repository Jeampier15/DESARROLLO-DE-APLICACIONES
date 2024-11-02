from reflex import Reflex, html, use_state

def Cart():
    cart_items = use_state([])

    def add_to_cart(book):
        cart_items.update(cart_items + [book])

    return html.div({"class": "cart"}, [
        html.h2("Carrito de Compras"),
        *[html.div({"class": "cart-item"}, [
            html.h3(item["title"]),
            html.p(f"Autor: {item['author']}"),
            html.p(f"Precio: ${item['price']}"),
        ]) for item in cart_items],
        html.a("Regresar a la tienda", href="/")
    ])
