import React, { useState } from "react";
import './InputForm.styles.css'
import { useNavigate } from "react-router-dom";

const InputForm =()=>{
    const [searchFeild,SetsearchFeild] = useState('')
        const handlesearch =(e)=>{
         SetsearchFeild(e.target.value)
        }
const navigate= useNavigate()
const handlesearchbutton=()=>{
    if(searchFeild){

    navigate('/search',{state:searchFeild})
    }else{
        alert("please fill the search")
    }
      
  
}
    return(
        <div className="Input-Form">
            <input type="text"
             className="Input-container" 
             placeholder="Search Books"
             value={searchFeild}
             onChange={handlesearch}
             ></input>
            <button onClick={handlesearchbutton}  className="Form-btn">Search</button>
        </div>
        
    )
}

export default InputForm