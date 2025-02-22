import React,{useState}from 'react';

export default function Textform(props) {

  const [text, setText]=useState("enter text here");
  
  const handleUpClick= ()=>{
    console.log("Uppercase was clicked" +text)
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick= ()=>{
    console.log("Lowercase was clicked" +text)
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClearClick= ()=>{
    
    let newText='';
    setText(newText)
  }

  const handleSpaces = () => {
    // Remove extra spaces
    let newText = text.split(/\s+/).filter(Boolean).join(' ');
    setText(newText);
  };

  const handleCopy = () => {
    var text=document.getElementById("mybox");
     text.select();
    navigator.clipboard.writeText(text.value);
    alert('Text copied !');
  }
   const handleOnChange=(event) =>{
     setText(event.target.value);
   }
     
  return (
    <>
  <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
  <button className=" btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className=" btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className=" btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
  <button className=" btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
  <button className=" btn btn-primary mx-1" onClick={handleSpaces}>Remove extra space</button>
</div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
        </>
  )
}

