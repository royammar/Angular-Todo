import { Component, OnInit, Input } from '@angular/core';
import TodoModel from '../models/todo.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() public todos:TodoModel[]
  constructor() { }
  ngOnInit(): void {
  }

}
