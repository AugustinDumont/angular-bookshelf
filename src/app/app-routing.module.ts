import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardsService } from "./services/auth.guard.services";
import { ErrorComponent } from "./error/error.component";
import { LibraryComponent } from "./library/library.component";
import { AuthComponent } from "./auth/auth.component";
import { ArticleComponent } from "./article/article.component";

const appRoutes: Routes = [
  { path: "", component: AuthComponent },
  {
    path: "library",
    component: LibraryComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: "article/:isbn",
    component: ArticleComponent,
    canActivate: [AuthGuardsService]
  },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
