import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IDeliveryMethod} from "../shared/models/deliveryMethod";
import {map} from "rxjs/operators";
import {IOrder, IOrderToCreated} from "../shared/models/IOrderToCreate";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  createOrder(order: IOrderToCreated) {
    return this.http.post<IOrder>(this.baseUrl + 'orders', order);
  }

  getDeliveryMethods() {
    return this.http.get(this.baseUrl + 'orders/deliveryMethods').pipe(
      map((dm: IDeliveryMethod[]) => {
        return dm.sort((a, b) => b.price - a.price);
      })
    );

  }
}
