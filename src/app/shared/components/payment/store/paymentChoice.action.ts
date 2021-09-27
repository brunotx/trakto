import { createAction, props } from "@ngrx/store";

export const paymentChoice = createAction(
    '[PaymentChoice] Change PaymentChoice', props<{ paymentChoice: string }> ()
);

export const paymentForm = createAction(
    '[PaymentForm] Valid PaymentForm', props<{ paymentFormValid: boolean }> ()
);