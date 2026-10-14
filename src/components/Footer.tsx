import React from "react";
import Link from "next/link";
import { Zap, Heart, Globe, Share2, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-sm">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <span className="text-lg font-bold font-heading text-slate-800">
                Dhaka<span className="text-brand-primary">Founders</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              The launchpad for Bangladesh’s next generation of builders. Discover startups,
              find co-founders, and connect with investors shaping Dhaka’s tech ecosystem.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" className="p-2 hover:text-brand-primary transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:text-brand-primary transition-colors" aria-label="Community">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:text-brand-primary transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 font-heading">
              Directory
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/directory" className="hover:text-brand-primary transition-colors">
                  Browse Startups
                </Link>
              </li>
              <li>
                <Link href="/directory" className="hover:text-brand-primary transition-colors">
                  Fintech & Payments
                </Link>
              </li>
              <li>
                <Link href="/directory" className="hover:text-brand-primary transition-colors">
                  AI & SaaS
                </Link>
              </li>
              <li>
                <Link href="/directory" className="hover:text-brand-primary transition-colors">
                  E-Commerce & Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Founders Portal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 font-heading">
              Founders
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/dashboard" className="hover:text-brand-primary transition-colors">
                  Founder Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-brand-primary transition-colors">
                  List Your Startup
                </Link>
              </li>
              <li>
                <Link href="/directory" className="hover:text-brand-primary transition-colors">
                  Investor Network
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Dhaka Founders. Built for Bangladesh&apos;s tech builders.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> in Dhaka
          </p>
        </div>
      </div>
    </footer>
  );
}
