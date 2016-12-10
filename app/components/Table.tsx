import * as React from 'react';
import {connect} from 'react-redux';
import columnHeaders from '../columns.ts';
import actions from '../actions.ts';

const TableCell = ({ cell, onCellValueChange }) =>
    <td>
        <input
            type='text'
            value={cell.get('value')}
            onChange={function(e) {
                onCellValueChange(cell.get('row'), cell.get('column'), ((e.target as HTMLInputElement).value));
            }} />
    </td>;

const TableRow = ({ columns, onCellValueChange }) =>
    <tr>
        {
            columns.map((cell, column) => 
                <TableCell key={column} cell={cell} onCellValueChange={onCellValueChange} />)
        }
    </tr>;

const Table = ({ table, onCellValueChange }) =>
    <table>
        <thead>
            <tr>
                {columnHeaders.map(h => <th key={h}>{h}</th>)}
            </tr>
        </thead>
        <tbody>
            { table.map((columns, row) => 
                <TableRow key={row} columns={columns} onCellValueChange={onCellValueChange} /> )}
        </tbody>
    </table>;

const mapStateToProps = table => {
    return {
        table
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

export default connect(mapStateToProps, mapDispatchToProps)(Table);