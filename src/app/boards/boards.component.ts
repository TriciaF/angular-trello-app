import { Component, OnInit } from '@angular/core';
import { Board, List } from '../models';
import { ListsService } from '../lists.service';
import { LISTS } from '../board-data';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

lists: List[];

id = 1;
/*
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
*/

  addList(listName: string ): void {
    console.log('enter BoardsComponent: addList');
    listName = listName.trim();
    if (!listName)
      {return}
    const newList: List = {id: this.id, name: listName, cards: [] };
    this.listService.addList( newList )
      .subscribe( list => {
        console.log('this is the list back from listService ', + list);
        this.lists.push(list);
      });

    this.id += 1;
  }

  // deleteList


  constructor(private listService: ListsService) {
  }

  ngOnInit() {
    this.getLists();
  }

}
