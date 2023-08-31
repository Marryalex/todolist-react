import React from 'react'


const ToDo = ({ todo, handleDelete }) => {
    return (
        <li className='list-group-item'>
            <div className='row justify-content-between'>
                <div className='col-10'>
                    <input
                        className='form-check-input me-2'
                        type='checkbox'
                    />

                    <h2> {todo.title}</h2>
                </div>
                <div className='col'>
                    {handleDelete && (
                        <button
                            disabled={!todo.completed}
                            type='button'
                            className='btn-close'
                            aria-label='Close'
                            onClick={() => handleDelete(todo.id)}
                        ></button>
                    )}
                </div>
            </div>
        </li>
    )
}

export default ToDo