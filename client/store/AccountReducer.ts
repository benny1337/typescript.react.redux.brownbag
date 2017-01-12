import { IAction } from './../domain/IAction';
import { Account } from './../domain/Accounts';

const ADD_ACCOUNT = 'ADD_ACCOUNT';
const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT';

export interface IAccountState {
    accounts: Account[]
}

export const ActionCreators = {
    addAccount: (account: Account): IAction => {
        return {
            type: ADD_ACCOUNT,
            payload: account
        };
    },
    removeAccount: (account: Account): IAction => {
        return {
            type: REMOVE_ACCOUNT,
            payload: account
        };
    },
}

export function AccountReducer(state: IAccountState, action: IAction) {
    switch (action.type) {
        case ADD_ACCOUNT:
            return Object.assign({}, state, {
                accounts: [...state.accounts, action.payload]
            });
        case REMOVE_ACCOUNT:
            return Object.assign({}, state, {
                accounts: state.accounts.filter((account, index) =>{
                    return account != action.payload;
                })
            });

        default:
            return {
                accounts: [{ name: "lars svensson", email: "mail.se" }]
            } as IAccountState;
    }
}