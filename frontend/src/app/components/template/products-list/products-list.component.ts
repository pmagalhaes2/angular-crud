import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";

let listItems = [
  {
    id: 1,
    name: "Produto 1",
  },
  {
    id: 2,
    name: "Produto 2",
  },
  {
    id: 2,
    name: "Produto 3",
  },
];

@Component({
  selector: "app-products-list",
  imports: [MatListModule, CommonModule],
  templateUrl: "./products-list.component.html",
  styleUrl: "./products-list.component.css",
})
export class ProductsListComponent {
  listItems = listItems;
}
