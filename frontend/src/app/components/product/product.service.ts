import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
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

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? "msg-error" : "msg-success",
    });
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  readProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readProductById(id: string): Observable<Product> {
    const url = this.baseUrl + "/" + id;
    return this.http.get<Product>(url);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + "/" + product.id;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: string): Observable<void> {
    const url = this.baseUrl + "/" + id;
    return this.http.delete<void>(url);
  }
}
