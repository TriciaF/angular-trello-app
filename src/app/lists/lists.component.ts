import { Component, OnInit, Input } from '@angular/core';
import { List } from '../models';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  @Input() list: string;

  constructor() { }

  ngOnInit() {
  }

}
