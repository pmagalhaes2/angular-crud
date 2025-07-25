import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../product-create/product.model";
import { ProductService } from "./../product.service";

@Component({
  standalone: true,
  selector: "app-product-delete",
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: "./product-delete.component.html",
  styleUrl: "./product-delete.component.css",
})
export class ProductDeleteComponent {
  id: string = "";
  product: Product = { id: "", name: "", price: 0 };

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id") || "";
    this.findById();
  }

  findById(): void {
    this.productService.readProductById(this.id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.id).subscribe(() => {
      this.productService.showMessage("Produto excluído com sucesso!");
      this.router.navigateByUrl("/products");
    });
  }

  cancel(): void {
    this.router.navigateByUrl("/products");
  }
}
