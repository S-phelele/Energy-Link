import React from "react";
import { useNavigate } from "react-router-dom";
function Application() {

    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/');
    }

    return(
        <div className="reg-container">
            <div className="content-box">
                <div id="reg-title"><h2>Register</h2></div>
                <form>
                    <div className="form-group2">
                        <input type="text" id="firstName" placeholder="Enter your First Name" required />
                        <input type="text" id="lastName" placeholder="Enter your Last `Name" required />
                    </div>

                    <div className="form-group1">
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group1">
                        <input type="password" id="password" placeholder="Enter a password" required />
                    </div>

                    <div className="form-group1">
                        <input type="password" id="password" placeholder="Confirm password" required />
                    </div>

                    

                    <div id="reg-btn">
                    <button className="register-btn" onClick={handleRegister}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Application;
