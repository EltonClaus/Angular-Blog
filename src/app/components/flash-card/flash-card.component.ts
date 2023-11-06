import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css', './flash-card.responsive.component.css']
})
export class FlashCardComponent implements OnInit {

  @Input()
  flashCardTitle: string = ""
  @Input()
  flashCardImg: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
