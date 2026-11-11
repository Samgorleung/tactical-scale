import React, { useState, useMemo, useEffect } from 'react';
import {
  Mail,
  Calendar,
  Sliders,
  Cpu,
  ShieldCheck,
  Bot,
  Wrench,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Award,
  Building2,
  Briefcase,
  Rocket,
  Layers,
  Users,
  MapPin,
  Menu,
  X,
  Sparkles,
  Code2,
  Terminal,
  FileCheck2,
  Globe,
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
      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3.5 group">
            {/* Custom Geometric Vector Emblem: Blue, Purple, Crimson Red on Obsidian Black */}
            <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center shadow-md border border-slate-800 group-hover:scale-105 transition">
              <svg
                className="w-7 h-7"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="19" width="6" height="12" rx="1.5" fill="#38BDF8" />
                <rect x="15" y="12" width="6" height="19" rx="1.5" fill="#A855F7" />
                <rect x="25" y="5" width="6" height="26" rx="1.5" fill="#F43F5E" />
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
            <a href="#positioning" className="hover:text-sky-700 transition">
              Why Tactical Scale
            </a>
            <a href="#pillars" className="hover:text-sky-700 transition">
              Service Pillars
            </a>
            <a href="#portfolio" className="hover:text-purple-700 transition">
              Portfolio & Track Record
            </a>
            <a href="#scoper" className="hover:text-rose-700 transition">
              Solution Scoper
            </a>
            <a href="#credentials" className="hover:text-slate-950 transition">
              Leadership & Credentials
            </a>
          </nav>

          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="mailto:sam@tactical-scale.com?subject=Tactical%20Scale%20%E2%80%94%20Consultation%20Enquiry"
              className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition shadow-sm flex items-center space-x-2"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Book a Consultation</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
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
                className="py-1.5 hover:text-sky-700"
              >
                Why Tactical Scale
              </a>
              <a
                href="#pillars"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-sky-700"
              >
                Service Pillars
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-purple-700"
              >
                Portfolio & Case Studies
              </a>
              <a
                href="#scoper"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-rose-700"
              >
                30-60-90 Solution Scoper
              </a>
              <a
                href="#credentials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-slate-950"
              >
                Leadership & Credentials
              </a>
            </div>
            <div className="pt-3 border-t border-slate-100">
              <a
                href="mailto:sam@tactical-scale.com?subject=Tactical%20Scale%20%E2%80%94%20Consultation%20Enquiry"
                className="w-full justify-center px-5 py-3 rounded-xl bg-slate-950 text-white font-semibold text-sm flex items-center space-x-2"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Book a Consultation</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 pb-20 px-6 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>Greater London, United Kingdom</span>
            <span className="text-slate-400">•</span>
            <span className="text-sky-300">Digital Transformation, Agile Delivery & Applied AI</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] mb-6 max-w-4xl">
            Pragmatic Project Delivery &{' '}
            <span className="brand-gradient-text">Applied AI Engineering.</span>
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
              href="mailto:sam@tactical-scale.com?subject=Consultation%20Enquiry%20%E2%80%94%20Tactical%20Scale"
              className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition shadow-md flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>Book a Consultation / Get in Touch</span>
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-300 transition flex items-center space-x-2 shadow-sm"
            >
              <Cpu className="w-4 h-4 text-purple-700" />
              <span>Explore Delivered Projects (12)</span>
            </a>
            <a
              href="#scoper"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-200 transition flex items-center space-x-2"
            >
              <Sliders className="w-4 h-4 text-rose-700" />
              <span>30-60-90 Solution Scoper</span>
            </a>
          </div>

          {/* Proven Track Record Bar */}
          <div className="pt-8 border-t border-slate-200/80">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Verified Principal Track Record Across Enterprise Delivery & Applied AI Systems
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <a
                href="#portfolio"
                onClick={() => setActiveFilter('enterprise-delivery')}
                className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-sky-300 transition text-left"
              >
                <div className="font-bold text-xs text-slate-900">LSEG / LCH Operations</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Market Infra & Clearing (UK)</div>
              </a>
              <a
                href="#portfolio"
                onClick={() => setActiveFilter('enterprise-delivery')}
                className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-purple-300 transition text-left"
              >
                <div className="font-bold text-xs text-slate-900">AXA Health Claims</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Claims Modernization (HK)</div>
              </a>
              <a
                href="#portfolio"
                onClick={() => setActiveFilter('enterprise-delivery')}
                className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-rose-300 transition text-left"
              >
                <div className="font-bold text-xs text-slate-900">AIA Regional Cloud</div>
                <div className="text-[11px] text-slate-500 mt-0.5">18-Office Azure Actuarial</div>
              </a>
              <a
                href="#portfolio"
                onClick={() => setActiveFilter('regtech-security')}
                className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-sky-300 transition text-left"
              >
                <div className="font-bold text-xs text-slate-900">Confidential UK Operator</div>
                <div className="text-[11px] text-slate-500 mt-0.5">HMRC AWRS & Licensing</div>
              </a>
              <a
                href="#portfolio"
                onClick={() => setActiveFilter('ai-systems')}
                className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-purple-300 transition text-left"
              >
                <div className="font-bold text-xs text-slate-900">SprintClarify & EchoHire</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Gemini 3.8 & Live Agents</div>
              </a>
              <a
                href="#portfolio"
                onClick={() => setActiveFilter('multimodal-web')}
                className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-rose-300 transition text-left"
              >
                <div className="font-bold text-xs text-slate-900">CineFact AI & GuardianAI</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Serverless Video & RegTech</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Positioning: The Consulting Gap & Target Client Segments */}
      <section id="positioning" className="py-20 px-6 bg-white border-b border-slate-200">
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

          {/* 3-Column Consulting Gap Comparison */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Traditional Strategy Consultancies
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">
                High Overhead, Slideware Output
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Expensive strategy decks handed off to junior analysts who lack hands-on cloud
                security, schema-enforced AI engineering, or production deployment capability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Pure-Play Dev Shops & Freelancers
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">
                Code Without Enterprise Governance
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fragile AI prototypes that fail enterprise stage-gates, regulatory compliance
                audits, SteerCo scrutiny, and staging-to-production synchronization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 text-white shadow-lg brand-border-top">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                The Tactical Scale Model
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Principal Governance + Rapid Execution
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Led directly by Sam Leung (PMP®, DASSM®, SC-100, AI-102) supported by specialized
                Technical Engineering Partners—combining tier-one RAID governance with production AI
                systems.
              </p>
            </div>
          </div>

          {/* Target Client Segments */}
          <div className="pt-10 border-t border-slate-200">
            <div className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-6">
              Target Client Segments We Serve
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2.5 text-sky-700 font-bold text-sm mb-2">
                    <Building2 className="w-5 h-5 shrink-0" />
                    <span>Financial Services & Enterprise Ops</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Banks, insurers, and market infrastructure providers requiring seasoned PMP and
                    Agile delivery leadership for cloud, security, and AI transformation programmes.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  Clearing • Insurance Claims • Actuarial Cloud • Cyber Risk
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2.5 text-purple-700 font-bold text-sm mb-2">
                    <Briefcase className="w-5 h-5 shrink-0" />
                    <span>SMEs & Commercial Operators</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    UK businesses requiring digital workflow modernization, compliance automation,
                    and statutory regulatory application management (HMRC AWRS & local authority
                    licensing).
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  UK Statutory Licensing • Workflow Automation • M365 Copilot
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2.5 text-rose-700 font-bold text-sm mb-2">
                    <Rocket className="w-5 h-5 shrink-0" />
                    <span>Founders & Product Teams</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Technical and non-technical founders seeking rapid MVP development, multi-agent
                    AI integration, and Google AI Studio to production environment deployment
                    support.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  AI Studio Sync • Cloud Run CI/CD • Schema-Enforced MVPs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Service Pillars */}
      <section id="pillars" className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
              Core Service Pillars
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-950">
              Three Integrated Delivery & Engineering Practices
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Enterprise Programme & Agile Delivery */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Pillar 01
                </span>
                <h4 className="text-xl font-bold text-slate-950 mt-1 mb-3">
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
              <ul className="text-xs font-medium text-slate-700 space-y-2.5 pt-6 border-t border-slate-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>SteerCo Governance, RAID Control & Service Transition</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Core Insurance, Clearing & Multi-Market Cloud Migrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>UK Statutory Licensing (HMRC AWRS) & Regulatory Audits</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Applied AI & Agentic Systems Architecture */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 mb-6">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  Pillar 02
                </span>
                <h4 className="text-xl font-bold text-slate-950 mt-1 mb-3">
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
              <ul className="text-xs font-medium text-slate-700 space-y-2.5 pt-6 border-t border-slate-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Google Gemini, ADK 2.0, Gemma 4 & Azure AI Orchestration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Strict Typed JSON Schema Outputs & Autonomous Auditing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>React 19, TypeScript, Cloud Run & Cloudflare Workers</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: AI Coaching, Technical Advisory & Troubleshooting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  Pillar 03
                </span>
                <h4 className="text-xl font-bold text-slate-950 mt-1 mb-3">
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
              <ul className="text-xs font-medium text-slate-700 space-y-2.5 pt-6 border-t border-slate-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>Google AI Studio to Cloud Run Production Synchronization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>Prompt & Context Engineering Governance & CI/CD Fixes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>M365 Copilot Enablement & Stalled Prototype Rescue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio & Delivery Track Record with Category Filter Tabs */}
      <section id="portfolio" className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-2">
                Project Portfolio & Delivery Track Record
              </h2>
              <h3 className="text-3xl font-extrabold text-slate-950">
                Applied AI Builds & Enterprise Transformation Mandates
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                Filter across our 8 production AI engineering builds & coaching mandates (Part A)
                and 4 flagship enterprise & UK regulatory transformation deliveries (Part B). Click
                "Watch Demo" to view video walkthroughs.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href="https://devpost.com/samgorleung1224"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-900 flex items-center space-x-1 bg-purple-50 px-3.5 py-2 rounded-xl border border-purple-200 transition"
              >
                <span>Inspect on Devpost</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Samgorleung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-slate-950 flex items-center space-x-1 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 transition"
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
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 border ${
                      isSelected
                        ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                        isSelected
                          ? 'bg-sky-500 text-slate-950'
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Filter Context Bar */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200/80">
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-purple-700 shrink-0" />
                <span className="font-semibold text-slate-800">{activeFilterMeta.label}:</span>
                <span>{activeFilterMeta.description}</span>
              </div>
              <div className="font-bold text-slate-700 shrink-0">
                Showing {filteredItems.length} of {PORTFOLIO_ITEMS.length} engagements
              </div>
            </div>
          </div>

          {/* Portfolio Cards Grid */}
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveVideoItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse shrink-0" />
                <div>
                  <h4 className="text-white font-extrabold text-sm sm:text-base leading-tight">
                    {activeVideoItem.title} — Video Walkthrough Demo
                  </h4>
                  {activeVideoItem.subtitle && (
                    <p className="text-slate-400 text-xs mt-0.5">{activeVideoItem.subtitle}</p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoItem(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
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
            <div className="p-4 sm:p-5 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 font-semibold text-[11px]">
                  {activeVideoItem.category}
                </span>
                <span>•</span>
                <span>{activeVideoItem.techStack.slice(0, 3).join(', ')}</span>
              </div>
              <div className="flex items-center space-x-3 shrink-0">
                <a
                  href={`mailto:sam@tactical-scale.com?subject=${encodeURIComponent(
                    `Executive Demo Briefing: ${activeVideoItem.title}`
                  )}`}
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition flex items-center space-x-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Request Custom Briefing</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive 30-60-90 Day B2B Solution Scoper */}
      <section id="scoper" className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-rose-700 mb-2">
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
              const accentClass =
                scenario.accent === 'sky'
                  ? isSelected
                    ? 'text-sky-400'
                    : 'text-sky-700'
                  : scenario.accent === 'purple'
                  ? isSelected
                    ? 'text-purple-400'
                    : 'text-purple-700'
                  : isSelected
                  ? 'text-rose-400'
                  : 'text-rose-700';

              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setActiveScenarioIdx(idx)}
                  className={`text-left p-4 rounded-xl transition ${
                    isSelected
                      ? 'border-2 border-slate-950 bg-slate-950 text-white shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${accentClass}`}>
                    {scenario.scenarioNumber}
                  </div>
                  <div className="font-bold text-sm">{scenario.shortTitle}</div>
                </button>
              );
            })}
          </div>

          {/* Scoper Output Panel */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-200">
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-950">
                {activeScenario.title}
              </h4>
              <span className="px-3 py-1 rounded-full bg-slate-900 text-sky-400 text-xs font-bold">
                {activeScenario.badge}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="text-xs font-bold uppercase text-sky-700 mb-1.5">
                  Days 1–30 • Diagnose & Stabilise
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{activeScenario.days30}</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="text-xs font-bold uppercase text-purple-700 mb-1.5">
                  Days 31–60 • Architect & Execute
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{activeScenario.days60}</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="text-xs font-bold uppercase text-rose-700 mb-1.5">
                  Days 61–90 • Transition & Scale
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{activeScenario.days90}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 text-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="leading-relaxed">
                <strong className="text-sky-400">Verified Track Record: </strong>
                {activeScenario.proof}
              </div>
              <a
                href={`mailto:sam@tactical-scale.com?subject=${encodeURIComponent(
                  `Blueprint Enquiry: ${activeScenario.badge}`
                )}`}
                className="shrink-0 px-4 py-2.5 rounded-lg bg-white text-slate-950 font-bold hover:bg-slate-100 transition text-center"
              >
                Discuss This Scenario
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Productized Commercial Engagement Models */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
              Commercial Procurement
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-950">
              Flexible B2B Engagement Models
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-sky-700 mb-1">
                  Fixed-Scope Diagnostic (2–4 Weeks)
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
                className="text-xs font-bold text-slate-950 hover:text-sky-700 flex items-center space-x-1 pt-4 border-t border-slate-200"
              >
                <span>Request Scope Template</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-purple-700 mb-1">
                  Accelerator Sprint (4–8 Weeks)
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
                className="text-xs font-bold text-slate-950 hover:text-purple-700 flex items-center space-x-1 pt-4 border-t border-slate-200"
              >
                <span>Book Architecture Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-rose-700 mb-1">
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
                className="text-xs font-bold text-slate-950 hover:text-rose-700 flex items-center space-x-1 pt-4 border-t border-slate-200"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials, Governance & Principal Leadership */}
      <section id="credentials" className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          {/* Verified Certifications Banner */}
          <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1">
                  Verified Governance & Technical Credentials
                </div>
                <h3 className="text-xl font-extrabold text-slate-950">
                  Industry-Standard Delivery & Cloud Security Accreditations
                </h3>
              </div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                <Award className="w-4 h-4 text-purple-700" />
                <span>PMI • Microsoft Certified Expert • Academic Honours</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold uppercase text-sky-700 mb-1">
                  Programme & Agile Governance
                </div>
                <div className="font-bold text-sm text-slate-900">
                  PMP® • DASSM® • PMI GenAI • CSM®
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Project Management Professional, Disciplined Agile Senior Scrum Master, FLMI Level
                  1, ITIL / ISO 20000
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold uppercase text-purple-700 mb-1">
                  Microsoft Cloud, Cyber & AI
                </div>
                <div className="font-bold text-sm text-slate-900">
                  SC-100 Expert • AI-102 • AZ-104
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Microsoft Cybersecurity Architect Expert, Azure AI Engineer Associate, Azure
                  Administrator Associate
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2 lg:col-span-1">
                <div className="text-xs font-bold uppercase text-rose-700 mb-1">
                  Academic Foundation
                </div>
                <div className="font-bold text-sm text-slate-900">
                  Warwick • HKUST • HKU FinTech
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  PGCert Engineering Business Management (Warwick), BEng Electronic Engineering
                  (HKUST), FinTech (HKU)
                </div>
              </div>
            </div>
          </div>

          {/* Principal Leadership Card */}
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl brand-border-top">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">
                  <span>Principal Consultant & Founder</span>
                  <span>•</span>
                  <span>Greater London, UK</span>
                </div>
                <h3 className="text-3xl font-extrabold mb-1">
                  Tat Shun Leung (Sam Leung), PMP, DASSM
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-5">
                  Trading as: Sam Leung T/A Tactical Scale (Sole Trader transitioning to UK Limited
                  Company)
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  With over 14 years leading complex operational transformations, regional cloud
                  migrations, and regulatory workstreams across tier-one financial market
                  infrastructure (LSEG / LCH Operations) and global insurers (AXA, AIA), Sam founded
                  Tactical Scale in London to bridge boardroom governance with hands-on cloud and
                  agentic AI engineering.
                </p>

                {/* Technical Engineering Partner Callout */}
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                        Technical Engineering Partner Network
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400">
                      Collaborative Delivery Across Flagship AI Systems
                    </span>
                  </div>
                  <div className="font-bold text-base text-white mb-1">
                    Specialized Full-Stack & AI Engineering Partners
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Collaborating across applied AI architecture, rapid prototyping, and production
                    troubleshooting—supporting builds including{' '}
                    <span className="text-white font-semibold">SprintClarify</span>,{' '}
                    <span className="text-white font-semibold">EchoHire</span>,{' '}
                    <span className="text-white font-semibold">CineFact AI</span>,{' '}
                    <span className="text-white font-semibold">AI Festival Card Maker</span>, and
                    supporting client{' '}
                    <span className="text-white font-semibold">
                      Production AI Coaching & Environment Synchronization
                    </span>
                    .
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:sam@tactical-scale.com"
                    className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition flex items-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>sam@tactical-scale.com</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/samgorleung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 transition flex items-center space-x-2"
                  >
                    <Globe className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href="https://github.com/Samgorleung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 transition flex items-center space-x-2"
                  >
                    <Terminal className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://devpost.com/samgorleung1224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 transition flex items-center space-x-2"
                  >
                    <Code2 className="w-4 h-4 text-purple-400" />
                    <span>Devpost Portfolio</span>
                  </a>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
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
                  <div className="text-3xl font-extrabold text-purple-400">Gemini & Gemma</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    ADK 2.0 • Cloud Run • React 19 • Cloudflare Workers
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-2xl font-extrabold text-rose-400">Greater London</div>
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
              <span className="text-slate-600">•</span>
              <span className="text-sky-400 font-semibold text-xs">tactical-scale.com</span>
            </div>
            <p className="text-slate-400">
              Trading Identity:{' '}
              <strong className="text-slate-200">Sam Leung T/A Tactical Scale</strong> (Sole Trader
              transitioning to UK Limited Company)
            </p>
            <p className="text-slate-500 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>
                Greater London, United Kingdom • Principal Consultant: Tat Shun Leung (Sam Leung),
                PMP, DASSM • Supported by Specialized Technical Engineering Partners
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:items-end space-y-2">
            <div className="flex items-center space-x-4 text-slate-300 font-semibold">
              <a href="mailto:sam@tactical-scale.com" className="hover:text-sky-400 transition">
                sam@tactical-scale.com
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com/in/samgorleung"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/Samgorleung"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="https://devpost.com/samgorleung1224"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
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
  const isAI = item.track === 'ai-systems';

  const badgeStyles =
    item.accentColor === 'sky'
      ? 'text-sky-700 bg-sky-50 border-sky-200'
      : item.accentColor === 'purple'
      ? 'text-purple-700 bg-purple-50 border-purple-200'
      : 'text-rose-700 bg-rose-50 border-rose-200';

  return (
    <div className="bg-slate-50/70 hover:bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span
            className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${badgeStyles}`}
          >
            {item.category}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white text-[11px] font-semibold">
            {item.trackLabel}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h4 className="text-xl font-extrabold text-slate-950 leading-snug">{item.title}</h4>
        {item.subtitle && (
          <div className="text-xs font-semibold text-slate-500 mt-0.5 mb-3">{item.subtitle}</div>
        )}

        {/* Role & Collaborator Info */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-700 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/90 mb-4">
          <div>
            <span className="font-bold text-slate-900">Role: </span>
            <span>{item.role}</span>
          </div>
          {item.collaborator && (
            <div className="flex items-center space-x-1 text-purple-800 font-semibold">
              <span>•</span>
              <span>with {item.collaborator}</span>
            </div>
          )}
          {item.organizationOrEvent && (
            <div className="flex items-center space-x-1 text-slate-500 font-medium">
              <span>•</span>
              <span>{item.organizationOrEvent}</span>
            </div>
          )}
        </div>

        {/* Overview & Business Value */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">{item.overview}</p>
      </div>

      <div>
        {/* Highlight Metric / Outcome */}
        {item.highlightMetric && (
          <div className="text-xs font-semibold text-slate-800 py-2.5 px-3 rounded-lg bg-white border border-slate-200/80 mb-4 flex items-center space-x-2">
            {isAI ? (
              <Sparkles className="w-3.5 h-3.5 text-purple-700 shrink-0" />
            ) : (
              <FileCheck2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
            )}
            <span>{item.highlightMetric}</span>
          </div>
        )}

        {/* Tech Stack Pills & Watch Demo Button */}
        <div className="pt-3 border-t border-slate-200/80">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {item.techOrSectorLabel}
            </span>
            {item.videoUrl && (
              <button
                type="button"
                onClick={() => onWatchDemo(item)}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-[11px] font-bold transition shadow-sm hover:scale-[1.02]"
              >
                <Play className="w-3 h-3 text-rose-500 fill-rose-500" />
                <span>Watch Demo</span>
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-700"
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
