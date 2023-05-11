import React, { memo } from 'react'

function AddList({add, list}) {
    console.warn("add list called")

    console.log("add",add, "list",list )
  return (
    <>
    <h2>
        AddList
    </h2>
    <ul>
        {
            list.map((li, id) => {

                return (
                    <li key={id} id={id}>
                        {
                            li + id
                        }
                    </li>
                )
            })
        }
    </ul>
    <button onClick={() => {add()}}>
        Add
    </button>
    
    </>
  )
}

export default memo(AddList)