import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import { navLinks } from '@/constants/constants';
import { NavLink } from '@/components/NavLink';

const mobileNavItems = navLinks;

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-start">
          {mobileNavItems.map((item, index) => (
            <NavLink
              key={index + 100}
              to={item.href}
              onClick={() => {
                setOpen(false);
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
