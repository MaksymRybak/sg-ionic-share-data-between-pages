import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private todosSubject = new BehaviorSubject([]);   // empty array in the beginning
                                                    // todosSubject rapresents the state of our App!

  constructor() { }

  get todos() {
    return this.todosSubject.asObservable();  // used externally to listen the changes
  }

  addTodo(newTodo) {
    const todos = this.todosSubject.value;
    todos.push(newTodo);  // add new value
    this.todosSubject.next(todos);  // update value in the BehaviorSubject
  }

  removeTodo(index) {
    const todos = this.todosSubject.value;
    todos.splice(index, 1); // remove value in the specified index
    this.todosSubject.next(todos);  // update value in the BehaviorSubject
  }

}
