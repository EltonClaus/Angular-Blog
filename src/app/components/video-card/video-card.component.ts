import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css', './video-card.responsive.component.css']
})
export class VideoCardComponent implements OnInit {
  @Input()
  videoCardImg: string = ""
  @Input()
  videoCardTitle: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
