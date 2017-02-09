import { Component, OnInit } from '@angular/core';
import { Link }       from '../../class/link';

@Component({
  selector: 'nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})

export class NavLeftComponent {
  links: Link[];

  constructor() {
    this.links = [{
      code: "home",
      name: "home",
      path: "/home"
    },
      {
        code: "account",
        name: "account",
        path: "/account"
      }];
  }
}
