import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule} from '@ngrx/store';
import { customerPayment, reducerCustomer } from './components/store/customer.reducer';
import { paymentChoice, reducerPaymentChoice } from './components/payment/store/paymentChoice.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaymentComponent, SummaryComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(customerPayment, reducerCustomer),
    StoreModule.forFeature(paymentChoice, reducerPaymentChoice)
  ],
  exports: [
    RouterModule,
    PaymentComponent,
    SummaryComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
