import React, { useState } from 'react';
import './Login.css'; // Assuming you have some basic styles
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Hardcoded credentials for testing
    const hardcodedCredentials = {
        admin: {
            email: 'admin@example.com',
            password: 'admin123',
            role: 'admin',
        },
        client: {
            email: 'client@example.com',
            password: 'client123',
            role: 'client',
        },
    };

    // Function to handle login
    const handleLogin = (e) => {
        e.preventDefault();

        // Check hardcoded credentials
        if (email === "admin@tvh.com" && password === "Admin@123") {
            localStorage.setItem('userRole', hardcodedCredentials.admin.role);
            navigate('/adminDash');
        } else if (email === "client@tvh.com" && password === "Client@123") {
            localStorage.setItem('userRole', hardcodedCredentials.client.role);
            navigate('/clientDash');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
