import { Component, OnInit, Input } from '@angular/core';
import { List } from '../models';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {


 @Input() list: List = {
    id: 1,
    name: 'Task List',
  };

  constructor() { }

  ngOnInit() {
  }

}
