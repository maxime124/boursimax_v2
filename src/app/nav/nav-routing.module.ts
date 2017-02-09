import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavCenterComponent }  from './nav-center/nav-center.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: NavCenterComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NavRoutingModule { }