import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@ticketappnvdev/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
