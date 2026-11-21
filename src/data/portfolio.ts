export type PortfolioTrack = 'ai-systems' | 'enterprise-delivery';

export type PortfolioCategoryTag =
  | 'AI Product & Agile Governance'
  | 'Agentic AI & Cybersecurity Compliance'
  | 'Real-Time Multimodal AI'
  | 'RegTech & Financial Compliance'
  | 'Generative Media & Workflow Automation'
  | 'Technical Advisory & Production Support'
  | 'Applied AI & Conference Operations'
  | 'Financial Market Infrastructure & Clearing Operations'
  | 'Insurance & Healthcare Financial Services'
  | 'Actuarial Systems & Cloud Infrastructure'
  | 'UK Retail, Wholesale & Regulatory Compliance'
  | 'Global Cloud Readiness & Infrastructure Assessment'
  | 'Microsoft Hybrid Cloud & Enterprise Voice (18 Mandates)';

export type FilterTabId =
  | 'all'
  | 'ai-systems'
  | 'enterprise-delivery'
  | 'regtech-security'
  | 'agile-advisory'
  | 'multimodal-web';

export type BlueprintVariant = 'flagship-hybrid-cloud' | 'ai-pipeline' | 'infra-stack';

export interface ArchitectureStage {
  step: string;
  title: string;
  detail: string;
}

export interface ImpactStat {
  value: string;
  label: string;
}

export interface TopologyLayer {
  layer: string;
  label: string;
  nodes: string[];
  emphasis?: 'dark' | 'light';
  focusSummary?: string;
  governanceControls?: string[];
}

