import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'New for Catering';

  isMobile = false;

  constructor(
    private deviceService: DeviceDetectorService
  ) {
    this.checkDevice();
  }

  checkDevice() {
    if (!this.deviceService.isDesktop()) {
      this.isMobile = true;
    }
  }
}
