import React, { useState } from 'react';

export default function App() {
  const [ count, setCount ] = useState(0);
  
  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={ () => setCount(count + 1)}>Click me</button>
    </div>
  )
}