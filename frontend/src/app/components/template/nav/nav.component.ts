import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { WhiteDirective } from "../../../directives/whiteDirective";

@Component({
  selector: "app-nav",
  imports: [MatSidenavModule, MatListModule, WhiteDirective, CommonModule],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.css",
})
export class NavComponent {

  createProduct(): void {
    console.log("Produto criado.");
  }
}
