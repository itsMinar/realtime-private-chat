import { Elysia } from 'elysia';

const rooms = new Elysia({ prefix: '/room' }).post('/create', () => {
  const hello = 'Hello from Post Romm';

  return {
    hello,
  };
});

const app = new Elysia({ prefix: '/api' }).use(rooms);

export const GET = app.fetch;
export const POST = app.fetch;

export type App = typeof app;
