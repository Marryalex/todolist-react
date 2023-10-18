import { Component } from 'react'
import css from './FormToDo.module.css'

class FormToDo extends Component {
    state = {
        todo: '',
    }
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addToDo(this.state.todo)
        this.setState({
            todo: '',
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className={css.form_create}>

                <label htmlFor='exampleInput' className={css.form_label}>
                    Create to-do
                </label>
                <input
                    name='todo'
                    type='text'
                    className={css.form_control}
                    id='exampleInput'
                    onChange={this.handleChange}
                    value={this.state.todo}
                />

                <button type='submit' className={css.btn}>
                    Add to-do
                </button>
            </form>
        )
    }
}

export default FormToDo