export interface ClientTestimonial {
  quote: string;
  authorRole: string;
}

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
  blueprintVariant: BlueprintVariant;
  architectureFlow: ArchitectureStage[];
  impactStats?: ImpactStat[];
  topologyLayers?: TopologyLayer[];
  testimonials?: ClientTestimonial[];
  highlightMetric?: string;
  organizationOrEvent?: string;
  videoUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
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
    shortLabel: 'All (14)',
    description: 'Complete track record across applied AI systems and tier-one enterprise transformation.',
  },
  {
    id: 'ai-systems',
    label: 'Applied AI Systems & Technical Builds',
    shortLabel: 'Part A: Applied AI (8)',
    description: 'Production-grade agentic workflows, multimodal applications, and AI coaching engagements.',
  },
  {
    id: 'enterprise-delivery',
    label: 'Enterprise Transformation & Regulatory',
    shortLabel: 'Part B: Enterprise & Reg (6)',
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
    description: 'Real-time voice/video agents, serverless video verification pipelines, and interactive web applications.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Part A: Applied AI Systems & Technical Builds
  {
    id: 'production-ai-coaching',
    title: 'Commercial AI SaaS Engineering & Advisory',
    subtitle: 'AI Architecture Partner for BetterPresenting.ai (AskMerv: Speech Evaluator & PIA) & UK SME Advisory',
    track: 'ai-systems',
    trackLabel: 'Part A: Technical Advisory',
    role: 'Principal Consultant & Technical Advisor',
    collaborator: 'Technical Engineering Partner',
    category: 'Technical Advisory & Production Support',
    filterGroups: ['all', 'ai-systems', 'agile-advisory'],
    techOrSectorLabel: 'Tech Stack',
    techStack: [
      'Gemini Fallback Chains',
      'FinOps Token Caps',
      'React 19 & TypeScript',
      'Firebase Auth & Share Gates',
      'Automated PPTX Export',
      'UK SME AI Advisory',
    ],
    overview:
      'Co-architected and stabilized production B2B AI SaaS tools powering BetterPresenting.ai (AskMerv), including Presentation Impact Analyst (PIA) and AI Speech Evaluator, with model fallback chains, FinOps token caps, and automated PPTX exports, alongside executive PMBOK and AI coaching for UK SMEs.',
    blueprintVariant: 'ai-pipeline',
    architectureFlow: [
      {
        step: '01',
        title: 'Speech & Deck Intake',
        detail: 'Captures speaker audio, transcripts, and slide decks behind staff auth gates or public share links.',
      },
      {
        step: '02',
        title: 'Guarded Gemini Engine',
        detail: 'Enforces strict model allowlists, automatic fallback chains, and output token caps for FinOps cost control.',
      },
      {
        step: '03',
        title: 'UK Cloud & Observability',
        detail: 'Runs containerized TypeScript APIs in UK cloud regions with per-request model telemetry and state sync.',
      },
      {
        step: '04',
        title: 'Branded PPTX & Coaching',
        detail: 'Exports unified themed PowerPoint decks, Q&A coaching cards, and actionable operational AI playbooks.',
      },
    ],
    testimonials: [
      {
        quote:
          'A truly transformational 6-month mentoring journey from task execution to PMBOK portfolio oversight and leadership, exploring practical AI workflows that led directly to an introduction to our senior management team for operational automation.',
        authorRole: 'PMI UK Mentoring Programme Mentee (UK Design Studio)',
      },
    ],
    highlightMetric: 'Production B2B AI SaaS Delivery with FinOps Guardrails & UK SME AI Coaching',
    liveUrl: 'https://www.betterpresenting.ai/home?ref=tactical-scale',
    liveLabel: 'Live: BetterPresenting.ai',
  },
  {
    id: 'sprint-clarify',
    title: 'SprintClarify',
    subtitle: 'Agile Backlog & Dependency Decomposition Engine',
    track: 'ai-systems',
    trackLabel: 'Part A: Applied AI Build',
    role: 'Co-Creator & Lead Architect',
    collaborator: 'Technical Engineering Partner',
    category: 'AI Product & Agile Governance',
    filterGroups: ['all', 'ai-systems', 'agile-advisory'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemini 3.8 Flash', 'React 19', 'TypeScript', 'Tailwind CSS', 'Typed JSON Schemas'],
    overview:
      'Decomposes product requirements into sprint-ready stories, acceptance criteria, dependency graphs, and risk flags. Enforces strict Gemini JSON schemas to eliminate vague backlogs.',
    blueprintVariant: 'ai-pipeline',
    architectureFlow: [
      {
        step: '01',
        title: 'Product Spec Input',
        detail: 'Ingests raw PRDs, scope briefs, and technical constraints.',
      },
      {
        step: '02',
        title: 'Gemini Schema Engine',
        detail: 'Gemini 3.8 Flash decomposes epics under strict JSON schemas.',
      },
      {
        step: '03',
        title: 'TypeScript UI Runtime',
        detail: 'React 19 validates dependencies and flags technical delivery risks.',
      },
      {
        step: '04',
        title: 'Sprint-Ready Output',
        detail: 'Exports deterministic user stories, AC criteria, and DAG graphs.',
      },
    ],
    highlightMetric: 'Schema-Enforced Sprint Decomposition & Dependency Graphs',
    videoUrl: 'https://youtu.be/X1Wsjzx7cpM?si=zVhZzLRBU1TfisIk',
  },
  {
    id: 'guardian-ai',
    title: 'GuardianAI',
    subtitle: 'Autonomous Compliance & Security Auditing Agent',
    track: 'ai-systems',
    trackLabel: 'Part A: Applied AI Build',
    role: 'Co-Creator & Security Architect',
    category: 'Agentic AI & Cybersecurity Compliance',
    filterGroups: ['all', 'ai-systems', 'regtech-security'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemma 4', 'Gemini 3.7 Flash', 'Google Cloud Run', 'Containerized Microservices'],
    overview:
      'Autonomous Cloud Run auditing agent combining Gemma 4 and Gemini 3.7 Flash. Evaluates system configurations against cybersecurity frameworks and generates automated remediation logs.',
    blueprintVariant: 'ai-pipeline',
    architectureFlow: [
      {
        step: '01',
        title: 'Config & Policy Intake',
        detail: 'Parses system configurations, documentation, and security workflows.',
      },
      {
        step: '02',
        title: 'Dual-Model Agent Core',
        detail: 'Routes reasoning across open-weights Gemma 4 and Gemini 3.7 Flash.',
      },
      {
        step: '03',
        title: 'Cloud Run Containers',
        detail: 'Executes stateless compliance checks on containerized microservices.',
      },
      {
        step: '04',
        title: 'Remediation Audit Log',
        detail: 'Outputs prioritized security gaps and structured remediation fixes.',
      },
    ],
    organizationOrEvent: '#AllThingsAgentic Hackathon',
    highlightMetric: 'Autonomous Multi-Model Security & Compliance Auditing on Cloud Run',
    videoUrl: 'https://youtu.be/4gXi8fSt7gA?si=TKB00xLZTG1Tg8uN',
  },
  {
    id: 'echohire',
    title: 'EchoHire',
    subtitle: 'Adaptive Dual-Mode AI Career Coach & Interviewer',
    track: 'ai-systems',
    trackLabel: 'Part A: Applied AI Build',
    role: 'Co-Creator & AI Systems Lead',
    collaborator: 'Technical Engineering Partner',
    category: 'Real-Time Multimodal AI',
    filterGroups: ['all', 'ai-systems', 'multimodal-web'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemini 3.1 Pro', 'Gemini 2.5 Live', 'Firebase', 'React', 'Tailwind CSS'],
    overview:
      'Low-latency voice and text interview simulator built for the Google Gemini Live Agent Challenge. Pairs adaptive interviewing with structured rubric coaching analytics.',
    blueprintVariant: 'ai-pipeline',
    architectureFlow: [
      {
        step: '01',
        title: 'Live Voice & Text Input',
        detail: 'Streams candidate audio and responses via real-time React client.',
      },
      {
        step: '02',
        title: 'Gemini Live + Pro Agents',
        detail: 'Gemini 2.5 Live conducts interviews; Gemini 3.1 Pro scores rubrics.',
      },
      {
        step: '03',
        title: 'Firebase Runtime',
        detail: 'Manages low-latency sessions, transcripts, and state persistence.',
      },
      {
        step: '04',
        title: 'Rubric Coaching Report',
        detail: 'Outputs scored competency breakdowns and tailored follow-ups.',
      },
    ],
    organizationOrEvent: 'Google Gemini Live Agent Challenge',
    highlightMetric: 'Low-Latency Bidirectional Voice & Competency Rubric Evaluation',
    videoUrl: 'https://youtu.be/vVuzmVtWq84?si=8l651Z7YqxeEW5ut',
  },
  {
    id: 'dual-market-compliance',
    title: 'Dual-Market Corporate Compliance Analytics',
    subtitle: 'Cross-Jurisdiction Governance & Statutory Verification',
    track: 'ai-systems',
    trackLabel: 'Part A: Applied AI Build',
    role: 'Co-Creator & Compliance Lead',
    category: 'RegTech & Financial Compliance',
    filterGroups: ['all', 'ai-systems', 'regtech-security'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemini API', 'React', 'TypeScript', 'Tailwind CSS'],
    overview:
      'Cross-references corporate governance disclosures across dual-market jurisdictions using Gemini APIs. Extracts statutory obligations and flags regulatory filing discrepancies automatically.',
    blueprintVariant: 'ai-pipeline',
    architectureFlow: [
      {
        step: '01',
        title: 'Filing & Rulebook Intake',
        detail: 'Loads dual-jurisdiction corporate disclosures and statutory clauses.',
      },
      {
        step: '02',
        title: 'Gemini Cross-Mapping',
        detail: 'Extracts statutory obligations and aligns clause parity.',
      },
      {
        step: '03',
        title: 'React Web Runtime',
        detail: 'Executes structured TypeScript diffing across regulatory rules.',
      },
      {
        step: '04',
        title: 'Discrepancy Matrix',
        detail: 'Outputs deterministic compliance flags and audit summaries.',
      },
    ],
    highlightMetric: 'Automated Dual-Jurisdiction Statutory Obligation Extraction',
    videoUrl: 'https://youtu.be/36Xfl-hmO9M?si=6ZawpjZ4yYWJ_XhT',
  },
  {
    id: 'cinefact-ai',
    title: 'CineFact AI',
    subtitle: 'Serverless Video Intelligence & Multimodal Claim Verification Pipeline',
    track: 'ai-systems',
    trackLabel: 'Part A: Applied AI Build',
    role: 'Co-Creator & Lead Architect',
    collaborator: 'Technical Engineering Partner',
    category: 'Real-Time Multimodal AI',
    filterGroups: ['all', 'ai-systems', 'multimodal-web'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemini API', 'Serverless Video Intelligence', 'Firestore', 'React', 'TypeScript'],
    overview:
      'Serverless video intelligence pipeline extracting factual assertions from live streams. Cross-references claims in parallel against authoritative knowledge bases for media compliance.',
    blueprintVariant: 'ai-pipeline',
    architectureFlow: [
      {
        step: '01',
        title: 'Video Stream Ingestion',
        detail: 'Captures multimodal video segments, audio, and timestamped assertions.',
      },
      {
        step: '02',
        title: 'Parallel Claim Extraction',
        detail: 'Gemini API structures verifiable factual claims per scene.',
      },
      {
        step: '03',
        title: 'Serverless + Firestore',
        detail: 'Runs parallel fact-checking workers backed by Firestore state.',
      },
      {
        step: '04',
        title: 'Verified Broadcast Feed',
        detail: 'Outputs timestamped verification verdicts and compliance evidence.',
      },
    ],
    highlightMetric: 'Parallel Claim Extraction & Multimodal Video Verification',
    videoUrl: 'https://youtu.be/eYbYHq_tyJk?si=n46zCM44sLjokhmt',
  },
  {
    id: 'extraordinary-agents',
    title: 'Extraordinary Agents',
    subtitle: 'Multi-AI Storyboarding & Video Production Pipeline',
    track: 'ai-systems',
    trackLabel: 'Part A: Applied AI Build',
    role: 'Lead Architect',
    category: 'Generative Media & Workflow Automation',
    filterGroups: ['all', 'ai-systems', 'multimodal-web'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Google GenMedia APIs', 'Multi-Agent Workflow', 'GitHub', 'WSL'],
    overview:
      'Multi-agent orchestration pipeline automating scriptwriting, character-consistent storyboarding, and video generation. Separates planning, prompt enforcement, and QA across specialized agent roles.',
    blueprintVariant: 'ai-pipeline',
    architectureFlow: [
      {
        step: '01',
        title: 'Creative Brief Input',
        detail: 'Defines narrative theme, character identity locks, and scene plan.',
      },
      {
        step: '02',
        title: 'Role-Separated Agents',
        detail: 'Orchestrates writer, visual prompt enforcer, and continuity QA.',
      },
      {
        step: '03',
        title: 'GenMedia & WSL Runtime',
        detail: 'Coordinates Google GenMedia APIs via reproducible CLI scripts.',
      },
      {
        step: '04',
        title: 'Continuity Video Output',
        detail: 'Delivers character-consistent storyboards and rendered sequences.',
      },
    ],
    highlightMetric: 'Role-Separated Multi-Agent Narrative & Visual QA Orchestration',
  },
  {
    id: 'post-event-survey-analyzer',
    title: 'Post-Event Survey & Slide Analyzer (Beta)',
    subtitle: 'Independent Conference Analytics Prototype (In Testing / Pre-Launch)',
    track: 'ai-systems',
    trackLabel: 'Part A: Active R&D Prototype',
    role: 'Creator & Lead Architect',
    category: 'Applied AI & Conference Operations',
    filterGroups: ['all', 'ai-systems', 'agile-advisory'],
    techOrSectorLabel: 'Tech Stack',
    techStack: [
      'Gemini Multi-Depth Reasoning',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Persistent Archiving',
      'Pre-Launch Beta',
    ],
    overview:
      'Independent full-stack R&D prototype currently in testing, inspired by earlier Gemini Gem and NotebookLM survey analysis experiments for UK professional conferences. Built as a standalone, platform-agnostic web workspace with configurable analysis depth, comparison modes, and persistent archiving.',
    blueprintVariant: 'ai-pipeline',
    architectureFlow: [
      {
        step: '01',
        title: 'Survey & Deck Ingestion',
        detail: 'Ingests raw post-event feedback exports, attendee comments, and speaker slide decks.',
      },
      {
        step: '02',
        title: 'Configurable Reasoning Core',
        detail: 'Applies selectable analysis depth and comparison modes to extract sentiment and actionable lessons.',
      },
      {
        step: '03',
        title: 'Persistent App Storage',
        detail: 'Archives analyzed presentations and multi-session comparisons in an independent web workspace.',
      },
      {
        step: '04',
        title: 'Structured Insights (Beta)',
        detail: 'Generates executive summaries and slide-by-slide feedback reports (currently in pre-launch testing).',
      },
    ],
    highlightMetric: 'Independent Pre-Launch Prototype Evolving Gem & NotebookLM Experiments into a Standalone Web App',
  },

  // Part B: Enterprise Transformation & Regulatory Delivery
  {
    id: 'multinational-health-insurer',
    title: 'Multinational Insurer: Hong Kong Health & General Transformation',
    subtitle:
      '~HKD$ 100M Hong Kong Core Claims Modernization, Group Operations Infrastructure & Group Security Sign-Off',
    track: 'enterprise-delivery',
    trackLabel: 'Part B: Enterprise Delivery',
    role: 'Project Manager / Delivery Lead',
    category: 'Insurance & Healthcare Financial Services',
    filterGroups: ['all', 'enterprise-delivery', 'agile-advisory'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'AWS Pre-Prod CI/CD',
      'Azure UAT/Prod Migration',
      'AD 2016 to 2019 Upgrade',
      'VHIS & Interim TPA Portals',
      'Azure DevOps / JIRA / ServiceNow',
      'Power BI & FWA Controls',
    ],
    overview:
      'Rescued a troubled ~HKD$ 100M Hong Kong core Health & General Insurance claims transformation (4 workstreams, 40+ specialists, 1.55M+ records), coordinating across an India offshore delivery vendor, Group Operations multi-country infrastructure teams, and Hong Kong CSO up to Group Security governance sign-offs. Burned down 1,500+ issues in 6 months, built AWS Pre-Prod CI/CD, closed 200+ vulnerabilities, and migrated UAT/Prod to Azure with Power BI (99.9% uptime, ~30% IT cost savings, 80% claims automation).',
    blueprintVariant: 'flagship-hybrid-cloud',
    impactStats: [
      { value: '1,500+', label: 'Post-Live Issues Cleared in 6 Months' },
      { value: '80%', label: 'Manual Claims Automated & Faster BI Reporting' },
      { value: '99.9%', label: 'Azure Prod Uptime (20% Lower Infra Cost)' },
      { value: '~30%', label: 'IT Cost Cut & 200+ Vulnerabilities Closed' },
    ],
    topologyLayers: [
      {
        layer: 'TIER 01',
        label: 'Digital Channels & Partner Ecosystems',
        nodes: [
          'Customer Mobile Claims App',
          'Salesforce CRM API',
          'Hospital Provider Portal',
          'Interim Bancassurance TPA Portal',
        ],
        emphasis: 'light',
        focusSummary:
          'Directs omnichannel Hong Kong claims intake across 1.55M+ policy records via mobile, CRM APIs, hospital portals, and an interim bancassurance TPA routing portal prior to core integration.',
        governanceControls: ['API Contract Validation', 'Hospital Provider Onboarding', 'Interim TPA Sync'],
      },
      {
        layer: 'TIER 02',
        label: 'AWS Pre-Prod CI/CD, Identity & Governance',
        nodes: [
          'AWS Pre-Production Staging',
          'CI/CD & Change Forums',
          'Active Directory (2016 to 2019)',
          'Azure DevOps / JIRA / ServiceNow',
        ],
        emphasis: 'light',
        focusSummary:
          'Coordinates an India offshore delivery vendor and Group Operations multi-country infrastructure teams to build AWS Pre-Prod CI/CD staging from scratch, upgrade Active Directory (2016 to 2019), and govern MoSCoW Scrum across 40+ specialists.',
        governanceControls: ['AWS Pre-Prod Release Gates', 'Change Management Forums', 'L1 Scrum Escalation SLA'],
      },
      {
        layer: 'TIER 03',
        label: 'Azure Production Core, Risk & Analytics',
        nodes: [
          'Azure Core Claims & DB (1.55M+ Records)',
          'FWA & Security Controls (200+ Fixes)',
          'Power BI Reporting (80% Faster)',
          '99.9% Production SLA',
        ],
        emphasis: 'dark',
        focusSummary:
          'Executes zero-downtime On-Prem to Azure UAT/Prod core migration for the Hong Kong business, clears 200+ cybersecurity fixes from Hong Kong CSO through Group Security governance sign-off, and powers Power BI reporting.',
        governanceControls: ['99.9% Production SLA', '20% Infra Cost Reduction', '80% Faster Power BI Reporting'],
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'Phase 1: India Vendor Reset & 4 Workstreams',
        detail:
          'Stabilised Hong Kong Life & General Insurance (1.55M+ records), Hospital Provider Portal, and Mobile/CRM APIs with the India offshore delivery vendor, burning down 1,500+ post-live issues in 6 months.',
      },
      {
        step: '02',
        title: 'Phase 2: AWS CI/CD, VHIS & L1 Scrum',
        detail:
          'Built AWS Pre-Prod CI/CD staging from scratch, delivered VHIS Phase 2, embedded MoSCoW Scrum (Azure DevOps/JIRA/ServiceNow), and transitioned L1 Support.',
      },
      {
        step: '03',
        title: 'Phase 3: HK CSO to Group Security, FWA & TPA',
        detail:
          'Mitigated 200+ security vulnerabilities cleared from Hong Kong CSO up to Group Security governance sign-offs, strengthened FWA controls, launched VHIS Revamp, and built an interim bancassurance TPA portal.',
      },
      {
        step: '04',
        title: 'Phase 4: Group Ops Azure Cloud & Power BI',
        detail:
          'Partnered with Group Operations multi-country infrastructure teams to migrate Hong Kong UAT/Prod claims and AD (2016 to 2019) to Azure with Power BI (20% lower infra cost, 99.9% uptime, 80% faster reporting).',
      },
    ],
    testimonials: [
      {
        quote:
          'Overcame numerous offshore delivery difficulties on a strategic health claims solution and completed the programme with high business satisfaction.',
        authorRole: 'Client IT Transformation Lead',
      },
      {
        quote:
          'Adeptly facilitated the security vulnerability remediation process, meticulously attending to every detail and ensuring prompt resolution.',
        authorRole: 'Enterprise Cyber Security Manager (CISSP, Azure Solutions Architect Expert)',
      },
    ],
    organizationOrEvent: 'Hong Kong Core Mandate | Group Operations & India Offshore',
    highlightMetric: '~30% IT Cost Cut, 20% Infra Savings, 99.9% Uptime & 80% Claims Automation (1.55M+ Records)',
  },
  {
    id: 'uk-market-infrastructure',
    title: 'Tier-1 UK Financial Market Infrastructure & Clearing House',
    subtitle: 'UK-Led EOL Remediation & Cross-Border Audit Governance (UK, Paris & Romania)',
    track: 'enterprise-delivery',
    trackLabel: 'Part B: Enterprise Delivery',
    role: 'Senior IT Project Manager',
    category: 'Financial Market Infrastructure & Clearing Operations',
    filterGroups: ['all', 'enterprise-delivery', 'regtech-security', 'agile-advisory'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'Financial Market Infrastructure',
      'UK / Paris / Romania Teams',
      '300+ EOL Server Remediation',
      'Firewall Rule Hardening',
      'Executive Risk Forums',
    ],
    overview:
      'UK-led IT delivery chairing weekly executive risk forums and coordinating across UK, Paris, and Romania teams to remediate 300+ EOL servers, harden firewall rules, and enforce vendor security controls for a Tier-1 UK clearing house, clearing 100% of audit milestones on schedule.',
    blueprintVariant: 'infra-stack',
    topologyLayers: [
      {
        layer: 'ZONE 01',
        label: 'Legacy Estate & Exposure Baseline',
        nodes: ['300+ EOL Servers', 'Legacy Clearing Dependencies', 'Third-Party Vendor Interfaces'],
        emphasis: 'light',
        focusSummary:
          'Catalogues 300+ end-of-life server dependencies, clearing operational pathways, and third-party vendor interfaces to establish an audit-ready remediation baseline.',
      },
      {
        layer: 'ZONE 02',
        label: 'Risk Governance & Hardening Controls',
        nodes: [
          'Weekly Executive Risk Forums',
          'UK, Paris & Romania Delivery Teams',
          'Firewall Rule Hardening',
          'Vendor Security Gates',
        ],
        emphasis: 'light',
        focusSummary:
          'Leads UK-based weekly executive risk forums with Senior Operations and Risk Directors while coordinating cross-border UK, Paris, and Romania engineering teams on firewall rule hardening and multi-path server remediation.',
      },
      {
        layer: 'ZONE 03',
        label: 'Audit Assurance & Clearing Service Transition',
        nodes: ['100% Audit Milestone Clearance', 'Zero-Breach Cutover', 'Operational Runbook Sign-Off'],
        emphasis: 'dark',
        focusSummary:
          'Completes zero-breach clearing service transition with formal operational runbook sign-off and 100% on-schedule audit milestone clearance.',
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: '300+ EOL Estate Audit',
        detail: 'Mapped legacy server dependencies, firewall exposures, and vendors across UK operations.',
      },
      {
        step: '02',
        title: 'Executive Risk Forums',
        detail: 'Chaired weekly UK-led RAID reviews with Senior Operations and Risk Directors.',
      },
      {
        step: '03',
        title: 'UK, Paris & Romania Execution',
        detail: 'Coordinated cross-border UK, Paris, and Romania engineering teams on firewall and server hardening.',
      },
      {
        step: '04',
        title: '100% Audit Clearance',
        detail: 'Delivered zero-breach service transition on regulatory schedule.',
      },
    ],
    testimonials: [
      {
        quote:
          'Dedicated in addressing End of Life remediation plans, connecting Business and IT Owners with strong communication and an audit-ready information trail.',
        authorRole: 'Portfolio Manager, Tier-1 UK Financial Market Infrastructure',
      },
    ],
    organizationOrEvent: 'UK-Led | UK, Paris & Romania Delivery Teams',
    highlightMetric: '100% On-Schedule Governance Gate & Audit Control Compliance',
  },
  {
    id: 'pan-asian-life-insurer',
    title: 'Pan-Asian Life Insurance Group (18 Regional Markets)',
    subtitle: 'Group Global Office (HQ) Led 18-Market APAC Azure Migration & Multi-Function Governance',
    track: 'enterprise-delivery',
    trackLabel: 'Part B: Enterprise Delivery',
    role: 'IT Project Manager',
    category: 'Actuarial Systems & Cloud Infrastructure',
    filterGroups: ['all', 'enterprise-delivery'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'Microsoft Azure',
      'Prophet Professional',
      'Group HQ | 18 APAC Offices',
      'IT/Security/Reg/Risk/Legal Gates',
      'Full Production Cutover',
    ],
    overview:
      'Led from the Group Global Office (HQ), delivering full production migration of Prophet Professional actuarial systems across all 18 APAC offices onto Microsoft Azure while clearing formal IT, Security, Regulatory, Risk, and Legal governance gates.',
    blueprintVariant: 'infra-stack',
    topologyLayers: [
      {
        layer: 'ZONE 01',
        label: '18-Office APAC Actuarial Estate (HQ-Led)',
        nodes: ['Group Global Office (HQ)', '18 APAC Offices', 'Prophet Professional Workloads'],
        emphasis: 'light',
        focusSummary:
          'Directed from the Group Global Office (HQ) to inventory local Prophet Professional actuarial workloads, compute requirements, and valuation datasets across all 18 APAC offices.',
      },
      {
        layer: 'ZONE 02',
        label: 'Azure Landing Zone & Multi-Function Governance',
        nodes: [
          'Azure Compute Pools',
          'IT & Security Sign-Off',
          'Regulatory, Risk & Legal Gates',
        ],
        emphasis: 'light',
        focusSummary:
          'Provisions standardized Microsoft Azure compute pools while clearing formal cross-functional IT, Security, Regulatory, Risk, and Legal governance gates prior to regional go-live.',
      },
      {
        layer: 'ZONE 03',
        label: 'Full 18-Office Production Cloud Cutover',
        nodes: ['18 APAC Offices Live on Azure', 'Centralized Actuarial Modeling', 'Audit-Ready Governance'],
        emphasis: 'dark',
        focusSummary:
          'Completes full production migration across all 18 APAC offices onto centralized Microsoft Azure actuarial modeling infrastructure within time, scope, and budget.',
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'Group HQ Baseline Assessment',
        detail: 'Led from Group Global Office (HQ) across all 18 APAC actuarial workloads and local datasets.',
      },
      {
        step: '02',
        title: 'Azure Landing Zone Build',
        detail: 'Provisioned standardized Prophet Professional cloud compute environments on Microsoft Azure.',
      },
      {
        step: '03',
        title: '5-Function Governance Clearance',
        detail: 'Cleared formal IT, Security, Regulatory, Risk, and Legal governance gates plus cross-market UAT.',
      },
      {
        step: '04',
        title: 'Full 18-Office Prod Cutover',
        detail: 'Completed full production migration across all 18 APAC offices within time, scope, and budget.',
      },
    ],
    testimonials: [
      {
        quote:
          'Managed vendors across APAC and business users across 18 markets, removing critical roadblocks and highlighting risks early to deliver within time, scope, and budget.',
        authorRole: 'Enterprise Solutions Architect, Pan-Asian Life Insurance Group',
      },
    ],
    organizationOrEvent: 'Group Global Office (HQ) | 18 APAC Offices',
    highlightMetric: 'HQ-Led Full Production Azure Migration Across All 18 APAC Offices',
  },
  {
    id: 'uk-commercial-licensing',
    title: 'UK Commercial Licensing & AWRS Regulatory Compliance',
    subtitle: 'Premises Licensing, HMRC AWRS & Statutory Due Diligence (Confidential UK Operator)',
    track: 'enterprise-delivery',
    trackLabel: 'Part B: Regulatory Delivery',
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
      'Managed UK local authority Premises Licenses and HMRC AWRS statutory applications for a Confidential UK Operator. Delivered operating schedules, due diligence, and audit trails.',
    blueprintVariant: 'infra-stack',
    topologyLayers: [
      {
        layer: 'ZONE 01',
        label: 'Statutory & Regulatory Baseline',
        nodes: ['Licensing Act 2003', 'HMRC AWRS Criteria', 'Wholesale Supply-Chain Mapping'],
        emphasis: 'light',
        focusSummary:
          'Audits operational models against Licensing Act 2003 obligations, HMRC AWRS statutory criteria, and wholesale supply-chain provenance requirements.',
      },
      {
        layer: 'ZONE 02',
        label: 'Control Framework & Operating Schedules',
        nodes: ['Due Diligence Policies', 'Premises Operating Schedules', 'Audit Evidence Vault'],
        emphasis: 'light',
        focusSummary:
          'Builds verifiable due diligence policies, premises operating schedules, standard operating procedures, and an inspection-ready audit evidence vault.',
      },
      {
        layer: 'ZONE 03',
        label: 'Regulatory Submission & Statutory Sign-Off',
        nodes: ['Local Council Filings', 'HMRC Inspection Clearance', 'Unconditional Licences Granted'],
        emphasis: 'dark',
        focusSummary:
          'Manages formal local council and HMRC authority submissions through inspection clearance to secure unconditional UK Premises Licences and AWRS approval.',
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'Statutory Gap Analysis',
        detail: 'Audited operations against HMRC AWRS and Licensing Act rules.',
      },
      {
        step: '02',
        title: 'Due Diligence Controls',
        detail: 'Engineered supply-chain checks, operating schedules, and SOPs.',
      },
      {
        step: '03',
        title: 'Authority Submissions',
        detail: 'Managed formal filings with local council and HMRC officers.',
      },
      {
        step: '04',
        title: 'Full Licence Sign-Off',
        detail: 'Secured unconditional UK Premises Licence and AWRS approval.',
      },
    ],
    organizationOrEvent: 'Greater London, UK, Confidential UK Commercial & Hospitality Operator',
    highlightMetric: 'Full UK Local Authority & HMRC AWRS Regulatory Approval Secured',
  },
  {
    id: 'global-media-cloud-assessment',
    title: 'Global Cloud Assessment (Assessment Only) | Global Media Network',
    subtitle: 'Azure Cloud Readiness & Capacity Right-Sizing Across 1,000+ Servers (APAC, EMEA & AMER)',
    track: 'enterprise-delivery',
    trackLabel: 'Part B: Cloud Assessment (Assessment Only)',
    role: 'Project Manager, Cloud Assessment',
    category: 'Global Cloud Readiness & Infrastructure Assessment',
    filterGroups: ['all', 'enterprise-delivery', 'agile-advisory'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'Assessment Only Scope',
      'Microsoft Azure',
      '1,000+ Servers (65 Offices)',
      'APAC / EMEA / AMER',
      'Capacity Right-Sizing & FinOps',
    ],
    overview:
      'Directed a global Azure cloud readiness and capacity right-sizing assessment (Assessment Only, pre-migration scope) across 65 offices and 1,000+ servers spanning APAC, EMEA, and AMER, delivering a board-approved target SKU and wave migration blueprint.',
    blueprintVariant: 'infra-stack',
    topologyLayers: [
      {
        layer: 'ZONE 01',
        label: 'APAC, EMEA & AMER Telemetry Discovery (Assessment Only)',
        nodes: ['65 Global Offices', '1,000+ Server Inventory', 'APAC / EMEA / AMER Baselines'],
        emphasis: 'light',
        focusSummary:
          'Collects automated infrastructure telemetry across 65 global offices and 1,000+ servers spanning APAC, EMEA, and AMER to establish utilization baselines strictly under an Assessment Only discovery scope.',
      },
      {
        layer: 'ZONE 02',
        label: 'Dependency & FinOps Capacity Modelling',
        nodes: ['Application Coupling Matrix', 'Latency & Region Mapping', 'Azure SKU Right-Sizing'],
        emphasis: 'light',
        focusSummary:
          'Models cross-application coupling, regional network latency across APAC, EMEA, and AMER, and FinOps target Azure SKUs to eliminate over-provisioning prior to migration.',
      },
      {
        layer: 'ZONE 03',
        label: '6-Region Azure Migration Blueprint (Pre-Migration Handover)',
        nodes: ['6 Cloud Regions', 'Wave Execution Sequencing', 'Board-Approved TCO Blueprint'],
        emphasis: 'dark',
        focusSummary:
          'Synthesizes Assessment Only findings into a sequenced 6-region Azure migration wave blueprint and board-approved total cost of ownership roadmap for downstream migration teams.',
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'APAC, EMEA & AMER Discovery',
        detail: 'Catalogued 1,000+ servers across 65 global offices under an Assessment Only scope.',
      },
      {
        step: '02',
        title: 'Dependency Mapping',
        detail: 'Profiled application coupling, cross-region latency, and peak utilization.',
      },
      {
        step: '03',
        title: 'Azure Right-Sizing Model',
        detail: 'Calculated target Azure SKUs, FinOps TCO, and migration wave sequencing.',
      },
      {
        step: '04',
        title: 'Assessment Blueprint Handover',
        detail: 'Delivered board-approved pre-migration Azure roadmap and readiness scorecard.',
      },
    ],
    organizationOrEvent: 'UK-Led | APAC, EMEA & AMER (Assessment Only)',
    highlightMetric: '1,000+ Servers Assessed Across 65 Offices in APAC, EMEA & AMER (Assessment Only)',
  },
  {
    id: 'microsoft-partner-hybrid-voice',
    title: 'Microsoft Gold Partner Hybrid Cloud & Enterprise Voice Programme (18 Global Mandates)',
    subtitle:
      'O365 Cloud PBX (CCE), High Availability Skype for Business Pools & Global MPLS Voice Rollouts',
    track: 'enterprise-delivery',
    trackLabel: 'Part B: Enterprise Delivery',
    role: 'Project Manager (18 Concurrent Mandates)',
    category: 'Microsoft Hybrid Cloud & Enterprise Voice (18 Mandates)',
    filterGroups: ['all', 'enterprise-delivery', 'agile-advisory'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'O365 Cloud PBX (CCE)',
      'HA SfB / Teams Precursor Pools',
      'SQL Mirroring & F5 Load Balancers',
      'AudioCodes / Sonus / Cisco / Avaya / Mitel / ShoreTel SIP',
      'Global MPLS Voice',
    ],
    overview:
      'Led 18 concurrent O365 Cloud PBX and HA Skype for Business mandates across Big-4, utilities, and banking. Delivered 10-country MPLS (+20% QoS), 163-day 12-city PABX decommissions, 1,000+ user pools, and VXML IVRs.',
    blueprintVariant: 'infra-stack',
    topologyLayers: [
      {
        layer: 'ZONE 01',
        label: 'DMZ F5, Edge & Global MPLS Perimeter',
        nodes: ['Dual F5 Reverse Proxy NAT', 'SfB Edge Server Pools', '10-Country MPLS QoS (+20%)'],
        emphasis: 'light',
        focusSummary:
          'Secures external voice and federation traffic behind dual F5 reverse proxy NAT load balancers, Skype for Business Edge pools, and 10-country MPLS QoS routing (+20% QoS).',
      },
      {
        layer: 'ZONE 02',
        label: 'HA Front-End, Cloud PBX & SQL Mirroring',
        nodes: ['11-Server HA Pools', 'O365 Cloud PBX (CCE x2)', 'SQL 2014 Mirroring + Witness'],
        emphasis: 'light',
        focusSummary:
          'Operates 11-server High Availability Front-End pools, Office 365 Cloud PBX (CCE x2) appliances, and SQL 2014 mirroring with witness servers for resilient enterprise voice.',
      },
      {
        layer: 'ZONE 03',
        label: 'SBC / SIP Trunking & Global Cutovers',
        nodes: [
          'AudioCodes / Sonus E1/T1 SBC',
          'Cisco / Avaya / Mitel / ShoreTel',
          '10-Port VXML IVR & 18 Mandates',
        ],
        emphasis: 'dark',
        focusSummary:
          'Integrates AudioCodes and Sonus E1/T1 SBC gateways with Cisco, Avaya, Mitel, ShoreTel, and 10-port VXML IVRs across 18 concurrent global cutovers.',
      },
    ],
    architectureFlow: [
      {
        step: '01',
        title: 'DMZ F5 & Edge Perimeter',
        detail: 'Dual F5 reverse proxy NAT, Edge pools, and MPLS QoS routing (+20%).',
      },
      {
        step: '02',
        title: 'HA Front-End & SQL Mirror',
        detail: 'Multi-node SfB Front-End pools, CCE appliances, and SQL Witness.',
      },
      {
        step: '03',
        title: 'SBC & SIP Trunking',
        detail: 'AudioCodes/Sonus E1/T1 integration with Cisco, Avaya, Mitel & VXML.',
      },
      {
        step: '04',
        title: '18 Global Cutovers',
        detail: 'Executed zero-downtime migrations across 12 Greater China cities & 10 hubs.',
      },
    ],
    testimonials: [
      {
        quote:
          'Organises and manages complex project pipelines in a highly structured way, keeping cross-functional tasks aligned to schedule across multi-year engagements.',
        authorRole: 'Senior Distributed Systems Engineer, Microsoft Partner Delivery',
      },
    ],
    organizationOrEvent: 'APAC, Greater China, Europe & Americas',
    highlightMetric: '18 Concurrent Enterprise Hybrid Cloud & Global Voice Transformations',
  },
];

export interface DiagnosticScenario {
  id: string;
  scenarioNumber: string;
  shortTitle: string;
  title: string;
  badge: string;
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
    days30:
      'Rapid RAID forensic audit, critical-path re-baselining, vendor accountability reset, and SteerCo governance alignment.',
    days60:
      'Introduce pre-production quality gates, structured agile/hybrid sprint cadences, and cross-functional defect triage across workstreams.',
    days90:
      'Stabilised production cutover, service transition sign-off, and measurable operational turnaround.',
    proof:
      'Track Record Proof: Directed UK-led EOL remediation across UK, Paris, and Romania for a Tier-1 UK Financial Market Infrastructure & Clearing House; rescued a ~HKD$ 100M Hong Kong core Health & General Insurance transformation across Group Operations, India offshore vendor, and Group Security sign-offs; led HQ-level full production migration across 18 APAC offices onto Azure; directed a Global Cloud Assessment (Assessment Only) across 1,000+ servers in APAC, EMEA, and AMER; and delivered 18 concurrent Microsoft Gold Partner hybrid cloud & enterprise voice mandates.',
  },
  {
    id: 'ai-poc-to-prod',
    scenarioNumber: 'Scenario 02',
    shortTitle: 'AI PoC to Governed Production',
    title: 'Moving Generative AI from Fragile Prototype to Schema-Enforced Production',
    badge: 'Applied AI & Agentic Systems',
    days30:
      'Architecture & security review (SC-100 aligned), typed JSON schema design, and model routing selection (Microsoft Foundry SDK, Gemini, ADK 2.0, Gemma).',
    days60:
      'Build and containerize multi-agent workflows on Azure AI, Google Cloud Run, Firebase, or Cloudflare Workers with deterministic validation.',
    days90:
      'Full integration into operational workflows with automated compliance auditing, CI/CD pipelines, and team handover.',
    proof:
      'Engineering Proof: Architected SprintClarify (Gemini 3.8 Flash + React 19), GuardianAI (Gemma 4 + Gemini 3.7 Flash on Cloud Run), CineFact AI (Serverless Video Intelligence), and EchoHire (Gemini 3.1 Pro + 2.5 Live).',
  },
  {
    id: 'ai-coaching-sync',
    scenarioNumber: 'Scenario 03',
    shortTitle: 'AI Studio Sync & Coaching',
    title: 'Rescuing Stalled Prototypes & Synchronizing AI Studio with Production',
    badge: 'AI Coaching & Technical Advisory',
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
    days30:
      'Comprehensive gap analysis across statutory requirements (HMRC AWRS, local authority licensing, or financial market IT risk controls).',
    days60:
      'Prepare operating schedules, due diligence frameworks, multi-jurisdiction compliance mappings, and technical remediation waves.',
    days90:
      'Formal audit trail verification, regulatory authority submission, and 100% on-schedule compliance sign-off.',
    proof:
      'Compliance Proof: Secured full UK Premises License & HMRC AWRS approval for a Confidential UK Commercial & Hospitality Operator, cleared Tier-1 UK Exchange risk gates, and built Dual-Market Compliance Analytics.',
  },
];
