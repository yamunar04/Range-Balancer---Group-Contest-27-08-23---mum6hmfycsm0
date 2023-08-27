
import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);
  const [sum, setSum] = useState(rangeA + rangeB);

  const handleRangeAChange = (e) => {
    const value = parseInt(e.target.value);
    setRangeA(value);
    setMaxSum(Math.min(value + rangeB, 50));
    setSum(value + rangeB);
  };

  const handleRangeBChange = (e) => {
    const value = parseInt(e.target.value);
    setRangeB(value);
    setMaxSum(Math.min(rangeA + value, 50));
    setSum(rangeA + value);
  };

  return (
    <div id="max-sum-holder">
      <input
        type="number"
        value={maxSum}
        onChange={(e) => setMaxSum(Math.min(50, parseInt(e.target.value)))}
      />
      <div id="range-a-holder">
        <input
          type="range"
          value={rangeA}
          max={maxSum}
          onChange={handleRangeAChange}
        />
        <div id="range-a-value">{rangeA}</div>
      </div>
      <div id="range-b-holder">
        <input
          type="range"
          value={rangeB}
          max={maxSum}
          onChange={handleRangeBChange}
        />
        <div id="range-b-value">{rangeB}</div>
      </div>
      <div id="sum">{sum}</div>
    </div>
  );
};

export default App;
