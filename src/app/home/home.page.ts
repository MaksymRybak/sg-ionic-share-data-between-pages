import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalPage } from '../modal/modal.page';
import { filter } from 'rxjs/operators';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valueFromChild = '';    // to save value from child component (textbox in out case)

  todos: Observable<string[]>;  // Observable to listen for state changes
  todo = '';

  constructor(
    private modalCtrl: ModalController, 
    private stateService: StateService
  ) {
    this.todos = this.stateService.todos;
  }

  async showModal() {
    // to share data live between parent page and modal we can use BehaviorSubject
    const mySubject = new BehaviorSubject(null);  // BehaviorSubject needs starting value, null in our case
    // subscription to receive data back from modal
    mySubject
      .pipe(filter((data) => !!data))   // to discard null initial value
      .subscribe((res) => {
        console.log('new value while open: ', res);
      });

    // example how open modal page and pass some data into
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        userid: 10,
        filter: true,
        subject: mySubject
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();   // here we read data sent back from modal (using destructuring to save data in data const
                                                    // same as using modal.onDidDismiss()
    console.log('Data after modal close: ', data);
  }

  childChanged(data) {
    // data sent from child component
    this.valueFromChild = data;
  }

  addTodo() {
    this.stateService.addTodo(this.todo);   // update state
    this.todo = '';
  }

  removeTodo(index) {
    this.stateService.removeTodo(index);    // update state
  }
}
