import * as React from 'react';
import {connect} from 'react-redux';
import columnHeaders from '../columns.ts';
import TableRow from './TableRow.tsx';
import * as Perf from 'react-addons-perf';

const print = () => Perf.printWasted();

const headers = columnHeaders.map(h => <th key={h}>{h}</th>);

const Table = ({ table }) => {
    return (
        <div>
            <button onClick={Perf.start}>Start</button>
            <button onClick={Perf.stop}>Stop</button>
            <button onClick={print}>Print</button>
            <table>
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    { table.map((columns, row) => 
                        <TableRow key={row} row={row} /> )}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = table => {
    return {
        table: table.toSeq()
    };
};

export default connect(mapStateToProps)(Table);