import { AccountReducer } from '../store/AccountReducer';
import * as React from 'react';
import * as ReactDom from 'react-dom'
import AccountList from '../compontent/AccountList'
import * as Redux from 'redux'
import { Provider } from 'react-redux'

var store = Redux.createStore(AccountReducer)

ReactDom.render(
    <Provider store={store}>
        <AccountList />
    </Provider>,
    document.getElementById("app"));


