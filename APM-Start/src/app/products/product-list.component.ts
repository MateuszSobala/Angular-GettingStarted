import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService] // register the service
})
export class ProductListComponent implements OnInit {

  // private _productService: ProductService;
  pageTitle = 'Product List'; // Type string trivially inferred from a string literal
  imageWidth = 50; // Type number trivially inferred from a number literal -> imageWidth: number = 50;
  imageMargin = 2;
  showImage = false; // Type boolean trivially inferred from a boolean literal
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter() : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) { // DI; no need to declare the field
    // this._productService = productService;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
    // to download data from backend
    // constructor is triggered before
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List: ' + message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(): IProduct[] {
    const filterBy = this._listFilter.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
