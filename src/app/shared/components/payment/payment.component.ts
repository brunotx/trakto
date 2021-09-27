import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faBarcode, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { newCustomer } from '../store/customer.actions';
import { Customer } from '../store/customer.model';
import { CustomerState } from '../store/customer.reducer';
import { PaymentFormService } from './form/payment-form.service';
import { paymentChoice, paymentForm } from './store/paymentChoice.action';
import { PaymentChoiceState } from './store/paymentChoice.reducer';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit, OnDestroy {

  public faCreditCard = faCreditCard;
  public faBarcode = faBarcode;
  public customer: Customer = new Customer();
  public paymentForm: FormGroup;
  public paymentFormService_: Subscription;
  public startupValues: Customer;
  public paymentChoose: string;

  constructor(
    private customerStore: Store<CustomerState>,
    private paymentChoiceStore: Store<PaymentChoiceState>,
    private paymentFormService: PaymentFormService
  ) {
  }

  ngOnDestroy(): void {
    if (this.paymentFormService_) this.paymentFormService_.unsubscribe();
  }

  ngOnInit(): void {
    this.initForm('card')
  }

  paymentChoice(value: string) {
    this.paymentChoiceStore.dispatch(paymentChoice({ paymentChoice: value }));
    this.initForm(value);
  }

  initForm(value: string) {
    if (this.paymentFormService_) this.paymentFormService_.unsubscribe();

    this.paymentFormService.init(this.startupValues, value);
    this.paymentFormService_ = this.paymentFormService.paymentForm$.subscribe(
      (form) => {
        this.paymentForm = form;
        this.collapse(value);
        this.triggerForm();
      }
    )
  }

  collapse(value: string) {
    const contentCard: HTMLElement = document.getElementById('contentCard');
    const contentBoleto: HTMLElement = document.getElementById('contentBoleto');

    switch (value) {
      case 'card':
        if (contentCard.style.maxHeight === contentCard.scrollHeight + "px" ? contentCard.style.maxHeight = null : contentCard.style.maxHeight = contentCard.scrollHeight + "px")
          contentBoleto.style.maxHeight = null;
        break;
      case 'boleto':
        if (contentBoleto.style.maxHeight === contentBoleto.scrollHeight + "px" ? contentBoleto.style.maxHeight = null : contentBoleto.style.maxHeight = contentBoleto.scrollHeight + "px")
          contentCard.style.maxHeight = null;
        break;
    }
  }

  triggerForm() {
    this.paymentForm.valueChanges.subscribe(
      (data) => {
        this.customerStore.dispatch(newCustomer(data));
        this.paymentChoiceStore.dispatch(paymentForm({ paymentFormValid: this.paymentForm.valid }));
      }
    )
  }
}
