import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {Account} from "../class/account";
import { EpargneService } from './epargne.service';

@Component({
  selector: 'app-epargne',
  templateUrl: './epargne.component.html',
  styleUrls: ['./epargne.component.css'],
  providers:      [EpargneService]
})
export class EpargneComponent implements OnInit {
  accounts: Account[];
  private hiddenForm: boolean;

  constructor(
      private route:          ActivatedRoute,
      private epargneService: EpargneService
  ) {
    this.hiddenForm = true;
  }

  ngOnInit(): void {
    this.epargneService.getAccounts().then(
        accounts => this.accounts = accounts
    );
  }

}
