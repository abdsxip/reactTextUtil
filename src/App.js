import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

//  import { BrowserRouter as Router, Routes,Switch, Route, Link } from 'react-router-dom';

function App() {

  const [mode,setMode]  = useState('light');
  const [alert,setAlert] = useState('');

const showAlert = (message,type) =>{
      setAlert( {
        msg  : message,
        type : type
      })
      setTimeout(() => {
         setAlert('');
      }, 5000);
}

  const toggleMode = () =>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#126180';
      showAlert("Dark Mode is Enabled","success");
      document.title = "TextUtil - DarkMode";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is Enabled","success");
      document.title = "TextUtil - LightMode";
    }
  }
   
  return (
    <>   
          <Navbar title="TextUtils" about="About Utils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert} />
    <Router>
          <Routes>
                <Route path="/" element={ <div className="container mb-3">  <TextForm showAlert={showAlert} heading="Please Enter something to Validate" mode={mode}/> </div>} />
          </Routes>
          <Routes>
                <Route path="/About" element={ <About/>} />
          </Routes>
    </Router>
    </>
  );  }

export default App;