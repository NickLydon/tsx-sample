/// <reference path="../typings/browser.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Table from './components/Table.tsx';
import table from './reducers/table.ts';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(table);

ReactDOM.render(
    <Provider store={store}>
        <Table />
    </Provider>,
    document.getElementById('container'));