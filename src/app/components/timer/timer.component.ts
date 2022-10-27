import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  counter: number = 0;
  timer = setInterval(() => {
    this.counter++;
  }, 1000);

  constructor() {}

  ngOnInit() {}
}
