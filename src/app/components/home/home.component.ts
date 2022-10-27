import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = "Laryssa Damaceno Lisboa";
  ra: string = "0050832021033";
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

}