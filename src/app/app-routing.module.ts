import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoEditComponent } from './cmps/todo-edit/todo-edit.component';


const routes: Routes = [
  { path: '*', component: AppComponent   },
  { path: 'todos/edit/:id', component:TodoEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
