import React , {useState} from 'react'

export default function Textform(props) {

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const handleUpClick=()=>{
    console.log('click on upperCase')
    let newText = text.toUpperCase();
     setText(newText)
  }
  const handleLowClick=()=>{
    setText(text.toLowerCase())
  }
  
  const handleCapitalClick=()=>{
      let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
      setText(newText);
  }
   
  const handleReplace = ()=>{
    let replace = prompt("Which word You Want To Replace?");
    let replaceWith = prompt("Replace With?");
    let newText = text.replaceAll(replace, replaceWith);
    setText(newText)
 }
 const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}



  const [text,setText]=useState('Enter text here')
  return (
    <div className='container mt-4 pt-4'>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea value={text} onChange={handleOnChange} className="form-control h-50" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary m-2' onClick={handleUpClick}>UpperCase</button>
        <button className='btn btn-primary m-2' onClick={handleLowClick}>LowerCase</button>
        <button className='btn btn-primary m-2' onClick={speak}>Speak</button>
        <button className='btn btn-primary m-2' onClick={handleCapitalClick}>Capital</button>
        <button className='btn btn-primary m-2' onClick={handleReplace}>Replace</button>
        <div className='container my-3'>
          <h3>Your Summary</h3>
          <p>{text.split(' ').length} words and {text.length} characters in your paragraph</p>
        </div>
    </div>
  )
}
