import './App.css';
import { useState } from 'react';
function App() {
  const [advice, setAdvice] = useState("");
  const [copied, setCopied] = useState(false);
  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
      setCopied(false);
    } catch (err) {
      console.error(err);
    }
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(advice);
    setCopied(true);
  };
  return (
    <div className="bg-[#0082c8] min-h-screen px-6 py-8 flex flex-col">
      
      <h1 className="text-white shadow-2xl text-center text-[2rem] font-bold mb-6 ">
        Random Advice Generator
      </h1>
      
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="w-full max-w-md p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-blue-900 font-bold text-[20px] text-center">
              {advice || "Click the button to generate random Advice"}
            </p>
          </div>
          {copied && (
            <p className="text-center mt-4 text-white font-semibold">
              Advice copied to clipboard!
            </p>
          )}
          <div className="flex justify-center gap-4 mt-6">
            <button
              className="bg-blue-900 py-3 px-5 rounded-lg text-white font-bold hover:bg-blue-800 transition focus:outline-none focus:ring focus:ring-blue-300"
              onClick={fetchAdvice}
            >
              Generate Advice
            </button>
            <button
              className={`bg-green-600 py-3 px-5 rounded-lg text-white font-bold hover:bg-green-500 transition focus:outline-none focus:ring focus:ring-green-300 ${!advice && 'opacity-50 cursor-not-allowed'}`}
              onClick={copyToClipboard}
              disabled={!advice}
            >
              Copy Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
