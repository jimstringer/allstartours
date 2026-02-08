import type { Route } from './+types/home';
import { Container } from '@/components/Container';
import { BusPackageCard } from '@/components/BusPackageCard';
import { UdrivePackageCard } from '@/components/UdrivePackageCard';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Home' }, { name: 'description', content: 'Welcome to All Star Tours!' }];
}

const labourDay = { day: 7, month: 9, year: 2026 };
const labourDayDate = new Date(labourDay.year, labourDay.month - 1, labourDay.day);

export default function HomePage() {
  return (
    <Container className="max-w-3xl text-center">
      <h2>
        Labour <span className="text-primary">Day</span> Classic
      </h2>
      <p>
        <span className="inline-block bg-[#9B8449] p-4 text-lg font-bold text-[#1D3D7A]">
          WINNIPEG BLUE BOMBERS
        </span>{' '}
        vs.{' '}
        <span className="inline-block bg-[#005b3b] p-4 text-lg font-bold text-white">
          SASKATCHEWAN ROUGHRIDERS
        </span>
      </p>
      <p>
        {labourDayDate.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}{' '}
        | Mosaic Stadium, Regina, SK
      </p>
      <p>Visit Mosaic Stadium on Labour Day for an unforgettable experience!</p>
      <div className="font-[sans-serif] text-[#eb8119]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold">Pricing</h2>
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
