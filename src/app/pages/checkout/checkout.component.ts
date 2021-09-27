import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collapse(value: string) {
    const contentCard: HTMLElement = document.getElementById('contentCard');
    const contentBoleto: HTMLElement = document.getElementById('contentBoleto');

    switch (value) {
      case 'card':
        if (contentCard.style.maxHeight === contentCard.scrollHeight + "px" ? contentCard.style.maxHeight = null : contentCard.style.maxHeight = contentCard.scrollHeight + "px")
          contentBoleto.style.maxHeight = null
        break;
      case 'boleto':
        if (contentBoleto.style.maxHeight === contentBoleto.scrollHeight + "px" ? contentBoleto.style.maxHeight = null : contentBoleto.style.maxHeight = contentBoleto.scrollHeight + "px")
          contentCard.style.maxHeight = null
        break;
    }
  }

}
