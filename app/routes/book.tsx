import { Container } from '@/components/Container';
import type { Route } from './+types/book';
import { allStarToursEmail, allStarToursPhone } from '@/constants/constants';
import waiver from '@/assets/waiver.pdf';
import registration from '@/assets/registration.pdf';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Book' }, { name: 'description', content: 'Book your tour' }];
}

export default function Book() {


  return (
    <Container className="max-w-3xl text-center">
      <p>For booking inquiries!</p>
      <p>
        Please email us at{' '}
        <a href="mailto:allstartours.mb@gmail.com?subject=Booking%20Inquiry" className="underline text-bomber-gold">
          {allStarToursEmail}
        </a>
      </p>
      <div className="mt-4">
        <div><a className='underline text-bomber-gold' href={'tel:' + allStarToursPhone}>Call Us</a></div>
      </div>
      <div className="mt-4">
        <p>
          <a
            href="https://www.facebook.com/allstartours.ca"
            target="_blank"
            className="inline-flex whitespace-nowrap hover:text-gray-900 "
            rel="noreferrer"
          >Visit us on <span className='px-1 underline text-bomber-gold'>Facebook</span><svg className="w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p className="text-xl font-semibold">To book a tour, Please download and fill out the following:</p>
        <a href={waiver} target="_blank" className="underline text-bomber-gold p-4" rel="noreferrer">Waiver form</a>
        <a href={registration} target="_blank" className="underline text-bomber-gold" rel="noreferrer">Registration form</a>

        <p className="italic font-semibold">A waiver form must be printed, signed and returned to us before the tour</p>
      </div>
    </Container>
  );
}
