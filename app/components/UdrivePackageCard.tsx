import { useNavigate } from "react-router";

const udrivePackage = {
  dualRoom: 430,
  quadRoom: 400,
  include: [
    "50 Page Unlock",
    "10 GB Storage",
    "6 Team Members",
    "Unlimited Book Mark",
    "Unlimited basic feature"
  ]
};

export const UdrivePackageCard = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/book");
  };

  return (
        <div className="border rounded-md p-6">
          <h3 className="text-2xl font-semibold mb-1">U-Drive Package</h3>
          <p className="text-sm text-gray-500">2 nights</p>
          <div className="mt-6 border rounded-md p-4 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-1">Dual Room</h2>
            <h3 className="text-2xl font-semibold">${udrivePackage.dualRoom} <sub className="text-gray-400 text-xs">per person</sub></h3>
          </div>
          <div className="mt-6 border rounded-md p-4 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-1">Quad Room</h2>
            <h3 className="text-2xl font-semibold">${udrivePackage.quadRoom} <sub className="text-gray-400 text-xs">per person</sub></h3>
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-1">Include</h4>
            <p className="text-sm text-gray-500">Everything you get in this plan</p>
        <ul className="mt-6 space-y-4">
          {udrivePackage.include.map((item, index) => 
            <li key={index} className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-3 fill-green-500" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              {item}
            </li>
                    )}
            </ul>
        <button type="button"
          className="w-full mt-6 px-2 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md"
          onClick={handleBookNow}>Book now</button>
          </div>
        </div>
  )
};

