import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPagination, IProduct} from "./models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  products: IProduct[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<IPagination>('https://localhost:5001/api/products?pageSize=50').subscribe((pagination: IPagination) => {
      this.products = pagination.data;
    })
  }


}


