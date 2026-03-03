import type { Route } from './+types/legal';
import { Container } from '@/components/Container';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Legal' }, { name: 'description', content: 'All Star Tours terms and conditions' }];
}

export default function Legal() {
  return (
    <Container className="text-center">
      <h1>Legal</h1>

    </Container>
  );
}