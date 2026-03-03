import { navLinks } from '@/constants/constants';
import { NavLink } from '@/components/NavLink';

const mainNavItems = navLinks;
export default function MainNav() {
  return (
    <div className="mr-4 hidden gap-2 md:flex">
      {mainNavItems.map((item, index) => (
        <NavLink key={index} to={item.href}>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}
