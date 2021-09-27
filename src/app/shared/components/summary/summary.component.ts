import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faLock, faGift } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentChoiceState } from '../payment/store/paymentChoice.reducer';
import { selectPaymentChoice, selectPaymentForm } from '../payment/store/paymentChoice.select';
import { Customer } from '../store/customer.model';
import { CustomerState } from '../store/customer.reducer';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  public faLock = faLock;
  public faGift = faGift;
  public customers: Customer[];
  public paymentChoice: string;
  public typeCharge: string = 'monthly';
  public formValid: boolean;
  public termsUse: boolean = false;

  constructor(
    private paymentChoiceStore: Store<PaymentChoiceState>,
    private router: Router
  ) {
    this.paymentChoiceStore.select(selectPaymentChoice).subscribe(
      (data) => {
        this.paymentChoice = data;
        if (this.paymentChoice === 'boleto') {
          this.typeCharge = 'yearly';
        }
      }
    );

    this.paymentChoiceStore.select(selectPaymentForm).subscribe(
      (valid) => {
        this.formValid = valid;
      }
    );
  }

  ngOnInit(): void {

  }

  submit() {
    this.router.navigateByUrl('thanksPage');
  }

}
