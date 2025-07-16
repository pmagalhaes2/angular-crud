import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { Product } from "../product-create/product.model";
import { ProductService } from "./../product.service";

@Component({
  selector: "app-product-read",
  imports: [MatCardModule, MatListModule, CommonModule],
  templateUrl: "./product-read.component.html",
  styleUrl: "./product-read.component.css",
})
export class ProductReadComponent {
  products: Product[] = [];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.readProducts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}
