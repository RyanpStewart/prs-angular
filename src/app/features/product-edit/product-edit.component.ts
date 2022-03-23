import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  productId: number = 0;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params.id;

      this.productService.getById(this.productId).subscribe(
        (data) => {
          if (data.length > 0) {
            this.product = data[0];
          }
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
  editProduct() {
    console.log(this.product.id);
    this.productService.editById(this.product, this.productId).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/product/list');
      },
      (error) => console.log(error)
    );
  }
}
