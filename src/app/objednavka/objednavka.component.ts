import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-objednavka',
  templateUrl: './objednavka.component.html',
  styleUrls: ['./objednavka.component.scss']
})
export class ObjednavkaComponent implements OnInit {

  kontakt: string;
  firma: string;
  text: string;

  @Input()
  isMobile: boolean;

  constructor() { }

  ngOnInit() {
  }

  OdeslatUdaje() {
  }

}
