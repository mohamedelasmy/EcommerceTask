import { OrderProduct } from "./orderProduct";

export interface Order {
  OrderId: number;
  UserId: string;
  OrderDate: Date;
  PaymentType: string;
  Products: OrderProduct[];
}
