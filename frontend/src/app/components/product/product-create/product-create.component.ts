import { Product } from "./product.model";
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

  product: Product = {
    name: "",
    price: 0,
  };

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado com sucesso!");
      this.router.navigateByUrl("/products");
    });
  }

  cancel(): void {
    this.router.navigateByUrl("/products");
  }
}
