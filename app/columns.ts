import * as Immutable from 'immutable';

export default Immutable.Range(0, 26).map(column => String.fromCharCode(column + 65));