import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-crud",
  imports: [MatButtonModule],
  templateUrl: "./product-crud.component.html",
  styleUrl: "./product-crud.component.css",
})
export class ProductCrudComponent {
  constructor(private readonly router: Router) {}
  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
