import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from '@ticketappnvdev/common';

import { deleteOrderRouter } from './routes/delete';
import { showOrderRouter } from './routes/show';
import { indexOrderRouter } from './routes/index';
import { newOrderRouter } from './routes/new';

const app = express();
app.set('trust proxy', true); // because we go through ingress-nginx proxy
app.use(json());
app.use(
  cookieSession({
    signed: false, // no encryption to improve cross-language compatibility
    secure: process.env.NODE_ENV !== 'test', // set cookie with http in test mode, only with https otherwise
  })
);
app.use(currentUser);

app.use(newOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter);
app.use(deleteOrderRouter);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
