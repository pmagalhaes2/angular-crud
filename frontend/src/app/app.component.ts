import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/template/footer/footer.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { NavComponent } from "./components/template/nav/nav.component";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  imports: [HeaderComponent, FooterComponent, NavComponent, RouterModule],
})
export class AppComponent {}
