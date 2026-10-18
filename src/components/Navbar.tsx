"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-slate-200/60 transition-all duration-200 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo with Heading Typography */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-primary to-[#2B8CE0] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-extrabold font-heading text-slate-800 tracking-tight transition-colors group-hover:text-slate-900">
              Dhaka<span className="text-brand-primary">Founders</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50/80 px-2.5 py-1 rounded-full border border-slate-200/70 shadow-inner">
            <Link
              href="/"
              className="px-4 py-1.5 text-sm font-semibold text-brand-primary bg-brand-secondary/60 rounded-full transition-all duration-200 shadow-sm"
            >
              Home
            </Link>
            <Link
              href="/directory"
              className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-white/80 rounded-full transition-all duration-200"
            >
              Directory
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-white/80 rounded-full transition-all duration-200"
            >
              Dashboard
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/directory"
              className="group inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold rounded-full text-white bg-brand-primary hover:bg-brand-primaryHover shadow-md hover:shadow-lg hover:shadow-brand-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Join the Community</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Glassmorphism */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-2.5 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-brand-primary bg-brand-secondary/50"
          >
            Home
          </Link>
          <Link
            href="/directory"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Directory
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Dashboard
          </Link>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 hover:text-brand-primary"
            >
              Sign In
            </Link>
            <Link
              href="/directory"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold rounded-full text-white bg-brand-primary hover:bg-brand-primaryHover shadow-md"
            >
              Join the Community
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
