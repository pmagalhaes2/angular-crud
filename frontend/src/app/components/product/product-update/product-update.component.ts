import { Component, LOCALE_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-update",
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: "./product-update.component.html",
  styleUrl: "./product-update.component.css",
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
})
export class ProductUpdateComponent {
  product: Product = { id: "", name: "", price: 0 };

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.productService.readProductById(id).subscribe((product) => {
        this.product = product;
      });
    }
  }

  updateProduct(): void {
    if (this.product) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.productService.showMessage("Produto alterado com sucesso!");
        this.router.navigateByUrl("/products");
      });
    }
  }

  cancel(): void {
    this.router.navigateByUrl("/products");
  }
}
