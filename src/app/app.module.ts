import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SidebarModule } from "primeng/sidebar";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SidebarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
