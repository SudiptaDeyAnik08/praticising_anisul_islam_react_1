import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const a = "Hi this is Sudipta";

const currentYear = new Date().getFullYear();
const date1 = new Date().getDate();
const month = new Date().getMonth();
const DateName = new Date().getDate();
const MonthName = new Date().getMonth();
const CurrentYear1 = new Date().getFullYear();

const todoTitle = 'This is Family';
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum veritatis debitis officia dicta repudiandae! Quisquam cum sed molestias ea"


const root = ReactDOM.createRoot(document.getElementById('root'));



const HeadingStyle = {
  backgroundColor:'purple',
  color:"white",
  textAlign:'center',
  padding:'15px'
}

function Card(){
  return(
    <div className='card'>
    <h3 className='cardTitle'>{todoTitle}</h3>
    <p className='cardDes'>{todoDesc}</p>
    <p className='cardFooter'>{DateName + '/' + MonthName + '/' +CurrentYear1}</p>
   </div>
  )
}


root.render( 
 <div>
   <div>
      <h2 style={{color:'red',fontSize:'3rem'}}>Hi</h2>
      <h1 style={HeadingStyle}>{a}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vitae.</p>
      <p>{month}.{date1}.{currentYear}</p>
   </div>
  <hr />
   
   <Card></Card>
   <Card/>
   <Card></Card>
   <Card/>
  
 </div>
  
);
