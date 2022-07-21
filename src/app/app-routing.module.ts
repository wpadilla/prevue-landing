import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./home/components/contact/contact.component";
import { TermsComponent } from "./home/components/terms/terms.component";
import { PolicyComponent } from "./home/components/policy/policy.component";
import { MissionComponent } from "./home/components/mission/mission.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "terms",
    component: TermsComponent,
  },
  {
    path: "policy",
    component: PolicyComponent
  },
  {
    path: "mission",
    component: MissionComponent,
  },
  {
    path: "**",
    redirectTo: "home",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
