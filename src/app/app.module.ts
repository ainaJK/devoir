import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import{FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './menu/dishdetail/dishdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
