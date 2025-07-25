import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { HeaderService } from "../../components/template/header/header.service";

@Component({
  selector: "app-home",
  imports: [MatCardModule, MatListModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  constructor(headerService: HeaderService) {
    
    headerService.setHeaderData({
      title: "Início",
      icon: "home",
      routeUrl: "",
    });
  }
}
