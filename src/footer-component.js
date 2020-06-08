import React from 'react';


function Footer(props){

    return(
        <div className="ac" style={{backgroundColor:"lightgray", height:"80px", width:"40.01%",marginLeft:"100px", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}>
        <h1 style={{color:"black", textAlign:"center",marginTop:"10px"}}>{props.double}</h1>
      </div>
    );
}

export default Footer;