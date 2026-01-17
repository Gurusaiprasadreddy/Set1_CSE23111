import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleInput = (val) => {
    setDisplay((prev) => (prev === '0' ? String(val) : prev + val));
  };

  const clear = () => setDisplay('0');
  
  const backspace = () => {
    setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
  };

  // Criterion (a): Result=(a+b)/(a-b)*(a+b)
  const calculateFormula = () => {
    const a = parseFloat(display);
    const b = 15; // Your required 'textbox-15' constant

    if (isNaN(a)) return;
    if (a === b) {
      setDisplay("ERR: DIV 0");
      return;
    }

    const res = ((a + b) / (a - b)) * (a + b);
    setDisplay(String(Number(res.toFixed(3))));
  };

  // Criterion (b): MoD_Sum_square
  const runSumSquare = () => {
    const digits = display.replace(/[^0-9]/g, '').split('');
    const sum = digits.reduce((acc, d) => acc + Math.pow(parseInt(d), 2), 0);
    setDisplay(String(sum));
  };

  // Criterion (c): Even_ODD
  const getParity = () => {
    const num = parseInt(display);
    if (!isNaN(num)) setDisplay(num % 2 === 0 ? "EVEN" : "ODD");
  };

  return (
    <div className="calculator-body">
      <div className="screen-container">
        <span className="mode-label">RAD</span>
        <div className="main-display">{display}</div>
      </div>

      <div className="button-grid">
        <button className="top-func" onClick={runSumSquare}>MOD_SUM_SQUARE</button>
        <button className="top-func" onClick={getParity}>EVEN_ODD</button>

        <button className="gray-btn" onClick={() => handleInput('(')}>(</button>
        <button className="gray-btn" onClick={() => handleInput(')')}>)</button>
        <button className="yellow-btn" onClick={backspace}>DEL</button>
        <button className="gray-btn" onClick={() => handleInput('%')}>%</button>

        <button className="red-btn" onClick={clear}>AC</button>
        <div className="spacer"></div>

        <button className="symbol-btn" onClick={() => setDisplay('3.142')}>π</button>
        <button className="symbol-btn" onClick={() => setDisplay('2.718')}>e</button>
        <button className="gray-btn" onClick={() => handleInput('/')}>÷</button>

        <button className="num-btn" onClick={() => handleInput('7')}>7</button>
        <button className="num-btn" onClick={() => handleInput('8')}>8</button>
        <button className="num-btn" onClick={() => handleInput('9')}>9</button>
        <button className="gray-btn" onClick={() => handleInput('*')}>x</button>

        <button className="num-btn" onClick={() => handleInput('4')}>4</button>
        <button className="num-btn" onClick={() => handleInput('5')}>5</button>
        <button className="num-btn" onClick={() => handleInput('6')}>6</button>
        <button className="gray-btn" onClick={() => handleInput('-')}>-</button>

        <button className="num-btn" onClick={() => handleInput('1')}>1</button>
        <button className="num-btn" onClick={() => handleInput('2')}>2</button>
        <button className="num-btn" onClick={() => handleInput('3')}>3</button>
        <button className="gray-btn" onClick={() => handleInput('+')}>+</button>

        <button className="num-btn">ANS</button>
        <button className="num-btn" onClick={() => handleInput('0')}>0</button>
        <button className="num-btn" onClick={() => handleInput('.')}>.</button>
        <button className="blue-btn" onClick={calculateFormula}>=</button>
      </div>
    </div>
  );
};

export default Calculator;