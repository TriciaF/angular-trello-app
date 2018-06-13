import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LISTS } from './board-data';
import { List } from './models';


@Injectable({
  providedIn: 'root'
})
export class ListsService {
d

  // getLists




  addList(newList: List): Observable<List[]> {
    console.log('Enter listsService: addList');
    LISTS.push(newList);
    return LISTS;
  }



  // deleteList



  constructor() { }
}
