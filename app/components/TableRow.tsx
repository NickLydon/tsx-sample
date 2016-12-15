import * as React from 'react';
import {connect} from 'react-redux';
import TableCell from './TableCell.tsx';

class TableRow extends React.Component<{ columns, row }, any> {

    /**
     *
     */
    constructor() {
        super();
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    }

    shouldComponentUpdate({ columns }) {
        return !columns.equals(this.props.columns);
    }

    render() {
        return (
            <tr>
                {
                    this.props.columns.map((cell, column) => 
                        <TableCell key={column} row={this.props.row} column={column} />)
                }
            </tr>
        );
    }
};

const mapStateToProps = (table, { row }) => {
    return {
        columns: table.get(row),
        row
    };
};

export default connect(mapStateToProps)(TableRow);