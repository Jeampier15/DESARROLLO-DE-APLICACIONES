import React, { useState } from 'react';
import LinkedList from './LinkedList';

const CrudApp = () => {
    const [list] = useState(new LinkedList());
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ id: '', name: '', email: '' });
    const [editing, setEditing] = useState(false);

    // Crear usuario
    const handleAddUser = () => {
        const newUser = { id: Date.now().toString(), ...form };
        list.add(newUser);
        setUsers(list.getAll());
        setForm({ id: '', name: '', email: '' });
    };

    // Leer usuarios
    const handleEditUser = (id) => {
        const user = list.find(id);
        if (user) {
            setForm(user.data);
            setEditing(true);
        }
    };

    // Actualizar usuario
    const handleUpdateUser = () => {
        list.update(form.id, form);
        setUsers(list.getAll());
        setForm({ id: '', name: '', email: '' });
        setEditing(false);
    };

    // Eliminar usuario
    const handleDeleteUser = (id) => {
        list.delete(id);
        setUsers(list.getAll());
    };

    return (
        <div>
            <h2>CRUD con Lista Enlazada</h2>
            <div>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {editing ? (
                    <button onClick={handleUpdateUser}>Actualizar</button>
                ) : (
                    <button onClick={handleAddUser}>Agregar</button>
                )}
            </div>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <button onClick={() => handleEditUser(user.id)}>Editar</button>
                        <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CrudApp;
