import React from 'react'
import { useNavigate } from "react-router-dom";
import "./styling/Login.css"

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        try {
            const response = await fetch('http://127.0.0.1:8000/users/api/login/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            });
        
            if (response.ok) {
              const data = await response.json();
              if (data.Error){
                console.log("Failed to login")
              }
              else{
                console.log("Logged in")
                localStorage.setItem("userID", email)
                navigate("/");
                window.location.reload();
              }
            } 
            else {
              const errorData = await response.json();
              console.error(errorData); 
            }
          } 
          catch (error) {
            console.error('Error:', error);
          }
    };

    return (
      <div className="login-page">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div id='email-field'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" maxLength="100" required/>
          </div>
  
          <div id="password-field">
            <label htmlFor="password">Password (5 characters minimum):</label>
            <input type ="password" name="password" id="password" minlength="5" maxLength="50" required/>
          </div>
  
          <div>
            <button type="submit" id='login-button'>Login</button>
          </div>
        </form>

        <div id='error-text'>

        </div>

      </div>
    );
  };
  
  export default Login;
  