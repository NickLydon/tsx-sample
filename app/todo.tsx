import React = require('react');

const Todo = React.createClass<any, {}>({

    getInitialState() {
        return {
            editing: false,
            newName: this.props.todo.name,
            currentName: this.props.todo.name
        };
    },
    render() {
        const startEditing = () => {
            this.setState({
                editing: true
            });
        };

        const updateName = (e) => {
            this.setState({
                newName: e.target.value
            });
        };

        const stopEditing = (e) => {
            if (/\S/.test(e.target.value)) {
                return this.setState({
                    editing: false,
                    newName: e.target.value,
                    currentName: e.target.value
                });
            }

            this.setState({
                editing: false
            });
        };

        const getInput = () => {
            return <input type='text' value={this.state.newName} onChange={updateName} onBlur={stopEditing} />;
        };

        const getNameSpan = () => {
            return <label onDoubleClick={startEditing}>{this.state.currentName}</label>;
        };

        return (
            <div className='view'>
                <input className='toggle' type='checkbox' />
                {this.state.editing ? getInput() : getNameSpan()}
                <button className='destroy'></button>
            </div>
        );
    }
});

export {Todo}