import { Component } from "@angular/core";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-product-create",
  imports: [MatButtonModule],
  templateUrl: "./product-create.component.html",
  styleUrl: "./product-create.component.css",
})
export class ProductCreateComponent {
  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) {}

  createProduct(): void {
    this.productService.showMessage("Operação executada com sucesso!");
  }

  cancel(): void {
    this.router.navigateByUrl("/products");
  }
}
