import React, { useState } from 'react';
//testing git
//git branch test
//git push testing
//branch testing

function App()
{
  const [count, setCount] = useState(0)

  function decrementCount()
  {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount()
  {
    setCount(prevCount => prevCount + 1)
  }

  return (
  <>

  <button onClick={decrementCount}>-</button>
  <span>{count}</span>
  <button onClick={incrementCount}>+</button>

  </>
  )
}

export default App;
