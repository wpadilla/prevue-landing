import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SidebarModule } from "primeng/sidebar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeHeroComponent } from './home/components/home-hero/home-hero.component';
import { HomeAboutComponent } from './home/components/home-about/home-about.component';
import { HomeHowComponent } from './home/components/home-how/home-how.component';
import { HomeTestimonialsComponent } from './home/components/home-testimonials/home-testimonials.component';
import { HomePrefooterComponent } from './home/components/home-prefooter/home-prefooter.component';
import { CarouselModule } from "primeng/carousel";
import { ContactComponent } from './home/components/contact/contact.component';
import { MissionComponent } from './home/components/mission/mission.component';
import { PolicyComponent } from './home/components/policy/policy.component';
import { TermsComponent } from './home/components/terms/terms.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HomeHeroComponent,
    HomeAboutComponent,
    HomeHowComponent,
    HomeTestimonialsComponent,
    HomePrefooterComponent,
    ContactComponent,
    MissionComponent,
    PolicyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
