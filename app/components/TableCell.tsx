import * as React from 'react';
import {connect} from 'react-redux';
import actions from '../actions.ts';

class TableCell extends React.Component<{ cell, onCellValueChange }, any> {
    /**
     *
     */
    constructor() {
        super();
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    }

    shouldComponentUpdate({ cell }) {
        return !cell.equals(this.props.cell);
    }

    render() { 
        const {cell, onCellValueChange} = this.props;
        const get = name => cell.get(name);
        const row = get('row');
        const column = get('column');
        const value = get('value');

        return (
            <td>
                <input
                    type='text'
                    value={value}
                    onChange={function(e) {
                        onCellValueChange(row, column, ((e.target as HTMLInputElement).value));
                    }} />
            </td>
        );
    }
};

const mapStateToProps = (table, { row, column }) => {
    const cell = table.getIn([row, column]);
    return {
        cell,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCellValueChange(row, column, newValue) {
            dispatch({
                type: actions.FIELD_VALUE_CHANGED,
                row,
                column,
                newValue
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableCell);