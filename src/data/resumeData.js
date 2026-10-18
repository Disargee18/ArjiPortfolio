/**
 * Resume and Portfolio Data for Argee Boy Paquibot
 */

export const PROFILE = {
  name: 'Argee Boy Paquibot',
  role: 'Innovative Full-Stack Developer | Hackathon Champion | Student Leader',
  location: 'Lapu-Lapu City, Cebu Province',
  phone: '09333211652',
  email: 'argeepaquibotprof@gmail.com',
  linkedin: 'linkedin.com/in/argee-paquibot',
  linkedinUrl: 'https://linkedin.com/in/argee-paquibot',
  github: 'github.com/Disargee18',
  githubUrl: 'https://github.com/Disargee18',
  summary:
    'Innovative aspiring Full-Stack Developer and proven student leader, specializing in building secure web applications, high-performance user interfaces, and decentralized digital solutions. Experienced in architecting robust database schemas, smart contracts, real-time data synchronizations, and responsive frontends using React, Next.js, Tailwind CSS, and Supabase. Proven to leverage technical excellence and exceptional communication skills to deliver immediate value within an engineering team.',
};

export const EDUCATION = {
  degree: 'BS Information Technology',
  period: '2023 - Present',
  institution: 'University of Cebu Lapu-Lapu and Mandaue',
  gwa: '1.3',
  honors: ["Dean's Lister", 'Student Leader / SBO'],
  description:
    'Pursuing Bachelor of Science in Information Technology with consistent top academic standing (GWA 1.3), active student body leadership, and champion representation in regional and national hackathons.',
};

