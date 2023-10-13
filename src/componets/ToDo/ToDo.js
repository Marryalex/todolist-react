import React from 'react'
import css from './ToDo.module.css'


function ToDo({ todo, handleDelete, handleCheckCompleted }) {
    return (
        <li className='list-group-item'>
            <div className='row justify-content-between'>
                <div className={css.check_input}>
                    <input
                        className={css.form_check_input}
                        id='form_check_input'
                        // value="None"
                        type='checkbox'
                        checked={todo.completed}
                        onChange={() => handleCheckCompleted(todo.id)} />
                    <label htmlFor='form_check_input'></label>
                </div>
                <h2> {todo.title}</h2>

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