import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { NgZorroAntdModule, NZ_I18N, fr_BE } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import fr from "@angular/common/locales/fr";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_BE }, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
