/// <reference path="typings/react/react.d.ts"/>

import React = require('react');

const Todo = React.createClass<any,{}>({
	
	getInitialState: function() {
		return {
			editing: false,
			newName: this.props.todo.name,
			currentName: this.props.todo.name
		};
	},		
	
	render: function() {
		const startEditing = function() {
			this.setState({
				editing: true
			});
		}.bind(this);
		
		const updateName = function(e) {
			this.setState({
				newName: e.target.value
			});
		}.bind(this);
		
		const stopEditing = function(e) {
			if(/\S/.test(e.target.value)) {
				return this.setState({
					editing:false,
					newName: e.target.value,
					currentName: e.target.value
				});
			}
			
			this.setState({
				editing:false
			});
		}.bind(this);
		
		const getInput = function() {
			return <input type="text" value={this.state.newName} onChange={updateName} onBlur={stopEditing} />;
		}.bind(this);
		
		const getNameSpan = function() {
			return <span onDoubleClick={startEditing}>{this.state.currentName}</span>;
		}.bind(this);
		
		return <li key={this.props.todo.key}>{this.state.editing ? getInput() : getNameSpan()}</li>;
	}
});

export {Todo}