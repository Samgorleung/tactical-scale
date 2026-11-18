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

export interface ArchitectureStage {
  step: string;
  title: string;
  detail: string;
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
  architectureFlow: ArchitectureStage[];
  highlightMetric?: string;
  organizationOrEvent?: string;
  videoUrl?: string;
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
    id: 'production-ai-coaching',
    title: 'Production AI Coaching & Environment Synchronization',
    subtitle: 'AI Studio to Production CI/CD & Stakeholder Enablement',
    track: 'ai-systems',
    trackLabel: 'Part A: Technical Advisory',
    role: 'Principal Consultant & Technical Advisor',
    collaborator: 'Technical Engineering Partner',
    category: 'Technical Advisory & Production Support',
    filterGroups: ['all', 'ai-systems', 'agile-advisory'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Google AI Studio', 'Cloud Run', 'Production CI/CD Workflows'],
    overview:
      'Principal advisory transitioning fragile Google AI Studio prototypes into stable Cloud Run production pipelines. Resolves staging drift and enables internal self-service maintenance.',
    architectureFlow: [
      {
        step: '01',
        title: 'Prototype Drift Audit',
        detail: 'Captures AI Studio prompts, secrets, and staging discrepancies.',
      },
      {
        step: '02',
        title: 'Schema & Prompt Sync',
        detail: 'Standardizes model configs, parameters, and deterministic outputs.',
      },
      {
        step: '03',
        title: 'Cloud Run CI/CD',
        detail: 'Automates container builds, environment parity, and release gates.',
      },
      {
        step: '04',
        title: 'Self-Service Handover',
        detail: 'Delivers production runbooks and hands-on team coaching.',
      },
    ],
    highlightMetric: 'Staging-to-Production Prompt Sync & Self-Service Handover',
  },
  {
    id: 'ai-festival-card-maker',
    title: 'AI Festival Card Maker',
    subtitle: 'Culturally Tailored Generative Greeting Application',
    track: 'ai-systems',
    trackLabel: 'Part A: Applied AI Build',
    role: 'Co-Creator & Lead Architect',
    collaborator: 'Technical Engineering Partner',
    category: 'Consumer Web Application',
    filterGroups: ['all', 'ai-systems', 'multimodal-web'],
    techOrSectorLabel: 'Tech Stack',
    techStack: ['Gemini 2.5 Flash', 'HTML5 Canvas', 'Tailwind CSS'],
    overview:
      'High-speed web application generating culturally tailored greeting cards across global festivals while preserving subject likeness. Uses automated HTML5 canvas compositing.',
    architectureFlow: [
      {
        step: '01',
        title: 'Subject & Festival Input',
        detail: 'Accepts user portrait photo and selected cultural celebration theme.',
      },
      {
        step: '02',
        title: 'Gemini 2.5 Generation',
        detail: 'Preserves subject facial identity while styling festival imagery.',
      },
      {
        step: '03',
        title: 'HTML5 Canvas Compositor',
        detail: 'Renders typography, framing, and layout client-side at low latency.',
      },
      {
        step: '04',
        title: 'Instant Card Export',
        detail: 'Produces high-resolution downloadable greeting cards for sharing.',
      },
    ],
    highlightMetric: 'Subject-Likeness Preservation & Automated HTML5 Canvas Compositing',
  },

