import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-koncept',
  templateUrl: './koncept.component.html',
  styleUrls: ['./koncept.component.scss']
})
export class KonceptComponent implements OnInit {

  @Input()
  isMobile: boolean;

  constructor() { }

  ngOnInit() {
  }

}
