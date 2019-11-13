import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mala-nabidka',
  templateUrl: './mala-nabidka.component.html',
  styleUrls: ['./mala-nabidka.component.scss']
})
export class MalaNabidkaComponent implements OnInit {
  polozky: boolean[] = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];
  active = 0;

  constructor() {}

  ngOnInit() {}

  changeType(polozka: string) {
    this.polozky[this.active] = false;
    switch (polozka) {
      case 'alko':
        this.polozky[0] = true;
        this.active = 0;
        break;
      case 'ceskeJidlo':
        this.polozky[1] = true;
        this.active = 1;
        break;
      case 'croissanty':
        this.polozky[2] = true;
        this.active = 2;
        break;
      case 'nealko':
        this.polozky[3] = true;
        this.active = 3;
        break;
      case 'polevky':
        this.polozky[4] = true;
        this.active = 4;
        break;
      case 'sladke':
        this.polozky[5] = true;
        this.active = 5;
        break;
      case 'spagety':
        this.polozky[6] = true;
        this.active = 6;
        break;
      case 'steaky':
        this.polozky[7] = true;
        this.active = 7;
        break;
      case 'vegan':
        this.polozky[8] = true;
        this.active = 8;
        break;
      default:
        break;
    }
  }
}
