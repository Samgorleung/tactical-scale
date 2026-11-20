import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Play,
} from 'lucide-react';
import {
  PORTFOLIO_ITEMS,
  FILTER_TABS,
  DIAGNOSTIC_SCENARIOS,
  FilterTabId,
  PortfolioItem,
} from './data/portfolio';

export function App() {
  const [activeFilter, setActiveFilter] = useState<FilterTabId>('all');
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeVideoItem, setActiveVideoItem] = useState<PortfolioItem | null>(null);
  const [activeBlueprintItem, setActiveBlueprintItem] = useState<PortfolioItem | null>(null);
  const [showAllBadges, setShowAllBadges] = useState<boolean>(false);
  const [portraitError, setPortraitError] = useState<boolean>(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveVideoItem(null);
        setActiveBlueprintItem(null);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => item.filterGroups.includes(activeFilter));
  }, [activeFilter]);

  const activeFilterMeta = useMemo(() => {
    return FILTER_TABS.find((t) => t.id === activeFilter) ?? FILTER_TABS[0];
  }, [activeFilter]);

  const activeScenario = DIAGNOSTIC_SCENARIOS[activeScenarioIdx];

  const getTabCount = (tabId: FilterTabId) => {
    return PORTFOLIO_ITEMS.filter((item) => item.filterGroups.includes(tabId)).length;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center space-x-3.5 group transition-colors duration-250 ease-out"
          >
            {/* Geometric Vector Emblem: Monochrome Slate & Sky */}
            <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:border-sky-700 transition-colors duration-250 ease-out">
              <svg
                className="w-6 h-6"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="19" width="6" height="12" rx="1" fill="#64748B" />
                <rect x="15" y="12" width="6" height="19" rx="1" fill="#94A3B8" />
                <rect x="25" y="5" width="6" height="26" rx="1" fill="#38BDF8" />
                <path
                  d="M5 15L16 8L28 4"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-slate-950 block leading-none">
                TACTICAL SCALE
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                Programme Governance & Applied AI Engineering
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-600">
            <a
              href="#positioning"
              className="hover:text-sky-700 transition-colors duration-250 ease-out"
            >
              Why Tactical Scale
            </a>
            <a
              href="#pillars"
              className="hover:text-sky-700 transition-colors duration-250 ease-out"
            >
              Service Pillars
            </a>
            <a
              href="#portfolio"
              className="hover:text-sky-700 transition-colors duration-250 ease-out"
            >
              Portfolio & Track Record
            </a>
            <a
              href="#scoper"
              className="hover:text-sky-700 transition-colors duration-250 ease-out"
            >
              Solution Scoper
            </a>
            <a
              href="#credentials"
              className="hover:text-sky-700 transition-colors duration-250 ease-out"
            >
              Leadership & Credentials
            </a>
          </nav>

          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="mailto:sam@tactical-scale.com?subject=Tactical%20Scale%3A%20Consultation%20Enquiry"
              className="px-5 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-250 ease-out flex items-center space-x-2"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-250 ease-out"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3">
            <div className="flex flex-col space-y-2.5 text-sm font-semibold text-slate-700">
              <a
                href="#positioning"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-sky-700 transition-colors duration-250 ease-out"
              >
                Why Tactical Scale
              </a>
              <a
                href="#pillars"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-sky-700 transition-colors duration-250 ease-out"
              >
                Service Pillars
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-sky-700 transition-colors duration-250 ease-out"
              >
                Portfolio & Case Studies
              </a>
              <a
                href="#scoper"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-sky-700 transition-colors duration-250 ease-out"
              >
                30-60-90 Solution Scoper
              </a>
              <a
                href="#credentials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-sky-700 transition-colors duration-250 ease-out"
              >
                Leadership & Credentials
              </a>
            </div>
            <div className="pt-3 border-t border-slate-200">
              <a
                href="mailto:sam@tactical-scale.com?subject=Tactical%20Scale%3A%20Consultation%20Enquiry"
                className="w-full justify-center px-5 py-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-colors duration-250 ease-out flex items-center space-x-2"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-36 sm:pt-40 pb-24 sm:pb-28 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
            <span>Greater London, United Kingdom</span>
            <span className="text-slate-400">|</span>
            <span className="text-sky-700">Digital Transformation, Agile Delivery & Applied AI</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] mb-5 max-w-4xl">
            Pragmatic Project Delivery &{' '}
            <span className="text-sky-700">Applied AI Engineering.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 font-medium max-w-3xl mb-6 leading-relaxed">
            Enterprise programme governance paired with rapid cloud and agentic AI execution.
          </p>

          <ul className="grid sm:grid-cols-3 gap-4 max-w-4xl mb-10 text-sm text-slate-700 border-t border-b border-slate-200 py-5">
            <li className="flex items-start space-x-2.5">
              <span className="text-sky-700 font-extrabold shrink-0">01.</span>
              <span>
                <strong className="text-slate-950">14+ Years & 40+ Mandates:</strong> Tier-1 UK
                clearing, global insurance, and Microsoft Partner/GSI transformations.
              </span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="text-sky-700 font-extrabold shrink-0">02.</span>
              <span>
                <strong className="text-slate-950">Production AI Builds:</strong> Schema-enforced
                Gemini, ADK 2.0, and Gemma 4 agents on Cloud Run and Cloudflare.
              </span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="text-sky-700 font-extrabold shrink-0">03.</span>
              <span>
                <strong className="text-slate-950">Zero Agency Bloat:</strong> Principal-led
                SteerCo governance, UK statutory compliance (HMRC AWRS), and rapid delivery.
              </span>
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="mailto:sam@tactical-scale.com?subject=Consultation%20Enquiry%3A%20Tactical%20Scale"
              className="px-6 py-3.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-250 ease-out hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-300 hover:border-sky-700 transition-all duration-250 ease-out hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Explore Delivered Projects (14)</span>
              <ArrowRight className="w-4 h-4 text-sky-700" />
            </a>
            <a
              href="#scoper"
              className="px-5 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200/70 text-slate-700 font-medium text-sm border border-slate-200 hover:border-slate-300 transition-all duration-250 ease-out flex items-center space-x-2"
            >
              <span>30-60-90 Solution Scoper</span>
            </a>
          </div>

          {/* Proven Track Record Architectural Grid */}
          <div className="pt-8 border-t border-slate-200">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Verified Track Record Across Enterprise Delivery & Applied AI
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-slate-50/50">
              <a
                href="#portfolio"
                onClick={() => setActiveFilter('enterprise-delivery')}
                className="p-5 hover:bg-white transition-colors duration-250 ease-out text-left group"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-1">
                  Capital Markets & Clearing
                </div>
                <div className="font-bold text-sm text-slate-950 group-hover:text-sky-700 transition-colors duration-250 ease-out">
                  Tier-1 UK Market Infrastructure
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  300+ EOL servers hardened and 100% audit gate clearance.
                </div>
              </a>

              <a
                href="#portfolio"
                onClick={() => setActiveFilter('enterprise-delivery')}
                className="p-5 hover:bg-white transition-colors duration-250 ease-out text-left group"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-1">
                  Insurance & Regional Cloud
                </div>
                <div className="font-bold text-sm text-slate-950 group-hover:text-sky-700 transition-colors duration-250 ease-out">
                  Global Health & Pan-Asian Life Insurers
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  80% claims automation (1.5M+ records) and 18-office Azure migration.
                </div>
              </a>

              <a
                href="#portfolio"
                onClick={() => setActiveFilter('regtech-security')}
                className="p-5 hover:bg-white transition-colors duration-250 ease-out text-left group"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-1">
                  UK Statutory & Cyber Audit
                </div>
                <div className="font-bold text-sm text-slate-950 group-hover:text-sky-700 transition-colors duration-250 ease-out">
                  HMRC AWRS & GuardianAI
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Full UK licensing approvals and Cloud Run security compliance auditing.
                </div>
              </a>

              <a
                href="#portfolio"
                onClick={() => setActiveFilter('ai-systems')}
                className="p-5 hover:bg-white transition-colors duration-250 ease-out text-left group"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-1">
                  Applied AI & Multimodal
                </div>
                <div className="font-bold text-sm text-slate-950 group-hover:text-sky-700 transition-colors duration-250 ease-out">
                  SprintClarify, EchoHire & CineFact
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Schema-enforced Gemini apps, live voice agents, and video claim verification.
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Positioning: The Consulting Gap & Target Client Segments */}
      <section id="positioning" className="py-24 sm:py-28 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
              Executive Positioning
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-950 mb-3">
              Closing the Divide Between Strategy & Production Code
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Principal governance paired with hands-on production engineering.
            </p>
          </div>

          {/* 3-Column Consulting Gap Architectural Grid */}
          <div className="grid md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white mb-16">
            <div className="p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Traditional Consultancies
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                High Overhead, Slideware Output
              </h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                <li>Strategy decks without code execution</li>
                <li>Junior handoffs lacking cloud security depth</li>
                <li>Slow procurement and agency bloat</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Pure-Play Dev Shops
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                Code Without Governance
              </h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                <li>Fragile prototypes failing audit gates</li>
                <li>No SteerCo or RAID control frameworks</li>
                <li>Staging-to-production deployment drift</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 bg-slate-950 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                The Tactical Scale Model
              </div>
              <h4 className="text-lg font-bold text-white mb-3">
                Principal Governance + Rapid Code
              </h4>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                <li>Led by Sam Leung (PMP, DASSM, SC-100, AI-102)</li>
                <li>Backed by specialized Engineering Partners</li>
                <li>Boardroom rigour to shipped production code</li>
              </ul>
            </div>
          </div>

          {/* Target Client Segments Architectural Grid */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-4">
              Target Client Segments
            </div>
            <div className="grid md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                    Segment 01
                  </div>
                  <h4 className="text-base font-bold text-slate-950 mb-3">
                    Financial Services & Solution Partners
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                    <li>Banks, insurers, and clearing houses</li>
                    <li>UK Contract & SOW programme leadership</li>
                    <li>Microsoft, Google & AWS partner subcontracting</li>
                  </ul>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-500">
                  Clearing, Claims, Azure Cloud, Cyber Risk
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                    Segment 02
                  </div>
                  <h4 className="text-base font-bold text-slate-950 mb-3">
                    UK SMEs & Commercial Operators
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                    <li>Digital workflow and Copilot modernization</li>
                    <li>HMRC AWRS & UK premises licensing</li>
                    <li>Compliance due diligence and audit trails</li>
                  </ul>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-500">
                  UK Statutory Licensing, Automation, M365
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                    Segment 03
                  </div>
                  <h4 className="text-base font-bold text-slate-950 mb-3">
                    Founders & Product Teams
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                    <li>Rapid schema-enforced AI MVP builds</li>
                    <li>Multi-agent ADK 2.0 and Gemini pipelines</li>
                    <li>AI Studio-to-production deployment sync</li>
                  </ul>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-500">
                  AI Studio Sync, Cloud Run CI/CD, MVPs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Service Pillars (Border-Divided Architectural Grid) */}
      <section id="pillars" className="py-24 sm:py-28 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
              Core Service Pillars
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-950">
              Three Integrated Delivery & Engineering Practices
            </h3>
          </div>

          <div className="grid md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Pillar 1 */}
            <div className="py-8 md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                  Pillar 01
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-2">
                  Enterprise Programme & Agile Delivery
                </h4>
                <p className="text-slate-600 text-sm mb-6">
                  Regulated IT transformation, cloud migration, and audit-ready governance.
                </p>
              </div>
              <ul className="text-xs font-semibold text-slate-700 space-y-3 pt-6 border-t border-slate-200">
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">01.</span>
                  <span>SteerCo Governance, RAID Control & Service Transition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">02.</span>
                  <span>Core Insurance, Clearing & Multi-Region Azure Migrations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">03.</span>
                  <span>300+ EOL Server Hardening & Vendor Security Audits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">04.</span>
                  <span>UK Statutory Licensing (HMRC AWRS) & Risk Clearance</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="py-8 md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                  Pillar 02
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-2">
                  Applied AI & Agentic Systems Architecture
                </h4>
                <p className="text-slate-600 text-sm mb-6">
                  Production multi-agent workflows built with typed, deterministic outputs.
                </p>
              </div>
              <ul className="text-xs font-semibold text-slate-700 space-y-3 pt-6 border-t border-slate-200">
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">01.</span>
                  <span>Google Gemini, ADK 2.0, A2A & Gemma 4 Orchestration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">02.</span>
                  <span>Strict Typed JSON Schemas & Autonomous Compliance Audits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">03.</span>
                  <span>Microsoft Foundry SDK, Azure AI & Hybrid Cloud Integrations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">04.</span>
                  <span>React 19, TypeScript, Cloud Run & Cloudflare Workers</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="py-8 md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                  Pillar 03
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-2">
                  AI Coaching, Advisory & Troubleshooting
                </h4>
                <p className="text-slate-600 text-sm mb-6">
                  Stabilizing stalled AI prototypes and upskilling internal delivery teams.
                </p>
              </div>
              <ul className="text-xs font-semibold text-slate-700 space-y-3 pt-6 border-t border-slate-200">
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">01.</span>
                  <span>Google AI Studio to Cloud Run Production Synchronization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">02.</span>
                  <span>Prompt Engineering Governance & CI/CD Pipeline Fixes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">03.</span>
                  <span>Microsoft 365 Copilot Adoption & Security Controls</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">04.</span>
                  <span>Stakeholder Coaching & Self-Service Operational Handover</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Executive Architecture & Operating Model Diagram */}
          <div className="mt-16 border border-slate-200 rounded-lg bg-slate-950 text-white p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">
                  Executive Operating Model & Engineering Flow
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                  Tactical Scale Architecture & Delivery Blueprint
                </h4>
              </div>
              <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                <span>Governance</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                <span>Execution</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                <span>Handover</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0 mt-6 border border-slate-800 rounded-lg divide-y lg:divide-y-0 lg:divide-x divide-slate-800 bg-slate-900/60">
              {/* Layer 01 */}
              <div className="p-6 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400">
                      01. Principal Governance & Security
                    </span>
                    <ArrowRight className="hidden lg:block w-4 h-4 text-sky-400" />
                  </div>
                  <h5 className="text-base font-extrabold text-white mb-2">
                    PMP, DASSM, SC-100
                  </h5>
                  <div className="text-xs font-semibold text-slate-300 mb-4">
                    Sam Leung | Principal Architect
                  </div>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 pt-4 border-t border-slate-800">
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">/</span>
                    <span>SteerCo Alignment & RAID Controls</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">/</span>
                    <span>Cybersecurity & Zero-Trust Gate Design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">/</span>
                    <span>Architecture Blueprints & Governance</span>
                  </li>
                </ul>
              </div>

              {/* Layer 02 */}
              <div className="p-6 relative flex flex-col justify-between bg-slate-900">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400">
                      02. Multi-Cloud & Agentic Execution
                    </span>
                    <ArrowRight className="hidden lg:block w-4 h-4 text-sky-400" />
                  </div>
                  <h5 className="text-base font-extrabold text-white mb-2">
                    MS Foundry, Azure AI, Gemini, ADK 2.0, Cloud Run
                  </h5>
                  <div className="text-xs font-semibold text-slate-300 mb-4">
                    Microsoft + Google Cloud + Partner Network
                  </div>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 pt-4 border-t border-slate-800">
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">/</span>
                    <span>Microsoft Foundry SDK & Azure AI</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">/</span>
                    <span>Google Gemini, ADK 2.0 & Cloud Run</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">/</span>
                    <span>Specialist Engineering Partner Network</span>
                  </li>
                </ul>
              </div>

              {/* Layer 03 */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400">
                      03. Production Release & Handover
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-sky-400">
                      Live
                    </span>
                  </div>
                  <h5 className="text-base font-extrabold text-white mb-2">
                    Typed JSON Schemas, CI/CD, Self-Service Enablement
                  </h5>
                  <div className="text-xs font-semibold text-slate-300 mb-4">
                    Deterministic Delivery & Enablement
                  </div>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 pt-4 border-t border-slate-800">
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">/</span>
                    <span>Typed JSON Schemas & Automated QA</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">/</span>
                    <span>CI/CD Pipelines & Zero-Downtime Cutover</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">/</span>
                    <span>Self-Service Team Enablement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio & Delivery Track Record with Category Filter Tabs */}
      <section id="portfolio" className="py-24 sm:py-28 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
                Project Portfolio & Track Record
              </h2>
              <h3 className="text-3xl font-extrabold text-slate-950">
                Applied AI Builds & Enterprise Mandates
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                Filter across 8 production AI engineering builds (Part A) and 6 enterprise
                transformation mandates (Part B). Click "View Blueprint" on any card or "Watch
                Demo" on featured AI builds.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://devpost.com/samgorleung1224"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-sky-700 flex items-center space-x-1.5 bg-white px-3.5 py-2 rounded-lg border border-slate-200 hover:border-sky-700 transition-all duration-250 ease-out"
              >
                <span>Inspect on Devpost</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Samgorleung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-sky-700 flex items-center space-x-1.5 bg-white px-3.5 py-2 rounded-lg border border-slate-200 hover:border-sky-700 transition-all duration-250 ease-out"
              >
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mb-8">
            <div
              role="tablist"
              aria-label="Portfolio category filter tabs"
              className="flex flex-wrap gap-2 pb-4 border-b border-slate-200"
            >
              {FILTER_TABS.map((tab) => {
                const isSelected = activeFilter === tab.id;
                const count = getTabCount(tab.id);
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-250 ease-out flex items-center space-x-2 border ${
                      isSelected
                        ? 'bg-slate-950 text-white border-slate-950'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-sky-700 hover:text-slate-950'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-extrabold ${
                        isSelected
                          ? 'bg-sky-400 text-slate-950'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Filter Context Bar */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 py-2">
              <div>
                <span className="font-bold text-slate-900">{activeFilterMeta.label}: </span>
                <span>{activeFilterMeta.description}</span>
              </div>
              <div className="font-bold text-slate-700 shrink-0">
                Showing {filteredItems.length} of {PORTFOLIO_ITEMS.length} engagements
              </div>
            </div>
          </div>

          {/* Interactive Portfolio Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onWatchDemo={(selected) => setActiveVideoItem(selected)}
                onViewBlueprint={(selected) => setActiveBlueprintItem(selected)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Embedded YouTube Video Modal Player */}
      {activeVideoItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-250 ease-out"
          onClick={() => setActiveVideoItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl animate-modal-enter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
              <div>
                <h4 className="text-white font-extrabold text-sm sm:text-base leading-tight">
                  {activeVideoItem.title}: Video Walkthrough Demo
                </h4>
                {activeVideoItem.subtitle && (
                  <p className="text-slate-400 text-xs mt-0.5">{activeVideoItem.subtitle}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoItem(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-250 ease-out"
                aria-label="Close video demo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Iframe Container (16:9) */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={getYouTubeEmbedUrl(activeVideoItem.videoUrl)}
                title={`${activeVideoItem.title} Walkthrough Demo`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 font-semibold text-[11px]">
                  {activeVideoItem.category}
                </span>
                <span>|</span>
                <span>{activeVideoItem.techStack.slice(0, 3).join(', ')}</span>
              </div>
              <div className="flex items-center space-x-3 shrink-0">
                <a
                  href={`mailto:sam@tactical-scale.com?subject=${encodeURIComponent(
                    `Executive Demo Briefing: ${activeVideoItem.title}`
                  )}`}
                  className="px-4 py-2 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold transition-colors duration-250 ease-out flex items-center space-x-1.5"
                >
                  <span>Request Custom Briefing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* System Architecture & Workflow Blueprint Modal */}
      {activeBlueprintItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-250 ease-out"
          onClick={() => setActiveBlueprintItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl bg-white border border-slate-300 rounded-lg overflow-hidden shadow-2xl animate-modal-enter max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Blueprint Modal Header */}
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-slate-800 bg-slate-950 text-white shrink-0">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-sky-400 text-[10px] font-bold uppercase tracking-wider">
                    System Architecture & Workflow Blueprint
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {activeBlueprintItem.trackLabel}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                  {activeBlueprintItem.title}
                </h4>
                {activeBlueprintItem.subtitle && (
                  <p className="text-slate-400 text-xs mt-1">{activeBlueprintItem.subtitle}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveBlueprintItem(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-250 ease-out shrink-0"
                aria-label="Close architecture blueprint"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Blueprint Schematic Body */}
            <div className="p-6 sm:p-8 bg-slate-100 overflow-y-auto space-y-6">
              {activeBlueprintItem.blueprintVariant === 'flagship-hybrid-cloud' && (
                <>
                  {/* Top 4-Column Executive KPI Bar */}
                  {activeBlueprintItem.impactStats && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 border border-slate-300 rounded-lg divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-white overflow-hidden">
                      {activeBlueprintItem.impactStats.map((stat) => (
                        <div key={stat.label} className="p-4 sm:p-5">
                          <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                            {stat.value}
                          </div>
                          <div className="text-[11px] font-semibold text-slate-600 mt-1 leading-snug">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stacked 3-Tier Hybrid Multi-Cloud System Topology Diagram */}
                  {activeBlueprintItem.topologyLayers && (
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-sky-700 mb-3">
                        3-Tier Hybrid Multi-Cloud System Topology (AWS Pre-Prod + Azure Prod)
                      </div>
                      <div className="space-y-0">
                        {activeBlueprintItem.topologyLayers.map((tier, idx) => {
                          const isDark = tier.emphasis === 'dark';
                          return (
                            <React.Fragment key={tier.layer}>
                              <div
                                className={`rounded-lg border p-5 ${
                                  isDark
                                    ? 'bg-slate-950 text-white border-slate-800'
                                    : 'bg-white text-slate-950 border-slate-300'
                                }`}
                              >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                  <div className="md:w-1/3 shrink-0">
                                    <div
                                      className={`text-[10px] font-extrabold uppercase tracking-widest mb-1 ${
                                        isDark ? 'text-sky-400' : 'text-sky-700'
                                      }`}
                                    >
                                      {tier.layer}
                                    </div>
                                    <div
                                      className={`text-sm font-extrabold leading-snug ${
                                        isDark ? 'text-white' : 'text-slate-950'
                                      }`}
                                    >
                                      {tier.label}
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap gap-2 md:justify-end">
                                    {tier.nodes.map((node) => (
                                      <span
                                        key={node}
                                        className={`px-3 py-1.5 rounded text-xs font-bold border ${
                                          isDark
                                            ? 'bg-slate-900 border-slate-700 text-slate-100'
                                            : 'bg-slate-100 border-slate-200 text-slate-900'
                                        }`}
                                      >
                                        {node}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              {idx < activeBlueprintItem.topologyLayers!.length - 1 && (
                                <div className="flex justify-center py-1" aria-hidden="true">
                                  <svg
                                    className="w-5 h-6 text-sky-700"
                                    viewBox="0 0 20 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10 1V19M10 19L5 14M10 19L15 14"
                                      stroke="currentColor"
                                      strokeWidth="1.75"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Compact 4-Phase Chronological Delivery Timeline */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                      4-Phase Chronological Delivery Timeline
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-slate-300 rounded-lg divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-white overflow-hidden">
                      {activeBlueprintItem.architectureFlow.map((stage) => (
                        <div key={stage.step} className="p-4 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="px-2 py-0.5 rounded bg-slate-950 text-sky-400 text-[10px] font-extrabold tracking-wider">
                                PHASE {stage.step}
                              </span>
                            </div>
                            <h5 className="text-xs font-extrabold text-slate-950 mb-1.5 leading-snug">
                              {stage.title}
                            </h5>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                              {stage.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified Client Endorsements Strip */}
                  {activeBlueprintItem.testimonials && (
                    <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
                      {activeBlueprintItem.testimonials.map((t) => (
                        <div
                          key={t.authorRole}
                          className="bg-white border border-slate-200 border-l-2 border-l-sky-700 rounded-lg p-4 flex flex-col justify-between"
                        >
                          <p className="text-xs text-slate-700 italic leading-relaxed mb-3">
                            "{t.quote}"
                          </p>
                          <div className="text-[11px] font-bold text-slate-950">
                            {t.authorRole}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {activeBlueprintItem.blueprintVariant === 'ai-pipeline' && (
                <>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-sky-700 mb-3">
                      Engineering Pipeline Telemetry & Model Execution Flow
                    </div>

                    {/* Dot-Grid Node-and-Edge Engineering Pipeline */}
                    <div className="bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] border border-slate-300 rounded-lg p-5 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-stretch gap-3 lg:gap-0">
                        {activeBlueprintItem.architectureFlow.map((stage, idx) => {
                          const nodeRoles = [
                            'INGESTION',
                            'MODEL & SCHEMA CORE',
                            'CLOUD RUNTIME',
                            'DETERMINISTIC OUTPUT',
                          ];
                          const roleLabel = nodeRoles[idx] || `STAGE ${stage.step}`;
                          const isCore = idx === 1;
                          const isOutput = idx === 3;

                          return (
                            <React.Fragment key={stage.step}>
                              <div
                                className={`flex-1 rounded-lg p-4 border flex flex-col justify-between ${
                                  isCore
                                    ? 'bg-slate-950 text-white border-slate-800'
                                    : isOutput
                                      ? 'bg-white text-slate-950 border-2 border-sky-700'
                                      : 'bg-white text-slate-950 border-slate-300'
                                }`}
                              >
                                <div>
                                  <div className="flex items-center justify-between gap-2 mb-2.5">
                                    <span
                                      className={`text-[10px] font-extrabold uppercase tracking-wider ${
                                        isCore ? 'text-sky-400' : 'text-sky-700'
                                      }`}
                                    >
                                      {roleLabel}
                                    </span>
                                    <span
                                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                        isCore
                                          ? 'bg-slate-800 text-slate-200'
                                          : 'bg-slate-100 text-slate-700'
                                      }`}
                                    >
                                      {stage.step}
                                    </span>
                                  </div>
                                  <h5
                                    className={`text-sm font-extrabold mb-1.5 leading-snug ${
                                      isCore ? 'text-white' : 'text-slate-950'
                                    }`}
                                  >
                                    {stage.title}
                                  </h5>
                                  <p
                                    className={`text-xs leading-relaxed ${
                                      isCore ? 'text-slate-300' : 'text-slate-600'
                                    }`}
                                  >
                                    {stage.detail}
                                  </p>
                                </div>
                              </div>

                              {idx < activeBlueprintItem.architectureFlow.length - 1 && (
                                <>
                                  <div
                                    className="hidden lg:flex items-center justify-center px-1.5 shrink-0 text-sky-700"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      className="w-6 h-5"
                                      viewBox="0 0 24 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1 10H20M20 10L15 5M20 10L15 15"
                                        stroke="currentColor"
                                        strokeWidth="1.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="flex lg:hidden items-center justify-center py-0.5 text-sky-700"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      className="w-5 h-5"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10 2V16M10 16L5 11M10 16L15 11"
                                        stroke="currentColor"
                                        strokeWidth="1.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                </>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Contextual Stakeholder Endorsements */}
                  {activeBlueprintItem.testimonials && activeBlueprintItem.testimonials.length > 0 && (
                    <div className="space-y-3">
                      {activeBlueprintItem.testimonials.map((t) => (
                        <div
                          key={t.authorRole}
                          className="bg-white border border-slate-200 border-l-2 border-l-sky-700 rounded-lg p-4 sm:p-5"
                        >
                          <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-2">
                            "{t.quote}"
                          </p>
                          <div className="text-[11px] font-bold text-slate-950">
                            {t.authorRole}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Architecture Stack Nodes & Outcome Metric */}
                  <div className="grid md:grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                    <div className="md:col-span-2 bg-white border border-slate-200 rounded-lg p-5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                        {activeBlueprintItem.techOrSectorLabel} & Architecture Nodes
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeBlueprintItem.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded bg-slate-100 border border-slate-200 text-xs font-bold text-slate-900"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-950 text-white border border-slate-800 rounded-lg p-5 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-2">
                          Key Outcome Metric
                        </div>
                        <div className="text-sm font-bold text-white leading-snug">
                          {activeBlueprintItem.highlightMetric || activeBlueprintItem.category}
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                        Role:{' '}
                        <span className="text-slate-200 font-semibold">
                          {activeBlueprintItem.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeBlueprintItem.blueprintVariant === 'infra-stack' && (
                <>
                  {/* Layered Enterprise Architecture & Governance Zones */}
                  {activeBlueprintItem.topologyLayers && (
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-sky-700 mb-3">
                        Enterprise Architecture Zones & Delivery Stack
                      </div>
                      <div className="space-y-3">
                        {activeBlueprintItem.topologyLayers.map((zone) => {
                          const isDark = zone.emphasis === 'dark';
                          return (
                            <div
                              key={zone.layer}
                              className={`rounded-lg border p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                                isDark
                                  ? 'bg-slate-950 text-white border-slate-800'
                                  : 'bg-white text-slate-950 border-slate-300'
                              }`}
                            >
                              <div className="md:w-1/3 shrink-0">
                                <span
                                  className={`inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider mb-1.5 ${
                                    isDark
                                      ? 'bg-slate-800 text-sky-400'
                                      : 'bg-slate-100 text-sky-700 border border-slate-200'
                                  }`}
                                >
                                  {zone.layer}
                                </span>
                                <div
                                  className={`text-sm font-extrabold leading-snug ${
                                    isDark ? 'text-white' : 'text-slate-950'
                                  }`}
                                >
                                  {zone.label}
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2 md:justify-end">
                                {zone.nodes.map((node) => (
                                  <span
                                    key={node}
                                    className={`px-3 py-1.5 rounded text-xs font-bold border ${
                                      isDark
                                        ? 'bg-slate-900 border-slate-700 text-slate-100'
                                        : 'bg-slate-100 border-slate-200 text-slate-900'
                                    }`}
                                  >
                                    {node}
                                  </span>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 4-Step Delivery Governance Bar */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                      Delivery Governance & Execution Sequence
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-slate-300 rounded-lg divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-white overflow-hidden">
                      {activeBlueprintItem.architectureFlow.map((stage) => (
                        <div key={stage.step} className="p-4">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 mb-1">
                            Step {stage.step}
                          </div>
                          <h5 className="text-xs font-extrabold text-slate-950 mb-1 leading-snug">
                            {stage.title}
                          </h5>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            {stage.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contextual Stakeholder Endorsements */}
                  {activeBlueprintItem.testimonials && activeBlueprintItem.testimonials.length > 0 && (
                    <div className="space-y-3">
                      {activeBlueprintItem.testimonials.map((t) => (
                        <div
                          key={t.authorRole}
                          className="bg-white border border-slate-200 border-l-2 border-l-sky-700 rounded-lg p-4 sm:p-5"
                        >
                          <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-2">
                            "{t.quote}"
                          </p>
                          <div className="text-[11px] font-bold text-slate-950">
                            {t.authorRole}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Outcome & Role Callout */}
                  <div className="bg-slate-950 text-white border border-slate-800 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-1">
                        Verified Outcome Metric
                      </div>
                      <div className="text-sm font-bold text-white">
                        {activeBlueprintItem.highlightMetric || activeBlueprintItem.category}
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 shrink-0">
                      Role:{' '}
                      <span className="text-slate-200 font-semibold">
                        {activeBlueprintItem.role}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Blueprint Modal Footer */}
            <div className="px-6 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-950">{activeBlueprintItem.category}</span>
                {activeBlueprintItem.organizationOrEvent && (
                  <span> | {activeBlueprintItem.organizationOrEvent}</span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {activeBlueprintItem.videoUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      const target = activeBlueprintItem;
                      setActiveBlueprintItem(null);
                      setActiveVideoItem(target);
                    }}
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-950 border border-slate-300 text-xs font-bold transition-colors duration-250 ease-out inline-flex items-center space-x-1.5"
                  >
                    <Play className="w-3.5 h-3.5 text-sky-700 fill-sky-700" />
                    <span>Watch Demo</span>
                  </button>
                )}
                {activeBlueprintItem.liveUrl && (
                  <a
                    href={activeBlueprintItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-950 border border-slate-300 text-xs font-bold transition-colors duration-250 ease-out inline-flex items-center space-x-1.5"
                  >
                    <span>{activeBlueprintItem.liveLabel || 'Live Product'}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-700" />
                  </a>
                )}
                <a
                  href={`mailto:sam@tactical-scale.com?subject=${encodeURIComponent(
                    `Architecture Blueprint Walkthrough: ${activeBlueprintItem.title}`
                  )}`}
                  className="px-4 py-2 rounded-lg bg-slate-950 hover:bg-sky-700 text-white text-xs font-bold transition-colors duration-250 ease-out inline-flex items-center space-x-1.5"
                >
                  <span>Discuss This Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive 30-60-90 Day B2B Solution Scoper */}
      <section id="scoper" className="py-24 sm:py-28 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
                Interactive Diagnostic Blueprint
              </h2>
              <h3 className="text-3xl font-extrabold text-slate-950">
                Select Your Operational or Technical Challenge
              </h3>
            </div>
            <p className="text-sm text-slate-500 mt-2 md:mt-0">
              30-60-90 day execution roadmap and verified proof points.
            </p>
          </div>

          {/* Scoper Tabs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {DIAGNOSTIC_SCENARIOS.map((scenario, idx) => {
              const isSelected = idx === activeScenarioIdx;

              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setActiveScenarioIdx(idx)}
                  className={`text-left p-4 rounded-lg transition-all duration-250 ease-out border ${
                    isSelected
                      ? 'border-slate-950 bg-slate-950 text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-sky-700 hover:bg-white'
                  }`}
                >
                  <div
                    className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      isSelected ? 'text-sky-400' : 'text-sky-700'
                    }`}
                  >
                    {scenario.scenarioNumber}
                  </div>
                  <div className="font-bold text-sm">{scenario.shortTitle}</div>
                </button>
              );
            })}
          </div>

          {/* Scoper Output Architectural Grid */}
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-5 border-b border-slate-200 bg-slate-50">
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-950">
                {activeScenario.title}
              </h4>
              <span className="px-3 py-1 rounded bg-slate-900 text-sky-400 text-xs font-bold">
                {activeScenario.badge}
              </span>
            </div>

            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-6">
                <div className="text-xs font-bold uppercase text-sky-700 mb-3">
                  Days 1 to 30: Diagnose & Stabilise
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                  {formatScenarioBullets(activeScenario.days30).map((point) => (
                    <li key={point} className="flex items-start space-x-2">
                      <span className="text-sky-700 font-bold shrink-0">/</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase text-sky-700 mb-3">
                  Days 31 to 60: Architect & Execute
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                  {formatScenarioBullets(activeScenario.days60).map((point) => (
                    <li key={point} className="flex items-start space-x-2">
                      <span className="text-sky-700 font-bold shrink-0">/</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase text-sky-700 mb-3">
                  Days 61 to 90: Transition & Scale
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                  {formatScenarioBullets(activeScenario.days90).map((point) => (
                    <li key={point} className="flex items-start space-x-2">
                      <span className="text-sky-700 font-bold shrink-0">/</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-950 text-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="leading-relaxed">
                <strong className="text-sky-400">Verified Proof: </strong>
                {activeScenario.proof}
              </div>
              <a
                href={`mailto:sam@tactical-scale.com?subject=${encodeURIComponent(
                  `Blueprint Enquiry: ${activeScenario.badge}`
                )}`}
                className="shrink-0 px-4 py-2.5 rounded-lg bg-white text-slate-950 font-bold hover:bg-slate-100 transition-colors duration-250 ease-out text-center"
              >
                Discuss This Scenario
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Productized Commercial Engagement Models */}
      <section className="py-24 sm:py-28 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
              Commercial Procurement
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-950">
              Flexible B2B Engagement Models
            </h3>
          </div>

          <div className="grid md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-sky-700 mb-1">
                  Fixed-Scope Diagnostic (2 to 4 Weeks)
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-4">
                  Readiness, Risk & AI Studio Audit
                </h4>
                <ul className="text-sm text-slate-600 mb-6 space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-700 font-bold">/</span>
                    <span>Stalled IT programme RAID & critical-path audit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-700 font-bold">/</span>
                    <span>AI Studio-to-production CI/CD bottleneck triage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-700 font-bold">/</span>
                    <span>UK statutory & security control recovery blueprint</span>
                  </li>
                </ul>
              </div>
              <a
                href="mailto:sam@tactical-scale.com?subject=Enquiry%3A%20Readiness%20%26%20Risk%20Audit"
                className="text-xs font-bold text-slate-950 hover:text-sky-700 transition-colors duration-250 ease-out flex items-center space-x-1 pt-4 border-t border-slate-200"
              >
                <span>Request Scope Template</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-sky-700 mb-1">
                  Accelerator Sprint (4 to 8 Weeks)
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-4">
                  Applied AI & Agentic Pilot
                </h4>
                <ul className="text-sm text-slate-600 mb-6 space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-700 font-bold">/</span>
                    <span>Schema-enforced Gemini, ADK 2.0 & Gemma 4 workflows</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-700 font-bold">/</span>
                    <span>Cloud Run, Azure AI, or Cloudflare Workers builds</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-700 font-bold">/</span>
                    <span>Production release, QA & team handover included</span>
                  </li>
                </ul>
              </div>
              <a
                href="mailto:sam@tactical-scale.com?subject=Enquiry%3A%20Applied%20AI%20%26%20Agentic%20Pilot"
                className="text-xs font-bold text-slate-950 hover:text-sky-700 transition-colors duration-250 ease-out flex items-center space-x-1 pt-4 border-t border-slate-200"
              >
                <span>Book Architecture Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-sky-700 mb-1">
                  UK Contracting & Cloud Partner Subcontracting
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-4">
                  Retained SOW & Interim Leadership
                </h4>
                <ul className="text-sm text-slate-600 mb-6 space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-700 font-bold">/</span>
                    <span>UK Contract Programme Leadership</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-700 font-bold">/</span>
                    <span>Fixed-Scope B2B Statements of Work (SOW)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-700 font-bold">/</span>
                    <span>White-Label Associate Subcontracting for Microsoft, Google Cloud & AWS Partners</span>
                  </li>
                </ul>
              </div>
              <a
                href="mailto:sam@tactical-scale.com?subject=Enquiry%3A%20UK%20Contract%2C%20SOW%20Delivery%20%26%20Partner%20Subcontracting"
                className="text-xs font-bold text-slate-950 hover:text-sky-700 transition-colors duration-250 ease-out flex items-center space-x-1 pt-4 border-t border-slate-200"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials, Governance & Principal Leadership */}
      <section id="credentials" className="py-24 sm:py-28 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          {/* Verified Certifications & Partner Provenance */}
          <div className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1">
                  10+ Years of Microsoft Partner & GSI Delivery Provenance
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Verified Accreditations & Multi-Cloud Ecosystem
                </h3>
              </div>
              <div className="text-xs font-semibold text-slate-600">
                PMI | Microsoft Gold Partner & GSI Lineage | Google Cloud AI
              </div>
            </div>

            {/* Verified Certification Badge Showcase Grid */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Verified Certification & Skills Badges (
                  {showAllBadges ? CERTIFICATION_BADGES.length : 12} of {CERTIFICATION_BADGES.length})
                </div>
                <button
                  type="button"
                  onClick={() => setShowAllBadges(!showAllBadges)}
                  className="text-xs font-bold text-sky-700 hover:text-slate-950 transition-colors duration-250 ease-out self-start sm:self-auto"
                >
                  {showAllBadges
                    ? 'Show Core 12 Badges'
                    : `Show All ${CERTIFICATION_BADGES.length} Official Badges`}
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-slate-200 bg-white">
                {(showAllBadges ? CERTIFICATION_BADGES : CERTIFICATION_BADGES.slice(0, 12)).map(
                  (badge) => {
                    const badgeContent = (
                      <>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            {badge.issuer}
                          </span>
                          {badge.verifyUrl && (
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          )}
                        </div>
                        <div className="my-2 flex items-center justify-center bg-slate-50/70 rounded p-2.5 border border-slate-100">
                          <img
                            src={badge.imageUrl}
                            alt={badge.name}
                            className="w-14 h-14 object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="mt-2">
                          <div className="text-sm font-extrabold text-slate-950">{badge.code}</div>
                          <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                            {badge.name}
                          </div>
                        </div>
                        <div className="mt-3 pt-2.5 border-t border-slate-100 text-[10px] font-bold uppercase tracking-wider text-sky-700">
                          {badge.tier}
                        </div>
                      </>
                    );

                    return badge.verifyUrl ? (
                      <a
                        key={`${badge.issuer}-${badge.code}`}
                        href={badge.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-5 border-r border-b border-slate-200 flex flex-col justify-between hover:bg-slate-50 transition-colors duration-250 ease-out"
                      >
                        {badgeContent}
                      </a>
                    ) : (
                      <div
                        key={`${badge.issuer}-${badge.code}`}
                        className="p-5 border-r border-b border-slate-200 flex flex-col justify-between hover:bg-slate-50 transition-colors duration-250 ease-out"
                      >
                        {badgeContent}
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* 3-Column Ecosystem Provenance Summary Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-b border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-slate-50/60">
              <div className="p-6">
                <div className="text-xs font-bold uppercase text-sky-700 mb-2">
                  PMI Governance & Sector Accreditations
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                  <li>
                    <strong className="text-slate-950">PMI & Agile:</strong> PMP, DASSM, Agile
                    Hybrid Pro & CSM (Certified Scrum Master)
                  </li>
                  <li>
                    <strong className="text-slate-950">Sector & ITSM:</strong> LOMA FLMI Level 1
                    (Insurance) & EXIN ISO/IEC 20000 (ITSM)
                  </li>
                  <li>
                    <strong className="text-slate-950">Quality & Risk:</strong> Lean Six Sigma
                    (LSS), DevSecOps CI/CD, BCM & Data Privacy
                  </li>
                </ul>
              </div>

              <div className="p-6">
                <div className="text-xs font-bold uppercase text-sky-700 mb-2">
                  Microsoft Partner & GSI Provenance
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                  <li>
                    <strong className="text-slate-950">40+ Deployments:</strong> Microsoft Gold,
                    Cloud Partners & GSIs
                  </li>
                  <li>
                    <strong className="text-slate-950">5-Credential Suite:</strong> SC-100 Expert,
                    AI-102, DP-100, AZ-104 & Microsoft Foundry SDK
                  </li>
                  <li>
                    <strong className="text-slate-950">Infrastructure:</strong> Azure, M365/O365
                    CCE, Exchange, AD, SharePoint & SCCM/SCOM
                  </li>
                </ul>
              </div>

              <div className="p-6 sm:col-span-2 lg:col-span-1">
                <div className="text-xs font-bold uppercase text-sky-700 mb-2">
                  Google Cloud, Multi-Model AI & Enterprise Tooling
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                  <li>
                    <strong className="text-slate-950">Google Cloud AI:</strong> Google Gemini
                    Enterprise, ADK 2.0, Gemma 4 & Cloud Run
                  </li>
                  <li>
                    <strong className="text-slate-950">Multi-Model & Dev:</strong> Anthropic Claude
                    Platform & GitHub Copilot
                  </li>
                  <li>
                    <strong className="text-slate-950">Enterprise Tooling:</strong> ServiceNow IT
                    Leadership, Atlassian ITSM/Agile & Aha! Product Management
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compact 3-Column Executive Endorsement Strip */}
          <div className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-sky-700 mb-1">
                  Independent Stakeholder Validation
                </div>
                <h4 className="text-xl font-extrabold text-slate-950">
                  Verified Executive & Partner Endorsements
                </h4>
              </div>
              <a
                href="https://linkedin.com/in/samgorleung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-sky-700 hover:text-slate-950 transition-colors duration-250 ease-out inline-flex items-center space-x-1 shrink-0"
              >
                <span>Verify All 14+ on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-slate-50/50">
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 mb-2">
                    Applied AI Leadership
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "Sam's initiative to lead and shape the AI working group has been a
                    game-changer for us. His work has undoubtedly raised the bar for what we can
                    achieve in project management through technology."
                  </p>
                </div>
                <div className="text-[11px] font-bold text-slate-950 pt-3 border-t border-slate-200">
                  Programme Manager, PMI UK Chapter
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 mb-2">
                    Executive Delivery
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "A seasoned BA/PM with a customer-first and result-first mentality,
                    demonstrating excellent stakeholder management, cross-functional collaboration,
                    and risk management."
                  </p>
                </div>
                <div className="text-[11px] font-bold text-slate-950 pt-3 border-t border-slate-200">
                  VP of Technology, Direct Line Manager
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 mb-2">
                    GSI Subcontracting
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "Very well organized, takes initiative beyond the expected parameters of his
                    job, and runs an efficient project with no unpleasant surprises."
                  </p>
                </div>
                <div className="text-[11px] font-bold text-slate-950 pt-3 border-t border-slate-200">
                  Project Manager, Global System Integrator
                </div>
              </div>
            </div>
          </div>

          {/* Principal Leadership Section */}
          <div className="bg-slate-950 text-white rounded-lg p-8 sm:p-10 border border-slate-800">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6 pb-6 border-b border-slate-800">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shrink-0 flex items-center justify-center">
                    {!portraitError ? (
                      <img
                        src="/sam-leung.jpg"
                        alt="Sam Leung, PMP, DASSM"
                        className="w-full h-full object-cover object-top"
                        onError={() => setPortraitError(true)}
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-2xl font-extrabold tracking-tight text-sky-400">
                          SL
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                          Principal
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1.5">
                      Principal Consultant & Founder | Greater London, UK
                    </div>
                    <h3 className="text-3xl font-extrabold mb-1">
                      Sam Leung, PMP, DASSM
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      Trading as: Sam Leung T/A Tactical Scale (Sole Trader transitioning to UK
                      Limited Company)
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-sky-400 font-bold shrink-0">01.</span>
                    <span>
                      <strong className="text-white">Regulated BFSI Leadership:</strong> 14+ years
                      directing clearing, claims, cyber remediation, and Azure programmes across
                      Tier-1 UK capital markets and global insurers.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-sky-400 font-bold shrink-0">02.</span>
                    <span>
                      <strong className="text-white">Microsoft Partner & GSI Lineage:</strong> 40+
                      Microsoft stack deployments spanning 18 concurrent UC/Cloud PBX mandates,
                      1,000+ server Azure assessments, SCCM/SCOM, Exchange, SharePoint, and AD.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-sky-400 font-bold shrink-0">03.</span>
                    <span>
                      <strong className="text-white">Hands-On Applied AI:</strong> Software
                      engineering roots building production Gemini, ADK 2.0, and Gemma 4 systems
                      in London (bilingual EN / ZH).
                    </span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-sky-400 font-bold shrink-0">04.</span>
                    <span>
                      <strong className="text-white">PMI UK Chapter Leadership & Mentoring:</strong> Key
                      contributor to PMI UK flagship events (Sustainability Summit 2023/2025/2026,
                      PM4THEWORLD 2024, PMI Synergy 2026) and PMI UK 6-Month Programme Mentor
                      coaching practitioners on PMBOK portfolio oversight and practical AI
                      adoption for UK SMEs.
                    </span>
                  </li>
                </ul>

                {/* Technical Engineering Partner Callout */}
                <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 mb-8">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                      Technical Engineering Partner Network
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      Joint Full-Stack & AI Delivery
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Co-architecting flagship builds including{' '}
                    <span className="text-white font-semibold">SprintClarify</span>,{' '}
                    <span className="text-white font-semibold">EchoHire</span>,{' '}
                    <span className="text-white font-semibold">CineFact AI</span>, and{' '}
                    <span className="text-white font-semibold">Commercial AI SaaS Engineering</span>.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:sam@tactical-scale.com"
                    className="px-5 py-3 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs transition-colors duration-250 ease-out flex items-center space-x-2"
                  >
                    <span>sam@tactical-scale.com</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/samgorleung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 hover:border-sky-400 transition-colors duration-250 ease-out flex items-center space-x-2"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-4 h-4 text-sky-400" />
                  </a>
                  <a
                    href="https://github.com/Samgorleung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 hover:border-sky-400 transition-colors duration-250 ease-out flex items-center space-x-2"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-4 h-4 text-sky-400" />
                  </a>
                  <a
                    href="https://devpost.com/samgorleung1224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 hover:border-sky-400 transition-colors duration-250 ease-out flex items-center space-x-2"
                  >
                    <span>Devpost Portfolio</span>
                    <ArrowUpRight className="w-4 h-4 text-sky-400" />
                  </a>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Practice Metrics & Stack
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">14+ Years | 40+ Mandates</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Regulated BFSI, Microsoft Partner & GSI Delivery
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-3xl font-extrabold text-sky-400">1,300+ Servers</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Assessed, Migrated or Hardened Across 65+ Global Sites
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-3xl font-extrabold text-white">80% Automation</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Delivered Across 1.5M+ Policy Records & 1,000+ User Cutovers
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-2xl font-extrabold text-sky-400">8 AI & RegTech Builds</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Gemini, ADK 2.0, Gemma 4, Cloud Run & Cloudflare
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Footer */}
      <footer className="py-12 px-6 bg-slate-950 text-slate-400 border-t border-slate-900 text-xs mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 text-white font-bold text-sm">
              <span>TACTICAL SCALE</span>
              <span className="text-slate-600">|</span>
              <span className="text-sky-400 font-semibold text-xs">tactical-scale.com</span>
            </div>
            <p className="text-slate-400">
              Trading Identity:{' '}
              <strong className="text-slate-200">Sam Leung T/A Tactical Scale</strong> (Sole Trader
              transitioning to UK Limited Company)
            </p>
            <p className="text-slate-500">
              Greater London, United Kingdom | Principal Consultant: Sam Leung, PMP, DASSM |
              Supported by Specialized Technical Engineering Partners
            </p>
          </div>

          <div className="flex flex-col sm:items-end space-y-2">
            <div className="flex items-center space-x-4 text-slate-300 font-semibold">
              <a
                href="mailto:sam@tactical-scale.com"
                className="hover:text-sky-400 transition-colors duration-250 ease-out"
              >
                sam@tactical-scale.com
              </a>
              <span>|</span>
              <a
                href="https://linkedin.com/in/samgorleung"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors duration-250 ease-out"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href="https://github.com/Samgorleung"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors duration-250 ease-out"
              >
                GitHub
              </a>
              <span>|</span>
              <a
                href="https://devpost.com/samgorleung1224"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors duration-250 ease-out"
              >
                Devpost
              </a>
            </div>
            <div className="text-slate-500">
              © {new Date().getFullYear()} Sam Leung T/A Tactical Scale. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PortfolioCard({
  item,
  onWatchDemo,
  onViewBlueprint,
}: {
  item: PortfolioItem;
  onWatchDemo: (item: PortfolioItem) => void;
  onViewBlueprint: (item: PortfolioItem) => void;
}) {
  return (
    <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200 hover:border-sky-700 hover:-translate-y-0.5 transition-all duration-250 ease-out flex flex-col justify-between">
      <div>
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider border text-sky-700 bg-slate-50 border-slate-200">
            {item.category}
          </span>
          <span className="px-2.5 py-1 rounded bg-slate-900 text-white text-[11px] font-semibold">
            {item.trackLabel}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h4 className="text-xl font-extrabold text-slate-950 leading-snug">{item.title}</h4>
        {item.subtitle && (
          <div className="text-xs font-semibold text-slate-500 mt-0.5 mb-3">{item.subtitle}</div>
        )}

        {/* Role & Collaborator Info */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-700 py-2 border-t border-b border-slate-200 mb-4">
          <div>
            <span className="font-bold text-slate-900">Role: </span>
            <span>{item.role}</span>
          </div>
          {item.collaborator && (
            <div className="text-sky-700 font-semibold">
              <span>| with {item.collaborator}</span>
            </div>
          )}
          {item.organizationOrEvent && (
            <div className="text-slate-500 font-medium">
              <span>| {item.organizationOrEvent}</span>
            </div>
          )}
        </div>

        {/* Overview & Business Value */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">{item.overview}</p>
      </div>

      <div>
        {/* Highlight Metric / Outcome */}
        {item.highlightMetric && (
          <div className="text-xs font-semibold text-slate-900 py-2 px-3 rounded bg-slate-50 border-l-2 border-sky-700 mb-4">
            <span className="text-sky-700 font-bold uppercase tracking-wider text-[10px] mr-2">
              Outcome:
            </span>
            <span>{item.highlightMetric}</span>
          </div>
        )}

        {/* Tech Stack Pills & Action Buttons */}
        <div className="pt-3 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {item.techOrSectorLabel}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => onViewBlueprint(item)}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-950 text-slate-900 hover:text-white border border-slate-300 hover:border-slate-950 text-[11px] font-bold transition-colors duration-250 ease-out"
              >
                <span>View Blueprint</span>
                <ArrowUpRight className="w-3 h-3 text-sky-700" />
              </button>
              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-950 hover:bg-sky-700 text-white text-[11px] font-bold transition-colors duration-250 ease-out"
                >
                  <span>{item.liveLabel || 'Live Product'}</span>
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </a>
              )}
              {item.videoUrl && (
                <button
                  type="button"
                  onClick={() => onWatchDemo(item)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-950 hover:bg-sky-700 text-white text-[11px] font-bold transition-colors duration-250 ease-out"
                >
                  <Play className="w-3 h-3 text-sky-400 fill-sky-400" />
                  <span>Watch Demo</span>
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CERTIFICATION_BADGES: {
  issuer: string;
  code: string;
  name: string;
  tier: string;
  imageUrl: string;
  verifyUrl?: string;
}[] = [
  {
    issuer: 'PMI',
    code: 'PMP',
    name: 'Project Management Professional',
    tier: 'Verified Credential',
    imageUrl: '/Badges/project-management-professional-pmp.png',
  },
  {
    issuer: 'PMI',
    code: 'DASSM',
    name: 'Disciplined Agile Senior Scrum Master',
    tier: 'Verified Credential',
    imageUrl: '/Badges/disciplined-agile-senior-scrum-master-dassm.png',
  },
  {
    issuer: 'PMI',
    code: 'Agile Hybrid Pro',
    name: 'Agile Hybrid Project Pro',
    tier: 'Verified Micro-Credential',
    imageUrl: '/Badges/agile-hybrid-project-pro.png',
  },
  {
    issuer: 'Microsoft',
    code: 'SC-100 Expert',
    name: 'Cybersecurity Architect Expert',
    tier: 'Microsoft Certified Expert',
    imageUrl: '/Badges/microsoft-certified-expert-badge.svg',
  },
  {
    issuer: 'Microsoft',
    code: 'AI-102 Associate',
    name: 'Azure AI Engineer Associate',
    tier: 'Microsoft Certified Associate',
    imageUrl: '/Badges/microsoft-certified-associate-badge.svg',
  },
  {
    issuer: 'Microsoft',
    code: 'DP-100 Associate',
    name: 'Azure Data Scientist Associate',
    tier: 'Microsoft Certified Associate',
    imageUrl: '/Badges/microsoft-certified-associate-badge.svg',
  },
  {
    issuer: 'Microsoft',
    code: 'AZ-104 Associate',
    name: 'Azure Administrator Associate',
    tier: 'Microsoft Certified Associate',
    imageUrl: '/Badges/microsoft-certified-associate-badge.svg',
  },
  {
    issuer: 'Microsoft',
    code: 'MS Foundry SDK',
    name: 'Generative AI Chat Apps with Microsoft Foundry SDK',
    tier: 'Microsoft Applied Skills',
    imageUrl: '/Badges/applied-skill.svg',
  },
  {
    issuer: 'Google Cloud',
    code: 'Gemini Multi-Agent',
    name: 'Orchestrate Multi-Agent Workflows with Gemini Enterprise',
    tier: 'Google Skill Badge',
    imageUrl: '/Badges/orchestrate-multi-agent-workflows-with-gemini-enter.png',
  },
  {
    issuer: 'PMI',
    code: 'PMI Agentic AI Lab',
    name: 'Agentic AI Build Lab for Project Managers',
    tier: 'Verified Micro-Credential',
    imageUrl: '/Badges/pmi-essentials-agentic-ai-build-lab-for-project-man.png',
  },
  {
    issuer: 'Make Academy',
    code: 'AI Agent Builder',
    name: 'Autonomous AI Agent & Workflow Builder',
    tier: 'Verified Automation Credential',
    imageUrl: '/Badges/ai-agent-builder.1.png',
  },
  {
    issuer: 'Make Academy',
    code: 'Make Advanced ★★★★',
    name: 'Advanced Enterprise Workflow & API Automation',
    tier: 'Advanced Certification',
    imageUrl: '/Badges/make-advanced.png',
  },
  {
    issuer: 'Google Cloud',
    code: 'Google AI Studio',
    name: 'Develop AI-Powered Prototypes in Google AI Studio',
    tier: 'Google Skill Badge',
    imageUrl: '/Badges/develop-ai-powered-prototypes-in-google-ai-studio.png',
  },
  {
    issuer: 'Google Cloud',
    code: 'Vertex AI Prompts',
    name: 'Prompt Design in Vertex AI',
    tier: 'Google Skill Badge',
    imageUrl: '/Badges/prompt-design-in-vertex-ai-skill-badge.png',
  },
  {
    issuer: 'PMI',
    code: 'PMI GenAI Overview',
    name: 'Generative AI Overview for Project Managers',
    tier: 'Verified Micro-Credential',
    imageUrl: '/Badges/generative-ai-overview-for-project-managers.png',
  },
  {
    issuer: 'PMI',
    code: 'GenAI Applied',
    name: 'Practical Application of GenAI for Project Managers',
    tier: 'Verified Micro-Credential',
    imageUrl: '/Badges/practical-application-of-gen-ai-for-project-manager.png',
  },
  {
    issuer: 'PMI',
    code: 'GenAI Data Landscape',
    name: 'Data Landscape of GenAI for Project Managers',
    tier: 'Verified Micro-Credential',
    imageUrl: '/Badges/data-landscape-of-genai-for-project-managers.png',
  },
  {
    issuer: 'PMI',
    code: 'Agentic Foundations',
    name: 'Foundations: Agentic AI for Project Managers',
    tier: 'Verified Micro-Credential',
    imageUrl: '/Badges/pmi-foundations-agentic-ai-for-project-managers.png',
  },
  {
    issuer: 'PMI',
    code: 'AI Project Patterns',
    name: 'Seven AI Project Patterns',
    tier: 'Verified Micro-Credential',
    imageUrl: '/Badges/pmi-essentials-seven-ai-project-patterns.png',
  },
  {
    issuer: 'PMI',
    code: 'AI in Agile',
    name: 'AI in Agile Delivery',
    tier: 'Verified Micro-Credential',
    imageUrl: '/Badges/ai-in-agile-delivery.png',
  },
  {
    issuer: 'PMI',
    code: 'AI Infrastructure',
    name: 'AI in Infrastructure & Construction Projects',
    tier: 'Verified Micro-Credential',
    imageUrl: '/Badges/ai-in-infrastructure-construction-projects.png',
  },
  {
    issuer: 'Google Cloud',
    code: 'Gemini & Streamlit',
    name: 'Develop GenAI Apps with Gemini & Streamlit',
    tier: 'Google Skill Badge',
    imageUrl: '/Badges/develop-genai-apps-with-gemini-and-streamlit-skill-.png',
  },
  {
    issuer: 'PMI',
    code: 'PMI Prompt Eng.',
    name: 'Talking to AI: Prompt Engineering for Project Managers',
    tier: 'Verified Micro-Credential',
    imageUrl: '/Badges/talking-to-ai-prompt-engineering-for-project-manage.png',
  },
  {
    issuer: 'Automation',
    code: 'AI Automation Explorer',
    name: 'AI Automation Explorer',
    tier: 'Workflow Badge',
    imageUrl: '/Badges/ai-automation-explorer.png',
  },
  {
    issuer: 'PMI',
    code: 'DA Essentials',
    name: 'Disciplined Agile Essentials',
    tier: 'Agile Competency',
    imageUrl: '/Badges/disciplined-agile-essentials.png',
  },
  {
    issuer: 'PMI',
    code: 'Agile Metrics',
    name: 'Agile Metrics for Success',
    tier: 'Agile Competency',
    imageUrl: '/Badges/agile-metrics-for-success.png',
  },
  {
    issuer: 'PMI',
    code: 'Value Stream Mgmt',
    name: 'Value Stream Management',
    tier: 'Agile Competency',
    imageUrl: '/Badges/value-stream-management.1.png',
  },
  {
    issuer: 'PMI',
    code: 'Product & Project',
    name: 'Product & Project Collaboration',
    tier: 'Agile Competency',
    imageUrl: '/Badges/product-and-project-collaboration.png',
  },
  {
    issuer: 'PMI',
    code: 'M.O.R.E.',
    name: 'Maximizing Project Success',
    tier: 'Delivery Competency',
    imageUrl: '/Badges/pmi-essentials-m-o-r-e-maximizing-project-success.png',
  },
  {
    issuer: 'PMI',
    code: 'Citizen Dev Arch.',
    name: 'Citizen Developer Business Architect',
    tier: 'Low-Code Architecture',
    imageUrl: '/Badges/pmi-citizen-developer-business-architect-skills.png',
  },
  {
    issuer: 'PMI',
    code: 'Citizen Dev Prac.',
    name: 'Citizen Developer Practitioner',
    tier: 'Low-Code Delivery',
    imageUrl: '/Badges/pmi-citizen-developer-practitioner-skills.png',
  },
];

function formatScenarioBullets(text: string): string[] {
  const parts: string[] = [];
  let current = '';
  let depth = 0;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (ch === '(') depth += 1;
    if (ch === ')' && depth > 0) depth -= 1;

    if (ch === ',' && depth === 0) {
      parts.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) {
    parts.push(current);
  }

  return parts
    .map((part) => part.trim().replace(/^and\s+/i, '').replace(/\.$/, '').trim())
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1));
}

function getYouTubeEmbedUrl(url?: string): string {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;
  try {
    let id = '';
    if (url.includes('youtube.com/watch')) {
      const parsed = new URL(url);
      id = parsed.searchParams.get('v') || '';
    } else if (url.includes('youtu.be/')) {
      id = url.split('youtu.be/')[1]?.split('?')[0] || '';
    }
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : url;
  } catch {
    return url;
  }
}

export default App;
