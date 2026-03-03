import type { Route } from './+types/about';
import { Container } from '@/components/Container';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'About' }, { name: 'description', content: 'About All Star Tours' }];
}

export default function AboutPage() {
  return (
    <Container className="max-w-3xl space-y-8">
      <div className="">
        <h1 className="text-primary">About Us</h1>
        <div className="ml-8">
          <p className="mt-2">
            For more than 20 years, our company has been bringing football fans together for
            unforgettable Canadian Football League experiences. What started as a simple idea—making
            game day easy, affordable, and fun—has grown into a trusted tradition for hundreds of
            loyal travelers.
          </p>

          <p className="mt-4">Today, we’re proud to continue that tradition under new ownership.</p>

          <p className="mt-4">
            While leadership has changed, our commitment has not. We are dedicated to delivering the
            same reliable service, smooth planning, and exciting game-day atmosphere our customers
            have come to expect. The faces behind the scenes may be new, but the mission remains the
            same: handle every detail so you can focus on the excitement of the game.
          </p>
        </div>
        <h3 className="text-primary mt-8">What We Do</h3>
        <div className="ml-8 px-2">
          <div className="mt-4">We specialize in complete CFL travel packages, including:</div>
          <ul className="list-disc ml-8">
            <li>Comfortable round-trip motorcoach transportation</li>
            <li>Official game-day tickets</li>
            <li>Quality hotel accommodations</li>
            <li>Organized itineraries for a seamless experience</li>
          </ul>

          <p>
            From departure to kickoff and back home again, we take care of everything. Whether
            you’re traveling with friends, family, coworkers, or fellow die-hard fans, we make the
            journey part of the fun.
          </p>
        </div>
        <h3 className="text-primary mt-8">Our Promise</h3>
        <div className="ml-8 px-2">
          <ul className="ml-8 list-disc">
            <li>Safe, comfortable transportation</li>
            <li>Well-organized and stress-free planning</li>
            <li>Competitive pricing and great value</li>
            <li>Friendly, professional service</li>
            <li>A true game-day atmosphere from start to finish</li>
          </ul>

          <p className="mt-4">
            We understand that for many of our customers, these trips are more than just
            transportation—they’re traditions. We are honored to carry that legacy forward and
            excited to welcome both returning travelers and new fans aboard.
          </p>

          <p>Here’s to the next chapter—and many more seasons of unforgettable football weekends</p>
        </div>
      </div>
    </Container>
  );
}
