import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpargneRoutingModule } from './epargne-routing.module';
import { EpargneComponent } from './epargne.component';
import { EpargneService } from './epargne.service';

@NgModule({
  imports: [
    CommonModule,
    EpargneRoutingModule
  ],
  declarations: [EpargneComponent],
  providers: []
})
export class EpargneModule {

}
