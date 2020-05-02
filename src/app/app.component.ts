import { Component } from '@angular/core';
import * as NoSleep from 'nosleep.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';

  wakeLockEnabled = true;
  noSleep: any;


    constructor() {
      this.noSleep = new NoSleep.default();
      this.noSleep.enable();
      console.log(this.noSleep.noSleepVideo.paused);
    }

    enableNoSleep() {
        this.noSleep.enable();
        this.wakeLockEnabled = true;
        console.log(this.noSleep.noSleepVideo.paused);
    }

    disableNoSleep() {
        this.noSleep.disable();
        this.wakeLockEnabled = false;
        console.log(this.noSleep.noSleepVideo.paused);
    }

}
