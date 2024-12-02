import React,{useState} from "react";
import "./index.css";

export default function App() {
const [inputValue, setInputValue] = useState('');
const [result, setResult] = useState(0);

function handleInput(e) {
  const value = e.target.value;
  setInputValue(value);
}

function handleSubmit() {
  const justNum = inputValue.split('').filter(char => char >= '0' && char <= '9').join('');
  const oriNum = parseInt(justNum, 10);
  const reverseNum = parseInt(justNum.split("").reverse().join(""), 10);
  const calc = Math.abs(oriNum - reverseNum);

  setResult(calc);
}

  return (
    <div className="App">
      <div>
        Number: <input onChange={handleInput} value={inputValue}/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
