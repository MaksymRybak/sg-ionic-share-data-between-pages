import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  birthday: any = new Date();
  amount: number = 100;

  constructor() { }

  ngOnInit() {
  }

}
