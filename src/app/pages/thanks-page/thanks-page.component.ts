import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/shared/components/store/customer.model';
import { CustomerState } from 'src/app/shared/components/store/customer.reducer';
import { selectCustomers } from 'src/app/shared/components/store/customer.selector';

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.sass']
})
export class ThanksPageComponent implements OnInit {

  public faAngleRight = faAngleRight;
  public customer: Customer;

  constructor(private customerStore: Store<CustomerState>,) {
    this.customerStore.select(selectCustomers).subscribe(
      (customer) => {
        this.customer = customer;
      }
    )
  }

  ngOnInit(): void {
  }

}