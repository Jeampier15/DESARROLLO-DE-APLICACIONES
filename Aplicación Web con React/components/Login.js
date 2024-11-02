import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <h2>Iniciar Sesión</h2>
            <form>
                <label>
                    Usuario:
                    <input type="text" name="username" />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Ingresar</button>
            </form>
            <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </div>
    );
}

export default Login;
