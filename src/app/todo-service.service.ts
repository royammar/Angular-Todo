import { Injectable } from '@angular/core';
import TodoModel from './models/todo.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private _todos: TodoModel[] = [
    { _id: '2', txt: 'find a job', isActive: true, image: "https://res.cloudinary.com/dxxsrzs8t/image/upload/v1595183187/umcxlvsnqx2ippwk3doy.jpg" },
    { _id: '1', txt: 'Dont forget to eat pizza', isActive: true, image: 'https://res.cloudinary.com/dxxsrzs8t/image/upload/v1595179123/hpcdqexff601cwqcj4jm.jpg' },
    { _id: '3', txt: 'finish the task', isActive: true, image: "https://res.cloudinary.com/dxxsrzs8t/image/upload/v1595183253/vtuvdqu9ljgdngnj4apr.jpg" },
  ];
  private _todos$ = new BehaviorSubject<Array<TodoModel>>([])
  public todos$ = this._todos$.asObservable()

  constructor() { }

  public loadTodos(filterBy = null): void {
    let todos = this._todos;
    if (filterBy) {
      todos = this._filter(filterBy, todos)
    }
    this._todos$.next(todos)
  }

  public getTodoById(id: string): Observable<TodoModel> {
    let todo = this._todos.find(todo => todo._id === id)
    todo = { ...todo }
    return of(todo)
  }

  public deleteTodo(id: string) {
    this._todos = this._todos.filter(todo => todo._id !== id)
    this._todos$.next(this._todos)
  }

  public saveTodo(todo: TodoModel) {

    return todo._id ? this._updateTodo(todo) : this._addTodo(todo)
  }
  public toggleTodo(todo: TodoModel) {
    todo.isActive = !todo.isActive
    this._todos = this._todos.map(c => todo._id === c._id ? todo : c)
    this._todos$.next(this._todos)
  }


  public sortTodos() {
    this._todos$.next(this._sort(this._todos))
  }


  private _updateTodo(todo: TodoModel) {
    this._todos = this._todos.map(c => todo._id === c._id ? todo : c)
    this._todos$.next(this._todos)
  }

  private _addTodo(todo: TodoModel) {
   
    const newTodo = new TodoModel(todo.txt,todo.image);
    console.log(newTodo,'new');
    newTodo.setId();
    // (todo.image) ? newTodo.setImage(todo.image) : null
    this._todos.push(newTodo)
    this._todos$.next(this._todos)
  }





  private _sort(arr: TodoModel[]): TodoModel[] {
    return arr.sort((a, b) => {
      if (a.txt.toLocaleLowerCase() < b.txt.toLocaleLowerCase()) {
        return -1;
      }
      if (a.txt.toLocaleLowerCase() > b.txt.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }



  private _filter(filterBy: string, todos: TodoModel[]) {
    return todos.filter(todo => {
      return todo.txt.toLocaleLowerCase().includes(filterBy)
    })
  }


}