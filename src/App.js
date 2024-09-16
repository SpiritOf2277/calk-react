import React, { useState } from 'react';

const Calculator = () => {
  const [value, setValue] = useState(10);
  const [message, setMessage] = useState('');

  const increment = () => {
    if (value < 15) {
      setValue(prevValue => prevValue + 1);
      setMessage('');
    }
    if (value + 1 === 15) {
      setMessage('Це максимальне число');
    }
  };

  const decrement = () => {
    if (value > 5) {
      setValue(prevValue => prevValue - 1);
      setMessage('');
    }
    if (value - 1 === 5) {
      setMessage('Це мінімальне число');
    }
  };

  return (
    <div>
      <h1>Калькулятор</h1>
      <p>Значення: {value}</p>
      <p style={{ color: 'red' }}>{message}</p>
      <button onClick={decrement} disabled={value === 5}>Зменшити</button>
      <button onClick={increment} disabled={value === 15}>Збільшити</button>
    </div>
  );
};

export default Calculator;
