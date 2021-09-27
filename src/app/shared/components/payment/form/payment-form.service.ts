import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PaymentForm, } from './payment-form';

@Injectable({
    providedIn: 'root'
})
export class PaymentFormService {

    private paymentForm: BehaviorSubject<FormGroup | undefined>;
    public paymentForm$: Observable<FormGroup>;

    constructor(private fb: FormBuilder) {
    }

    public init(startupValues, paymentChoice: string) {
            this.paymentForm = new BehaviorSubject(this.fb.group(
                new PaymentForm(startupValues, paymentChoice)
            ));
        this.paymentForm$ = this.paymentForm.asObservable();
    }
}
