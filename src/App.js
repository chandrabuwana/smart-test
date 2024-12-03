import React,{useState} from "react";
import "./index.css";

export default function App() {
const [inputVal, setInputVal] = useState('');
const [result, setResult] = useState(0);

function handleInput(e) {
  const value = e.target.value;
  if (value === '' || value.split('').every(input => input >= '0' && input <= '9')) {
    setInputVal(value);
  }
}

function handleSubmit() {
  const oriNum = parseInt(inputVal, 10);
  const reverseNum = parseInt(inputVal.split("").reverse().join(""), 10);
  const calc = Math.abs(oriNum - reverseNum);

  setResult(calc);
}

  return (
    <div className="App">
      <div>
        Number: <input onChange={handleInput} value={inputVal}/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
