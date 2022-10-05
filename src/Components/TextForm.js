import React,{useState} from 'react'

export default function TextForm(props) {

const [text,setText] = useState('');

const handleOnChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
    // props.showAlert("Changed","success");
}

const  handleOnClick = () =>{
    console.log("Clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to Upper Case","success");
};

const  handleOnLowerClick = () =>{
    console.log("Clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to Lower Case","success");
};

const  handleOnClearText = () =>{
    console.log("Text cleared" +text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success");
};

const  handleCopyText = () =>{
     var textSelect = document.getElementById('myBox');
     textSelect.select();
     navigator.clipboard.writeText(textSelect.value);
     props.showAlert("Text Copied","success");
};

  return (
    <>
      <div className='Container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
            <textarea   className='form-control mb-3' value={text} onChange={handleOnChange} 
            style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"> </textarea>
            <button className="btn btn-primary mx-2" onClick={handleOnClick}> Conver To Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleOnLowerClick}>Conver To Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleOnClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            </div>
     </div>
     <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summart</h1>
        <p> words Count : {text.split(" ").length} and CharacterCount :- {text.length}</p>
        <p> Time need to Read above text :- {0.008 * text.split(" ").length}</p>
        <h1>Summary</h1>
        <p>{text}</p>
     </div>
     </>
  )
}