import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { 
  MatToolbarModule,MatGridListModule,MatButtonModule,MatCardModule, MatListModule, MatInputModule, MatCheckboxModule,
  MatDialogModule, MatSlideToggleModule, MatSelectModule, MatProgressSpinnerModule, MatSliderModule, MatSlider
} from '@angular/material';  


import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { ProcessHttpMsgService } from './services/process-httpmsg.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { baseURL } from './shared/baseurl';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  entryComponents: [
    LoginComponent
],
  
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHttpMsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
