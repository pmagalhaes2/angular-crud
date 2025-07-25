import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HeaderData } from "./header-data-model";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  private readonly _headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    routeUrl: "/",
  });

  constructor() {}

  getHeaderData(): HeaderData {
    return this._headerData.value;
  }

  setHeaderData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
