import { OrderProduct } from "./orderProduct";

export interface Order { // Declares and exports an interface named 'Order'
  OrderId: number; // Defines a property 'OrderId' of type 'number' to represent the unique identifier for the order
  UserId: string; // Defines a property 'UserId' of type 'string' to represent the identifier of the user who placed the order
  OrderDate: Date; // Defines a property 'OrderDate' of type 'Date' to represent the date when the order was placed
  PaymentType: string; // Defines a property 'PaymentType' of type 'string' to represent the method of payment used for the order
  Products: OrderProduct[]; // Defines a property 'Products' which is an array of 'OrderProduct' objects, representing the products included in the order
}
