import './App.css';
import { useState } from 'react';
function App() {
const [advice, setAdvice]= useState()

  const fetchAdvice = async () => {
   try{
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip.advice);
   }catch(err){
    console.error(err)
   }
  }


  return (
    <div className="app ">
    <div className="card">
        <p className="heading">{advice || "Click the button to generate random quotes"}</p>
        <button className="button" onClick={fetchAdvice}>
            <span>Generate quote</span>
        </button>
    </div>
</div>
  );
}

export default App;
