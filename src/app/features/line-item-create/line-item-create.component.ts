import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/models/line-item.model';
import { Product } from 'src/app/models/product.model';
import { Request } from 'src/app/models/request.model';
import { ProductService } from 'src/app/services/product.service';
import { RequestService } from 'src/app/services/request.service';
import { LineItemService } from 'src/app/services/line-item.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css'],
})
export class LineItemCreateComponent implements OnInit {
  lineItem: LineItem = new LineItem();
  request: Request = new Request();
  requestId: number = 0;
  products: Product[] = [];

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private lineItemService: LineItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.requestId = params.id;
        this.requestService.getById(this.requestId).subscribe(
          (data) => {
            if (data.length > 0) {
              this.request = data[0];
            }
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );

    this.productService.getAll().subscribe(
      (data) => {
        this.products = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  createLineItem() {
    console.log(this.lineItem);
    this.lineItemService.createLineItem(this.request).subscribe(
      (data) => {
        console.log(data);
        alert('Save successful!');
        this.router.navigateByUrl('/line/items');
      },
      (error) => console.log(error)
    );
  }
}
