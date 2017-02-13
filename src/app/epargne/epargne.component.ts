import { Component, OnInit,Renderer,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {Account} from "../class/account";
import { EpargneService } from './epargne.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-epargne',
  templateUrl: './epargne.component.html',
  styleUrls: ['./epargne.component.css'],
  providers:      [EpargneService]
})

export class EpargneComponent implements OnInit,AfterViewInit {
  accounts: Account[];
  chartView: any;
  private hiddenForm: boolean;

  constructor(
      private route:          ActivatedRoute,
      private epargneService: EpargneService,
      private renderer : Renderer
  ) {
    this.hiddenForm = true;

  }

  ngOnInit(): void {
    this.epargneService.getAccounts().subscribe(
        accounts => {
          this.majAccountsData(accounts);
          console.log(accounts);
        }
    );
  }

  ngAfterViewInit() {
    const selectDom = this.renderer.selectRootElement('#test_chart');
    this.chartView = echarts.init(selectDom);
  }

  /**
   * Fonction appelée quand les accounts sont mis à jour
   */
  majAccountsData(accounts) {
    this.accounts = accounts;

    this.chartView.setOption(Account.getGraphOptionsFromAccounts(accounts));
  }

  updateListeAccount() {
    this.epargneService.getAccounts().subscribe(
        accounts => {
          this.majAccountsData(accounts);
        }
    );
    this.hiddenForm = true;
  }

  displayForm() {
    this.hiddenForm = false;
  }

  delete(id:string) {
    this.epargneService.deleteAccount(id).subscribe(
        deleted => this.updateListeAccount()
    );
  }
}
