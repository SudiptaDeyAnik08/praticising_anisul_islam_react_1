import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const a = "Hi this is Sudipta";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
 <div>
   <h2>Hi</h2>
   <h1>{a}</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vitae.</p>
   <p>3/18/2023</p>
 </div>
  
);
