import { FormGroup } from "@angular/forms";
import { createAction } from "@ngrx/store";
import { Customer } from "./customer.model";


export const newCustomer = createAction(
    '[Customer] newCustomer', (customer: Customer) => ({ customer })
);

export const loadForm = createAction(
    '[FormPayment] Load Payment Form', (paymentForm: FormGroup) => ({ paymentForm })
);