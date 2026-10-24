import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, Users, Rocket, TrendingUp, ShieldCheck } from "lucide-react";
import SupabaseConnectionCheck from "@/components/SupabaseConnectionCheck";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

// Verification function to test Supabase connection without querying empty tables
async function verifySupabaseConnection() {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.getSession();
    if (!error) {
      console.log("⚡ [Dhaka Founders] Supabase connection verified successfully via server! (Auth service is active)");
    } else {
      console.warn("⚠️ [Dhaka Founders] Supabase verification notice:", error.message);
    }
  } catch (err) {
    console.error("❌ [Dhaka Founders] Supabase verification error:", err);
  }
}

export const dynamic = "force-dynamic";

export default async function Home() {
  await verifySupabaseConnection();
  const featuredStartups = [
    {
      name: "Pathao",
      tagline: "Super-app transforming mobility, logistics, and digital payments across Bangladesh.",
      category: "Logistics & Fintech",
      location: "Gulshan, Dhaka",
      stage: "Series B",
      badge: "Featured",
    },
    {
      name: "ShopUp",
      tagline: "Full-stack B2B commerce platform powering neighborhood retail stores.",
      category: "B2B Commerce",
      location: "Banani, Dhaka",
      stage: "Series B",
      badge: "High Growth",
    },
    {
      name: "Chaldal",
      tagline: "Pioneering on-demand grocery delivery network with localized micro-warehouses.",
      category: "Quick Commerce",
      location: "Dhanmondi, Dhaka",
      stage: "Series C",
      badge: "Industry Leader",
    },
    {
      name: "Shikho",
      tagline: "Hyper-localized EdTech democratizing high-quality learning across the nation.",
      category: "EdTech & AI",
      location: "Mohakhali, Dhaka",
      stage: "Seed+",
      badge: "Trending",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <SupabaseConnectionCheck />
      {/* Background Radial Glow & Dot Overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-glow pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        {/* Pill Badge matching brand screenshot */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-secondary/70 border border-brand-primary/20 text-brand-primary text-xs sm:text-sm font-medium mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
          <span>Bangladesh&apos;s #1 Founder Directory</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-slate-800 tracking-tight leading-[1.1] mb-6">
          <span className="text-brand-primary bg-clip-text">Connect</span>, Collaborate,
          <br className="hidden sm:inline" /> and Scale with Dhaka&apos;s Top Founders.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          A vibrant community where founders, investors, and builders grow and fund their
          dreams together. Join Bangladesh&apos;s most supportive startup ecosystem.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/directory"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-brand-primary hover:bg-brand-primaryHover shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Explore Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-brand-primary bg-brand-secondary/60 hover:bg-brand-secondary border border-brand-primary/30 transition-all duration-200"
          >
            Join as Founder
          </Link>
        </div>

        {/* Quick Ecosystem Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-200/80">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-800">
              350+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Active Startups
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-primary">
              $120M+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Capital Raised
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-800">
              1,800+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Local Builders
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-primary">
              60+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              Angel Investors
            </div>
          </div>
        </div>
      </section>

      {/* Featured Startups Section */}
      <section className="relative py-16 bg-white/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-primary font-heading mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ecosystem Highlights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                Featured Startups in Dhaka
              </h2>
            </div>
            <Link
              href="/directory"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primaryHover"
            >
              <span>View all 350+ startups</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStartups.map((startup, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-brand-secondary/60 text-brand-primary">
                      {startup.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{startup.stage}</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-800 mb-2">
                    {startup.name}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {startup.tagline}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{startup.category}</span>
                  <span>{startup.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Value Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">
            Where Dhaka’s Boldest Ideas Turn into World-Class Companies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to launch, hire, raise, and scale from Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-secondary flex items-center justify-center text-brand-primary mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">
              Find Your Co-Founder
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Connect with vetted engineers, designers, and growth marketers looking to join
              high-growth early stage ventures.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-secondary flex items-center justify-center text-brand-primary mb-6">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">
              Get Listed & Discovered
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Put your startup in front of local and international venture capitalists, angel
              syndicates, and press.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-secondary flex items-center justify-center text-brand-primary mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">
              Fundraising Network
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Access warm intros to institutional investors actively deploying capital in
              emerging frontier markets.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-primary to-brand-primaryHover text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-bold font-heading mb-4">
            Ready to Put Your Startup on Dhaka’s Tech Map?
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Join hundreds of local founders who have listed their startups, found partners,
            and unlocked fundraising opportunities.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-brand-primary bg-white hover:bg-slate-100 shadow-md transition-all"
          >
            <span>Create Founder Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
