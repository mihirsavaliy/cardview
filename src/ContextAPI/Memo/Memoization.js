import React, { useMemo, useState } from 'react';

function Memoization() {

  const [Add, setAdd] = useState(0)
  const [Minus, setMinus] = useState(250)
  
  const Multiplication = useMemo( function Multi() { 

    console.log("function call ");

    return Add *10;
  }, [Add]);

  return (
    <>
      <h2>
        {
          Add
        }
      </h2>
      <button onClick={() => setAdd(Add + 1)}>
        Add +
      </button>

      <br />
      <br />

      <h2>
        {
          Minus
        }
      </h2>

      <button onClick={() => setMinus(Minus - 1)}>
        Minus -
      </button>

      <br />

      <h3>
        {
          Multiplication
        }
      </h3>
    </>
  )
}

export default Memoization