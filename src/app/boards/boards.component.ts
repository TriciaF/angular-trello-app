import { Component, OnInit } from '@angular/core';
import { Board, List } from '../models';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

lists: List[];

id = 1;

  addList(listName: string): void {
    console.log('addList called');
    const newList: List = { id: this.id, name: listName, cards: [] };
    this.lists.push(newList);
    console.log('This is the new list ', this.lists[this.id]);
    this.id = this.id + 1;
  }

  getLists(): List[] {
    return this.lists;
  }

  constructor() {
    this.lists = [{ id: 0, name: 'First List', cards: [] }];
  }

  ngOnInit() {
    this.getLists();
  }

}
