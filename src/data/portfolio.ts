export type PortfolioTrack = 'ai-systems' | 'enterprise-delivery';

export type PortfolioCategoryTag =
  | 'AI Product & Agile Governance'
  | 'Agentic AI & Cybersecurity Compliance'
  | 'Real-Time Multimodal AI'
  | 'RegTech & Financial Compliance'
  | 'Generative Media & Workflow Automation'
  | 'Technical Advisory & Production Support'
  | 'Consumer Web Application'
  | 'Financial Market Infrastructure & Clearing Operations'
  | 'Insurance & Healthcare Financial Services'
  | 'Actuarial Systems & Cloud Infrastructure'
  | 'UK Retail, Wholesale & Regulatory Compliance';

export type FilterTabId =
  | 'all'
  | 'ai-systems'
  | 'enterprise-delivery'
  | 'regtech-security'
  | 'agile-advisory'
  | 'multimodal-web';

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle?: string;
  track: PortfolioTrack;
  trackLabel: string;
  role: string;
  collaborator?: string;
  category: PortfolioCategoryTag;
  filterGroups: FilterTabId[];
  techOrSectorLabel: string;
  techStack: string[];
  overview: string;
  accentColor: 'sky' | 'purple' | 'rose';
  highlightMetric?: string;
  organizationOrEvent?: string;
}

