import { Component, OnInit } from '@angular/core';
import { faLock, faGift } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  public faLock = faLock;
  public faGift = faGift;


  constructor() { }

  ngOnInit(): void {
  }

}
