import { Component, OnInit, Input } from '@angular/core';
import { List, Card } from '../models';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  list: List = {
    id: 0,
    name: '',
    cards: []
  };

  cardName: string;
  id = 0;

  addCard(): void {
    const newCard: Card = {
      id: this.id,
      name: this.cardName,
    };
    this.list.cards.push(newCard);
    console.log('Added new card ', this.list.cards[this.id]);
    this.id = this.id + 1;
  }
  constructor() { }

  ngOnInit() {
}
