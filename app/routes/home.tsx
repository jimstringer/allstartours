import type { Route } from './+types/home';
import { Container } from '@/components/Container';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home' },
    { name: 'description', content: 'Welcome to All Star Tours!' },
  ];
}

export default function HomePage() {
  return (
    <Container className="max-w-3xl text-center">
      <h2>
        Labour <span className="text-primary">Day</span> Classic
      </h2>
      <p>
        <span className="text-primary font-bold">WINNIPEG BLUE BOMPERS</span>
        {' '}vs.{' '}
        <span className="text-primary font-bold">SASKATCHEWAN ROUGHRIDERS</span>
      </p>
      <p>
        September 2, 2024 | 1:00 PM CST | Mosaic Stadium, Regina, SK
      </p>
      <p>
        Visit Mosaic Stadium on Labour Day for an unforgettable experience!
      </p>
    </Container>
  );
}
