import React, { useState } from 'react';
import { Button } from "@material-ui/core";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(currentCount => currentCount - 1);

  return (
    <div>
      <h1>Counter</h1>
      <p>Current: {count}</p>
      <Button variant="contained" color="primary" onClick={increment}>Increment</Button>
      <Button variant="contained" onClick={decrement}>Decrement</Button>
    </div>
  )
};

export default Counter;