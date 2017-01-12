import { Account } from '../domain/Accounts';
import { connect } from 'react-redux';
import { ActionCreators, IAccountState } from '../store/AccountReducer';
import * as React from 'react';

type Props = IAccountState & typeof ActionCreators;

class CreateAccounts extends React.Component<Props, {}>{
    createAccount() {
        var a = new Account();
        a.name = "Nicklas",
            a.email = "mail@mails.e";

        this.props.addAccount(a);
    }
    render() {
        return (
            <div>
                <button onClick={() => this.createAccount()}>Nytt account</button>
            </div>
        );
    }
}

export default connect(
    (state: IAccountState) => {
        return  state;
    },
    ActionCreators
)(CreateAccounts)

