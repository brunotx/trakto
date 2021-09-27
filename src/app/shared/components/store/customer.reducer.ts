import { Action, createReducer, on } from "@ngrx/store";
import * as CustomerActions from './customer.actions';
import { Customer } from "./customer.model";

export const customerPayment = 'customer';

export interface CustomerState {
    customer: Customer;
}

export const initialState: CustomerState = {
    customer: new Customer()
}
export const customerReducer = createReducer(
    initialState,
    on(CustomerActions.newCustomer,
        (state: CustomerState, { customer }) => (
            {
                ...state,
                customer: customer
            }
        )
    )
);

export function reducerCustomer(state: CustomerState | undefined, action: Action): any {
    return customerReducer(state, action);
}