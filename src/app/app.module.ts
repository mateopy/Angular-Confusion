import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule,MatGridListModule,MatButtonModule,MatCardModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule, 
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    
    
    FlexLayoutModule
  ],
  
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
