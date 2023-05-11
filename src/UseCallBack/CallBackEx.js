import React, { useCallback, useState } from 'react'
import AddList from './AddList';

function CallBackEx() {

    const [Count, setCount] = useState(0)

    const [List, setList] = useState([])

    const handleClick = (() => {
        console.log("handleClick Called");

        setCount(Count +1)
    })

    const add = useCallback(()=> {
        setList((pr) => [...pr, "New Data"])
    }, [List])

  return (
        <>
        <h1>
            CallBackEx
        </h1>
        <br />
        <AddList add={add} list={List}/>
        <h4>
            {
                Count
            }
        </h4>
        <button onClick={() => {handleClick()}}>
            +
        </button>
        </>
  )
}

export default CallBackEx;