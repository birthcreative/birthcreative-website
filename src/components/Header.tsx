"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Promo Bar */}
      <div className="bg-[#A0522D] flex justify-center items-center py-[10px] px-[5%] gap-0">
        <div className="flex justify-center items-center gap-2">
          <p className="font-[--font-libre] text-[15px] font-medium text-white leading-[21px] tracking-[-0.1px] text-center">
            Sign up today &amp; get a FREE branding package ($299 value).{" "}
            <Link href="/pricing" className="text-white font-extrabold underline">
              Learn More.
            </Link>
          </p>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-secondary sticky top-0 z-50 min-h-[100px] flex items-center justify-between gap-0 flex-nowrap px-[5%] shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/birth-creative-final-logo-mark-white-1-e1737540775343.webp"
            alt="Birth Creative"
            width={267}
            height={63}
            className="h-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[7.5px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[--font-libre] text-[17px] font-medium text-white leading-[25px] tracking-[-0.1px] px-[18px] py-[10px] rounded-[100px] hover:bg-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex justify-end gap-3">
          <Link href="/pricing" className="btn-primary text-[17px]">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[#D5C4BC] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1000 1000">
              <path fill="#D5C4BC" d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1000 1000">
              <path fill="#D5C4BC" d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border border-[#D0D5DD] px-0 py-0">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[--font-libre] text-[17px] font-medium text-[#231F20] px-[22px] py-[22px] border-b border-cream hover:bg-cream"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
