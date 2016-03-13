import React = require('react');
import {Todo} from './todo.tsx';

const App = React.createClass<any,{}>({
	
	getInitialState: function() { 
		return {
			todos: [],
			newTodoName: '',
			todoId: 0
		};
	},	
	
	render: function() {
		
		const handleNewTodo = function(e) {
			if(/\S/.test(e.target.value)) {
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
		}.bind(this);
		
		const handleNameChange = function(e) {
			this.setState({
				newTodoName: e.target.value
			});						
		}.bind(this);
						
		return (
			<div>
				<ul>{this.state.todos.map(function(todo) {
					return <Todo todo={todo} />;			
				})}</ul>
				<input type="text" value={this.state.newTodoName} onChange={handleNameChange} onBlur={handleNewTodo} />
			</div>	
		);
	}
});

export {App}