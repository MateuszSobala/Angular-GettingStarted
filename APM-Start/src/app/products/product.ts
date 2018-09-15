export interface IProduct { // interfaces are not supported in ES2015
  productId: number;
  productName: string;
  productCode?: string;
  releaseDate?: string;
  price?: number;
  description?: string;
  starRating?: number;
  imageUrl?: string;
}
