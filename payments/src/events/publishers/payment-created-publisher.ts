import {
  Publisher,
  Subjects,
  PaymentCreatedEvent,
} from '@ticketappnvdev/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
