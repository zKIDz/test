import logo from './logo.svg';
import './App.css';
import userlist from './user.json'
import movielist from './movie.json'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Details from './Components/Details';
import Admin from './Components/Admin';
import SignupPage from './Components/SignupPage';
import Test from './Components/test';
export const UserContent = createContext();
function App() {
  localStorage.setItem("listuser",JSON.stringify(userlist))
  localStorage.setItem("listmovie",JSON.stringify(movielist))
  return (
			<Router>
				<div className="App">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
            			<Route path="/detail" element={<Details />} />
						<Route path="/admin" element={<Admin />} />
						<Route path="/register" element={<SignupPage />} />
						<Route path='/test' element={<Test/>}/>
					</Routes>
				</div>
			</Router>
  );
}

export default App;
