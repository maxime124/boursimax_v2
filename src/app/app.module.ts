import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { EpargneComponent } from './epargne/epargne.component';
import { NavModule }        from './nav/nav.module';
import { AlertModule }      from 'ng2-bootstrap';
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EpargneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavModule,
    AlertModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
