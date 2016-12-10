import * as React from 'react';
import {connect} from 'react-redux';
import columnHeaders from '../columns.ts';
import TableRow from './TableRow.tsx';

const Table = ({ table }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columnHeaders.map(h => <th key={h}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                { table.map((columns, row) => 
                    <TableRow key={row} row={row} /> )}
            </tbody>
        </table>
    );
};

const mapStateToProps = table => {
    return {
        table
    };
};

export default connect(mapStateToProps)(Table);