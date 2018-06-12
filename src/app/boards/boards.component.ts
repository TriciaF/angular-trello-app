import { Component, OnInit } from '@angular/core';
import { Board, List } from '../models';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

board: Board  = {
  id: 0,
  name: 'Trello Board',
  lists: [{
    id: 0,
    name: 'First List',
    cards: []
  }]
};

id = 1;

  addList(listName: string): void {
    const newList: List = { id: this.id, name: listName, cards: [] };
    this.board.lists.push(newList);
    console.log('This is the new list ', this.board.lists[this.id]);
    this.id = this.id + 1;
  }

  getLists(): List[] {
    return this.board.lists;
  }

  constructor() { }

  ngOnInit() {
    this.getLists();
  }

}
