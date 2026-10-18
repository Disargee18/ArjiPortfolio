import { PROFILE, EDUCATION, SKILL_CATEGORIES, PROJECTS } from '../data/resumeData';

export const INTRO_MESSAGE = {
  id: 'intro',
  sender: 'smiley',
  mood: 'happy',
  text: "Hi! I'm Smiley, your assistant. I'm here to show you around Argee's desktop and answer questions about his projects, skills, and hackathons. (Keep questions relevant, or prepare for some sass!)",
  actions: [
    { label: '🚀 Take a Tour', actionType: 'tour_start' },
    { label: '💼 Projects', actionType: 'open_app', target: 'projects' },
    { label: '🏆 Achievements', actionType: 'open_app', target: 'achievements' },
    { label: '💻 Skills', actionType: 'query', query: 'What skills does Argee have?' },
    { label: '📬 Contact', actionType: 'open_app', target: 'mail' },
  ],
};

export const TOUR_STEPS = [
  {
    step: 1,
    targetApp: 'about',
    mood: 'speaking',
    text: "First stop: **About Me**! Here you'll find Argee's background, education at University of Cebu LM (consistent Dean's Lister, GWA 1.3), student leadership, and full-stack core competencies.",
    actions: [
      { label: 'Next: Projects ➡️', actionType: 'tour_next', nextStep: 2 },
      { label: 'Open About Window', actionType: 'open_app', target: 'about' },
      { label: 'End Tour', actionType: 'tour_end' },
    ],
  },
  {
    step: 2,
    targetApp: 'projects',
    mood: 'happy',
    text: "Next up: **Projects Explorer**! Modeled after Internet Explorer 3.0. Argee has built high-impact software like **Seekr** (Code Intelligence), **CashHive** (Decentralized Microtasks on Bitcoin Cash), and **SwiftAid** (Offline disaster communications).",
    actions: [
      { label: 'Next: Hackathons ➡️', actionType: 'tour_next', nextStep: 3 },
      { label: 'Open Projects Window', actionType: 'open_app', target: 'projects' },
      { label: 'End Tour', actionType: 'tour_end' },
    ],
  },
  {
    step: 3,
    targetApp: 'achievements',
    mood: 'proud',
    text: "Check out the trophy room in **Achievements**! Argee was crowned overall **Hackathon Champion (winning the ₱75,000 Grand Prize)** at the **Paytaca Cashscript 3.0 Hackathon** for ReStart, won **2nd Place at the 12th UC ICT Congress Hackathon** for Seekr, and earned the prestigious **Hustler Award** for top-tier technical pitching.",
    actions: [
      { label: 'Next: Contact ➡️', actionType: 'tour_next', nextStep: 4 },
      { label: 'Open Achievements', actionType: 'open_app', target: 'achievements' },
      { label: 'End Tour', actionType: 'tour_end' },
    ],
  },
  {
    step: 4,
    mood: 'happy',
    text: "Finally, need to get in touch? You can reach Argee directly via email or connect on LinkedIn and GitHub. You can also ask me any specific question anytime!",
    actions: [
      { label: 'Done Tour 🎉', actionType: 'tour_end' },
    ],
  },
];

const SARCASTIC_RESPONSES = [
  "Does this look like Google Search to you? I'm trapped inside a 1995 desktop with 16MB of RAM! Ask me about Argee's projects before my circuits fry.",
  "Error 404: Relevance not found. Look at me, I'm a floating ball smiley. You think I know about that? Ask me about Argee's hackathon wins instead!",
  "Fascinating inquiry. Truly. Unfortunately, my contract strictly covers Argee Boy Paquibot's resume, skills, and projects. Try asking something useful!",
  "I could answer that... but then who's going to tell you about Argee's 2nd place win at the 12th UC ICT Congress Hackathon? Ask about his projects!",
  "Did I stutter when I said 'I'm Smiley, your assistant for this portfolio'? If it's not about Argee, I basically roll my eyes. Next question!",
  "Consulting my vintage 1.44MB floppy disk... Nope, zero records found about that. How about checking out Argee's code repository in 'Projects Explorer'?",
  "I'm programmed to brag about Argee's React and Supabase skills, not debate that! Want me to open his About Me window for you?",
  "Hold on, let me dial up my 56k modem to care... *beep boop screech*... disconnected. Ask something about Argee's portfolio!",
];

