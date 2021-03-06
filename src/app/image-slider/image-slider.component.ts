import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  path = 'assets/img/fotkyNaWebovky/jidlo_';

  originalImages: Array<string>;
  shuffledImages: Array<string>;
  counter = 0;
  constructor() {}

  ngOnInit() {
    this.originalImages = new Array();
    for (let i = 0; i < 60; i++) {
      if (i !== 6 && i !== 7 && i !== 8) {
        this.originalImages.push(this.path + i + '.jpg');
      }
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
