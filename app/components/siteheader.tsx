import MainNav from '@/components/mainnav';
import MobileNav from '@/components/mobilenav';
import Logo from '@/assets/logo.png';


export default function SiteHeader() {
  return (
    <header className="w-full border-b bg-navbar">
      <div className="flex justify-between  items-center px-4">
      <div className="flex h-24">
        <img className="" src={Logo} alt="logo" />
      </div>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
