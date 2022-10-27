import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.css'],
})
export class MultiplicationTableComponent implements OnInit {
  @Input() num: number = 0;

  counter = 0;

  constructor() {}

  ngOnInit() {}

  MultiplicationTable() {
    var multiTable = '';
    var value = this.num;
    for (var count = 1; count <= 10; count++) {
      multiTable +=
        this.num + ' X ' + count + ' = ' + Number(this.num) * count + `\n`;
    }
    return multiTable;
  }
}
