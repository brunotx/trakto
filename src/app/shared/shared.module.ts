import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';
import { SummaryComponent } from './components/summary/summary.component';


@NgModule({
  declarations: [PaymentComponent, SummaryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    PaymentComponent,
    SummaryComponent
  ]
})
export class SharedModule { }
