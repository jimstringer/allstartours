import type { Route } from './+types/home';
import { Container } from '@/components/Container';
import { BusPackageCard } from '@/components/BusPackageCard';
import { UdrivePackageCard } from '@/components/UdrivePackageCard';


export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home' },
    { name: 'description', content: 'Welcome to All Star Tours!' },
  ];
}



const labourDay = { 'day': 7, 'month': 9 , 'year': 2026 };
const labourDayDate = new Date(labourDay.year, labourDay.month - 1, labourDay.day);


export default function HomePage() {
  return (
    <Container className="max-w-3xl text-center">
      <h2>
        Labour <span className="text-primary">Day</span> Classic
      </h2>
      <p>
        <span className="text-[#1D3D7A] bg-[#9B8449]  text-lg inline-block p-4 font-bold">WINNIPEG BLUE BOMBERS</span>
        {' '}vs.{' '}
        <span className="text-white bg-[#005b3b] text-lg inline-block p-4 font-bold">SASKATCHEWAN ROUGHRIDERS</span>
      </p>
      <p>
        {labourDayDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} |  Mosaic Stadium, Regina, SK
      </p>
      <p>
        Visit Mosaic Stadium on Labour Day for an unforgettable experience!
      </p>
      <div className="font-[sans-serif] text-[#eb8119]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Pricing</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mt-12 max-sm:max-w-sm max-sm:mx-auto">
            <BusPackageCard />
            <UdrivePackageCard />
          </div>
        </div>
      </div>
    </Container>
  );
}