export const FILTER_TABS: {
  id: FilterTabId;
  label: string;
  shortLabel: string;
  description: string;
}[] = [
  {
    id: 'all',
    label: 'All Portfolio & Mandates',
    shortLabel: 'All (11)',
    description: 'Complete track record across applied AI systems and tier-one enterprise transformation.',
  },
  {
    id: 'ai-systems',
    label: 'Applied AI Systems & Technical Builds',
    shortLabel: 'Part A: Applied AI (7)',
    description: 'Production-grade agentic workflows, multimodal applications, and AI coaching engagements.',
  },
  {
    id: 'enterprise-delivery',
    label: 'Enterprise Transformation & Regulatory',
    shortLabel: 'Part B: Enterprise & Reg (4)',
    description: 'High-stakes IT programme delivery across capital markets, insurance, cloud, and UK statutory licensing.',
  },
  {
    id: 'regtech-security',
    label: 'RegTech, Audit & Compliance',
    shortLabel: 'RegTech & Compliance',
    description: 'Autonomous security auditing, dual-market governance analytics, and statutory licensing.',
  },
  {
    id: 'agile-advisory',
    label: 'Agile Governance & AI Coaching',
    shortLabel: 'Agile & AI Advisory',
    description: 'Schema-enforced backlog engineering, AI Studio-to-production synchronization, and delivery governance.',
  },
  {
    id: 'multimodal-web',
    label: 'Multimodal & GenMedia Systems',
    shortLabel: 'Multimodal & GenMedia',
    description: 'Real-time voice/video agents, multi-AI storyboarding pipelines, and interactive web applications.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Part A: Applied AI Systems & Technical Builds
  {
    id: 'sprint-clarify',
    title: 'SprintClarify',
    subtitle: 'Agile Backlog & Dependency Decomposition Engine',
    track: 'ai-systems',
    trackLabel: 'Part A • Applied AI Build',
    role: 'Co-Creator & Lead Architect',
    collaborator: 'William Tam',
    category: 'AI Product & Agile Governance',
    filterGroups: ['all', 'ai-systems', 'agile-advisory'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemini 3.8 Flash', 'React 19', 'TypeScript', 'Tailwind CSS', 'Typed JSON Schemas'],
    overview:
      'SprintClarify enforces structured engineering planning before code generation. The platform ingests high-level product requirements and decomposes them into granular, sprint-ready user stories complete with acceptance criteria, dependency graphs, and technical risk flags. By enforcing strict JSON schema outputs from Gemini models, it eliminates vague backlog items and accelerates sprint planning for agile delivery teams.',
    accentColor: 'sky',
    highlightMetric: 'Schema-Enforced Sprint Decomposition & Dependency Graphs',
  },
  {
    id: 'guardian-ai',
    title: 'GuardianAI',
    subtitle: 'Autonomous Compliance & Security Auditing Agent',
    track: 'ai-systems',
    trackLabel: 'Part A • Applied AI Build',
    role: 'Co-Creator & Security Architect',
    category: 'Agentic AI & Cybersecurity Compliance',
    filterGroups: ['all', 'ai-systems', 'regtech-security'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemma 4', 'Gemini 3.7 Flash', 'Google Cloud Run', 'Containerized Microservices'],
    overview:
      'Built for the #AllThingsAgentic Hackathon, GuardianAI is an autonomous auditing agent deployed on Google Cloud Run. It evaluates technical documentation, system configurations, and operational workflows against regulatory and cybersecurity frameworks. Combining open-weights Gemma 4 models with Gemini 3.7 Flash, the system surfaces compliance gaps and generates actionable remediation logs automatically.',
    accentColor: 'rose',
    organizationOrEvent: '#AllThingsAgentic Hackathon',
    highlightMetric: 'Autonomous Multi-Model Security & Compliance Auditing on Cloud Run',
  },
  {
    id: 'echohire',
    title: 'EchoHire',
    subtitle: 'Adaptive Dual-Mode AI Career Coach & Interviewer',
    track: 'ai-systems',
    trackLabel: 'Part A • Applied AI Build',
    role: 'Co-Creator & AI Systems Lead',
    collaborator: 'William Tam',
    category: 'Real-Time Multimodal AI',
    filterGroups: ['all', 'ai-systems', 'multimodal-web'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemini 3.1 Pro', 'Gemini 2.5 Live', 'Firebase', 'React', 'Tailwind CSS'],
    overview:
      'Developed for the Google Gemini Live Agent Challenge, EchoHire provides low-latency voice and text interview simulations. It operates in two distinct modes: an interactive interviewer that adapts follow-up questions in real time based on candidate responses, and an analytical career coach that evaluates transcripts against structured competency rubrics to provide actionable feedback.',
    accentColor: 'purple',
    organizationOrEvent: 'Google Gemini Live Agent Challenge',
    highlightMetric: 'Low-Latency Bidirectional Voice & Competency Rubric Evaluation',
  },
  {
    id: 'dual-market-compliance',
    title: 'Dual-Market Corporate Compliance Analytics',
    subtitle: 'Cross-Jurisdiction Governance & Statutory Verification',
    track: 'ai-systems',
    trackLabel: 'Part A • Applied AI Build',
    role: 'Co-Creator & Compliance Lead',
    category: 'RegTech & Financial Compliance',
    filterGroups: ['all', 'ai-systems', 'regtech-security'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemini API', 'React', 'TypeScript', 'Tailwind CSS'],
    overview:
      'A specialized analytical platform designed to cross-reference corporate governance disclosures and regulatory requirements across dual-market jurisdictions. The tool streamlines compliance verification by extracting key statutory obligations and highlighting discrepancies across complex regulatory filings.',
    accentColor: 'rose',
    highlightMetric: 'Automated Dual-Jurisdiction Statutory Obligation Extraction',
  },
  {
    id: 'extraordinary-agents',
    title: 'Extraordinary Agents',
    subtitle: 'Multi-AI Storyboarding & Video Production Pipeline',
    track: 'ai-systems',
    trackLabel: 'Part A • Applied AI Build',
    role: 'Lead Architect',
    category: 'Generative Media & Workflow Automation',
    filterGroups: ['all', 'ai-systems', 'multimodal-web'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Google GenMedia APIs', 'Multi-Agent Workflow', 'GitHub', 'WSL'],
    overview:
      'A collaborative multi-AI orchestration pipeline that automates creative scriptwriting, character-consistent visual storyboarding, and video generation. The architecture separates narrative planning, visual prompt enforcement, and quality assurance across specialized agent roles to maintain visual and thematic continuity.',
    accentColor: 'purple',
    highlightMetric: 'Role-Separated Multi-Agent Narrative & Visual QA Orchestration',
  },
  {
    id: 'production-ai-coaching',
    title: 'Production AI Coaching & Environment Synchronization',
    subtitle: 'AI Studio to Production CI/CD & Stakeholder Enablement',
    track: 'ai-systems',
    trackLabel: 'Part A • Technical Advisory',
    role: 'Principal Consultant & Technical Advisor',
    collaborator: 'William Tam (Troubleshooting Support)',
    category: 'Technical Advisory & Production Support',
    filterGroups: ['all', 'ai-systems', 'agile-advisory'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Google AI Studio', 'Cloud Run', 'Production CI/CD Workflows'],
    overview:
      'Ongoing client consultancy focused on transitioning AI Studio prototypes into stable production environments. Work includes resolving deployment pipeline discrepancies, synchronizing prompt and model configurations between staging and production, and coaching internal stakeholders on sustainable self-service maintenance.',
    accentColor: 'sky',
    highlightMetric: 'Staging-to-Production Prompt Sync & Self-Service Handover',
  },
  {
    id: 'ai-festival-card-maker',
    title: 'AI Festival Card Maker',
    subtitle: 'Culturally Tailored Generative Greeting Application',
    track: 'ai-systems',
    trackLabel: 'Part A • Applied AI Build',
    role: 'Co-Creator',
    collaborator: 'William Tam',
    category: 'Consumer Web Application',
    filterGroups: ['all', 'ai-systems', 'multimodal-web'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemini 2.5 Flash', 'HTML5 Canvas', 'Tailwind CSS'],
    overview:
      'A lightweight, high-speed web application that generates culturally tailored digital greeting cards across global festivals while preserving subject likeness. Built with a streamlined frontend and automated canvas compositing for instant sharing.',
    accentColor: 'purple',
    highlightMetric: 'Subject-Likeness Preservation & Automated HTML5 Canvas Compositing',
  },

  // Part B: Enterprise Transformation & Regulatory Delivery
  {
    id: 'lseg-lch-operations',
    title: 'London Stock Exchange Group (LSEG / LCH Operations)',
    subtitle: 'Financial Market Infrastructure & Clearing Transformation (via TCS UK)',
    track: 'enterprise-delivery',
    trackLabel: 'Part B • Enterprise Delivery',
    role: 'Senior IT Project Manager',
    category: 'Financial Market Infrastructure & Clearing Operations',
    filterGroups: ['all', 'enterprise-delivery', 'regtech-security', 'agile-advisory'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'Financial Market Infrastructure',
      'Clearing Operations',
      'Governance Gates',
      'Risk & Audit Controls',
      'Service Transition',
    ],
    overview:
      'Led complex operational transformation and IT delivery workstreams within a highly regulated financial market infrastructure environment. Managed cross-functional engineering and operations stakeholders, ensuring strict adherence to governance gates, risk controls, and service transition standards.',
    accentColor: 'sky',
    organizationOrEvent: 'United Kingdom • via TCS UK',
    highlightMetric: '100% On-Schedule Governance Gate & Audit Control Compliance',
  },
  {
    id: 'axa-health-claims',
    title: 'AXA Health Claims Transformation',
    subtitle: 'End-to-End Legacy Claims Modernization & Digital Self-Service (via TCS Hong Kong)',
    track: 'enterprise-delivery',
    trackLabel: 'Part B • Enterprise Delivery',
    role: 'Project Manager',
    category: 'Insurance & Healthcare Financial Services',
    filterGroups: ['all', 'enterprise-delivery', 'agile-advisory'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'Insurance & Healthcare FS',
      'Claims Workflow Modernization',
      'Multi-Vendor Governance',
      'Digital Self-Service',
    ],
    overview:
      'Directed end-to-end delivery for a major health claims processing transformation initiative. Coordinated business analysts, technical vendors, and operations teams to modernize legacy claims workflows, improving turnaround accuracy and digital self-service capabilities.',
    accentColor: 'purple',
    organizationOrEvent: 'Hong Kong / APAC • via TCS Hong Kong',
    highlightMetric: 'End-to-End Legacy Claims Modernization & Turnaround Acceleration',
  },
  {
    id: 'aia-regional-cloud',
    title: 'AIA Regional Cloud Migration',
    subtitle: 'Prophet Professional Actuarial Migration to Microsoft Azure (via Kingviews)',
    track: 'enterprise-delivery',
    trackLabel: 'Part B • Enterprise Delivery',
    role: 'IT Project Manager',
    category: 'Actuarial Systems & Cloud Infrastructure',
    filterGroups: ['all', 'enterprise-delivery'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'Microsoft Azure',
      'Prophet Professional',
      '18 Regional Offices',
      'Security Compliance',
      'Regional Cutover Execution',
    ],
    overview:
      'Managed the regional migration of mission-critical Prophet Professional actuarial applications across 18 offices onto Microsoft Azure. Coordinated infrastructure provisioning, security compliance, user acceptance testing, and cutover execution across multiple Asian markets.',
    accentColor: 'rose',
    organizationOrEvent: '18 Offices, Multiple Asian Markets • via Kingviews',
    highlightMetric: '18-Office Regional Actuarial Cloud Migration to Microsoft Azure',
  },
  {
    id: 'seewoo-sutton-licensing',
    title: 'UK Commercial Licensing & AWRS Regulatory Compliance',
    subtitle: 'Premises Licensing, HMRC AWRS & Statutory Due Diligence (SeeWoo Sutton Limited)',
    track: 'enterprise-delivery',
    trackLabel: 'Part B • Regulatory Delivery',
    role: 'Compliance & Delivery Lead',
    category: 'UK Retail, Wholesale & Regulatory Compliance',
    filterGroups: ['all', 'enterprise-delivery', 'regtech-security'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'HMRC AWRS Compliance',
      'UK Premises Licensing',
      'Statutory Operating Schedules',
      'Due Diligence & Audit Trails',
    ],
    overview:
      'Successfully managed complex UK statutory applications, including local authority Premises Licenses and HMRC Alcohol Wholesaler Registration Scheme (AWRS) compliance. Prepared comprehensive operating schedules, due diligence frameworks, and audit trails to secure full regulatory approval.',
    accentColor: 'sky',
    organizationOrEvent: 'Greater London, UK • SeeWoo Sutton Limited',
    highlightMetric: 'Full UK Local Authority & HMRC AWRS Regulatory Approval Secured',
  },
];

export interface DiagnosticScenario {
  id: string;
  scenarioNumber: string;
  shortTitle: string;
  title: string;
  badge: string;
  accent: 'sky' | 'purple' | 'rose';
  days30: string;
  days60: string;
  days90: string;
  proof: string;
}

export const DIAGNOSTIC_SCENARIOS: DiagnosticScenario[] = [
  {
    id: 'stalled-programme',
    scenarioNumber: 'Scenario 01',
    shortTitle: 'Stalled Core Programme',
    title: 'Stalled Core Platform, Cloud Migration, or Multi-Vendor Programme',
    badge: 'Enterprise Programme Delivery',
    accent: 'sky',
    days30:
      'Rapid RAID forensic audit, critical-path re-baselining, vendor accountability reset, and SteerCo governance alignment.',
    days60:
      'Introduce pre-production quality gates, structured agile/hybrid sprint cadences, and cross-functional defect triage across workstreams.',
    days90:
      'Stabilised production cutover, service transition sign-off, and measurable operational turnaround.',
    proof:
      'Track Record Proof: Directed complex transformation and cloud migration workstreams across LSEG / LCH Operations (UK), AXA Health Claims (HK), and AIA 18-office Prophet Professional migration to Microsoft Azure.',
  },
  {
    id: 'ai-poc-to-prod',
    scenarioNumber: 'Scenario 02',
    shortTitle: 'AI PoC to Governed Production',
    title: 'Moving Generative AI from Fragile Prototype to Schema-Enforced Production',
    badge: 'Applied AI & Agentic Systems',
    accent: 'purple',
    days30:
      'Architecture & security review (SC-100 aligned), typed JSON schema design, and model routing selection (Gemini, ADK 2.0, Gemma).',
    days60:
      'Build and containerize multi-agent workflows on Google Cloud Run, Firebase, or Cloudflare Workers with deterministic validation.',
    days90:
      'Full integration into operational workflows with automated compliance auditing, CI/CD pipelines, and team handover.',
    proof:
      'Engineering Proof: Architected SprintClarify (Gemini 3.8 Flash + React 19), GuardianAI (Gemma 4 + Gemini 3.7 Flash on Cloud Run), and EchoHire (Gemini 3.1 Pro + 2.5 Live).',
  },
  {
    id: 'ai-coaching-sync',
    scenarioNumber: 'Scenario 03',
    shortTitle: 'AI Studio Sync & Coaching',
    title: 'Rescuing Stalled Prototypes & Synchronizing AI Studio with Production',
    badge: 'AI Coaching & Technical Advisory',
    accent: 'rose',
    days30:
      'Diagnose staging-vs-production drift, environment variable bottlenecks, prompt degradation, and CI/CD deployment blockers.',
    days60:
      'Establish governed prompt/context engineering workflows, M365 Copilot governance, and repeatable Cloud Run / Cloudflare release pipelines.',
    days90:
      'Upskill leadership and internal builders for sustainable self-service operation without ongoing agency dependency.',
    proof:
      'Advisory Proof: Ongoing principal consultancy synchronizing Google AI Studio prototypes into stable Cloud Run production pipelines with hands-on stakeholder enablement.',
  },
  {
    id: 'regulatory-compliance',
    scenarioNumber: 'Scenario 04',
    shortTitle: 'Audit & UK Regulatory Delivery',
    title: 'High-Stakes Technology Risk Remediation & UK Statutory Licensing',
    badge: 'Regulatory & Compliance Delivery',
    accent: 'sky',
    days30:
      'Comprehensive gap analysis across statutory requirements (HMRC AWRS, local authority licensing, or financial market IT risk controls).',
    days60:
      'Prepare operating schedules, due diligence frameworks, multi-jurisdiction compliance mappings, and technical remediation waves.',
    days90:
      'Formal audit trail verification, regulatory authority submission, and 100% on-schedule compliance sign-off.',
    proof:
      'Compliance Proof: Secured full UK Premises License & HMRC AWRS approval for SeeWoo Sutton Limited, cleared Tier-1 UK Exchange risk gates, and built Dual-Market Compliance Analytics.',
  },
];
