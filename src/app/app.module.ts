import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
