import * as Immutable from 'immutable';
import columns from '../columns.ts';
import actions from '../actions.ts';

const defaultState = Immutable.Range(0, 200).reduce(
    (acc, row) => acc
        .set(row, columns
            .reduce(
                (acc2, column) => acc2.set(column, Immutable.Map.of('column', column, 'value', column, 'row', row)),
                Immutable.Map<string, any>()
            )
        ),
    Immutable.Map<number, any>()
);


export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.FIELD_VALUE_CHANGED:
            return state.setIn([action.row, action.column, 'value'], action.newValue);
        default:
            return state;
    }
};