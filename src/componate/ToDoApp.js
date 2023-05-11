import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import './ToDoApp.css'

function getData() {
    let datas = window.localStorage.getItem("MyData")
    return JSON.parse(datas)
}

function ToDoApp() {
    const [items, setItems] = useState("");
    const [addlist, setAddlist] = useState(getData());

    const handleChange = (e) => {
        setItems(e.target.value);
    }

    const addtodo = () => {
        setAddlist((olditems) => {
            return [...olditems, items]
        });
        setItems("");
    }

    const deletItems = (id) => {

        const newarr = addlist.filter((v, i) => {
            return i !== id;
        })
        setAddlist(newarr);
    }

    const ClearAll = (items) => {

        // console.log(">>>>>",items);
        setAddlist((olditems) => {
            return [...olditems && items ? (!!items) : '']
        });
        setItems("");

    }

    useEffect(() => {
        window.localStorage.setItem("MyData", JSON.stringify(addlist))
    }, [addlist])


    return (
        <div className="wrapper">
            <h1> ToDoApp </h1>
            <div className="task-input">
                <input type="text" placeholder="Add a New Task List" onChange={handleChange} value={items} />
                <button type='submit' onClick={(!!items) ? addtodo : ''}>Add</button>


                <ol>
                    {
                        addlist.map((v, i) => {
                            return (
                                <>
                                    <li key={i} id={i} onSelect={deletItems}>{v}
                                        <i className="bi bi-trash3" onClick={() => deletItems(i)}></i>
                                    </li>
                                </>
                            )
                        })
                    }
                </ol>
            </div>
            
                {
                addlist.length > 2 ?
                    <div className="controls">
                        <button className="clear-btn" onClick={() => { ClearAll() }}>Clear All</button> 
                    </div>: ''
            }
        </div>

    )
}

export default ToDoApp;