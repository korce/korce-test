import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent implements OnInit {

  @Input()
  isMobile: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
