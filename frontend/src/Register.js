import React from 'react';
import "./styling/Register.css"

const handleRegister = async (event) => {
  event.preventDefault();
  const email = event.target[0].value;
  const password = event.target[1].value;

  try {
    const response = await fetch('http://127.0.0.1:8000/users/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data); 
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

const Register = () => {
  return (
    <div className="register-page">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
            <div id='container'>
                <div id='email-field'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" maxLength="100" required/>
                </div>

                <div id="password-field">
                    <label htmlFor="password">Password (5 characters minimum):</label>
                    <input type ="password" name="password" id="password" minlength="5" maxLength="50" required/>
                </div>

                <div>
                    <button type="submit" id='register-button'>Register</button>
                </div>
            </div>
        </form>
    </div>
  );
};

export default Register;
