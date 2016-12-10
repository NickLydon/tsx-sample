import * as React from 'react';
import {connect} from 'react-redux';
import actions from '../actions.ts';

const TableCell = ({ cell, row, column, onCellValueChange }) => {
    return (
        <td>
            <input
                type='text'
                value={cell.get('value')}
                onChange={function(e) {
                    onCellValueChange(row, column, ((e.target as HTMLInputElement).value));
                }} />
        </td>
    );
};

const mapStateToProps = (table, { row, column }) => {
    return {
        cell: table.getIn([row, column]),
        row,
        column
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