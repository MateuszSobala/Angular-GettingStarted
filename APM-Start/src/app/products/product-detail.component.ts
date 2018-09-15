import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    console.log(this.route.snapshot.paramMap.get('id')); // snapshot to get only initial value
    this.route.paramMap // observable for changing values
      .subscribe(params => {
        const id = +params.get('id');
        console.log(`Observable id: ${id}`);
      });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id'); // + for converting string to numeric value
    this.pageTitle += `: ${id}`;
    this.productService.getProduct(id).subscribe(
      product => {
        this.product = product;
      }
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
