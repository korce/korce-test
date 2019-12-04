import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider2-mobile',
  templateUrl: './image-slider2-mobile.component.html',
  styleUrls: ['./image-slider2-mobile.component.scss']
})
export class ImageSlider2MobileComponent implements OnInit {
  path = 'assets/img/fotkyNaWebovky/akce_';

  originalImages: Array<string>;
  shuffledImages: Array<string>;
  counter = 0;
  constructor() {}

  ngOnInit() {
    this.originalImages = new Array();
    for (let i = 0; i < 9; i++) {
      this.originalImages.push(this.path + i + '.jpeg');
    }
    this.shuffledImages = this.shuffle(this.originalImages);
  }

  shuffle(array: Array<string>) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
