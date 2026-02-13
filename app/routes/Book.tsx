import { Container } from "@/components/Container";

export default function Book() {
  return (
    <Container className="max-w-3xl text-center">
      <p>Booking page coming soon!</p>
      <p>
        In the meantime, please email us at{' '}
        <a href="mailto:info@example.com?subject=Booking%20Inquiry" className="underline">
          info@example.com
        </a>
      </p>
    </Container>
  );
}
