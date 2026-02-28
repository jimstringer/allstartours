import { useNavigate } from 'react-router';
import { udrivePackage } from '@/constants/constants';

export const UdrivePackageCard = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/book');
  };

  return (
    <div className="rounded-md border text-base bg-package p-6">
      <h3 className="mb-1 text-2xl font-semibold">U-Drive Package</h3>
      <p className="text-lg text-gray-500">2 nights</p>
      <div className="mt-6 rounded-md border bg-gray-100 p-4">
        <h2 className="mb-1 text-2xl font-semibold">Dual Room</h2>
        <h3 className="text-2xl font-semibold">
          ${udrivePackage.dualRoom} <sub className="text-xl text-gray-400">per person</sub>
        </h3>
      </div>
      <div className="mt-6 rounded-md border bg-gray-100 p-4">
        <h2 className="mb-1 text-2xl font-semibold">Quad Room</h2>
        <h3 className="text-2xl font-semibold">
          ${udrivePackage.quadRoom} <sub className="text-xl text-gray-400">per person</sub>
        </h3>
      </div>
      <div className="mt-6">
        <h4 className="mb-1 text-xl font-semibold">Includes</h4>
        <ul className="mt-6 space-y-4">
          {udrivePackage.include.map((item, index) => (
            <li key={index} className="flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                className="mr-3 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-6 w-full rounded-md bg-bomber-gold px-2 py-2 text-sm font-semibold text-bomber-blue hover:bg-bomber-blue hover:text-bomber-gold"
          onClick={handleBookNow}
        >
          Book now
        </button>
      </div>
    </div>
  );
};
