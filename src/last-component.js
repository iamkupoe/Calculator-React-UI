import React from 'react';


function Last(props){

    return(
        <div className="plus" style={{backgroundColor:"orange", height:"80px", width:"20%", borderBottom:"1px solid gray"}}>
           <h1 style={{color:"white", textAlign:"center",marginTop:"10px"}}>{props.end}</h1>
         </div>
    );
}


export default Last;