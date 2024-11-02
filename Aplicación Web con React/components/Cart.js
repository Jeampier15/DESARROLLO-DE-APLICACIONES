// src/components/Cart.js
import React, { useState } from 'react';
import { useCart } from '../utils/Cart'; // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItems, removeFromCart, updateCartQuantity } = useCart();
    const [editMode, setEditMode] = useState({}); // Para controlar el modo de edición de cada producto

    const handleModifyClick = (id) => {
        setEditMode(prev => ({ ...prev, [id]: true })); // Activa el modo de edición para el producto
    };

    const handleFinishEdit = (id) => {
        setEditMode(prev => ({ ...prev, [id]: false })); // Desactiva el modo de edición
    };

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>Precio: ${item.price}</p>
                            {editMode[item.id] ? (
                                <div>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => updateCartQuantity(item.id, e.target.value)}
                                    />
                                    <button onClick={() => handleFinishEdit(item.id)}>Listo</button>
                                    <button onClick={() => removeFromCart(item.id)}>Eliminar Producto</button>
                                </div>
                            ) : (
                                <button onClick={() => handleModifyClick(item.id)}>Modificar Producto</button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/">
                <button>Seguir Agregando Productos</button>
            </Link>
        </div>
    );
}

export default Cart;
