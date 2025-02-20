import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isCalculated,setIsCalculated]=useState(false);

  const btns=['AC','DE','.','/','7','8','9','*','4','5','6','+','1','2','3','-','00','0','=']
  const handleClick=(value)=>{
if (value === '=') {
  if (!input || /[+\-*/]$/.test(input)) {
    setResult('Error:Incomplete Input');
    setInput("")
    return;
  }
  try {
    const calculatedResult=eval(input).toString();
    setResult(calculatedResult);
    setInput(calculatedResult);
    setIsCalculated(true);
  } catch (error) {
    setResult(error);
  }
  
}else if (value ==='AC' || input.length > 15) {
  setResult("");
  setInput("");
  setIsCalculated(false);

}else if (value ==='DE') {
  setInput(previnput=>previnput.slice(0,-1));
  setIsCalculated(false);
}else {
if (isCalculated) {
  setInput(result+value);
  setIsCalculated(false);
}else {
  setInput(previnput=>previnput + value);
}
}
  }

  return (
    <main className="flex justify-center items-center h-screen bg-gray-900">
    <div className="bg-white p-7 rounded-lg shadow-lg">
<div className="mb-4 bg-gray-900 py-2 px-4">
  <input
  type="text"
  value={input}
  readOnly
  className="w-full px-2 text-right text-4xl border-gray-300 rounded-lg text-gray-100"
   />
 <div className="text-right text-gray-400 text-xl mt-2">{result}</div>
</div>
<div className="grid grid-cols-4 gap-2 py-3">
  {btns.map(btn=>(
    <button 
    key={btn}
    onClick={()=>handleClick(btn)}
    className={`p-6 text-xl font-bold ${btn === '=' ? 'col-span-2 bg-blue-500 text-white':  btn ==='DE' ? ' bg-red-500 text-white' : 'bg-gray-200'}
    rounded-lg hover:bg-gray-300 transition duration-200
    `}
    >
{btn}
    </button>
  ))}
</div>
    </div>
    </main>
  )
}

export default Calculator