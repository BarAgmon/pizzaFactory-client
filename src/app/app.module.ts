import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomePageComponent } from './home-page/home-page.component';
import {MatCardModule} from '@angular/material/card';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuPageComponent,
    MenuCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
