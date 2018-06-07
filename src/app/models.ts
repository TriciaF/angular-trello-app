export class List {
    id: number;
    name: string;
}

export class Board {
    id: number;
    name: string;
    lists: List[];
}
