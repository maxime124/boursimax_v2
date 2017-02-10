import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { Account }  from '../../class/account';
import { EpargneService } from '../epargne.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
  providers: [EpargneService]
})
export class AccountFormComponent {
  @Output() onAdded = new EventEmitter<Account>();

  model = new Account('',0);

  constructor(
      private epargneService: EpargneService
  ) {
  }

  onSubmit() {
    this.epargneService.create(Object.assign({}, this.model)).then(
        account => this.onAdded.emit(account)
    );
  }

  get diagnostic() { return JSON.stringify(this.model); }
}