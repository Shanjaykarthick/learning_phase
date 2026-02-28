import React from "react";
import { useState } from "react";
import './Counter1.css';

const Counter =() =>
{
    
    const[str,setStr]=useState(1);
    const [furniture,setFurniture]=useState({
        name: "chair",
        screw:100,
        wheels:50,
        seat:50,
        available:true,
        price:1000
    })

    console.log(furniture)
    function changeName(){
        setFurniture({
            ...furniture,
            wheels:100
        })
    }

    return(
        <center>
        <div className="">
            <h1> hi {str} </h1>
            <button className="btn-Counter" onClick={changeName}>click</button>
            
            </div>
        </center>

    );
}

export default Counter;


