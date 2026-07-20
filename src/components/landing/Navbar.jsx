import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Colida', href: '#why' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <a href="#">
          <img
            src="/assets/logo.svg"
            alt="Company Logo"
            className="h-11 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-sm font-medium tracking-tight text-foreground/85 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sans text-sm font-medium tracking-tight border border-foreground/20 px-5 py-2 text-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            Contact us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-sm z-40 flex flex-col items-start px-6 pt-12 gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-sans text-lg font-medium tracking-tight text-foreground/85 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-sans text-sm font-medium tracking-tight border border-primary px-6 py-3 text-primary"
            >
              Contact us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}