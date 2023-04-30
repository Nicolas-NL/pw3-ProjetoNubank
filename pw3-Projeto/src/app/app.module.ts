import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarManComponent } from './navbar-man/navbar-man.component';
import { BannersComponent } from './banners/banners.component';
import { FooterComponent } from './footer/footer.component';
import { ALoginComponent } from './a-login/a-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarManComponent,
    BannersComponent,
    FooterComponent,
    ALoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
