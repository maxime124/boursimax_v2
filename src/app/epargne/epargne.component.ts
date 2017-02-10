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
  private hiddenForm: boolean;

  constructor(
      private route:          ActivatedRoute,
      private epargneService: EpargneService,
      private renderer : Renderer
  ) {
    this.hiddenForm = true;

  }

  ngOnInit(): void {
    this.epargneService.getAccounts().then(
        accounts => this.accounts = accounts
    );
  }

  ngAfterViewInit() {
    const selectDom = this.renderer.selectRootElement('#test_chart');
    var options = {
      title: {
        text: 'ECharts entry example'
      },
      tooltip: {},
      legend: {
        data:['Sales']
      },
      xAxis: {
        data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
      },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    var chartView = echarts.init(selectDom);
    chartView.setOption(options);
  }

  updateListeAccount() {
    this.epargneService.getAccounts().then(
        accounts => this.accounts = accounts
    );
    this.hiddenForm = true;
  }

  displayForm() {
    this.hiddenForm = false;
  }

  delete(id:string) {
    this.epargneService.deleteAccount(id).then(
        deleted => this.updateListeAccount()
    );
  }
}
