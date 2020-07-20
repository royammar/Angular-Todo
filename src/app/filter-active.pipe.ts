import { Pipe, PipeTransform } from '@angular/core';
import TodoModel from './models/todo.model';

@Pipe({
  name: 'filterActive',
  pure: false
})
export class FilterActivePipe implements PipeTransform {

  transform(todos:any, ...args: unknown[]): unknown {
    let length= todos.filter(todo=>todo.isActive).length
    return length
  }


}