  // Part B: Enterprise Transformation & Regulatory Delivery
  {
    id: 'uk-market-infrastructure',
    title: 'Tier-1 UK Financial Market Infrastructure & Clearing House',
    subtitle: 'Financial Market Infrastructure & Clearing Transformation',
    track: 'enterprise-delivery',
    trackLabel: 'Part B: Enterprise Delivery',
    role: 'Senior IT Project Manager',
    category: 'Financial Market Infrastructure & Clearing Operations',
    filterGroups: ['all', 'enterprise-delivery', 'regtech-security', 'agile-advisory'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'Financial Market Infrastructure',
      '300+ EOL Server Remediation',
      'Firewall Rule Hardening',
      'Executive Risk Forums',
      'Vendor Security Controls',
    ],
    overview:
      'Chaired weekly executive risk forums across 300+ EOL servers for a Tier-1 UK Financial Market Infrastructure & Clearing House. Directed firewall hardening and security controls to clear 100% of audit milestones.',
    architectureFlow: [
      {
        step: '01',
        title: '300+ EOL Estate Audit',
        detail: 'Mapped legacy server dependencies, firewall exposures, and vendors.',
      },
      {
        step: '02',
        title: 'Executive Risk Forums',
        detail: 'Chaired weekly RAID reviews with Operations and Risk Directors.',
      },
      {
        step: '03',
        title: 'Firewall & Path Hardening',
        detail: 'Executed multi-path server remediation and strict security gates.',
      },
      {
        step: '04',
        title: '100% Audit Clearance',
        detail: 'Delivered zero-breach service transition on regulatory schedule.',
      },
    ],
    organizationOrEvent: 'United Kingdom',
    highlightMetric: '100% On-Schedule Governance Gate & Audit Control Compliance',
  },
  {
    id: 'multinational-health-insurer',
    title: 'Global Multinational Health & General Insurer',
    subtitle: 'End-to-End Legacy Claims Modernization & Digital Self-Service',
    track: 'enterprise-delivery',
    trackLabel: 'Part B: Enterprise Delivery',
    role: 'Project Manager',
    category: 'Insurance & Healthcare Financial Services',
    filterGroups: ['all', 'enterprise-delivery', 'agile-advisory'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'Microsoft Azure Migration',
      '1.5M+ Policy Records',
      'DevSecOps & Pre-Prod Staging',
      'Bancassurance API Portals',
      '80% Workflow Automation',
    ],
    overview:
      'Directed 4 workstreams (40+ specialists, 1.5M+ records) migrating core claims to Azure with DevSecOps staging and bancassurance APIs. Achieved ~30% IT cost reduction and 80% claims automation.',
    architectureFlow: [
      {
        step: '01',
        title: '4-Workstream Reset',
        detail: 'Aligned 40+ specialists and 1.5M+ policy records onto unified plan.',
      },
      {
        step: '02',
        title: 'DevSecOps Pre-Prod',
        detail: 'Introduced pre-production staging gates and automated QA.',
      },
      {
        step: '03',
        title: 'Azure & API Portals',
        detail: 'Migrated core claims workloads to Azure with bancassurance APIs.',
      },
      {
        step: '04',
        title: '80% Claims Automation',
        detail: 'Cut IT operational costs ~30% and automated 80% of manual claims.',
      },
    ],
    organizationOrEvent: 'Hong Kong / APAC',
    highlightMetric: '~30% IT Cost Reduction & 80% Claims Workflow Automation (1.5M+ Records)',
  },
  {
    id: 'pan-asian-life-insurer',
    title: 'Pan-Asian Life Insurance Group (18 Regional Markets)',
    subtitle: 'Prophet Professional Actuarial Migration to Microsoft Azure',
    track: 'enterprise-delivery',
    trackLabel: 'Part B: Enterprise Delivery',
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
      'Led regional migration of Prophet Professional actuarial systems across 18 offices onto Microsoft Azure. Coordinated security compliance, UAT, and multi-market cutovers.',
    architectureFlow: [
      {
        step: '01',
        title: '18-Market Assessment',
        detail: 'Inventoried local actuarial compute workloads and compliance rules.',
      },
      {
        step: '02',
        title: 'Azure Compute Provision',
        detail: 'Built standardized Prophet Professional environments on Azure.',
      },
      {
        step: '03',
        title: 'Cross-Region UAT',
        detail: 'Validated security compliance and actuarial parity across offices.',
      },
      {
        step: '04',
        title: '18-Office Cutover',
        detail: 'Completed synchronized production cutover across Asian markets.',
      },
    ],
    organizationOrEvent: '18 Regional Offices, Multiple Asian Markets',
    highlightMetric: '18-Office Regional Actuarial Cloud Migration to Microsoft Azure',
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
    title: 'Global Media & Digital Communications Network (UK)',
    subtitle: 'Global Azure Cloud Readiness & Capacity Right-Sizing Assessment',
    track: 'enterprise-delivery',
    trackLabel: 'Part B: Enterprise Delivery',
    role: 'Project Manager, Cloud Assessment',
    category: 'Global Cloud Readiness & Infrastructure Assessment',
    filterGroups: ['all', 'enterprise-delivery', 'agile-advisory'],
    techOrSectorLabel: 'Sector & Mandate',
    techStack: [
      'Microsoft Azure',
      '65 Global Offices',
      '6 Cloud Regions',
      '1,000+ Servers',
      'Capacity Right-Sizing',
    ],
    overview:
      'Directed a global Azure cloud readiness and right-sizing assessment across 65 offices and 6 regions covering 1,000+ servers. Delivered an executive migration roadmap.',
    architectureFlow: [
      {
        step: '01',
        title: '65-Site Discovery',
        detail: 'Catalogued 1,000+ servers across global offices and 6 regions.',
      },
      {
        step: '02',
        title: 'Dependency Mapping',
        detail: 'Profiled application coupling, network latency, and peak load.',
      },
      {
        step: '03',
        title: 'Azure Right-Sizing Model',
        detail: 'Calculated target Azure SKUs, FinOps TCO, and wave sequencing.',
      },
      {
        step: '04',
        title: 'Executive Cloud Roadmap',
        detail: 'Delivered board-approved Azure migration blueprint.',
      },
    ],
    organizationOrEvent: 'London, UK & 6 Global Cloud Regions',
    highlightMetric: '1,000+ Servers Assessed Across 65 Offices & 6 Cloud Regions',
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
      'Track Record Proof: Directed complex transformation and cloud migration workstreams across Tier-1 UK Financial Market Infrastructure & Clearing House, Global Multinational Health & General Insurer, Pan-Asian Life Insurance Group (18-office Prophet Professional migration to Azure), Global Media & Digital Communications Network (65 offices, 6 regions, 1,000+ servers), and 18 concurrent Microsoft Gold Partner hybrid cloud & enterprise voice mandates.',
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
