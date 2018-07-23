import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { HighlightDirective } from './highlight.directive';

import { CityDirective } from './city.directive';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import {Service1Service} from './service1.service';
import { Pip1Pipe } from './pip1.pipe';
import { PractiseComponent } from './practise/practise.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,MatCardModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { TableBasicComponent } from './table-basic/table-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    ReactiveComponent,
    HighlightDirective,
    CityDirective,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Pip1Pipe,
    PractiseComponent,
    NavComponent,
    TableBasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   ReactiveFormsModule,
   BrowserAnimationsModule,
   HttpClientModule,
   LayoutModule,
   MatToolbarModule,
   MatCardModule,
   MatButtonModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
