import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() userid: number;
  @Input() filter: boolean;
  @Input() subject: BehaviorSubject<string>;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    // we read input data using @Input() angular fields
    console.log(`User: ${this.userid} - filter: ${this.filter}`);

    // emit new value for our BehaviorSubject, so parent page is able to read it
    setTimeout(() => {
      this.subject.next('a new value...');
    }, 2000);
  }

  close() {
    // to send data back to parent page from modal we use dismiss() with one object parameter used to pass data back
    this.modalCtrl.dismiss({ myreturnvalue: 123 });
  }

}
