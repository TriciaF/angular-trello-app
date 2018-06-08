import { Component, OnInit } from '@angular/core';
import { Board, List } from '../models';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  board: Board = {
    id: 1,
    name: 'Test Board',
    lists: [],
  };

  selectedList: List = {
    id: 1,
    name: 'Test List',
  };

  constructor() { }

  ngOnInit() {
  }

}
