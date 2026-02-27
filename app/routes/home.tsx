import type { Route } from './+types/home';
import { Container } from '@/components/Container';
import { BusPackageCard } from '@/components/BusPackageCard';
import { UdrivePackageCard } from '@/components/UdrivePackageCard';
import { labourDay } from '@/constants/constants';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'All Star Tours' },
    { name: 'description', content: 'Welcome to All Star Tours!' },
  ];
}

const labourDayDate = new Date(labourDay.year, labourDay.month - 1, labourDay.day);

export default function HomePage() {
  return (
    <Container className="max-w-3xl text-center">
      <h2>
        Labour <span className="">Day</span> Classic
      </h2>
      <div>
        <div className="bg-bomber-gold text-bomber-blue p-4 text-lg font-bold md:inline-block">
          WINNIPEG BLUE BOMBERS
        </div>
        <div className="p-2 text-lg font-bold md:inline-block md:p-4">vs.</div>
        <div className="bg-sask-green p-4 text-lg font-bold text-white md:inline-block">
          SASKATCHEWAN ROUGHRIDERS
        </div>
      </div>
      <p>
        {labourDayDate.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}{' '}
        | Mosaic Stadium, Regina, SK
      </p>
      <p>Visit Mosaic Stadium on Labour Day for an unforgettable experience!</p>
      <div className="font-[sans-serif] text-primary">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold">{labourDayDate.getFullYear()} Pricing</h2>
          </div>
          <div className="mt-12 grid gap-8 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-2">
            <BusPackageCard />
            <UdrivePackageCard />
          </div>
        </div>
      </div>
    </Container>
  );
}
