import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ticketappnvdev/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
