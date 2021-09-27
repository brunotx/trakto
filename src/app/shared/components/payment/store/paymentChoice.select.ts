import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPaymentChoice from './paymentChoice.reducer';

export const selectPaymentChoiceState = createFeatureSelector<fromPaymentChoice.PaymentChoiceState>(
    fromPaymentChoice.paymentChoice,
);

export const selectPaymentChoice = createSelector(
    selectPaymentChoiceState,
    (state: fromPaymentChoice.PaymentChoiceState) => state.paymentChoice
);

export const selectPaymentForm = createSelector(
    selectPaymentChoiceState,
    (state: fromPaymentChoice.PaymentChoiceState) => state.paymentFormValid
);