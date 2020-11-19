import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@ticketappnvdev/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
