import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpargneRoutingModule } from './epargne-routing.module';
import { EpargneComponent } from './epargne.component';

@NgModule({
  imports: [
    CommonModule,
    EpargneRoutingModule
  ],
  declarations: [EpargneComponent]
})
export class EpargneModule {

}
