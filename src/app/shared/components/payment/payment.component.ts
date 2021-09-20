import { Component, OnInit } from '@angular/core';
import { faBarcode, faCreditCard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  public faCreditCard = faCreditCard;
  public faBarcode = faBarcode;


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
