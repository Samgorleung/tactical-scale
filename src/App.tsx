import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
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

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveVideoItem(null);
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
      <section className="pt-32 sm:pt-36 pb-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
            <span>Greater London, United Kingdom</span>
            <span className="text-slate-400">|</span>
            <span className="text-sky-700">Digital Transformation, Agile Delivery & Applied AI</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] mb-6 max-w-4xl">
            Pragmatic Project Delivery &{' '}
            <span className="text-sky-700">Applied AI Engineering.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 font-medium max-w-3xl mb-5 leading-relaxed">
            Bridging enterprise governance with rapid technical execution across cloud
            transformation, agentic AI workflows, and regulatory delivery.
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mb-10 leading-relaxed">
            Tactical Scale is an independent consultancy based in London combining{' '}
            <strong className="text-slate-900 font-semibold">
              14+ years of tier-one financial services and IT programme management
            </strong>{' '}
            with hands-on cloud architecture and multi-agent AI engineering. Whether migrating legacy
            actuarial and claims systems to Azure, navigating complex UK regulatory licensing, or
            architecting schema-enforced AI systems on Google Cloud and Cloudflare Workers, every
            engagement delivers measurable operational outcomes without agency bloat.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="mailto:sam@tactical-scale.com?subject=Consultation%20Enquiry%3A%20Tactical%20Scale"
              className="px-6 py-3.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-250 ease-out hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Book a Consultation / Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-300 hover:border-sky-700 transition-all duration-250 ease-out hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Explore Delivered Projects (12)</span>
              <ArrowRight className="w-4 h-4 text-sky-700" />
            </a>
            <a
              href="#scoper"
              className="px-5 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200/70 text-slate-700 font-medium text-sm border border-slate-200 hover:border-slate-300 transition-all duration-250 ease-out flex items-center space-x-2"
            >
              <span>30-60-90 Solution Scoper</span>
            </a>
          </div>

          {/* Proven Track Record Architectural Grid (Replaces Floating Hero Cards) */}
          <div className="pt-8 border-t border-slate-200">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Verified Principal Track Record Across Enterprise Delivery & Applied AI Systems
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
                  Market infrastructure governance, risk controls, and clearing transformation.
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
                  Claims workflow modernization and 18-office actuarial migration to Azure.
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
                  UK statutory licensing approvals and autonomous Cloud Run compliance auditing.
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
                  Schema-enforced Gemini systems, live voice agents, and video verification.
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Positioning: The Consulting Gap & Target Client Segments */}
      <section id="positioning" className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
              Executive Positioning & Value Proposition
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-950 mb-3">
              Closing the Divide Between Strategy & Production Code
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Many organizations struggle with a divide between high-level strategy consultants who
              do not build, and technical developers who lack enterprise risk, compliance, and
              delivery governance. Tactical Scale bridges both worlds.
            </p>
          </div>

          {/* 3-Column Consulting Gap Architectural Grid */}
          <div className="grid md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white mb-14">
            <div className="p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Traditional Strategy Consultancies
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                High Overhead, Slideware Output
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Expensive strategy decks handed off to junior analysts who lack hands-on cloud
                security, schema-enforced AI engineering, or production deployment capability.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Pure-Play Dev Shops & Freelancers
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Code Without Enterprise Governance
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fragile AI prototypes that fail enterprise stage-gates, regulatory compliance
                audits, SteerCo scrutiny, and staging-to-production synchronization.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-slate-950 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                The Tactical Scale Model
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Principal Governance + Rapid Execution
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Led directly by Sam Leung (PMP, DASSM, SC-100, AI-102) supported by specialized
                Technical Engineering Partners, combining tier-one RAID governance with production AI
                systems.
              </p>
            </div>
          </div>

          {/* Target Client Segments Architectural Grid */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-4">
              Target Client Segments We Serve
            </div>
            <div className="grid md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                    Segment 01
                  </div>
                  <h4 className="text-base font-bold text-slate-950 mb-2">
                    Financial Services & Enterprise Ops
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Banks, insurers, and market infrastructure providers requiring seasoned PMP and
                    Agile delivery leadership for cloud, security, and AI transformation programmes.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-500">
                  Clearing, Insurance Claims, Actuarial Cloud, Cyber Risk
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                    Segment 02
                  </div>
                  <h4 className="text-base font-bold text-slate-950 mb-2">
                    SMEs & Commercial Operators
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    UK businesses requiring digital workflow modernization, compliance automation,
                    and statutory regulatory application management (HMRC AWRS & local authority
                    licensing).
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-500">
                  UK Statutory Licensing, Workflow Automation, M365 Copilot
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                    Segment 03
                  </div>
                  <h4 className="text-base font-bold text-slate-950 mb-2">
                    Founders & Product Teams
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Technical and non-technical founders seeking rapid MVP development, multi-agent
                    AI integration, and Google AI Studio to production environment deployment
                    support.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-500">
                  AI Studio Sync, Cloud Run CI/CD, Schema-Enforced MVPs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Service Pillars (Border-Divided Architectural Grid) */}
      <section id="pillars" className="py-20 px-6 bg-white border-b border-slate-200">
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
            {/* Pillar 1: Enterprise Programme & Agile Delivery */}
            <div className="py-8 md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                  Pillar 01
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-3">
                  Enterprise Programme & Agile Delivery
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Structured project and programme management for complex IT transformations, cloud
                  migrations, and regulatory compliance initiatives. Drawing on deep experience
                  across banking, insurance, and financial market infrastructure, Tactical Scale
                  establishes clear governance, RAID management, and agile delivery rhythms that
                  bring high-stakes initiatives from initiation to production release.
                </p>
              </div>
              <ul className="text-xs font-semibold text-slate-700 space-y-2.5 pt-6 border-t border-slate-200">
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">01.</span>
                  <span>SteerCo Governance, RAID Control & Service Transition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">02.</span>
                  <span>Core Insurance, Clearing & Multi-Market Cloud Migrations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">03.</span>
                  <span>UK Statutory Licensing (HMRC AWRS) & Regulatory Audits</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Applied AI & Agentic Systems Architecture */}
            <div className="py-8 md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                  Pillar 02
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-3">
                  Applied AI & Agentic Systems Architecture
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  End-to-end design and rapid prototyping of production-grade AI applications and
                  autonomous multi-agent workflows. Utilizing modern frameworks including Google
                  Gemini, ADK 2.0, Gemma, Microsoft Azure AI, React 19, TypeScript, and Cloudflare
                  Workers, Tactical Scale turns operational bottlenecks into streamlined,
                  schema-enforced software tools.
                </p>
              </div>
              <ul className="text-xs font-semibold text-slate-700 space-y-2.5 pt-6 border-t border-slate-200">
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">01.</span>
                  <span>Google Gemini, ADK 2.0, Gemma 4 & Azure AI Orchestration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">02.</span>
                  <span>Strict Typed JSON Schema Outputs & Autonomous Auditing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">03.</span>
                  <span>React 19, TypeScript, Cloud Run & Cloudflare Workers</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: AI Coaching, Technical Advisory & Troubleshooting */}
            <div className="py-8 md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                  Pillar 03
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-3">
                  AI Coaching, Technical Advisory & Troubleshooting
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Hands-on advisory and technical troubleshooting for leadership teams and builders
                  adopting generative AI. Services include Google AI Studio to production
                  environment synchronization, prompt and context engineering governance, Microsoft
                  365 Copilot adoption, and rescuing stalled technical prototypes into stable
                  deployments.
                </p>
              </div>
              <ul className="text-xs font-semibold text-slate-700 space-y-2.5 pt-6 border-t border-slate-200">
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">01.</span>
                  <span>Google AI Studio to Cloud Run Production Synchronization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">02.</span>
                  <span>Prompt & Context Engineering Governance & CI/CD Fixes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-700 font-bold">03.</span>
                  <span>M365 Copilot Enablement & Stalled Prototype Rescue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio & Delivery Track Record with Category Filter Tabs */}
      <section id="portfolio" className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
                Project Portfolio & Delivery Track Record
              </h2>
              <h3 className="text-3xl font-extrabold text-slate-950">
                Applied AI Builds & Enterprise Transformation Mandates
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                Filter across our 8 production AI engineering builds and coaching mandates (Part A)
                and 4 flagship enterprise and UK regulatory transformation deliveries (Part B).
                Select "Watch Demo" on any item to view a video walkthrough.
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

      {/* Interactive 30-60-90 Day B2B Solution Scoper */}
      <section id="scoper" className="py-20 px-6 bg-white border-b border-slate-200">
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
              Inspect our 30-60-90 day execution roadmap and verified delivery proof points.
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
                <div className="text-xs font-bold uppercase text-sky-700 mb-2">
                  Days 1 to 30: Diagnose & Stabilise
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{activeScenario.days30}</p>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase text-sky-700 mb-2">
                  Days 31 to 60: Architect & Execute
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{activeScenario.days60}</p>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase text-sky-700 mb-2">
                  Days 61 to 90: Transition & Scale
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{activeScenario.days90}</p>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-950 text-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="leading-relaxed">
                <strong className="text-sky-400">Verified Track Record: </strong>
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
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
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
                <h4 className="text-xl font-bold text-slate-950 mb-3">
                  Readiness, Risk & AI Studio Audit
                </h4>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Independent health-check of stalled IT programmes, Google AI Studio-to-production
                  pipeline bottlenecks, or UK statutory compliance readiness with an actionable
                  recovery blueprint.
                </p>
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
                <h4 className="text-xl font-bold text-slate-950 mb-3">
                  Applied AI & Agentic Pilot
                </h4>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  End-to-end architecture and deployment of a schema-enforced multi-agent workflow
                  (Gemini, ADK 2.0, Gemma 4) on Google Cloud Run, Azure, or Cloudflare Workers.
                </p>
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
                  Retained SOW / Interim Leadership
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-3">
                  Programme Delivery & AI Coaching
                </h4>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Embedded Principal Programme Management or ongoing Technical Advisory to steer
                  critical-path execution, vendor alignment, and production AI adoption across
                  London and global hubs.
                </p>
              </div>
              <a
                href="mailto:sam@tactical-scale.com?subject=Enquiry%3A%20Programme%20Turnaround%20%26%20Advisory%20SOW"
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
      <section id="credentials" className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          {/* Verified Certifications Architectural Grid */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1">
                  Verified Governance & Technical Credentials
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950">
                  Industry-Standard Delivery & Cloud Security Accreditations
                </h3>
              </div>
              <div className="text-xs font-semibold text-slate-600">
                PMI | Microsoft Certified Expert
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-b border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-slate-50/60">
              <div className="p-6">
                <div className="text-xs font-bold uppercase text-sky-700 mb-1">
                  Programme & Agile Governance
                </div>
                <div className="font-bold text-sm text-slate-950">
                  PMP | DASSM
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Project Management Professional (PMI) & Disciplined Agile Senior Scrum Master (PMI)
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-bold uppercase text-sky-700 mb-1">
                  Microsoft Cloud, Cyber & AI
                </div>
                <div className="font-bold text-sm text-slate-950">
                  SC-100 Expert | AI-102 | AZ-104
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Microsoft Cybersecurity Architect Expert, Azure AI Engineer Associate, Azure
                  Administrator Associate
                </div>
              </div>

              <div className="p-6 sm:col-span-2 lg:col-span-1">
                <div className="text-xs font-bold uppercase text-sky-700 mb-1">
                  Applied AI Project Delivery
                </div>
                <div className="font-bold text-sm text-slate-950">
                  PMI GenAI Certifications
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  PMI Generative AI Overview for Project Managers & Prompt Engineering for Project
                  Managers
                </div>
              </div>
            </div>
          </div>

          {/* Principal Leadership Section */}
          <div className="bg-slate-950 text-white rounded-lg p-8 sm:p-10 border border-slate-800">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">
                  Principal Consultant & Founder | Greater London, UK
                </div>
                <h3 className="text-3xl font-extrabold mb-1">
                  Sam Leung, PMP, DASSM
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-5">
                  Trading as: Sam Leung T/A Tactical Scale (Sole Trader transitioning to UK Limited
                  Company)
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  With over 14 years leading complex operational transformations, regional cloud
                  migrations, and regulatory workstreams across Tier-1 UK Financial Market Infrastructure
                  and Clearing House operations, as well as global multinational and life insurers, Sam founded
                  Tactical Scale in London to bridge boardroom governance with hands-on cloud and
                  agentic AI engineering.
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Prior to his recent cloud and AI transformation leadership, his foundation
                  includes starting hands-on in software development before managing over 20
                  enterprise infrastructure, Microsoft System Center (SCCM/SCOM), Exchange,
                  SharePoint, and network migration projects across tier-one banking, energy
                  utilities, listed property groups, higher education, and public sector agencies.
                </p>

                {/* Technical Engineering Partner Callout */}
                <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 mb-8">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                      Technical Engineering Partner Network
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      Collaborative Delivery Across Flagship AI Systems
                    </span>
                  </div>
                  <div className="font-bold text-base text-white mb-1">
                    Specialized Full-Stack & AI Engineering Partners
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Collaborating across applied AI architecture, rapid prototyping, and production
                    troubleshooting, supporting builds including{' '}
                    <span className="text-white font-semibold">SprintClarify</span>,{' '}
                    <span className="text-white font-semibold">EchoHire</span>,{' '}
                    <span className="text-white font-semibold">CineFact AI</span>,{' '}
                    <span className="text-white font-semibold">AI Festival Card Maker</span>, and
                    client{' '}
                    <span className="text-white font-semibold">
                      Production AI Coaching & Environment Synchronization
                    </span>
                    .
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
                  <div className="text-3xl font-extrabold text-white">14+ Years</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Tier-1 Financial Services & IT Programme Delivery
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-3xl font-extrabold text-sky-400">UK + APAC</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Delivery Across Cloud, Clearing & Claims (incl. 18-Office Azure Migration)
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-3xl font-extrabold text-white">Gemini & Gemma</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    ADK 2.0, Cloud Run, React 19, Cloudflare Workers
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-2xl font-extrabold text-sky-400">Greater London</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    UK & Global Bilingual Execution (EN / ZH)
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
}: {
  item: PortfolioItem;
  onWatchDemo: (item: PortfolioItem) => void;
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

        {/* Tech Stack Pills & Watch Demo Button */}
        <div className="pt-3 border-t border-slate-200">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {item.techOrSectorLabel}
            </span>
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
