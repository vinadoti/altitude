import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-auth-pages',
  templateUrl: './title-auth-pages.component.html',
  styleUrls: ['./title-auth-pages.component.scss'],
})
export class TitleAuthPagesComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  constructor() { }

  ngOnInit() {}

}
