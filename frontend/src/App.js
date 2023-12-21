import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./Register"
import Home from "./Home"
import Login from "./Login"
import NavBar from "./NavBar"
import Logout from "./Logout"

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element ={<Logout/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
