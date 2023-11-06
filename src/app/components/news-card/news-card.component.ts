import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css', './news-card.responsive.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input()
  newCardTitle: string = ""
  @Input()
  newCardDescripition: string = ""
  @Input()
  newCardSubTitleOne: string = ""
  @Input()
  newCardSubTitleTwo: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
