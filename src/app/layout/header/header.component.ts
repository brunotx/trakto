import { Component, OnInit } from '@angular/core';
import { faCommentDots, faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public faCommentDots = faCommentDots;
  public faCreditCard = faCreditCard;


  constructor() { }

  ngOnInit(): void {
  }

}
