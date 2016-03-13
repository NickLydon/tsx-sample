import * as React from 'react';
import {Todo} from './todo.tsx';

const App = React.createClass<any, {}>({
    getInitialState() {
        return {
            todos: [],
            newTodoName: '',
            todoId: 0
        };
    },
    render() {
        const handleNewTodo = (e) => {
            if (/\S/.test(e.target.value)) {
                this.setState({
                    todos: this.state.todos.concat([{
                        name: e.target.value,
                        finished: false,
                        removed: false,
                        key: this.state.todoId
                    }]),
                    todoId: this.state.todoId + 1,
                        newTodoName: ''
                    });
            }
        };

        const handleNameChange = (e) => {
            this.setState({
                newTodoName: e.target.value
            });
        };

        const newTodoKeyUp = (e: React.KeyboardEvent) => {
            if (e.keyCode === 13) {
                handleNewTodo(e);
            }
        };

        return (
            <section className='todoapp'>
                <header className='header'>
                    <h1>todos</h1>
                    <input className='new-todo' placeholder='What needs to be done?' type='text'
                        value={this.state.newTodoName} onChange={handleNameChange} onBlur={handleNewTodo} onKeyUp={newTodoKeyUp} />
                </header>
                <section className='main'>
                    <input type='checkbox' className='toggle-all' />
                    <ul className='todo-list'>{this.state.todos.map(function(todo) {
                        return <li key={todo.key}><Todo todo={todo} /></li>;
                    })}</ul>
                </section>
            </section>
        );
    }
});

export {App}