export const SKILL_CATEGORIES = [
  {
    name: 'Core Languages',
    badge: 'CS Foundations',
    icon: '💻',
    skills: [
      { name: 'JavaScript (ES6+)', level: 96 },
      { name: 'TypeScript', level: 90 },
      { name: 'Java (OOP/Networking)', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'C++', level: 82 },
      { name: 'C', level: 80 },
      { name: 'PHP', level: 82 },
      { name: 'SQL', level: 90 },
      { name: 'HTML5 & CSS3', level: 98 },
    ],
  },
  {
    name: 'Frontend Engineering',
    badge: 'Modern UI/UX',
    icon: '🖥️',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js (App Router)', level: 92 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Responsive Web Design', level: 95 },
      { name: 'Component Architecture', level: 92 },
      { name: 'State Management', level: 90 },
      { name: 'Neubrutalism & Modern UI', level: 90 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    name: 'Backend & Cloud',
    badge: 'Scalable Systems',
    icon: '🗄️',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'Supabase (Auth & Storage)', level: 94 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 86 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'TCP/UDP Sockets', level: 84 },
      { name: 'JWT & Auth Workflows', level: 92 },
      { name: 'Row-Level Security (RLS)', level: 92 },
    ],
  },
  {
    name: 'Tools, DevOps & AI',
    badge: 'Production Ready',
    icon: '🤖',
    skills: [
      { name: 'Git & GitHub', level: 94 },
      { name: 'Vercel Deployment', level: 90 },
      { name: 'Generative AI & LLM APIs', level: 92 },
      { name: 'Claude Code & Antigravity', level: 94 },
      { name: 'VS Code & Linux CLI', level: 88 },
      { name: 'Selenium Automation', level: 82 },
      { name: 'Postman', level: 88 },
    ],
  },
  {
    name: 'Blockchain & Web3',
    badge: 'Smart Contracts',
    icon: '⛓️',
    skills: [
      { name: 'CashScript', level: 88 },
      { name: 'Smart Contracts', level: 86 },
      { name: 'Bitcoin Cash', level: 85 },
      { name: 'CashTokens Integration', level: 88 },
    ],
  },
  {
    name: 'Leadership & Soft Skills',
    badge: 'Hackathon Champion',
    icon: '🤝',
    skills: [
      { name: 'Project Leadership', level: 95 },
      { name: 'Technical Pitching (Hustler Award)', level: 96 },
      { name: 'Rapid Prototyping', level: 94 },
      { name: 'Public Speaking', level: 90 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'seekr',
    title: 'Seekr',
    award: '12th UC ICT Congress Hackathon — 2nd Place Winner',
    awardType: 'silver',
    category: 'Code Intelligence & Repository Indexing',
    date: '01/2026',
    url: 'http://argee.dev/seekr',
    github: 'https://github.com/Disargee18',
    summary:
      'Intelligent code repository indexing and discovery platform that enables developers to search, analyze, and trace complex source code dependencies across multi-file codebases.',
    bullets: [
      'Built an intelligent code repository indexing and discovery platform that enables developers to search, analyze, and trace complex source code dependencies across multi-file codebases.',
      'Engineered fast client-side state filtering and optimized frontend rendering to display search results with instant visual feedback and syntax highlighting.',
      'Designed an intuitive UI/UX tailored for developer navigation, ensuring seamless inspection of repository file structures and function calls.',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Syntax Highlighting', 'REST API'],
    icon: '🔍',
  },
  {
    id: 'restart',
    title: 'ReStart - Blockchain Credentials',
    award: 'Paytaca Cashscript 3.0 Hackathon — Hackathon Champion (₱75,000 Grand Prize)',
    awardType: 'gold',
    category: 'Decentralized Milestone Verification on Bitcoin Cash',
    date: '02/2026',
    url: 'http://argee.dev/restart',
    github: 'https://github.com/Disargee18',
    summary:
      'Decentralized credential verification platform that writes verified rehabilitation milestones permanently onto the Bitcoin Cash blockchain using CashScript smart contracts. Won overall Hackathon Champion and the ₱75,000 grand prize.',
    bullets: [
      'Crowned overall Hackathon Champion at the Paytaca Cashscript 3.0 Hackathon, securing the ₱75,000 top cash prize against competing developer teams nationwide.',
      'Developed a decentralized credential verification platform that writes verified rehabilitation milestones permanently onto the Bitcoin Cash blockchain using CashScript smart contracts.',
      'Engineered tamper-proof, publicly accessible credential links that allow instant third-party verification directly against the blockchain without middleman dependencies or login barriers.',
      'Integrated CashTokens and CashScript contracts within a full-stack Next.js and Supabase application to ensure reliable transaction signing and immutable data storage.',
    ],
    tech: ['CashScript', 'Bitcoin Cash', 'CashTokens', 'Next.js', 'Supabase', 'Smart Contracts'],
    icon: '🪙',
  },
  {
    id: 'musika-ai',
    title: 'Musika AI',
    award: 'Full-Stack AI Music Streaming Platform',
    awardType: 'special',
    category: 'AI Sentiment-Driven Music Streaming with MCP',
    date: '2025 - 2026',
    url: 'http://argee.dev/musika-ai',
    github: 'https://github.com/Disargee18',
    summary:
      'Spotify-inspired streaming application featuring an AI-assisted curation engine that automatically generates dynamic playlists based on user sentiment and mood inputs.',
    bullets: [
      'Architected a Spotify-inspired streaming application featuring an AI-assisted curation engine that automatically generates dynamic playlists based on user sentiment and mood inputs.',
      'Implemented Model Context Protocol (MCP) integrations to orchestrate context-aware chatbot interactions directly within the music player interface.',
      'Secured user profile data and playlist records using Supabase Authentication alongside granular Row-Level Security (RLS) database policies.',
    ],
    tech: ['Next.js', 'Supabase Auth', 'Row-Level Security', 'MCP', 'OpenAI', 'Tailwind CSS'],
    icon: '🎵',
  },
  {
    id: 'psits-voting',
    title: 'PSITS Voting System',
    award: 'Departmental Real-Time Election Web App',
    awardType: 'special',
    category: 'High-Concurrency Real-Time E-Voting',
    date: '2025 - 2026',
    url: 'http://argee.dev/psits-voting',
    github: 'https://github.com/Disargee18',
    summary:
      'Departmental election platform leveraging React and Supabase for real-time ballot casting and vote tracking with strict election integrity.',
    bullets: [
      'Spearheaded the development of a departmental election platform leveraging React and Supabase for real-time ballot casting and vote tracking.',
      'Optimized client-side state management and database subscriptions to stream low-latency live election tallies and visual percentage updates.',
      'Ensured strict election integrity by enforcing unique voter authentication tokens and database-level constraints to eliminate duplicate voting.',
    ],
    tech: ['React', 'Supabase Realtime', 'WebSockets', 'PostgreSQL Constraints', 'State Management'],
    icon: '🗳️',
  },
];

export const ACHIEVEMENTS = [
  {
    id: 'restart-1st',
    title: 'Hackathon Champion',
    project: 'ReStart - Blockchain Rehabilitation Credentials',
    competition: 'Paytaca Cashscript 3.0 Hackathon',
    date: 'February 2026',
    rank: 'Champion (₱75K Prize)',
    badge: '₱75K CHAMPION',
    icon: '🥇',
    color: '#ffd700',
    description:
      'Crowned overall Hackathon Champion out of competing teams nationwide at the Paytaca Cashscript 3.0 Hackathon, winning the ₱75,000 top cash prize. Built a production-grade decentralized credential verification platform on Bitcoin Cash with CashScript smart contracts and CashTokens.',
    highlights: [
      'Awarded overall Hackathon Champion & ₱75,000 grand prize',
      'CashScript smart contract execution on Bitcoin Cash',
      'Tamper-proof public credential verification without intermediaries',
      'Flawless live technical demonstration and pitching to industry judges',
    ],
  },
  {
    id: 'uclm-hackathon-champ',
    title: 'Hackathon Champion',
    project: 'Campus Innovation Initiative',
    competition: 'UCLM Hackathon Competition',
    date: 'January 2026',
    rank: 'Champion',
    badge: 'GRAND WINNER',
    icon: '🏆',
    color: '#e6b800',
    description:
      'Awarded overall Hackathon Champion at University of Cebu Lapu-Lapu and Mandaue for outstanding technical architecture, rapid delivery, and problem-solving excellence under tight deadlines.',
    highlights: [
      'Recognized for rapid prototyping under extreme time constraints',
      'Robust full-stack architecture with production-level security',
      'Unanimous judges vote for technical execution',
    ],
  },
  {
    id: 'uclm-best-pitcher',
    title: 'Best Pitcher (Hustler Award)',
    project: 'Individual Recognition',
    competition: 'UCLM Hackathon Competition',
    date: 'January 2026',
    rank: 'Special Award',
    badge: 'BEST PITCH',
    icon: '🎤',
    color: '#ff69b4',
    description:
      'Conferred the prestigious Hustler Award for delivering the most articulate, compelling, and high-impact technical pitch and live demonstration.',
    highlights: [
      'Articulated complex technical concepts into clear business value',
      'Flawless live product walkthrough under rigorous judge Q&A',
      'Distinguished communication and leadership on stage',
    ],
  },
  {
    id: 'seekr-2nd',
    title: '2nd Place Winner',
    project: 'Seekr - Intelligent Code Discovery',
    competition: '12th UC ICT Congress Hackathon',
    date: 'January 2026',
    rank: '2nd',
    badge: '2ND PLACE',
    icon: '🥈',
    color: '#c0c0c0',
    description:
      'Awarded 2nd Place in the 12th UC ICT Congress Hackathon for creating an intelligent code repository indexing and dependency visualization platform.',
    highlights: [
      'Multi-file codebase dependency tracking and indexing',
      'High-performance client-side state filtering with syntax highlighting',
      'Developer-first UX applauded by the evaluation panel',
    ],
  },
  {
    id: 'psite-3rd',
    title: '3rd Place Winner',
    project: 'Lightning Pitch Competition',
    competition: 'PSITE ICT Congress',
    date: 'January 2026',
    rank: '3rd',
    badge: '3RD PLACE',
    icon: '🥉',
    color: '#cd7f32',
    description:
      'Won 3rd place in the high-stakes PSITE ICT Congress Lightning Pitch, competing against regional delegates presenting real-time election software architecture.',
    highlights: [
      'High-speed 3-minute technical pitch and value proposition',
      'Showcased real-time WebSocket state management and election integrity',
      'Recognized by Philippine Society of Information Technology Educators (PSITE)',
    ],
  },
];
