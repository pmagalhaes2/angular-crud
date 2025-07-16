import { CommonModule, registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { Product } from "../product-create/product.model";
import { ProductService } from "./../product.service";

import localePt from "@angular/common/locales/pt";

registerLocaleData(localePt);

@Component({
  selector: "app-product-read",
  imports: [MatListModule, CommonModule, MatTableModule],
  templateUrl: "./product-read.component.html",
  styleUrl: "./product-read.component.css",
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
})
export class ProductReadComponent {
  products: Product[] = [];
  displayedColumns = ["id", "name", "price"];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.readProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
