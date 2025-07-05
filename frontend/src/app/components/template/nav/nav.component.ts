import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterLink, RouterOutlet } from "@angular/router";
import { WhiteDirective } from "../../../directives/whiteDirective";

@Component({
  selector: "app-nav",
  imports: [
    MatSidenavModule,
    MatListModule,
    WhiteDirective,
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.css",
})
export class NavComponent {}
