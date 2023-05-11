import React from 'react'
import { Button, Form } from 'react-bootstrap'

function List() {

    const List = ["Apple", "Mango", "Cherry"]

    const handleDelete = (() => {

    })

    return (
        <>
            <ul>
                {
                    List.map((li, id) => {

                        return (
                            <li key={id} id={id}>
                                <Form.Check aria-label="option" />
                                {
                                    li
                                }
                                <Button variant="danger" onClick={() => { handleDelete() }}>
                                    Delete
                                </Button>
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default List