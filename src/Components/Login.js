import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContent } from "../App";
const Login = () => {
    const [account, setAccount] = useState([]);
	const passRef = useRef();
	const nameRef = useRef();
	const navigate = useNavigate();
    let listuser=localStorage.getItem("listuser")?JSON.parse(localStorage.getItem("listuser")):[]
   let login=()=>{
        const username = nameRef.current.value;
		const password = passRef.current.value;
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
        if(some){
            navigate("/");
        }
       else navigate("/admin");
    }
        return(
            <>
            <div>
                <label>Username:</label>
                <input ref={nameRef} type="text" />
            </div>
            <div>
                <label>Password:</label>
                <input ref={passRef} type="password" />
            </div>
            <div><button type="submit" onClick={login}>Login</button></div>
            </>
        )
    }
    
export default Login;