import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import BrandSpark from "./BrandSpark";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Tech Stack", to: "/tech-stack" },
  { label: "Work Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[60] flex justify-center px-3 py-2 sm:px-6 sm:py-6">
      <nav className="flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-gray-950/40 px-4 py-2 shadow-none backdrop-blur">
        <NavLink to="/" className="transition hover:opacity-90">
          <BrandSpark />
        </NavLink>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>

        <div className="hidden flex-wrap items-center justify-center gap-2 text-sm font-medium text-white/60 md:flex">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 transition",
                  isActive
                    ? "bg-cyan-500 text-gray-950 shadow-[0_0_25px_rgba(6,182,212,0.55)]"
                    : "text-white/70 hover:text-white hover:bg-white/10",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden flex-wrap items-center justify-end gap-3 text-sm md:flex">
          <span className="hidden text-white/50 lg:inline">
            Remote-first · Based in India
          </span>
          <a
            href="mailto:tanmay.json@gmail.com"
            className="rounded-full border border-cyan-400/60 px-5 py-2 font-semibold text-cyan-200 transition hover:bg-cyan-500 hover:text-gray-950"
          >
            Let's talk
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gray-950/85 backdrop-blur"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-4 top-[68px] z-50 md:hidden"
          >
            <div className="rounded-3xl border border-white/10 bg-gray-950/95 p-5 shadow-[0_25px_65px_-35px_rgba(6,182,212,0.55)] backdrop-blur">
              <div className="flex flex-col gap-3 text-sm font-medium text-white/80">
                {navItems.map(({ label, to }) => (
                  <NavLink
                    key={label}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        "rounded-2xl px-4 py-3 transition",
                        isActive
                          ? "bg-cyan-500/90 text-gray-950 shadow-[0_0_25px_rgba(6,182,212,0.45)]"
                          : "text-white/70 hover:text-white hover:bg-white/10",
                      ].join(" ")
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <a
                  href="mailto:tanmay.json@gmail.com"
                  className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/60 px-4 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-500 hover:text-gray-950"
                >
                  Let's talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
