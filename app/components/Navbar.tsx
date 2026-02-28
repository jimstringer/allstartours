import { NavLink } from '@/components/NavLink';
// In VITE, you can import SVGs as React components using the ?react suffix for better performance.
// Uncomment the line below to use the GitHub icon in your navbar.
//import IconGitHub from '@/assets/github.svg?react';
//import AllStarLogo from '@/assets/star-logo.png';
import Logo from '@/assets/logo.png';


export const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-navbar  flex flex-nowrap items-center justify-between px-4 md:px-8">
      <div className="flex h-24">
        <img className="" src={Logo} alt="logo" />
      </div>
      <nav className="flex items-center text-3xl md:text-4xl gap-4 font-medium md:gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/book">Book</NavLink>
      </nav>
    </header>
  );
};
