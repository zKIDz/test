import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import userListJson from "../user.json"
const Details = (props) => {
    //user đăng nhập giả
    // const user0 = { name: "John", age: 30 ,userID:2};
    // localStorage.setItem("user", JSON.stringify(user0));
    let user=localStorage.getItem("user");
    const userList=userListJson;
    const {name,img,score,vote,description,category}=props.movies;
    
    const navigate=useNavigate();
    //state cho vote 
    const [votes,setVote]=useState([]);
    
    const [state,setState]=useState({
        values:{
            rate:"",
            comment:""
        },
        errors:{
            rate:"",
            comment:""
        }
    })
    useEffect(()=>{
        setVote([...vote])
    },[])
    const renderComment=()=>{
        return votes.map((userComment,index)=>{
            return <h5 key={index}>
                {userList.find(user=>user.userID==userComment.userID).username}:
                <span style={{fontWeight:"normal"}} >{userComment.comment}</span>
                </h5>
        })
    }
    const handleChange=(e)=>{
        let{value,name}=e.target;
        let newValues={...state.values};
        newValues={...newValues,[name]:value};
        let newErrors={...state.errors};
        if(value.trim()===""||(name=="rate"&&(value<0||value>10))){
            newErrors[name]=name + " không hợp lệ";
        }else{
            newErrors[name]=""
        }
        setState({
            ...state,
            values:newValues,
            errors:newErrors
        })
    }
    const handleClick=()=>{
        
        let {rate,comment}=state.values;
        if(!user){
            navigate("/login")
        }else{
            const newComment={
                vid:Math.random(),
                rate:rate,
                comment:comment,
                userID:JSON.parse(user).userID
            }
            setVote([
                ...votes,
                newComment
            ]);
            
        }
        
    }
    return(
        <div className="row px-5 py-3">
            <div className="col-4">
                <img style={{width:"100%",height:"800px"}}  src={img}/>
            </div>
            <div className="col-8 text-left">
                <h2 >{name}</h2>
                <h5>Thể loại:<span style={{fontWeight:"normal"}}>{category}</span></h5>
                <h5>Điểm đánh giá:<span style={{fontWeight:"normal"}} >{score}</span></h5>
                <h5>Mô tả:<span style={{fontWeight:"normal"}} >{description}</span></h5>
                {user?<form onChange={handleChange}>
                    <h3>Chi tiết đánh giá</h3>
                    <p>Điểm đánh giá:<input type="text" name="rate"/></p><p className="text-danger">{state.errors.rate}</p>
                    <p>Bình luận:</p>
                    <textarea name="comment" style={{width:"100%"}}/>
                    <p className="text-danger">{state.errors.comment}</p>
                </form>:""}
                <button className="btn btn-primary" onClick={()=>{handleClick()}}>Đánh giá</button>
                <hr style={{border:"1px solid grey"}} className="mb-5"/>
                <h3>Bình luận:</h3>
                
                {renderComment()}
            </div>
        </div>
    )
}
export default Details;