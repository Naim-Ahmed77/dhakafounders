"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, ExternalLink, MapPin, Tag, Briefcase } from "lucide-react";

interface Startup {
  id: string;
  name: string;
  tagline: string;
  category: string;
  location: string;
  stage: string;
  founder: string;
  website: string;
}

const mockStartups: Startup[] = [
  {
    id: "1",
    name: "Pathao",
    tagline: "Super-app providing rides, food delivery, and payments across Bangladesh.",
    category: "Logistics",
    location: "Gulshan, Dhaka",
    stage: "Series B",
    founder: "Fahim Saleh & Hussain Elius",
    website: "https://pathao.com",
  },
  {
    id: "2",
    name: "ShopUp",
    tagline: "Full-stack B2B embedded commerce platform serving mom-and-pop shops.",
    category: "Fintech",
    location: "Banani, Dhaka",
    stage: "Series B",
    founder: "Afeef Zubaer Zaman",
    website: "https://shopup.org",
  },
  {
    id: "3",
    name: "Chaldal",
    tagline: "Online grocery platform with localized micro-fulfillment hubs.",
    category: "E-Commerce",
    location: "Dhanmondi, Dhaka",
    stage: "Series C",
    founder: "Waseem Alim",
    website: "https://chaldal.com",
  },
  {
    id: "4",
    name: "Shikho",
    tagline: "Hyper-localized educational technology platform with visual animations.",
    category: "EdTech",
    location: "Mohakhali, Dhaka",
    stage: "Seed",
    founder: "Shahir Chowdhury",
    website: "https://shikho.com",
  },
  {
    id: "5",
    name: "Maya",
    tagline: "AI-assisted digital healthcare and anonymous mental wellness consults.",
    category: "HealthTech",
    location: "Uttara, Dhaka",
    stage: "Series A",
    founder: "Ivy Huq Russell",
    website: "https://maya.com.bd",
  },
  {
    id: "6",
    name: "iFarmer",
    tagline: "Agri-fintech platform matching smallholder farmers with capital and inputs.",
    category: "AgriTech",
    location: "Tejgaon, Dhaka",
    stage: "Series A",
    founder: "Fahad Ifaz & Jamil Akbar",
    website: "https://ifarmer.asia",
  },
  {
    id: "7",
    name: "Truck Lagbe",
    tagline: "Digital trucking marketplace connecting shippers with transport owners.",
    category: "Logistics",
    location: "Mirpur, Dhaka",
    stage: "Series A",
    founder: "Anayet Rashid",
    website: "https://trucklagbe.com",
  },
  {
    id: "8",
    name: "Arogga",
    tagline: "Online pharmacy providing genuine prescription medicines delivered to homes.",
    category: "HealthTech",
    location: "Baridhara, Dhaka",
    stage: "Seed",
    founder: "Rosina Mazumder",
    website: "https://arogga.com",
  },
];

const categories = ["All", "Fintech", "Logistics", "EdTech", "HealthTech", "E-Commerce", "AgriTech"];

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStartups = mockStartups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.founder.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || startup.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-800 mb-3">
          Dhaka Startup Directory
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Explore Bangladesh’s thriving ecosystem of innovative startups, founders, and game-changers.
        </p>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm mb-10 space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by startup name, founder, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1 pl-1 pr-2">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-brand-primary text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStartups.map((startup) => (
          <div
            key={startup.id}
            className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-primary/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-secondary/60 flex items-center justify-center text-brand-primary font-bold font-heading text-lg">
                  {startup.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {startup.stage}
                  </span>
                </div>
              </div>

              <h2 className="text-xl font-bold font-heading text-slate-800 group-hover:text-brand-primary transition-colors mb-1.5">
                {startup.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {startup.tagline}
              </p>

              <div className="space-y-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                  <span>Founders: <strong className="text-slate-700">{startup.founder}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{startup.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  <span>{startup.category}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={startup.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary hover:text-brand-primaryHover"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/dashboard"
                className="text-xs text-slate-400 hover:text-slate-700"
              >
                Claim Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredStartups.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-base font-medium">No startups match your search criteria.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="mt-3 text-sm font-semibold text-brand-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
