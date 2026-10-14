"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold font-heading text-slate-800 tracking-tight">
              Dhaka<span className="text-brand-primary">Founders</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-50/80 px-2 py-1.5 rounded-full border border-slate-200/60">
            <Link
              href="/"
              className="px-4 py-1.5 text-sm font-medium text-brand-primary bg-brand-secondary/50 rounded-full transition-colors"
            >
              Home
            </Link>
            <Link
              href="/directory"
              className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-primary rounded-full transition-colors"
            >
              Directory
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-primary rounded-full transition-colors"
            >
              Dashboard
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-brand-primary hover:text-brand-primaryHover transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/directory"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-brand-primary hover:bg-brand-primaryHover shadow-sm transition-all"
            >
              Join the Community
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-brand-primary bg-brand-secondary/40"
          >
            Home
          </Link>
          <Link
            href="/directory"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Directory
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Dashboard
          </Link>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-medium text-brand-primary"
            >
              Sign In
            </Link>
            <Link
              href="/directory"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-medium rounded-full text-white bg-brand-primary hover:bg-brand-primaryHover"
            >
              Join the Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
