"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  Eye,
  MessageSquare,
  Bookmark,
  PlusCircle,
  ExternalLink,
  Edit3,
  CheckCircle2,
  Bell,
  Sparkles,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-secondary/60 text-brand-primary text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Founder Portal
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800">
            Welcome back to your Founder Dashboard
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Manage your startup listing, view investor inquiries, and connect with the Dhaka ecosystem.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primaryHover shadow-sm transition-all">
            <PlusCircle className="w-4 h-4" />
            <span>Update Startup Profile</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Directory Views</span>
            <Eye className="w-4 h-4 text-brand-primary" />
          </div>
          <div className="text-2xl font-bold font-heading text-slate-800">1,420</div>
          <p className="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +24% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Investor Saves</span>
            <Bookmark className="w-4 h-4 text-brand-primary" />
          </div>
          <div className="text-2xl font-bold font-heading text-slate-800">38</div>
          <p className="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> 6 new this week
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Direct Inquiries</span>
            <MessageSquare className="w-4 h-4 text-brand-primary" />
          </div>
          <div className="text-2xl font-bold font-heading text-slate-800">12</div>
          <p className="text-xs text-slate-500 mt-2">Active founder contacts</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Listing Status</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold font-heading text-emerald-600">Verified</div>
          <p className="text-xs text-slate-500 mt-2">Dhaka Founders Community</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Startup Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-start justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-bold text-2xl font-heading shadow-sm">
                  DF
                </div>
                <div>
                  <h2 className="text-xl font-bold font-heading text-slate-800">
                    Dhaka Founders Tech Ltd.
                  </h2>
                  <p className="text-sm text-slate-500">B2B SaaS Directory & Community Platform</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-secondary/70 text-brand-primary">
                      Seed Stage
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 text-slate-700 hover:bg-slate-50">
                <Edit3 className="w-3.5 h-3.5" /> Edit
              </button>
            </div>

            <div className="py-6 space-y-4">
              <h3 className="text-sm font-bold font-heading uppercase text-slate-500 tracking-wider">
                About the Company
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Empowering Bangladesh&apos;s founders, creators, and investors to build global companies.
                Designed with Next.js 16, Tailwind CSS, Supabase, and Clerk Authentication.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-slate-600">
                <div>
                  <span className="text-slate-400 block mb-1">Target Market:</span>
                  <strong>Bangladesh & South Asia Builders</strong>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">Total Team Size:</span>
                  <strong>6 Core Members</strong>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/directory"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary hover:underline"
              >
                <span>View Public Directory Listing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <span className="text-xs text-slate-400">Last updated: Today</span>
            </div>
          </div>
        </div>

        {/* Sidebar / Recommended Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
            <h3 className="text-base font-bold font-heading text-slate-800 mb-4 flex items-center gap-2">
              <Bell className="w-4 h-4 text-brand-primary" /> Ecosystem Notifications
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <p className="font-semibold text-slate-800">VC Partner viewed your profile</p>
                <p className="text-slate-500 mt-1">An angel investor from Dhaka Angels saved your startup.</p>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <p className="font-semibold text-slate-800">Founder Mixer Next Friday</p>
                <p className="text-slate-500 mt-1">Gulshan 2, Dhaka — RSVPs are now open for founders.</p>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-brand-secondary/40 to-white rounded-2xl p-6 border border-brand-primary/20 shadow-sm">
            <h3 className="text-base font-bold font-heading text-slate-800 mb-2">
              Need a Co-Founder?
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Post an open role or co-founder opportunity visible to over 1,800 tech builders in Dhaka.
            </p>
            <Link
              href="/directory"
              className="w-full inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-primary hover:bg-brand-primaryHover transition-all"
            >
              Post Role to Directory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
