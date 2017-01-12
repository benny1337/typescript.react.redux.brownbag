import { connect } from 'react-redux';
import { ActionCreators, IAccountState } from '../store/AccountReducer';
import { Account } from '../domain/Accounts';
import * as React from 'react';
import CreateAccounts from './CreateAccount'

type Props = IAccountState & typeof ActionCreators

class AccountList extends React.Component<Props, {}>{
    constructor(props: Props) {
        super(props);
    }



    render() {
        return (
            <div>

                <CreateAccounts />
                <div>
                    {this.props.accounts.map((account, index) => {
                        return (
                            <div key={index}>
                                <h1>{account.name}</h1>
                                {account.email}
                                <button onClick={() => this.props.removeAccount(account)}>ta bort</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}


export default connect(
    (state: IAccountState) => state,
    ActionCreators,

)(AccountList)