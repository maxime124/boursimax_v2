import { Component, OnInit } from '@angular/core';
import { Link }       from '../../class/link';

@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})

export class NavTopComponent {
  name: string;
  links: Link[];
  active: string;

  constructor() {
    this.name = "PP test";
    this.links = [
      {
        code:   "a",
        name:   "a",
        path:   "#"
      },
      {
        code:   "a",
        name:   "b",
        path:   "#"
      }
    ]

    if(this.links[0])
      this.active = this.links[0].code;
  }
}
