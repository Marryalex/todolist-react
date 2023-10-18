import React from 'react'
import css from './ToDo.module.css'
import { MdDeleteOutline } from "react-icons/md";



function ToDo({ todo, handleDelete, handleCheckCompleted }) {
    return (
        <li className={css.list_group_item}>
            <h2> {todo.title}</h2>
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



            {handleDelete && (
                <button

                    disabled={!todo.completed}
                    type='button'
                    className='btn-close'
                    aria-label='Close'
                    onClick={() => handleDelete(todo.id)}
                >
                    <MdDeleteOutline />
                </button>
            )}

        </li>
    )
}

export default ToDo