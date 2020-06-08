import React from 'react';


function Rows(props){

    return(
        <div className="ac" style={{backgroundColor:"lightgray", height:"80px", width:"20%", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>{props.calc}</h1>
         </div>
    );
}

export default Rows;