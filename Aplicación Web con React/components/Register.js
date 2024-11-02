import React from 'react';

function Register() {
    return (
        <div className="register">
            <h2>Registro</h2>
            <form>
                <label>
                    Nombre de Usuario:
                    <input type="text" name="username" />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="password" />
                </label>
                <label>
                    Confirmar Contraseña:
                    <input type="password" name="confirmPassword" />
                </label>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Register;
