import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EpargneComponent} from './epargne.component';

const routes: Routes = [
  { path: 'account',  component: EpargneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EpargneRoutingModule { }
