import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Menu,
  X,
  Play,
} from 'lucide-react';
import {
  PORTFOLIO_ITEMS,
  DIAGNOSTIC_SCENARIOS,
  PortfolioItem,
} from './data/portfolio';
import { WorkflowAnimation } from './components/WorkflowAnimation';

type ViewId = 'home' | 'ai-lab' | 'enterprise';
type AiSubFilterId = 'all' | 'agile-advisory' | 'regtech-security' | 'multimodal-web';

const AI_SUB_FILTERS: { id: AiSubFilterId; label: string; description: string }[] = [
  {
    id: 'all',
    label: 'All AI Builds',
    description: 'Commercial AI SaaS platforms, multi-agent pipelines, and active R&D prototypes.',
  },
  {
    id: 'agile-advisory',
    label: 'SaaS, Agile & Advisory',
    description: 'BetterPresenting.ai engineering, SprintClarify backlogs, and conference intelligence.',
  },
  {
    id: 'regtech-security',
    label: 'RegTech & Security',
    description: 'Autonomous Cloud Run security auditing and cross-jurisdiction compliance checks.',
  },
  {
    id: 'multimodal-web',
    label: 'Multimodal & GenMedia',
    description: 'Live voice interviewers, video fact verification, and multi-agent storyboarding.',
  },
];

const HOME_FLAGSHIP_IDS = [
  'production-ai-coaching',
  'multinational-health-insurer',
  'uk-market-infrastructure',
];

const HOME_TOP_BADGE_CODES = [
  'PMP',
  'DASSM',
  'SC-100 Expert',
  'AI-102 Associate',
  'DP-100 Associate',
  'AZ-104 Associate',
  'MS Foundry MCP',
  'Gemini Multi-Agent',
];

const OPERATING_MODEL_STAGES = [
  {
    code: '01. Principal Governance & Security',
    title: 'PMP, DASSM, SC-100',
    subtitle: 'Sam Leung | Principal Architect',
    badge: null as string | null,
    points: [
      'SteerCo Alignment & RAID Controls',
      'Cybersecurity & Zero-Trust Gate Design',
      'Architecture Blueprints & Governance',
    ],
    deliverableLabel: 'Governance Deliverable',
    deliverableReadout:
      'Architecture Decision Records (ADRs), RAID register, SC-100 Zero-Trust security gate review, and executive SteerCo sign-off.',
  },
  {
    code: '02. Multi-Cloud & Agentic Execution',
    title: 'MS Foundry, Azure AI, Gemini, ADK 2.0, Cloud Run',
    subtitle: 'Microsoft + Google Cloud + Partner Network',
    badge: null as string | null,
    points: [
      'Microsoft Foundry SDK & Azure AI',
      'Google Gemini, ADK 2.0 & Cloud Run',
      'Specialist Engineering Partner Network',
    ],
    deliverableLabel: 'Execution Deliverable',
    deliverableReadout:
      'Containerized Azure AI / Microsoft Foundry SDK or Google Cloud Run / Gemini / ADK 2.0 services built with FinOps token guardrails.',
  },
  {
    code: '03. Production Release & Handover',
    title: 'Typed JSON Schemas, CI/CD, Self-Service Enablement',
    subtitle: 'Deterministic Delivery & Enablement',
    badge: 'Live',
    points: [
      'Typed JSON Schemas & Automated QA',
      'CI/CD Pipelines & Zero-Downtime Cutover',
      'Self-Service Team Enablement',
    ],
    deliverableLabel: 'Handover Deliverable',
    deliverableReadout:
      'Schema-validated production pipelines, automated CI/CD release gates, runbook documentation, and self-service internal team coaching.',
  },
];

interface CertificationBadge {
  issuer: string;
  code: string;
  name: string;
  shortName?: string;
  tier: string;
  imageUrl: string;
  verifyUrl?: string;
}

