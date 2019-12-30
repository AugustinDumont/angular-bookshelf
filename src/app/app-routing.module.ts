import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./services/auth-guard";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";

const routes: Routes = [
  {
    path: "home",
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  { path: "auth", component: AuthComponent },
  { path: "", component: AuthComponent },
  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
