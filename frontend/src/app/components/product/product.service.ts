import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Product } from "./product-create/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
  ) {}

  baseUrl: string = "http://localhost:3001/products";

  showMessage(msg: string): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  readProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
