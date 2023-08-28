import {Component, Input, OnInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-card-boulder',
  templateUrl: './card-boulder.component.html',
  styleUrls: ['./card-boulder.component.scss'],
})
export class CardBoulderComponent implements OnInit {
  @Input() graduationColor: string;
  @Input() grade: string;
  @Input() name: string;
  @Input() setter: string;
  @Input() likes: string;
  @Input() done: string;
  @Input() comments: string;
  @Input() date: string;

  ngOnInit() {}

}
