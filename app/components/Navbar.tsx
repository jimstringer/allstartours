import { Link } from 'react-router';
//import { Button } from '@/components/Button';
import { NavLink } from '@/components/NavLink';
// In VITE, you can import SVGs as React components using the ?react suffix for better performance.
// Uncomment the line below to use the GitHub icon in your navbar.
//import IconGitHub from '@/assets/github.svg?react';
import AllStarLogo from '@/assets/star-logo.png';
//<img src={AllStarLogo} alt="logo" />

export const Navbar = () => {
  return (
    <header className="relative z-10 flex h-16 items-center justify-between px-4 md:px-8">
      <div className="flex">
        <img className="h-8" src={AllStarLogo} alt="logo" />
        <Link
          to="/"
          className="text-bomber-gold -mt-1 font-serif text-xl leading-none font-bold tracking-tight md:text-2xl"
        >
          All Star Tours.
        </Link>
      </div>
      <nav className="flex items-center gap-4 font-medium md:gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/book">Book</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};
