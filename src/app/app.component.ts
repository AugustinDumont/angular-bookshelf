import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
// import "rxjs/add/observable/interval";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-bookshelf";
}
