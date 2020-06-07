import React from 'react';



function First(){

    return(
       
       <div className="ac" style={{backgroundColor:"lightgray", height:"80px", width:"20%",marginLeft:"100px", borderRight:"1px solid gray"}}>
       <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>AC</h1>
      </div>
      <div className="plus-minus" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderRight:"1px solid gray"}}>
       <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>+/-</h1>
      </div>
      <div className="percentage" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderRight:"1px solid gray"}}>
       <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>%</h1>
      </div>
      <div className="plus" style={{backgroundColor:"orange", height:"80px", width:"20%"}}>
       <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>+</h1>
      </div>

    );
}

export default First;