import React, { useState } from 'react'
import css from './com.css';
export default function Button() {
 const [text, setText] = useState();
 const handleClick = (event)=>{
     console.log("it is clicked");
     setText(event.target.value);
 }
 const toUppercase = ()=>{
     console.log("uppercase was clicked");
     let newtext = text.toUpperCase();
     setText(newtext);
 }
 const toLowercase = () =>{
     console.log("lowercase was clicked");
     let ntext = text.toLowerCase();
     setText(ntext);
    
 }
 const Cleartext = () =>{
     let cleartext = ("");
     setText(cleartext);
 }
 function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizeEveryWord(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
const everyfirstlettercapital = () =>{
    let i = capitalizeEveryWord(text);
    setText(i);
}
 const firstletteruppercase = () =>{
     
        let j = capitalizeFirstLetter(text);
        setText(j);
     
 }
const Removewhitespaces = () =>{
    let a = text.trim();
    setText(a);
}
const replaceAllwords = () =>{
    let a  = prompt("Please enter character")
    let b = prompt("enter second character");
    let c = text.replaceAll(a, b);
    setText(c);
}
const replaceOnewords = () =>{
    let a  = prompt("Please enter character")
    let b = prompt("enter second character");
    let c = text.replace(a, b);
    setText(c);
}
  return (
    <div>
        <div>
      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter text here"cols="30" rows="10" value={text} onChange={handleClick}></textarea>
      
      <button className='btn btn-success mx-3' value={text} onClick={toUppercase}>toUppercase</button>
      <button className='btn btn-success mx-3' value={text} onClick={firstletteruppercase}>toFirstletteruppercase</button>
      <button className='btn btn-success mx-3' value={text} onClick={everyfirstlettercapital}>everyLettercapital</button>
      <button className='btn btn-success mx-3' value={text} onClick={toLowercase}>toLowercasecase</button>
      <button className='btn btn-success mx-3' value={text} onClick={replaceAllwords}>ReplaceAllwords</button>
      <button className='btn btn-success mx-3' value={text} onClick={Removewhitespaces}>Removewhitespaces</button>
      <button className='btn btn-success mx-3' value={text} onClick={replaceOnewords}>Replaceoneword</button>
      <button className='btn btn-success my-3' value={text} onClick={Cleartext}>Clear</button>
      </div>
      <div className="container">
          <h1>Preview</h1>
          <p>{text}</p>
      </div>
    </div>
  )
}
