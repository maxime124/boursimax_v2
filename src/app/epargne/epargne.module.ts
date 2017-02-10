import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpargneRoutingModule } from './epargne-routing.module';
import { EpargneComponent } from './epargne.component';
import { EpargneService } from './epargne.service';
import { AccountFormComponent } from './account-form/account-form.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EpargneRoutingModule
  ],
  declarations: [EpargneComponent, AccountFormComponent,],
  providers: [],
  exports: []
})
export class EpargneModule {

}
