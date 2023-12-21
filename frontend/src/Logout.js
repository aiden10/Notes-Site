import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';


const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userID");
        navigate("/");
        
    };
    useEffect( () => {
        handleLogout();
    }, []);

    return(
        <div id="logout">
            <h2>Logging out...</h2>
        </div>
    )
};

export default Logout;