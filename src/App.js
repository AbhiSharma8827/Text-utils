import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
   const[mode, setmode]=useState('light');

   const toggleMode=()=>{
        if(mode==='dark'){
          setmode('light');
          document.body.style.backgroundColor="white";
        }
        else{
          setmode('dark');
          document.body.style.backgroundColor="grey";
        }
   }
  return (
    <>
  <Navbar title="Textutils" mode={mode}  toggleMode={toggleMode}/>
  <div className="container my-3"></div>
    <Textform heading="Enter the text to analyze" mode={mode}/>
    {/* <About/> */}
    </>

  );
}

export default App;
