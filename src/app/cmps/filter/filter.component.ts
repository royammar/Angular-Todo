
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterBy: string = null
  @Output() onFilter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  inputChange(event): void {
    this.filterBy = event.target.value
    this.onFilter.emit(this.filterBy)
  }

}
