import * as Immutable from 'immutable';
import columns from '../columns.ts';
import actions from '../actions.ts';

const defaultState = Immutable.Range(0, 201).reduce(
    (acc, row) => acc
        .set(row, columns
            .reduce(
                (acc2, column) => acc2.set(column,
                    Immutable.Map({ column, row, value: column })
                ),
                Immutable.Map<string, any>()
            )
        ),
    Immutable.Map<number, any>()
);


export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.FIELD_VALUE_CHANGED:
            return state.updateIn([action.row, action.column],
                (cell) => 
                    cell.set('value', action.newValue)
            );
        default:
            return state;
    }
};