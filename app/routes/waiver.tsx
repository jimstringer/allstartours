import { Container } from '@/components/Container';

export default function Waiver() {
  return (
    <Container className="text-center">
      <h1>Waiver</h1>
      <embed src="/waiver.pdf" width="100%" height="600px" type="application/pdf" />
    </Container>
  );
}
