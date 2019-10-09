import { Component, OnInit } from '@angular/core';
import { exists } from 'fs';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  path = './../../assets/img/fotkyNaWebovky/jidlo_';

  images: Array<string>;
  numberOfImages: number;

  constructor() {}

  ngOnInit() {
    /*this.numberOfImages = this.getNumberOfImages();
    console.log('Number of Images: ' + this.numberOfImages);*/
  }

  getNumberOfImages(): number {
    let i = 0;
    while (this.checkIfFileExists(this.path + i + '.jpg')) {
      i++;
    }
    return i - 1;
  }

  checkIfFileExists(path: string): boolean {
    const result = false;
    console.log(result);
    return result;
  }
}
