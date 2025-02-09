import { Publisher, OrderCreatedEvent, Subjects } from '@ticketappnvdev/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
