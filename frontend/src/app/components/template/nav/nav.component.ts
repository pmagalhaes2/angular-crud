import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { WhiteDirective } from "../../../directives/whiteDirective";
import { HomeComponent } from "../../../views/home/home.component";

@Component({
  selector: "app-nav",
  imports: [
    MatSidenavModule,
    MatListModule,
    WhiteDirective,
    CommonModule,
    HomeComponent,
  ],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.css",
})
export class NavComponent {
}
