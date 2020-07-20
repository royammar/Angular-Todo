import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './cmps/todo-list/todo-list.component';
import { TodoPreviewComponent } from './cmps/todo-preview/todo-preview.component';
import { TodoEditComponent } from './cmps/todo-edit/todo-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SortablejsModule} from 'ngx-sortablejs';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './cmps/filter/filter.component';
import { FilterActivePipe } from './filter-active.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoPreviewComponent,
    TodoEditComponent,
    NavbarComponent,
    FooterComponent,
    FilterComponent,
    FilterActivePipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SortablejsModule.forRoot({ animation: 150 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
