import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContent } from "../App";
import "./style.css"
const Login = () => {
    const [account, setAccount] = useState([]);
	const passRef = useRef();
	const nameRef = useRef();
	const navigate = useNavigate();
    let listuser=localStorage.getItem("listuser")?JSON.parse(localStorage.getItem("listuser")):[]
   let login=()=>{
        const username = nameRef.current.value;
		const password = passRef.current.value;
        localStorage.setItem("accsessToken",true)
        if(!username || !password){
            return window.alert("Please enter all input");
        }
        const some = listuser.find(
			(item) => item?.username === username && item?.password === password
		);
        const some1 = listuser.find(
			(item) => item?.username === username && item?.password === password && item?.role === 1
		);
        if (!some &&!some1) {
			return window.alert("Username or password is not correct");
		}
        if(some && !some1){
            navigate("/");
            localStorage.setItem("accsessToken",false)
        }
       if(some1) {
        navigate("/admin");
       }
    }
        return(
            <>
            <div className="cover">
                <h1>Login</h1>
                <label>Username:</label>
                <input ref={nameRef} type="text" />
                <label>Password:</label>
                <input ref={passRef} type="password" />
                <div><button type="submit" onClick={login}>Login</button></div>
            </div>
            
            </>
        )
    }
    
export default Login;