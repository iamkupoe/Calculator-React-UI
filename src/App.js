import React from 'react';
import './App.css';
import Screen from './screen-component';

function Cal() {
  return (
    <div className="Cal main-container">
      <Screen/>
       <div className="row first" style={{display:"flex", fontFamily:"Sans Serif"}}>
         <div className="ac" style={{backgroundColor:"lightgray", height:"80px", width:"20%",marginLeft:"100px", borderRight:"1px solid gray",  borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px",}}>AC</h1>
         </div>
          <div className="plus-minus" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}>
            <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>+/-</h1>
          </div>
          <div className="percentage" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>%</h1>
          </div>
          <div className="plus" style={{backgroundColor:"orange", height:"80px", width:"20%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"white", textAlign:"center",marginTop:"10px"}}>÷</h1>
         </div>
      </div>
      <div className="row second" style={{display:"flex", fontFamily:"Sans Serif"}}>
         <div className="ac" style={{backgroundColor:"lightgray", height:"80px", width:"20%",marginLeft:"100px", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>7</h1>
         </div>
          <div className="plus-minus" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}>
            <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>8</h1>
          </div>
          <div className="percentage" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>9</h1>
          </div>
          <div className="plus" style={{backgroundColor:"orange", height:"80px", width:"20%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"white", textAlign:"center",marginTop:"10px"}}>×</h1>
         </div>
         </div>

         <div className="row third" style={{display:"flex", fontFamily:"Sans Serif"}}>
         <div className="ac" style={{backgroundColor:"lightgray", height:"80px", width:"20%",marginLeft:"100px", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>4</h1>
         </div>
          <div className="plus-minus" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}>
            <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>5</h1>
          </div>
          <div className="percentage" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>6</h1>
          </div>
          <div className="plus" style={{backgroundColor:"orange", height:"80px", width:"20%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"white", textAlign:"center",marginTop:"10px"}}>-</h1>
         </div>
         </div>

         <div className="row fourth" style={{display:"flex", fontFamily:"Sans Serif"}}>
         <div className="ac" style={{backgroundColor:"lightgray", height:"80px", width:"20%",marginLeft:"100px", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>1</h1>
         </div>
          <div className="plus-minus" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}>
            <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>2</h1>
          </div>
          <div className="percentage" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>3</h1>
          </div>
          <div className="plus" style={{backgroundColor:"orange", height:"80px", width:"20%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"white", textAlign:"center",marginTop:"10px"}}>+</h1>
         </div>
         </div>
         <div className="row five" style={{display:"flex", fontFamily:"Sans Serif"}}>
         <div className="ac" style={{backgroundColor:"lightgray", height:"80px", width:"40.01%",marginLeft:"100px", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>0</h1>
         </div>
          <div className="percentage" style={{backgroundColor:"lightgray", height:"80px", width:"20.1%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>.</h1>
          </div>
          <div className="plus" style={{backgroundColor:"orange", height:"80px", width:"20%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"white", textAlign:"center",marginTop:"10px"}}>=</h1>
         </div>
         </div>
      
    </div>
  );
}

export default Cal;
