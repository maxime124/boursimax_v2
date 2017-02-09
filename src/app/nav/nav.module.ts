import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavCenterComponent } from './nav-center/nav-center.component';
import { NavLeftComponent } from './nav-left/nav-left.component';

@NgModule({
  imports: [
    CommonModule,
    NavRoutingModule,
  ],
  declarations: [
      NavComponent,
    NavTopComponent,
    NavCenterComponent,
    NavLeftComponent,
  ],
  exports: [
    NavComponent,
    NavTopComponent,
    NavCenterComponent,
    NavLeftComponent,
  ]
})
export class NavModule { }
