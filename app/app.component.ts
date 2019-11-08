import { Component } from '@angular/core';
import { Indicator, IndicatorAnimations } from './indicator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: IndicatorAnimations
})
export class AppComponent  {
  eventText = '';
  indicators;
  where = '';
  a = 10;
  treshold = 0.7;

  constructor() {
    this.indicators = new Indicator();
  }

  onPinch(evt) {
    //this.eventText += 'Pinch' + '<br />';
    if (this.where === '+') {
      this.a += this.treshold * evt.scale;
    } else {
      this.a -= this.treshold * evt.scale;
    }
    this.eventText = this.a.toString()
  }

  onPinchStart(evt) {
    this.eventText = 'Pinch Started <br />';
    this.indicators.gestureIndicators = [];
    this.indicators.display(evt.center.x, evt.center.y, 50);
  }

  onDoubleTap(evt) {
    evt.scale = 1;
  }

  onPinchEnd(evt) {
    this.eventText += 'Pinch End <br />';
    this.indicators.hide(this.indicators.gestureIndicators[0]);
  }

  onPinchIn(evt) {
    this.where = '-';
    //this.a += 0.5;
    //this.eventText = this.a.toString();

  }
  onPinchOut(evt) {
    this.where = '+';
    //this.a += 0.5;
    //this.eventText = this.a.toString();

  }
}
