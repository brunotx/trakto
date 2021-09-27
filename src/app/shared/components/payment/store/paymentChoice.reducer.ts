import { Action, createReducer, on } from '@ngrx/store';
import * as PaymentChoice from './paymentChoice.action';

export const paymentChoice = 'paymentChoice';

export interface PaymentChoiceState {
    paymentChoice: string;
    paymentFormValid: boolean;
}

export const initialState: PaymentChoiceState = {
    paymentChoice: '',
    paymentFormValid: false
}

export const paymentChoiceReducer = createReducer(
    initialState,
    on(PaymentChoice.paymentChoice,
        (state, { paymentChoice: string }) => (
            {
                ...state,
                paymentChoice: string
            }
        )
    ),
    on(PaymentChoice.paymentForm,
        (state, { paymentFormValid: boolean }) => (
            {
                ...state,
                paymentFormValid: boolean
            }
        )
    )
);

export function reducerPaymentChoice(state: PaymentChoiceState | undefined, action: Action) {
    return paymentChoiceReducer(state, action);
}