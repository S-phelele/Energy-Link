import React, { useState } from "react";
import '../Register/user.css';
import { useNavigate } from "react-router-dom";

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const passwordCriteria = [
            password.length >= 8, // Minimum length of 8
            /[A-Z]/.test(password), // At least one uppercase letter
            /[a-z]/.test(password), // At least one lowercase letter
            /\d/.test(password), // At least one number
            /[!@#$%^&*]/.test(password), // At least one special character
        ];

        const criteriaMet = passwordCriteria.filter(Boolean).length;

        if (criteriaMet < 5) {
            setPasswordValidation('Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.');
        } else {
            setPasswordValidation('');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        // Validate password strength
        if (passwordValidation) {
            setError(passwordValidation);
            return;
        }

        // Clear any errors and proceed to navigate
        setError('');
        
        // Optionally, you can handle further registration logic here like an API call
        
        // Navigate to homepage on successful registration
        navigate('/login');
    }

    return (
        <div className="reg-container">
            <div className="content-box">
                <div id="reg-title"><h2>Sign UP</h2></div>
                <form onSubmit={handleRegister}>
                    <div className="form-group2">
                        <input 
                            type="text" 
                            id="firstName" 
                            placeholder="Enter your First Name" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required 
                        />
                        <input 
                            type="text" 
                            id="lastName" 
                            placeholder="Enter your Last Name" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group1">
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group1">
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter a password" 
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validatePassword(e.target.value); // Validate password on input
                            }}
                            required 
                        />
                    </div>

                    <div className="form-group1">
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            placeholder="Confirm password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}
                    {passwordValidation && <div className="error-message">{passwordValidation}</div>}

                    <div id="reg-btn">
                        <button className="register-btn" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
