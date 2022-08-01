import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent implements OnInit {
  @Input() title: string;                                           // to bring data from parent 
  @Output() textChanged: EventEmitter<string> = new EventEmitter(); // to send data to parent 
  myText = '';

  constructor() { }

  ngOnInit() {}

  inputChanged() {
    this.textChanged.emit(this.myText); // update parent
  }

}
