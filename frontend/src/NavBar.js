import "./styling/NavBar.css"
import React, {useState, useEffect} from 'react'
export default function Navbar () {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("userID"));

    useEffect(() => {
      setIsLoggedIn(localStorage.getItem("userID"));
    }, []);
  
    if (isLoggedIn){ // logged in
        return (
            <nav className="topnav">
                <a href="/">Home</a>
                <a href="/register">Register</a>
                <a href="/logout">Logout</a>
            </nav>
        );     
    }
    else{
        return (
            <nav className="topnav">
                <a href="/">Home</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </nav>
        );     
    }
  };
