import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  imports: [MatToolbarModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export default class HeaderComponent {
  constructor(private readonly headerService: HeaderService) {}

  get title(): string {
    return this.headerService.getHeaderData().title;
  }

  get icon(): string {
    return this.headerService.getHeaderData().icon;
  }

  get routeUrl(): string {
    return this.headerService.getHeaderData().routeUrl;
  }

}