export function resolveQuery(rawQuery, currentTourStep = 0) {
  const query = rawQuery.trim().toLowerCase();

  // Empty check
  if (!query) {
    return {
      mood: 'sarcastic',
      text: "You didn't type anything! Even my 1995 dial-up connection expected at least one character.",
      actions: [
        { label: '🚀 Take a Tour', actionType: 'tour_start' },
        { label: '💼 Projects', actionType: 'open_app', target: 'projects' },
      ],
    };
  }

  // 1. Tour intents
  if (
    query.includes('tour') ||
    query.includes('guide') ||
    query.includes('show me around') ||
    query.includes('walkthrough') ||
    query.includes('start tour')
  ) {
    return {
      mood: 'happy',
      isTour: true,
      tourStep: 1,
      ...TOUR_STEPS[0],
    };
  }

  // 2. Greetings
  if (
    query === 'hi' ||
    query === 'hello' ||
    query === 'hey' ||
    query.startsWith('hello') ||
    query.startsWith('hi ') ||
    query.includes('who are you') ||
    query.includes('what are you')
  ) {
    return {
      mood: 'happy',
      text: "I'm Smiley, your assistant! I live inside Argee's Windows 95 desktop. You can ask me about his software projects, technical skills, hackathon awards, or how to get in touch. (Just keep it relevant!)",
      actions: [
        { label: '🚀 Start Tour', actionType: 'tour_start' },
        { label: '💼 Top Projects', actionType: 'open_app', target: 'projects' },
        { label: '🏆 Awards', actionType: 'open_app', target: 'achievements' },
      ],
    };
  }

  // 3. Projects intents
  if (
    query.includes('project') ||
    query.includes('seekr') ||
    query.includes('cashhive') ||
    query.includes('swiftaid') ||
    query.includes('build') ||
    query.includes('portfolio') ||
    query.includes('apps') ||
    query.includes('work')
  ) {
    if (query.includes('seekr')) {
      const seekr = PROJECTS.find((p) => p.id === 'seekr') || PROJECTS[0];
      return {
        mood: 'proud',
        text: `**Seekr** is Argee's award-winning Code Intelligence & Repository Indexing platform! It took **2nd Place at the 12th UC ICT Congress Hackathon**. It indexes multi-file repositories for semantic dependency analysis.`,
        actions: [
          { label: '🌐 Open Projects Explorer', actionType: 'open_app', target: 'projects' },
          { label: '🏆 View Hackathon Award', actionType: 'open_app', target: 'achievements' },
        ],
      };
    }

    if (query.includes('cashhive')) {
      return {
        mood: 'proud',
        text: `**CashHive** is a decentralized microtask platform leveraging Bitcoin Cash smart contracts and CashTokens for instant trustless bounties and payouts!`,
        actions: [
          { label: '🌐 Open Projects Explorer', actionType: 'open_app', target: 'projects' },
        ],
      };
    }

    if (query.includes('swiftaid')) {
      return {
        mood: 'speaking',
        text: `**SwiftAid** is a resilient offline-first emergency coordination network for disaster relief operations with mesh syncing and resource routing.`,
        actions: [
          { label: '🌐 Open Projects Explorer', actionType: 'open_app', target: 'projects' },
        ],
      };
    }

    return {
      mood: 'proud',
      text: `Argee has built several standout applications: **Seekr** (Code Intelligence - Hackathon 2nd Place), **CashHive** (Web3 on Bitcoin Cash), and **SwiftAid** (Offline Disaster Response). Want me to open the Projects Explorer?`,
      actions: [
        { label: '🌐 Open Projects Explorer', actionType: 'open_app', target: 'projects' },
        { label: '🏆 Hackathon Awards', actionType: 'open_app', target: 'achievements' },
      ],
    };
  }

  // 4. Skills & Tech Stack intents
  if (
    query.includes('skill') ||
    query.includes('tech') ||
    query.includes('stack') ||
    query.includes('react') ||
    query.includes('next') ||
    query.includes('backend') ||
    query.includes('frontend') ||
    query.includes('database') ||
    query.includes('supabase') ||
    query.includes('language')
  ) {
    return {
      mood: 'speaking',
      text: `Argee is a versatile Full-Stack Engineer proficient in **JavaScript (ES6+), TypeScript, Java, Python, C++, C, PHP, and SQL**. On the frontend, he specializes in **React.js, Next.js (App Router), Tailwind CSS, and Modern UI/UX**, paired with **Node.js, Express, Supabase, PostgreSQL, MySQL, and REST/Sockets** on the backend. He also builds Web3 apps with **CashScript & Smart Contracts**, and leverages **Claude Code & Antigravity, LLM APIs, and Vercel**!`,
      actions: [
        { label: '👤 Open About Me & Skills', actionType: 'open_app', target: 'about' },
        { label: '💼 View Projects', actionType: 'open_app', target: 'projects' },
      ],
    };
  }

  // 5. Hackathon & Awards intents
  if (
    query.includes('award') ||
    query.includes('hackathon') ||
    query.includes('achievement') ||
    query.includes('honor') ||
    query.includes('troph') ||
    query.includes('win') ||
    query.includes('contest') ||
    query.includes('hustler')
  ) {
    return {
      mood: 'proud',
      text: `Argee is a proven **Hackathon Champion**! He won the **₱75,000 Grand Prize as Hackathon Champion at the Paytaca Cashscript 3.0 Hackathon** with ReStart, took **2nd Place at the 12th UC ICT Congress Hackathon** with Seekr, and earned the **Hustler Award** for exceptional technical pitching and product leadership.`,
      actions: [
        { label: '🏆 Open Achievements Window', actionType: 'open_app', target: 'achievements' },
        { label: '🌐 See Seekr in Projects', actionType: 'open_app', target: 'projects' },
      ],
    };
  }

  // 6. Resume / CV intents
  if (
    query.includes('resume') ||
    query.includes('cv') ||
    query.includes('curriculum vitae')
  ) {
    return {
      mood: 'happy',
      text: `You can view and download Argee's official PDF resume right now! Just open **resume.pdf** on the desktop. You can view the original PDF, read the formatted sheet, print, or download it directly!`,
      actions: [
        { label: '📄 Open resume.pdf', actionType: 'open_app', target: 'resume' },
        { label: '👤 View About Me', actionType: 'open_app', target: 'about' },
      ],
    };
  }

  // 7. Education / Who is Argee / Background
  if (
    query.includes('who is argee') ||
    query.includes('education') ||
    query.includes('school') ||
    query.includes('college') ||
    query.includes('university') ||
    query.includes('degree') ||
    query.includes('gwa') ||
    query.includes('bio') ||
    query.includes('about')
  ) {
    return {
      mood: 'speaking',
      text: `**${PROFILE.name}** is an innovative Full-Stack Developer and student leader currently pursuing his **${EDUCATION.degree}** at the **${EDUCATION.institution}** with an outstanding **${EDUCATION.gwa} GWA**, recognized as a consistent Dean's Lister.`,
      actions: [
        { label: '👤 Open About Me Window', actionType: 'open_app', target: 'about' },
        { label: '📬 Contact Argee', actionType: 'open_app', target: 'mail' },
      ],
    };
  }

  // 7. Contact / Hire / Email intents
  if (
    query.includes('contact') ||
    query.includes('email') ||
    query.includes('hire') ||
    query.includes('reach') ||
    query.includes('message') ||
    query.includes('github') ||
    query.includes('linkedin') ||
    query.includes('phone')
  ) {
    return {
      mood: 'happy',
      text: `You can reach Argee directly via email at **${PROFILE.email}**, connect on LinkedIn (${PROFILE.linkedinUrl}), or check out his code on GitHub (${PROFILE.githubUrl}).`,
      actions: [
        { label: '📧 Send Email', actionType: 'open_link', target: `mailto:${PROFILE.email}` },
        { label: '🐙 Argee on GitHub', actionType: 'open_link', target: PROFILE.githubUrl },
        { label: '💼 Argee on LinkedIn', actionType: 'open_link', target: PROFILE.linkedinUrl },
      ],
    };
  }

  // 8. Desktop / Navigation help
  if (
    query.includes('how to use') ||
    query.includes('navigate') ||
    query.includes('windows 95') ||
    query.includes('desktop') ||
    query.includes('how do i') ||
    query.includes('help')
  ) {
    return {
      mood: 'speaking',
      text: "Just like real Windows 95: **double-click** desktop icons to open apps, drag window titlebars to move them, click the **Start button** in the bottom-left for quick options, or ask me and I'll open them for you!",
      actions: [
        { label: '🚀 Start Tour', actionType: 'tour_start' },
        { label: '🌐 Open Projects', actionType: 'open_app', target: 'projects' },
        { label: '👤 Open About', actionType: 'open_app', target: 'about' },
      ],
    };
  }

  // 9. Compliments / Easter eggs
  if (
    query.includes('cool') ||
    query.includes('awesome') ||
    query.includes('love') ||
    query.includes('good job') ||
    query.includes('nice') ||
    query.includes('cute')
  ) {
    return {
      mood: 'happy',
      text: "Why thank you! I take great pride in my 16-color aesthetic and pixel-shaded curves. Now go check out Argee's hackathon projects!",
      actions: [
        { label: '💼 Show Me Projects', actionType: 'open_app', target: 'projects' },
      ],
    };
  }

  // 10. OFF-TOPIC / IRRELEVANT -> SARCASTIC RESPONSE!
  const randomSarcasm =
    SARCASTIC_RESPONSES[Math.floor(Math.random() * SARCASTIC_RESPONSES.length)];

  return {
    mood: 'sarcastic',
    text: randomSarcasm,
    actions: [
      { label: '🚀 Take a Tour', actionType: 'tour_start' },
      { label: '💼 Projects Explorer', actionType: 'open_app', target: 'projects' },
      { label: '🏆 Hackathon Awards', actionType: 'open_app', target: 'achievements' },
      { label: '💻 Tech Skills', actionType: 'open_app', target: 'about' },
    ],
  };
}