const CERTIFICATION_BADGES: CertificationBadge[] = [
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
    shortName: 'GenAI Chat Apps (Foundry SDK)',
    tier: 'Microsoft Applied Skills',
    imageUrl: '/Badges/applied-skill.svg',
  },
  {
    issuer: 'Microsoft',
    code: 'MS Foundry MCP',
    name: 'Integrate Model Context Protocol Tools with Agents in Microsoft Foundry',
    shortName: 'MCP Tools & Agents (Foundry)',
    tier: 'Microsoft Applied Skills',
    imageUrl: '/Badges/applied-skill.svg',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/TatShunLeung-6120/B2D27F983C20CC50?sharingId=2043B9AF99CE0AA2',
  },
  {
    issuer: 'Google Cloud',
    code: 'Gemini Multi-Agent',
    name: 'Orchestrate Multi-Agent Workflows with Gemini Enterprise',
    shortName: 'Gemini Multi-Agent Workflows',
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

function parseHashToView(hash: string): ViewId {
  const normalized = hash.replace(/^#/, '').toLowerCase();
  if (normalized === 'ai-lab') return 'ai-lab';
  if (normalized === 'enterprise') return 'enterprise';
  return 'home';
}

export function App() {
  const [activeView, setActiveView] = useState<ViewId>(() =>
    typeof window !== 'undefined' ? parseHashToView(window.location.hash) : 'home'
  );
  const [aiSubFilter, setAiSubFilter] = useState<AiSubFilterId>('all');
  const [expandedWorkflowIds, setExpandedWorkflowIds] = useState<Record<string, boolean>>({});
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeVideoItem, setActiveVideoItem] = useState<PortfolioItem | null>(null);
  const [activeBlueprintItem, setActiveBlueprintItem] = useState<PortfolioItem | null>(null);
  const [selectedLayerIdx, setSelectedLayerIdx] = useState<number | null>(null);
  const [activeModelLayerIdx, setActiveModelLayerIdx] = useState<number | null>(null);
  const [showAllBadges, setShowAllBadges] = useState<boolean>(false);
  const [portraitError, setPortraitError] = useState<boolean>(false);

  const navigateToView = (view: ViewId) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      const targetHash = `#${view}`;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    if (typeof document !== 'undefined') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    function handleHashChange() {
      const currentHash = window.location.hash;
      if (currentHash.toLowerCase() === '#contact') {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      setActiveView(parseHashToView(currentHash));
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    setSelectedLayerIdx(null);
  }, [activeBlueprintItem]);

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

  const homeFlagshipItems = useMemo(() => {
    return HOME_FLAGSHIP_IDS.map((id) => PORTFOLIO_ITEMS.find((item) => item.id === id)).filter(
      (item): item is PortfolioItem => Boolean(item)
    );
  }, []);

  const homeTopBadges = useMemo(() => {
    return HOME_TOP_BADGE_CODES.map((code) =>
      CERTIFICATION_BADGES.find((badge) => badge.code === code)
    ).filter((badge): badge is CertificationBadge => Boolean(badge));
  }, []);

  const aiItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => item.track === 'ai-systems');
  }, []);

  const filteredAiItems = useMemo(() => {
    if (aiSubFilter === 'all') return aiItems;
    return aiItems.filter((item) => item.filterGroups.includes(aiSubFilter));
  }, [aiItems, aiSubFilter]);

  const featuredAiItem = useMemo(() => {
    return filteredAiItems.find((item) => item.id === 'production-ai-coaching') ?? null;
  }, [filteredAiItems]);

  const secondaryAiItems = useMemo(() => {
    if (!featuredAiItem) return filteredAiItems;
    return filteredAiItems.filter((item) => item.id !== featuredAiItem.id);
  }, [filteredAiItems, featuredAiItem]);

  const enterpriseItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => item.track === 'enterprise-delivery');
  }, []);

  const activeAiSubFilterMeta = useMemo(() => {
    return AI_SUB_FILTERS.find((tab) => tab.id === aiSubFilter) ?? AI_SUB_FILTERS[0];
  }, [aiSubFilter]);

  const activeScenario = DIAGNOSTIC_SCENARIOS[activeScenarioIdx];

  const toggleWorkflowPreview = (id: string) => {
    setExpandedWorkflowIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Minimal Hash-Routed Top Navigation */}
      <header className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigateToView('home');
            }}
            className="flex items-center space-x-3.5 group transition-colors duration-250 ease-out"
          >
            {/* Geometric Vector Emblem: Monochrome Slate & Sky */}
            <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:border-sky-700 transition-colors duration-250 ease-out shrink-0">
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

          <nav
            aria-label="Primary sections"
            className="hidden md:flex items-center space-x-2 text-sm font-semibold"
          >
            {(
              [
                { id: 'home', label: 'Overview' },
                { id: 'ai-lab', label: 'AI Lab' },
                { id: 'enterprise', label: 'Enterprise' },
              ] as const
            ).map((navItem) => {
              const isActive = activeView === navItem.id;
              return (
                <a
                  key={navItem.id}
                  href={`#${navItem.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToView(navItem.id);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3.5 py-2 rounded-lg border transition-colors duration-250 ease-out ${
                    isActive
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-transparent text-slate-600 border-transparent hover:text-sky-700 hover:bg-slate-100'
                  }`}
                >
                  {navItem.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <button
              type="button"
              onClick={scrollToContact}
              className="px-5 py-2.5 rounded-lg bg-slate-950 hover:bg-sky-700 text-white font-semibold text-sm transition-colors duration-250 ease-out inline-flex items-center space-x-2"
            >
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-250 ease-out"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3">
            <div className="flex flex-col space-y-2 text-sm font-semibold">
              {(
                [
                  { id: 'home', label: 'Overview' },
                  { id: 'ai-lab', label: 'AI Lab (8 Applied AI Builds)' },
                  { id: 'enterprise', label: 'Enterprise (6 Mandates & Governance)' },
                ] as const
              ).map((navItem) => {
                const isActive = activeView === navItem.id;
                return (
                  <a
                    key={navItem.id}
                    href={`#${navItem.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToView(navItem.id);
                    }}
                    className={`px-3.5 py-2.5 rounded-lg border transition-colors duration-250 ease-out ${
                      isActive
                        ? 'bg-slate-950 text-white border-slate-950'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-sky-700 hover:text-sky-700'
                    }`}
                  >
                    {navItem.label}
                  </a>
                );
              })}
            </div>
            <div className="pt-3 border-t border-slate-200">
              <button
                type="button"
                onClick={scrollToContact}
                className="w-full justify-center px-5 py-3 rounded-lg bg-slate-950 hover:bg-sky-700 text-white font-semibold text-sm transition-colors duration-250 ease-out flex items-center space-x-2"
              >
                <span>Book Discovery Call</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Routed Content */}
      <main className="flex-1">
        {/* VIEW 1: HOME (Executive Summary Landing Page) */}
        {activeView === 'home' && (
          <>
            {/* Block 1: Hero */}
            <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 px-6 bg-white border-b border-slate-200">
              <div className="max-w-6xl mx-auto">
                <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
                  <span>Greater London, UK</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-sky-700">
                    B2B Consulting, UK Contract / SOW & Senior Programme Leadership
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] mb-5 max-w-4xl">
                  Enterprise Delivery &{' '}
                  <span className="text-sky-700">Applied AI Architecture.</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-700 font-medium max-w-3xl mb-8 leading-relaxed">
                  Principal-led regulated IT delivery across financial services, paired with
                  schema-enforced AI engineering and production cloud modernization.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-14">
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="px-6 py-3.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-250 ease-out hover:-translate-y-0.5 flex items-center space-x-2"
                  >
                    <span>Book Discovery Call</span>
                    <ArrowUpRight className="w-4 h-4 text-sky-400" />
                  </button>
                  <a
                    href="#ai-lab"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToView('ai-lab');
                    }}
                    className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-300 hover:border-sky-700 transition-all duration-250 ease-out hover:-translate-y-0.5 flex items-center space-x-2"
                  >
                    <span>Explore AI Lab</span>
                    <ArrowRight className="w-4 h-4 text-sky-700" />
                  </a>
                  <a
                    href="#enterprise"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToView('enterprise');
                    }}
                    className="px-5 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200/70 text-slate-800 font-semibold text-sm border border-slate-200 transition-all duration-250 ease-out flex items-center space-x-2"
                  >
                    <span>Enterprise Track Record</span>
                  </a>
                </div>

                <ul className="grid sm:grid-cols-3 gap-6 text-sm text-slate-700 border-t border-b border-slate-200 py-5">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-sky-700 font-extrabold shrink-0">01.</span>
                    <span>
                      <strong className="text-slate-950">14+ Years & 40+ Mandates:</strong>{' '}
                      ~HKD$ 100M Hong Kong insurance turnaround, UK/Paris/Romania clearing, and
                      18-office APAC Azure migration.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-sky-700 font-extrabold shrink-0">02.</span>
                    <span>
                      <strong className="text-slate-950">Production AI SaaS:</strong> Co-architected
                      B2B products powering BetterPresenting.ai (AskMerv) with fallback chains and
                      FinOps caps.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-sky-700 font-extrabold shrink-0">03.</span>
                    <span>
                      <strong className="text-slate-950">Principal Accountability:</strong> PMP,
                      DASSM, SC-100 Expert, AI-102, DP-100, and AZ-104 taking governance into shipped
                      code.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Block 2: 3 Core Engagement Models */}
            <section className="py-16 sm:py-20 px-6 bg-slate-50 border-b border-slate-200">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1.5">
                      Core Engagement Models
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                      Commercial B2B Delivery & Partner Advisory
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    Fixed-Scope SOW | UK Contracting | Fractional AI Engineering
                  </span>
                </div>

                <div className="grid md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                        Model 01
                      </div>
                      <h4 className="text-lg font-extrabold text-slate-950 mb-2">
                        Applied AI SaaS & Automation
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Production Gemini, Microsoft Foundry SDK, ADK 2.0, and Cloud Run workflows
                        with typed JSON schemas, model fallback chains, and FinOps token caps.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200 text-xs font-semibold text-slate-500">
                      B2B AI Products, MVPs & AI Studio Sync
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                        Model 02
                      </div>
                      <h4 className="text-lg font-extrabold text-slate-950 mb-2">
                        Enterprise Delivery & Turnaround
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Rescuing stalled insurance, banking, and clearing transformations via SteerCo
                        governance, EOL cyber remediation, and multi-cloud migrations.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200 text-xs font-semibold text-slate-500">
                      Programme Rescue, Azure Cloud & Audit Clearance
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                        Model 03
                      </div>
                      <h4 className="text-lg font-extrabold text-slate-950 mb-2">
                        UK Contract / Partner SOW
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Senior UK contract programme leadership, fixed-scope B2B Statements of Work,
                        and white-label associate delivery for Microsoft and Google Cloud partners.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200 text-xs font-semibold text-slate-500">
                      UK Regulatory (HMRC AWRS) & Partner Subcontracting
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Block 3: Selected Flagship Proof (ONLY 3 Cards) */}
            <section className="py-20 sm:py-24 px-6 bg-white border-b border-slate-200">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1.5">
                      Selected Flagship Proof
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                      Live Commercial AI SaaS & Regulated Enterprise Delivery
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Click View Blueprint on any card to inspect interactive architecture layers.
                  </span>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {homeFlagshipItems.map((item) => (
                    <PortfolioCard
                      key={item.id}
                      item={item}
                      onWatchDemo={(selected) => setActiveVideoItem(selected)}
                      onViewBlueprint={(selected) => setActiveBlueprintItem(selected)}
                    />
                  ))}
                </div>

                {/* Two Crisp Navigation Banners */}
                <div className="grid md:grid-cols-2 gap-4 mt-10">
                  <a
                    href="#ai-lab"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToView('ai-lab');
                    }}
                    className="group p-6 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-sky-700 text-white transition-all duration-250 ease-out flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-1">
                        Applied AI Showcase
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-white">
                        Explore All 8 AI Builds & Live Workflow Demos
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Interactive SVG workflow pipelines for BetterPresenting.ai, SprintClarify,
                        GuardianAI, EchoHire & more.
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-sky-400 shrink-0 group-hover:translate-x-1 transition-transform duration-250 ease-out" />
                  </a>

                  <a
                    href="#enterprise"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToView('enterprise');
                    }}
                    className="group p-6 rounded-lg bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-700 text-slate-950 transition-all duration-250 ease-out flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-sky-700 mb-1">
                        Transformation Archive
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-slate-950">
                        View Full Enterprise Track Record (6 Mandates & Governance)
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        Includes Operating Model blueprint, 30-60-90 Scoper, and all 31 verified
                        certifications.
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-sky-700 shrink-0 group-hover:translate-x-1 transition-transform duration-250 ease-out" />
                  </a>
                </div>
              </div>
            </section>

            {/* Block 4: Featured Credentials (8 of Total) & Verified Endorsements */}
            <section className="py-20 sm:py-24 px-6 bg-slate-50 border-b border-slate-200">
              <div className="max-w-6xl mx-auto space-y-12">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1">
                        Executive Accreditations
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                        Featured Credentials ({homeTopBadges.length} of {CERTIFICATION_BADGES.length})
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Core PMI governance, Microsoft Azure/AI, cybersecurity, and multi-cloud
                        GenAI highlights.
                      </p>
                    </div>
                    <a
                      href="#enterprise"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToView('enterprise');
                      }}
                      className="text-xs font-bold text-sky-700 hover:text-slate-950 transition-colors duration-250 ease-out inline-flex items-center space-x-1.5 shrink-0"
                    >
                      <span>View Full Matrix on Enterprise</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <BadgeGrid
                    badges={homeTopBadges}
                    columnsClass="grid-cols-2 lg:grid-cols-4"
                    compact
                  />
                </div>

                <ExecutiveEndorsementsStrip />

                {/* Compact Principal Consultant Card */}
                <div className="bg-slate-950 text-white rounded-lg p-6 sm:p-8 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shrink-0 flex items-center justify-center">
                      {!portraitError ? (
                        <img
                          src="/sam-leung.jpg"
                          alt="Sam Leung, PMP, DASSM"
                          className="w-full h-full object-cover object-top"
                          onError={() => setPortraitError(true)}
                        />
                      ) : (
                        <span className="text-xl font-extrabold text-sky-400">SL</span>
                      )}
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-sky-400 mb-1">
                        Principal Consultant & Founder | Greater London, UK
                      </div>
                      <h4 className="text-2xl font-extrabold text-white mb-1.5">
                        Sam Leung, PMP, DASSM, SC-100
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                        14+ years delivering regulated BFSI transformations, Microsoft Partner hybrid
                        cloud mandates, and schema-enforced Gemini & Azure AI systems (bilingual EN
                        / ZH), supported by PMI UK event & mentoring leadership.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={scrollToContact}
                      className="px-4 py-2.5 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs transition-colors duration-250 ease-out inline-flex items-center space-x-1.5"
                    >
                      <span>Book Discovery Call</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="#enterprise"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToView('enterprise');
                      }}
                      className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 hover:border-sky-400 transition-colors duration-250 ease-out inline-flex items-center space-x-1.5"
                    >
                      <span>Full Executive Profile</span>
                      <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* VIEW 2: AI LAB (Applied AI Engineering & Workflow Showcase) */}
        {activeView === 'ai-lab' && (
          <>
            <section className="pt-32 sm:pt-36 pb-12 px-6 bg-white border-b border-slate-200">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-4">
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToView('home');
                    }}
                    className="hover:text-sky-700 transition-colors duration-250 ease-out"
                  >
                    Overview
                  </a>
                  <span>/</span>
                  <span className="text-sky-700 font-bold">AI Lab</span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1.5">
                      Part A: Applied AI Engineering & Production SaaS
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-3">
                      AI Lab & Live Workflow Architecture
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                      Interactive pipeline flows reading directly from production schemas across{' '}
                      <strong>BetterPresenting.ai (AskMerv)</strong>, autonomous Cloud Run security
                      audits, multimodal voice/video agents, and independent R&D builds.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <a
                      href="https://devpost.com/samgorleung1224"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-sky-700 inline-flex items-center space-x-1.5 bg-white px-3.5 py-2 rounded-lg border border-slate-200 hover:border-sky-700 transition-colors duration-250 ease-out"
                    >
                      <span>Devpost Submissions</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/Samgorleung"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-sky-700 inline-flex items-center space-x-1.5 bg-white px-3.5 py-2 rounded-lg border border-slate-200 hover:border-sky-700 transition-colors duration-250 ease-out"
                    >
                      <span>GitHub Profile</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* AI Sub-Filter Tabs */}
                <div>
                  <div
                    role="tablist"
                    aria-label="AI Lab category filters"
                    className="flex flex-wrap gap-2 pb-4 border-b border-slate-200"
                  >
                    {AI_SUB_FILTERS.map((tab) => {
                      const isSelected = aiSubFilter === tab.id;
                      const count =
                        tab.id === 'all'
                          ? aiItems.length
                          : aiItems.filter((item) => item.filterGroups.includes(tab.id)).length;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => setAiSubFilter(tab.id)}
                          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-250 ease-out flex items-center space-x-2 border ${
                            isSelected
                              ? 'bg-slate-950 text-white border-slate-950'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-700 hover:bg-white'
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-extrabold ${
                              isSelected
                                ? 'bg-sky-400 text-slate-950'
                                : 'bg-white text-slate-700 border border-slate-200'
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
                    <span>{activeAiSubFilterMeta.description}</span>
                    <span className="font-bold text-slate-800 shrink-0">
                      Showing {filteredAiItems.length} of {aiItems.length} AI builds
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Builds Showcase */}
            <section className="py-14 sm:py-16 px-6 bg-slate-50 border-b border-slate-200">
              <div className="max-w-6xl mx-auto space-y-10">
                {/* Featured #1 Commercial SaaS Spotlight */}
                {featuredAiItem && (
                  <div className="bg-white rounded-lg border-2 border-slate-950 p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="px-2.5 py-1 rounded bg-slate-950 text-sky-400 text-[11px] font-extrabold uppercase tracking-wider">
                            Featured #1 Live Commercial SaaS
                          </span>
                          <span className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider border text-sky-700 bg-slate-50 border-slate-200">
                            {featuredAiItem.category}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                          {featuredAiItem.title}
                        </h2>
                        {featuredAiItem.subtitle && (
                          <div className="text-xs sm:text-sm font-semibold text-sky-700 mt-1 mb-3">
                            {featuredAiItem.subtitle}
                          </div>
                        )}
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {featuredAiItem.overview}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => setActiveBlueprintItem(featuredAiItem)}
                          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-950 text-slate-950 hover:text-white border border-slate-300 text-xs font-bold transition-colors duration-250 ease-out"
                        >
                          <span>View Blueprint</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-sky-700" />
                        </button>
                        {featuredAiItem.liveUrl && (
                          <a
                            href={featuredAiItem.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-slate-950 hover:bg-sky-700 text-white text-xs font-bold transition-colors duration-250 ease-out"
                          >
                            <span>{featuredAiItem.liveLabel || 'Live Product'}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Inline Always-Visible Live Pipeline Visualizer */}
                    <WorkflowAnimation
                      steps={featuredAiItem.architectureFlow}
                      title="BetterPresenting.ai Guarded Pipeline (Click any step to inspect)"
                    />

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-slate-200">
                      <div className="flex flex-wrap gap-1.5">
                        {featuredAiItem.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {featuredAiItem.highlightMetric && (
                        <div className="text-xs font-bold text-slate-900 border-l-2 border-sky-700 pl-3 shrink-0">
                          {featuredAiItem.highlightMetric}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Remaining Part A AI Builds & Independent Pre-Launch Beta */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                    <h3 className="text-lg font-extrabold text-slate-950">
                      Applied AI Systems & Independent R&D Prototypes
                    </h3>
                    <span className="text-xs text-slate-500">
                      Click Preview Workflow on any card to step through its architecture inline.
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {secondaryAiItems.map((item) => (
                      <PortfolioCard
                        key={item.id}
                        item={item}
                        onWatchDemo={(selected) => setActiveVideoItem(selected)}
                        onViewBlueprint={(selected) => setActiveBlueprintItem(selected)}
                        allowWorkflowToggle
                        isWorkflowExpanded={Boolean(expandedWorkflowIds[item.id])}
                        onToggleWorkflow={() => toggleWorkflowPreview(item.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom Banner to Enterprise View */}
                <div className="pt-4">
                  <a
                    href="#enterprise"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToView('enterprise');
                    }}
                    className="group p-6 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-sky-700 text-white transition-all duration-250 ease-out flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-1">
                        Enterprise Track Record & Governance
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-white">
                        Inspect All 6 Enterprise Transformation Mandates, Operating Model & 31
                        Credentials
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-sky-400 shrink-0 group-hover:translate-x-1 transition-transform duration-250 ease-out" />
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        {/* VIEW 3: ENTERPRISE (Full Transformation Track Record, Operating Model & Credentials) */}
        {activeView === 'enterprise' && (
          <>
            <section className="pt-32 sm:pt-36 pb-12 px-6 bg-white border-b border-slate-200">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-4">
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToView('home');
                    }}
                    className="hover:text-sky-700 transition-colors duration-250 ease-out"
                  >
                    Overview
                  </a>
                  <span>/</span>
                  <span className="text-sky-700 font-bold">Enterprise Delivery</span>
                </div>

                <div className="max-w-3xl">
                  <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1.5">
                    Part B: Enterprise Transformation & Regulatory Delivery
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-3">
                    Enterprise Track Record & Governance
                  </h1>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    14+ years leading regulated financial services transformations across Hong Kong,
                    APAC, the UK, and cross-border European engineering teams. Click View Blueprint
                    on any mandate to inspect topology tiers, governance gates, and deliverables.
                  </p>
                </div>
              </div>
            </section>

            {/* Part B: All 6 Enterprise Mandates */}
            <section className="py-16 sm:py-20 px-6 bg-slate-50 border-b border-slate-200">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1.5">
                      6 Verified Mandates (Anonymised Public Summary)
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                      Core Insurance, Clearing, Azure Cloud & UK Regulatory Delivery
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-600">
                    Interactive 3-Tier & Zone Blueprints Inside Each Card
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {enterpriseItems.map((item) => (
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

            {/* Full Interactive Executive Operating Model & Engineering Flow */}
            <section className="py-16 sm:py-20 px-6 bg-white border-b border-slate-200">
              <div className="max-w-6xl mx-auto">
                <div className="border border-slate-200 rounded-lg bg-slate-950 text-white p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">
                        Executive Operating Model & Engineering Flow
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        Tactical Scale Architecture & Delivery Blueprint
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        <span>Governance</span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                        <span>Execution</span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                        <span>Handover</span>
                      </div>
                      {activeModelLayerIdx !== null ? (
                        <button
                          type="button"
                          onClick={() => setActiveModelLayerIdx(null)}
                          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-sky-700 text-slate-200 hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors duration-250 ease-out"
                        >
                          Reset View
                        </button>
                      ) : (
                        <span className="text-[11px] font-semibold text-slate-400">
                          Click stage to inspect
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-4 mt-6">
                    {OPERATING_MODEL_STAGES.map((stage, idx) => {
                      const isActive = activeModelLayerIdx === idx;
                      const isDimmed = activeModelLayerIdx !== null && !isActive;

                      return (
                        <button
                          key={stage.code}
                          type="button"
                          onClick={() =>
                            setActiveModelLayerIdx((prev) => (prev === idx ? null : idx))
                          }
                          aria-expanded={isActive}
                          className={`rounded-lg border p-6 text-left flex flex-col justify-between transition-all duration-250 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                            isActive
                              ? 'border-sky-700 bg-slate-950 text-white ring-1 ring-sky-400 -translate-y-0.5'
                              : isDimmed
                                ? 'border-slate-800 bg-slate-900/70 text-slate-200 opacity-65 hover:opacity-100 hover:border-sky-700'
                                : 'border-slate-800 bg-slate-900 text-white hover:border-sky-700 hover:-translate-y-0.5'
                          }`}
                        >
                          <div className="w-full">
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400">
                                {stage.code}
                              </span>
                              {stage.badge ? (
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-sky-400">
                                  {stage.badge}
                                </span>
                              ) : (
                                <ArrowRight
                                  className={`hidden lg:block w-4 h-4 transition-colors duration-250 ease-out ${
                                    isActive ? 'text-white' : 'text-sky-400'
                                  }`}
                                />
                              )}
                            </div>
                            <h4 className="text-base font-extrabold text-white mb-2">
                              {stage.title}
                            </h4>
                            <div className="text-xs font-semibold text-slate-300 mb-4">
                              {stage.subtitle}
                            </div>
                          </div>
                          <ul className="w-full text-xs text-slate-300 space-y-1.5 pt-4 border-t border-slate-800">
                            {stage.points.map((pt) => (
                              <li key={pt} className="flex items-start space-x-2">
                                <span className="text-sky-400 font-bold">/</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </button>
                      );
                    })}
                  </div>

                  {activeModelLayerIdx !== null ? (
                    <div className="mt-4 px-5 py-3.5 rounded-lg bg-slate-900 border border-sky-700 border-l-2 border-l-sky-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-250 ease-out">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400 shrink-0">
                          {OPERATING_MODEL_STAGES[activeModelLayerIdx].deliverableLabel}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {OPERATING_MODEL_STAGES[activeModelLayerIdx].deliverableReadout}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveModelLayerIdx(null)}
                        className="self-start sm:self-auto px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[10px] font-bold uppercase tracking-wider shrink-0 transition-colors duration-250 ease-out"
                      >
                        Reset
                      </button>
                    </div>
                  ) : (
                    <div className="mt-4 px-5 py-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-400">
                      Click stage 01, 02, or 03 above to inspect its governance deliverable and
                      handover output.
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Interactive 30-60-90 Day B2B Solution Scoper */}
            <section id="scoper" className="py-16 sm:py-20 px-6 bg-slate-50 border-b border-slate-200">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1.5">
                      Interactive Diagnostic Blueprint
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                      30-60-90 Day Execution Roadmap
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 mt-2 md:mt-0">
                    Select an operational challenge to inspect deliverables and proof points.
                  </p>
                </div>

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
                            : 'border-slate-200 bg-white text-slate-800 hover:border-sky-700'
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

            {/* Full Credentials, Ecosystem Provenance & Principal Leadership */}
            <section id="credentials" className="py-16 sm:py-20 px-6 bg-white border-b border-slate-200">
              <div className="max-w-6xl mx-auto space-y-14">
                <div>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
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

                  <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                        Verified Certification & Skills Badges (
                        {showAllBadges ? CERTIFICATION_BADGES.length : 12} of{' '}
                        {CERTIFICATION_BADGES.length})
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowAllBadges((prev) => !prev)}
                        className="text-xs font-bold text-sky-700 hover:text-slate-950 transition-colors duration-250 ease-out self-start sm:self-auto"
                      >
                        {showAllBadges
                          ? 'Show Core 12 Badges'
                          : `Show All ${CERTIFICATION_BADGES.length} Official Badges`}
                      </button>
                    </div>
                    <BadgeGrid
                      badges={
                        showAllBadges ? CERTIFICATION_BADGES : CERTIFICATION_BADGES.slice(0, 12)
                      }
                      columnsClass="grid-cols-2 sm:grid-cols-4"
                    />
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
                          <strong className="text-slate-950">Sector & ITSM:</strong> LOMA FLMI Level
                          1 (Insurance) & EXIN ISO/IEC 20000 (ITSM)
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
                          <strong className="text-slate-950">40+ Deployments:</strong> Microsoft
                          Gold, Cloud Partners & GSIs
                        </li>
                        <li>
                          <strong className="text-slate-950">5-Credential Suite:</strong> SC-100
                          Expert, AI-102, DP-100, AZ-104 & Microsoft Foundry SDK
                        </li>
                        <li>
                          <strong className="text-slate-950">Infrastructure:</strong> Azure,
                          M365/O365 CCE, Exchange, AD, SharePoint & SCCM/SCOM
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
                          <strong className="text-slate-950">Multi-Model & Dev:</strong> Anthropic
                          Claude Platform & GitHub Copilot
                        </li>
                        <li>
                          <strong className="text-slate-950">Enterprise Tooling:</strong> ServiceNow
                          IT Leadership, Atlassian ITSM/Agile & Aha! Product Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ExecutiveEndorsementsStrip />

                {/* Full Dark Principal Leadership Card */}
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
                          <h3 className="text-3xl font-extrabold mb-1">Sam Leung, PMP, DASSM</h3>
                          <p className="text-xs text-slate-400 font-medium">
                            Trading as: Sam Leung T/A Tactical Scale (Sole Trader transitioning to
                            UK Limited Company)
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                        <li className="flex items-start space-x-2.5">
                          <span className="text-sky-400 font-bold shrink-0">01.</span>
                          <span>
                            <strong className="text-white">Regulated BFSI Leadership:</strong> 14+
                            years directing clearing, Hong Kong core insurance claims, cyber
                            remediation, and Azure programmes across Tier-1 UK capital markets and
                            global insurers.
                          </span>
                        </li>
                        <li className="flex items-start space-x-2.5">
                          <span className="text-sky-400 font-bold shrink-0">02.</span>
                          <span>
                            <strong className="text-white">Microsoft Partner & GSI Lineage:</strong>{' '}
                            40+ Microsoft stack deployments spanning 18 concurrent UC/Cloud PBX
                            mandates, 1,000+ server Azure assessments (Assessment Only), SCCM/SCOM,
                            Exchange, SharePoint, and AD.
                          </span>
                        </li>
                        <li className="flex items-start space-x-2.5">
                          <span className="text-sky-400 font-bold shrink-0">03.</span>
                          <span>
                            <strong className="text-white">Hands-On Applied AI:</strong> Software
                            engineering roots building production Gemini, ADK 2.0, and Gemma 4
                            systems in London (bilingual EN / ZH).
                          </span>
                        </li>
                        <li className="flex items-start space-x-2.5">
                          <span className="text-sky-400 font-bold shrink-0">04.</span>
                          <span>
                            <strong className="text-white">
                              PMI UK Chapter Leadership & Mentoring:
                            </strong>{' '}
                            Volunteer contributor to PMI UK flagship events (Sustainability Summit
                            2023/2025/2026, PM4THEWORLD 2024, PMI Synergy 2026) supporting event
                            websites, planning chatbots, and Gemini Gem/NotebookLM survey analysis,
                            plus PMI UK 6-Month Programme Mentor coaching practitioners on PMBOK
                            portfolio oversight and practical AI adoption for UK SMEs.
                          </span>
                        </li>
                      </ul>

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
                          <span className="text-white font-semibold">
                            Commercial AI SaaS Engineering (BetterPresenting.ai)
                          </span>
                          , <span className="text-white font-semibold">SprintClarify</span>,{' '}
                          <span className="text-white font-semibold">EchoHire</span>, and{' '}
                          <span className="text-white font-semibold">CineFact AI</span>.
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
                        <div className="text-2xl font-extrabold text-white">
                          14+ Years | 40+ Mandates
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          Regulated BFSI, Microsoft Partner & GSI Delivery
                        </div>
                      </div>
                      <div className="pt-4 border-t border-slate-800">
                        <div className="text-3xl font-extrabold text-sky-400">1,300+ Servers</div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          Assessed (Assessment Only), Migrated or Hardened Across 65+ Global Sites
                        </div>
                      </div>
                      <div className="pt-4 border-t border-slate-800">
                        <div className="text-3xl font-extrabold text-white">80% Automation</div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          Delivered Across 1.55M+ Policy Records & 1,000+ User Cutovers
                        </div>
                      </div>
                      <div className="pt-4 border-t border-slate-800">
                        <div className="text-2xl font-extrabold text-sky-400">
                          8 AI & RegTech Builds
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          Gemini, ADK 2.0, Gemma 4, Cloud Run & Cloudflare
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

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

            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={getYouTubeEmbedUrl(activeVideoItem.videoUrl)}
                title={`${activeVideoItem.title} Walkthrough Demo`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

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

                  {activeBlueprintItem.topologyLayers && (
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="text-[11px] font-bold uppercase tracking-widest text-sky-700">
                          3-Tier Hybrid Multi-Cloud System Topology (AWS Pre-Prod + Azure Prod)
                        </div>
                        {selectedLayerIdx !== null ? (
                          <button
                            type="button"
                            onClick={() => setSelectedLayerIdx(null)}
                            className="px-2.5 py-0.5 rounded bg-slate-200 hover:bg-slate-950 text-slate-800 hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors duration-250 ease-out"
                          >
                            Reset View
                          </button>
                        ) : (
                          <span className="text-[11px] font-semibold text-slate-500">
                            Click any layer to inspect
                          </span>
                        )}
                      </div>
                      <div className="space-y-0">
                        {activeBlueprintItem.topologyLayers.map((tier, idx) => {
                          const isDark = tier.emphasis === 'dark';
                          const isSelected = selectedLayerIdx === idx;
                          const isDimmed = selectedLayerIdx !== null && !isSelected;
                          const isArrowActive =
                            selectedLayerIdx === idx || selectedLayerIdx === idx + 1;

                          return (
                            <React.Fragment key={tier.layer}>
                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedLayerIdx((prev) => (prev === idx ? null : idx))
                                }
                                aria-expanded={isSelected}
                                className={`w-full text-left rounded-lg border p-5 transition-all duration-250 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                                  isDark
                                    ? 'bg-slate-950 text-white border-slate-800'
                                    : 'bg-white text-slate-950 border-slate-300'
                                } ${
                                  isSelected
                                    ? 'ring-2 ring-sky-700 shadow-md -translate-y-0.5'
                                    : isDimmed
                                      ? 'opacity-60 hover:opacity-100'
                                      : 'hover:border-sky-700 hover:-translate-y-0.5'
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

                                {isSelected &&
                                  (tier.focusSummary ||
                                    (tier.governanceControls &&
                                      tier.governanceControls.length > 0)) && (
                                    <div
                                      className={`mt-4 pt-4 border-t ${
                                        isDark ? 'border-slate-800' : 'border-slate-200'
                                      }`}
                                    >
                                      <div
                                        className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${
                                          isDark ? 'text-sky-400' : 'text-sky-700'
                                        }`}
                                      >
                                        Layer Scope & Governance Focus
                                      </div>
                                      {tier.focusSummary && (
                                        <p
                                          className={`text-xs leading-relaxed ${
                                            isDark ? 'text-slate-300' : 'text-slate-600'
                                          }`}
                                        >
                                          {tier.focusSummary}
                                        </p>
                                      )}
                                      {tier.governanceControls &&
                                        tier.governanceControls.length > 0 && (
                                          <div className="flex flex-wrap gap-2 mt-3">
                                            {tier.governanceControls.map((ctrl) => (
                                              <span
                                                key={ctrl}
                                                className={`px-2.5 py-1 rounded text-[11px] font-bold border ${
                                                  isDark
                                                    ? 'bg-slate-900 border-sky-400 text-sky-400'
                                                    : 'bg-slate-50 border-sky-700 text-sky-700'
                                                }`}
                                              >
                                                {ctrl}
                                              </span>
                                            ))}
                                          </div>
                                        )}
                                    </div>
                                  )}
                              </button>
                              {idx < activeBlueprintItem.topologyLayers!.length - 1 && (
                                <div className="flex justify-center py-1" aria-hidden="true">
                                  <svg
                                    className={`w-5 h-6 transition-all duration-250 ease-out ${
                                      selectedLayerIdx === null
                                        ? 'text-slate-400'
                                        : isArrowActive
                                          ? 'text-sky-700'
                                          : 'text-slate-300 opacity-50'
                                    }`}
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
                  <WorkflowAnimation
                    steps={activeBlueprintItem.architectureFlow}
                    title="Engineering Pipeline Telemetry & Model Execution Flow"
                  />

                  {activeBlueprintItem.testimonials &&
                    activeBlueprintItem.testimonials.length > 0 && (
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
                  {activeBlueprintItem.topologyLayers && (
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="text-[11px] font-bold uppercase tracking-widest text-sky-700">
                          Enterprise Architecture Zones & Delivery Stack
                        </div>
                        {selectedLayerIdx !== null ? (
                          <button
                            type="button"
                            onClick={() => setSelectedLayerIdx(null)}
                            className="px-2.5 py-0.5 rounded bg-slate-200 hover:bg-slate-950 text-slate-800 hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors duration-250 ease-out"
                          >
                            Reset View
                          </button>
                        ) : (
                          <span className="text-[11px] font-semibold text-slate-500">
                            Click any layer to inspect
                          </span>
                        )}
                      </div>
                      <div className="space-y-0">
                        {activeBlueprintItem.topologyLayers.map((zone, idx) => {
                          const isDark = zone.emphasis === 'dark';
                          const isSelected = selectedLayerIdx === idx;
                          const isDimmed = selectedLayerIdx !== null && !isSelected;
                          const isArrowActive =
                            selectedLayerIdx === idx || selectedLayerIdx === idx + 1;

                          return (
                            <React.Fragment key={zone.layer}>
                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedLayerIdx((prev) => (prev === idx ? null : idx))
                                }
                                aria-expanded={isSelected}
                                className={`w-full text-left rounded-lg border p-5 transition-all duration-250 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                                  isDark
                                    ? 'bg-slate-950 text-white border-slate-800'
                                    : 'bg-white text-slate-950 border-slate-300'
                                } ${
                                  isSelected
                                    ? 'ring-2 ring-sky-700 shadow-md -translate-y-0.5'
                                    : isDimmed
                                      ? 'opacity-60 hover:opacity-100'
                                      : 'hover:border-sky-700 hover:-translate-y-0.5'
                                }`}
                              >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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

                                {isSelected &&
                                  (zone.focusSummary ||
                                    (zone.governanceControls &&
                                      zone.governanceControls.length > 0)) && (
                                    <div
                                      className={`mt-4 pt-4 border-t ${
                                        isDark ? 'border-slate-800' : 'border-slate-200'
                                      }`}
                                    >
                                      <div
                                        className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${
                                          isDark ? 'text-sky-400' : 'text-sky-700'
                                        }`}
                                      >
                                        Zone Scope & Governance Focus
                                      </div>
                                      {zone.focusSummary && (
                                        <p
                                          className={`text-xs leading-relaxed ${
                                            isDark ? 'text-slate-300' : 'text-slate-600'
                                          }`}
                                        >
                                          {zone.focusSummary}
                                        </p>
                                      )}
                                      {zone.governanceControls &&
                                        zone.governanceControls.length > 0 && (
                                          <div className="flex flex-wrap gap-2 mt-3">
                                            {zone.governanceControls.map((ctrl) => (
                                              <span
                                                key={ctrl}
                                                className={`px-2.5 py-1 rounded text-[11px] font-bold border ${
                                                  isDark
                                                    ? 'bg-slate-900 border-sky-400 text-sky-400'
                                                    : 'bg-slate-50 border-sky-700 text-sky-700'
                                                }`}
                                              >
                                                {ctrl}
                                              </span>
                                            ))}
                                          </div>
                                        )}
                                    </div>
                                  )}
                              </button>
                              {idx < activeBlueprintItem.topologyLayers!.length - 1 && (
                                <div className="flex justify-center py-1" aria-hidden="true">
                                  <svg
                                    className={`w-5 h-6 transition-all duration-250 ease-out ${
                                      selectedLayerIdx === null
                                        ? 'text-slate-400'
                                        : isArrowActive
                                          ? 'text-sky-700'
                                          : 'text-slate-300 opacity-50'
                                    }`}
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

                  {activeBlueprintItem.testimonials &&
                    activeBlueprintItem.testimonials.length > 0 && (
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
                {activeBlueprintItem.githubUrl && (
                  <a
                    href={activeBlueprintItem.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-950 border border-slate-300 text-xs font-bold transition-colors duration-250 ease-out inline-flex items-center space-x-1.5"
                  >
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-700" />
                  </a>
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

      {/* Block 5 (Shared Contact / Engagement Footer Across All 3 Views) */}
      <footer
        id="contact"
        className="bg-slate-950 text-slate-300 border-t border-slate-900 mt-auto"
      >
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-14 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-sky-400 mb-1.5">
              Direct Discovery & Commercial Enquiries
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Discuss an Enterprise Programme or Applied AI Build
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Available for UK contract leadership, fixed-scope Statements of Work (SOW), and
              cloud partner engineering collaborations across London and international time zones.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:sam@tactical-scale.com?subject=Tactical%20Scale%3A%20Discovery%20Call"
              className="px-5 py-3 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors duration-250 ease-out inline-flex items-center space-x-2"
            >
              <span>sam@tactical-scale.com</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/samgorleung"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 hover:border-sky-400 transition-colors duration-250 ease-out inline-flex items-center space-x-1.5"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-slate-400">
          <div className="space-y-1">
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
              Greater London, United Kingdom | Principal Consultant: Sam Leung, PMP, DASSM
            </p>
          </div>

          <div className="flex flex-col md:items-end space-y-2">
            <div className="flex flex-wrap items-center gap-4 text-slate-300 font-semibold">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToView('home');
                }}
                className="hover:text-sky-400 transition-colors duration-250 ease-out"
              >
                Overview
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="#ai-lab"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToView('ai-lab');
                }}
                className="hover:text-sky-400 transition-colors duration-250 ease-out"
              >
                AI Lab
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="#enterprise"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToView('enterprise');
                }}
                className="hover:text-sky-400 transition-colors duration-250 ease-out"
              >
                Enterprise
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="https://github.com/Samgorleung"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors duration-250 ease-out"
              >
                GitHub
              </a>
              <span className="text-slate-700">|</span>
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

function BadgeGrid({
  badges,
  columnsClass,
  compact = false,
}: {
  badges: CertificationBadge[];
  columnsClass: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className={`grid ${columnsClass} gap-3`}>
        {badges.map((badge) => {
          const compactContent = (
            <>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <img
                  src={badge.imageUrl}
                  alt={badge.name}
                  className="w-9 h-9 object-contain shrink-0"
                  loading="lazy"
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 text-right">
                  {badge.issuer}
                </span>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-950 leading-snug">
                  {badge.code}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-snug">
                  {badge.shortName || badge.name}
                </div>
              </div>
            </>
          );

          return badge.verifyUrl ? (
            <a
              key={`${badge.issuer}-${badge.code}`}
              href={badge.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 hover:border-sky-700 rounded-lg p-3.5 sm:p-4 flex flex-col justify-between transition-colors duration-250 ease-out"
            >
              {compactContent}
            </a>
          ) : (
            <div
              key={`${badge.issuer}-${badge.code}`}
              className="bg-white border border-slate-200 hover:border-sky-700 rounded-lg p-3.5 sm:p-4 flex flex-col justify-between transition-colors duration-250 ease-out"
            >
              {compactContent}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`grid ${columnsClass} border-t border-l border-slate-200 bg-white`}>
      {badges.map((badge) => {
        const badgeContent = (
          <>
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {badge.issuer}
              </span>
              {badge.verifyUrl && <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
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
              <div className="text-xs text-slate-600 mt-0.5 leading-snug">{badge.name}</div>
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
      })}
    </div>
  );
}

function ExecutiveEndorsementsStrip() {
  return (
    <div>
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

      <div className="grid md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 mb-2">
              Applied AI Leadership
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
              "Sam's initiative to lead and shape the AI working group has been a game-changer for
              us. His work has undoubtedly raised the bar for what we can achieve in project
              management through technology."
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
              "A seasoned BA/PM with a customer-first and result-first mentality, demonstrating
              excellent stakeholder management, cross-functional collaboration, and risk management."
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
              "Very well organized, takes initiative beyond the expected parameters of his job, and
              runs an efficient project with no unpleasant surprises."
            </p>
          </div>
          <div className="text-[11px] font-bold text-slate-950 pt-3 border-t border-slate-200">
            Project Manager, Global System Integrator
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioCard({
  item,
  onWatchDemo,
  onViewBlueprint,
  allowWorkflowToggle = false,
  isWorkflowExpanded = false,
  onToggleWorkflow,
}: {
  item: PortfolioItem;
  onWatchDemo: (item: PortfolioItem) => void;
  onViewBlueprint: (item: PortfolioItem) => void;
  allowWorkflowToggle?: boolean;
  isWorkflowExpanded?: boolean;
  onToggleWorkflow?: () => void;
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
        {/* Inline Expandable Workflow Animation (AI Lab Cards) */}
        {allowWorkflowToggle && isWorkflowExpanded && (
          <div className="mb-4">
            <WorkflowAnimation steps={item.architectureFlow} compact />
          </div>
        )}

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
              {allowWorkflowToggle && onToggleWorkflow && (
                <button
                  type="button"
                  onClick={onToggleWorkflow}
                  aria-expanded={isWorkflowExpanded}
                  className={`inline-flex items-center space-x-1 px-3 py-1 rounded-lg border text-[11px] font-bold transition-colors duration-250 ease-out ${
                    isWorkflowExpanded
                      ? 'bg-sky-700 text-white border-sky-700'
                      : 'bg-white hover:bg-slate-50 text-sky-700 border-slate-300 hover:border-sky-700'
                  }`}
                >
                  <span>{isWorkflowExpanded ? 'Hide Workflow' : 'Preview Workflow'}</span>
                  {isWorkflowExpanded ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </button>
              )}
              <button
                type="button"
                onClick={() => onViewBlueprint(item)}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-950 text-slate-900 hover:text-white border border-slate-300 hover:border-slate-950 text-[11px] font-bold transition-colors duration-250 ease-out"
              >
                <span>View Blueprint</span>
                <ArrowUpRight className="w-3 h-3 text-sky-700" />
              </button>
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-[11px] font-bold transition-colors duration-250 ease-out"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-sky-700" />
                </a>
              )}
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
