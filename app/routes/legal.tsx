import type { Route } from './+types/legal';
import { Container } from '@/components/Container';
import terms from '@/assets/terms.pdf';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Legal' },
    { name: 'description', content: 'All Star Tours terms and conditions' },
  ];
}

export default function Legal() {
  return (
    <Container className="text-center">
      <h3>TERMS, CONDITIONS & OPERATING POLICIES</h3>
      <h3>All-Star Tours Bus Services</h3>

      <div>Effective Date: December 17, 2025</div>
      <div className="text-left">
        <h4>1. Introduction</h4>
        <p>
          Welcome to All-Star Tours (“Company,” “we,” “our,” or “us”). By booking or using our tour
          bus services, you (“Customer,” “Passenger,” or “Client”) agree to comply with and be bound
          by the following Terms & Conditions.
        </p>
        <p>
          These Terms apply to all bookings, whether made online, by phone, email, in person, or
          through third parties.
        </p>
        <h4 className="mt-8">2. Booking & Payment Policy</h4>
        <div className="mb-8 ml-8">
          <h5>2.1 Reservations</h5>
          <ul className="mb-8 ml-8 list-disc">
            <li>All reservations must be confirmed in writing.</li>

            <li>Bookings are subject to vehicle availability.</li>
            <li>A booking is not confirmed until the required deposit is received.</li>
          </ul>
          <h5>2.2 Deposits</h5>
          <ul className="mb-8 ml-8 list-disc">
            <li>A non-refundable deposit of $100.00 is required to secure a reservation.</li>

            <li>The deposit amount will be credited toward the total booking fee.</li>
          </ul>
          <h5>2.3 Final Payment</h5>
          <ul className="mb-8 ml-8 list-disc">
            <li>Full payment is due by July 1 each year. </li>

            <li>Failure to pay on time may result in cancellation without refund of deposit.</li>
          </ul>
          <h5>2.4 Accepted Payment Methods</h5>
          <ul className="mb-8 ml-8 list-disc">
            <li>Cheque</li>

            <li>Bank Transfer</li>

            <li>Cash </li>
          </ul>
        </div>
        <h4>3. Cancellation & Refund Policy</h4>
        <div className="mb-8 ml-8">
          <h5>3.1 Customer Cancellations</h5>
          <ul className="mb-8 ml-8 list-disc">
            <li>No refunds will be given due to limited space availability. </li>
            <li>
              Consideration may be given in certain circumstances on a case by case basis.
            </li>{' '}
          </ul>
          <h5>3.2 Company Cancellations</h5>
          <p>We reserve the right to cancel due to:</p>
          <ul className="mb-8 ml-8 list-disc">
            <li>Mechanical failure</li>

            <li>Unsafe weather conditions</li>

            <li>Insufficient passenger numbers (for shared tours)</li>

            <li>Force majeure events</li>
          </ul>
          <p>If cancelled by the Company, customers will receive:</p>
          <ul className="mb-8 ml-8 list-disc">
            <li>Full refund OR</li>

            <li>Option to reschedule</li>
          </ul>
          <p>
            We are not responsible for incidental or consequential expenses (e.g., hotel, flights,
            event tickets).
          </p>
        </div>
        <h4>4. Passenger Conduct Policy</h4>
        <div className="mb-8 ml-8">
          <p>To ensure safety and comfort:</p>
          <p>Passengers must:</p>
          <ul className="mb-8 ml-8 list-disc">
            <li>Follow driver instructions at all times</li>

            <li>Remain seated when the bus is in motion (where applicable)</li>

            <li>Wear seatbelts if provided</li>
          </ul>
          <p>Prohibited:</p>
          <ul className="mb-8 ml-8 list-disc">
            <li>Illegal drugs</li>
            <li>Smoking or vaping (unless explicitly allowed)</li>
            <li>Excessive alcohol consumption</li>
            <li>Vandalism or damage to vehicle</li>
            <li>Disruptive or abusive behavior</li>
          </ul>
          <p>We reserve the right to remove any passenger without refund for misconduct.</p>
        </div>
        <h4>5. Alcohol Policy</h4>
        <ul className="mb-8 ml-8 list-disc">
          <li>Alcohol is permitted only if pre-approved. </li>
          <li>Legal drinking age laws apply. </li>
          <li>
            The Company reserves the right to refuse alcohol service or consumption if behavior
            becomes unsafe.
          </li>
        </ul>
        <h4>6. Damage & Cleaning Fees</h4>
        <div className="mb-8 ml-8">
          <p>The booking party is financially responsible for:</p>
          <ul className="mb-8 ml-8 list-disc">
            <li>Damage to the vehicle </li>
            <li>Excessive cleaning (vomit, spills, trash, etc.)</li>
            <li> Repair costs and downtime</li>
          </ul>
        </div>
        <h4>7. Delays & Overtime</h4>
        <div className="mb-8 ml-8">
          <h5>7.1 Customer Delays</h5>
          <ul className="mb-8 ml-8 list-disc">
            <li>Late departures may reduce tour time.</li>
          </ul>
          <h5>7.2 Traffic & Unforeseen Delays</h5>
          <p>We are not liable for delays caused by: </p>
          <ul className="mb-8 ml-8 list-disc">
            <li>Traffic</li>
            <li>Road closures</li>
            <li>Weather</li>
            <li>Accidents</li>
            <li>Government actions</li>
          </ul>
        </div>
        <h4>8. Itinerary Changes</h4>
        <ul className="mb-8 ml-8 list-disc">
          <li>Minor route adjustments may occur due to safety or logistics.</li>{' '}
          <li>Significant changes will be communicated promptly.</li>{' '}
          <li>Custom itineraries must be confirmed in writing.</li>
        </ul>
        <h4>9. Luggage & Personal Belongings</h4>
        <ul className="mb-8 ml-8 list-disc">
          <li>Passengers are responsible for their belongings.</li>
          <li>We are not liable for lost, stolen, or damaged items.</li>
          <li>
            {' '}
            Unclaimed items may be disposed of after <strong>30 days</strong>.
          </li>
        </ul>
        <h4>10. Safety & Liability</h4>
        <ul className="mb-8 ml-8 list-disc">
          <li>
            All vehicles are maintained in compliance with applicable transportation regulations.
          </li>
          <li>Drivers are properly licensed and trained.</li>{' '}
          <li>The Company’s liability is limited to the cost of the booking.</li>{' '}
          <li>We are not responsible for injuries resulting from passenger negligence.</li>
        </ul>
        <p>Passengers assume inherent risks associated with travel.</p>
        <h4 className='mt-8'>11. Force Majeure</h4>
        <div>
          The Company is not liable for failure to perform due to events beyond reasonable control,
          including but not limited to:
          <ul className="mb-8 ml-8 list-disc">
            <li> Natural disasters</li>
            <li>Government restrictions</li>
            <li>Labor strikes</li>
            <li>Pandemics</li>
            <li>Civil unrest</li>
          </ul>
        </div>
        <h4>12. Accessibility</h4>
        <p>
          We strive to accommodate passengers with disabilities.
          <br /> Advance notice of special needs is required at booking.
        </p>
        <h4 className='mt-8'>13. Privacy Policy</h4>
        <div>
          <p>We collect personal information for:</p>{' '}
          <ul className="mb-8 ml-8 list-disc">
            <li>Booking management</li> <li>Payment processing </li>
            <li>Customer service</li>
            <li>Marketing (with consent) </li>
          </ul>
          <p>
            We do not sell personal data to third parties.
            <br /> Information is stored securely and retained only as necessary.
          </p>
        </div>
        <h4 className='mt-8'>14. Photography & Media Release</h4>
        <div><p>Unless otherwise requested in writing:</p>
        <ul className="mb-8 ml-8 list-disc">
          <li>The Company may use photos or videos taken during tours for promotional purposes.
          </li>
          <li>Customers may opt out before the tour.</li>
        </ul></div>
        <h4>15. Agreement</h4>
        <p>By booking or boarding the vehicle, you acknowledge that you have read, understood, and
        agree to these Terms & Conditions.</p>
      </div>
    </Container>
  );
}
