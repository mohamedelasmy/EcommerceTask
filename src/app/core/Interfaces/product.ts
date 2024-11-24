// Exporting the Product interface so it can be used in other parts of the application
export interface Product {
  // Property to hold the unique identifier for the product, of type number
  ProductId: number;

  // Property to hold the name of the product, of type string
  ProductName: string;

  // Property to hold the price of the product, of type number
  ProductPrice: number;

  // Property to indicate the number of available pieces of the product, of type number
  AvailablePieces: number;

  // Property to hold the URL or path of the product image, of type string
  ProductImg: string;
}
