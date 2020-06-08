import React from 'react';
import Screen from './screen-component';
import Cal1 from './cal1-component';
import Cal2 from './cal2-component';
import Cal3 from './cal3-component';
import Cal4 from './cal4-component';
import Rows from './rows-component';
import Last from './last-component';
import Footer from './footer-component';

function Cal() {
  return (
    <div className="Cal main-container">
      <Screen/>
       <div className="row first" style={{display:"flex", fontFamily:"Sans Serif"}}>
         <Cal1/>
         <Cal2/>
         <Cal3/>
         <Cal4/>
      </div>
      <div className="row second" style={{display:"flex", fontFamily:"Sans Serif", marginLeft:"100px", width:"100%"}}>
         <Rows calc='7'/>
         <Rows calc='8'/>
         <Rows calc='9'/>
          <Last end='×'/>
         </div>

         <div className="row third" style={{display:"flex", fontFamily:"Sans Serif", marginLeft:"100px", width:"100%"}}>
         <Rows calc='4'/>
         <Rows calc='5'/>
         <Rows calc='6'/>
         <Last end='-'/>
         </div>

         <div className="row fourth" style={{display:"flex", fontFamily:"Sans Serif", marginLeft:"100px", width:"100%"}}>
         <Rows calc='1'/>
         <Rows calc='2'/>
         <Rows calc='3'/>
         <Last end='+'/>
         </div>
         <div className="row five" style={{display:"flex", fontFamily:"Sans Serif"}}>
         <Footer double='0'/>
         <Rows calc='.'/>
         <Last end='='/>
         </div>
      
    </div>
  );
}

export default Cal;
