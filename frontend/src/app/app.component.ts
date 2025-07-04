import { Component } from "@angular/core";
import { FooterComponent } from "./components/template/footer/footer.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { ProductsListComponent } from "./components/template/products-list/products-list.component";


@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  imports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductsListComponent
  ],
})
export class AppComponent {
}
