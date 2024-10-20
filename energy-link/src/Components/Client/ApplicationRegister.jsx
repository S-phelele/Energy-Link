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
                <div id="reg-title"><h2>Application</h2></div>
                <form>
                    <div className="form-group2">
                        <input type="text" id={"firstName" + "lastname"} placeholder="Enter your First Name and Surname" required />
                    </div>

                    <div className="form-group1">
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group1">
                        <input type="text" id="Contacts" placeholder="Enter your Contact No" required />
                    </div>

                    <div className="form-group1">
                        <input type="text" id="CompanyName" placeholder="Enter a Company Name" required />
                    </div>

                    <div className="form-group1">
                        <input type="text" id="CompanyNo" placeholder="CompanyNo" required />
                    </div>

                    <div className="form-group1">
                        <input type="text" id="P.O Box Address" placeholder="P.O. BOX " required />
                    </div>

                    <div className="form-group1">
                        <input type="text" id="City/Town" placeholder="City/Town " required />
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
