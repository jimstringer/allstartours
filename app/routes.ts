import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('book', 'routes/book.tsx'),
  route('about', 'routes/about.tsx'),
  route('*', 'routes/404.tsx'),
] satisfies RouteConfig;
