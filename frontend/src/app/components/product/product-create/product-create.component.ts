import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "./product.model";

@Component({
  selector: "app-product-create",
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: "./product-create.component.html",
  styleUrl: "./product-create.component.css",
})
export class ProductCreateComponent {
  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) {}

  productName: string = "";
  productPrice: number | undefined = undefined;

  createProduct(): void {
    if (!this.productName.trim()) {
      this.productService.showMessage("Nome do produto é obrigatório!");
      return;
    }

    if (this.productPrice === undefined || this.productPrice <= 0) {
      this.productService.showMessage("Preço deve ser maior que zero!");
      return;
    }

    const product: Product = {
      name: this.productName.trim(),
      price: this.productPrice,
    };

    this.productService.createProduct(product).subscribe(() => {
      this.productService.showMessage("Produto criado com sucesso!");
      this.router.navigateByUrl("/products");
    });
  }

  cancel(): void {
    this.router.navigateByUrl("/products");
  }
}
