import { Component } from "@angular/core";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  imports: [HeaderComponent, FooterComponent],
})
export class AppComponent {
  // nome = 'Murilo';
}
