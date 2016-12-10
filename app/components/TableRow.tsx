import * as React from 'react';
import {connect} from 'react-redux';
import TableCell from './TableCell.tsx';

const TableRow = ({ columns, row }) => {
    return (
        <tr>
            {
                columns.map((cell, column) => 
                    <TableCell key={column} row={row} column={column} />)
            }
        </tr>
    );
};

const mapStateToProps = (table, { row }) => {
    return {
        columns: table.get(row),
        row
    };
};

export default connect(mapStateToProps)(TableRow);