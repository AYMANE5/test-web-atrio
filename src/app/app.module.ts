import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';
import { M3Component } from './m3/m3.component';

@NgModule({
  declarations: [
    AppComponent,
    M1Component,
    M2Component,
    M3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
