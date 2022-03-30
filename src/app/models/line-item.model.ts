import { Product } from "./product.model";
import { Request } from "./request.model";

export class LineItem {
  id: number
  request: Request;
  product: Product;
  quantity: number;

  constructor(id: number = 0, request: Request = new Request(),
              product: Product = new Product(), quantity: number = 0) {
                this.id = id;
                this.request = request;
                this.product = product;
                this.quantity = quantity;


              }
}
