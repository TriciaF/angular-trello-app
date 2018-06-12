import { Component, OnInit, Input } from '@angular/core';
import { List, Card } from '../models';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input() lists;

  cards: Card[];

  id = 0;

  addCard(cardName: string): void {
    console.log('addCard called');
    this.cards.push({
      id: this.id,
      name: cardName
    });
    console.log('Added new card ', this.cards[this.id]);
    this.id += 1;
  }

  getCards(): Card[] {
    return this.cards;
  }

  constructor() {
    this.cards = [{ id: 0, name: '' }];
   }

  ngOnInit() {
    this.getCards();
}
