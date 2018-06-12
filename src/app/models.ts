 export class Card {
    id: number;
    name: string;
 }

 export class List {
    id: number;
    name: string;
    cards: Card[];
}

export class Board {
    id: number;
    name: string;
    lists: List[];
}
