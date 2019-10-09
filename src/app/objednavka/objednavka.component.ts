import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objednavka',
  templateUrl: './objednavka.component.html',
  styleUrls: ['./objednavka.component.scss']
})
export class ObjednavkaComponent implements OnInit {

  kontakt: string;
  firma: string;
  text: string;

  constructor() { }

  ngOnInit() {
  }

  OdeslatUdaje() {
    console.log('odeslano');
  }

}
