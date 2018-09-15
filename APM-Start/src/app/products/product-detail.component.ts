import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {
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
    this.product = {
      'productId': id,
      'productName': 'product name'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
