export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  githubUrl: string;
  iconName: 'UserCheck' | 'Calculator' | 'CreditCard' | 'GraduationCap';
  category: string;
  learningHighlights: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'voter-eligibility',
    title: 'Voter Eligibility Checker',
    shortDesc: 'A simple Python-based application that checks whether a person is eligible to vote based on their age.',
    fullDesc: 'Designed as a foundational Python project to practice conditional logic, input validation, and user feedback. It checks whether an applicant meets the legal voting age requirement (18+) and handles invalid inputs gracefully.',
    technologies: ['Python', 'Conditionals', 'Input Handling', 'CLI'],
    githubUrl: 'https://github.com/Logeshrta1211',
    iconName: 'UserCheck',
    category: 'Python Logic',
    learningHighlights: [
      'Mastered if-elif-else branch logic and relational operators',
      'Implemented edge-case checking for non-numeric and negative inputs',
      'Structured clear terminal feedback for user queries'
    ]
  },
  {
    id: 'calculator',
    title: 'Calculator',
    shortDesc: 'A beginner-friendly calculator project designed to perform basic arithmetic operations.',
    fullDesc: 'A clean arithmetic utility built in Python that takes two numeric operands and allows the user to choose addition, subtraction, multiplication, or division with division-by-zero safeguards.',
    technologies: ['Python', 'Arithmetic Operations', 'Functions', 'Error Handling'],
    githubUrl: 'https://github.com/Logeshrta1211',
    iconName: 'Calculator',
    category: 'Utility Script',
    learningHighlights: [
      'Encapsulated arithmetic functions with modular definitions',
      'Handled ZeroDivisionError to prevent program crashes',
      'Created a loop-based menu for continuous multi-step calculation'
    ]
  },
  {
    id: 'atm-management',
    title: 'ATM Management System',
    shortDesc: 'A Python-based beginner project that simulates basic ATM operations such as balance checking, withdrawal, deposit, and transaction handling.',
    fullDesc: 'An interactive simulation of banking ATM software. Users can check current balance, deposit funds, withdraw money within available limits, and view their simulated transaction history.',
    technologies: ['Python', 'State Management', 'Loop Control', 'Banking Simulation'],
    githubUrl: 'https://github.com/Logeshrta1211',
    iconName: 'CreditCard',
    category: 'Console System',
    learningHighlights: [
      'Managed dynamic state across iterative user actions',
      'Enforced business logic (insufficient funds, minimum balance)',
      'Organized structured menus and formatted receipt outputs'
    ]
  },
  {
    id: 'grade-calculator',
    title: 'Student Grade Calculator',
    shortDesc: 'A simple application that calculates student grades based on marks and provides the corresponding result.',
    fullDesc: 'An academic tool that takes input marks for multiple subjects, calculates aggregate percentages, and maps them to academic grade bands (A+, A, B, C, F) alongside outcome remarks.',
    technologies: ['Python', 'Lists & Aggregation', 'Grading Logic', 'Input Validation'],
    githubUrl: 'https://github.com/Logeshrta1211',
    iconName: 'GraduationCap',
    category: 'Academic Tool',
    learningHighlights: [
      'Utilized lists and iterations to compute averages dynamically',
      'Applied conditional thresholds for tier-based grading schemes',
      'Formatted student report summaries in clean table views'
    ]
  }
];

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    focus: string;
    level: string;
  }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Programming & Logic',
    description: 'Core languages and computational problem solving fundamentals',
    skills: [
      { name: 'Python', focus: 'Variables, loops, functions, lists, basic CLI apps', level: 'Beginner / Actively Practicing' },
      { name: 'JavaScript', focus: 'ES6 basics, DOM manipulation, simple interactive scripts', level: 'Beginner / Learning' },
      { name: 'Problem Solving', focus: 'Algorithmic thinking, flowcharting, conditional logic', level: 'Student Level' }
    ]
  },
  {
    title: 'Web Development Basics',
    description: 'Building clean, semantic web pages and responsive layouts',
    skills: [
      { name: 'HTML', focus: 'Semantic markup, forms, accessibility, page structure', level: 'Foundational' },
      { name: 'CSS', focus: 'Box model, Flexbox, responsive layouts, clean styling', level: 'Foundational' },
      { name: 'Web Development', focus: 'Client-side fundamentals, integrating UI and logic', level: 'Beginner / Building' }
    ]
  },
  {
    title: 'AI & Developer Tools',
    description: 'Exploration of artificial intelligence concepts and version control',
    skills: [
      { name: 'Generative AI', focus: 'Prompt crafting, LLM fundamentals, tool exploration', level: 'Enthusiast / Exploring' },
      { name: 'AI Fundamentals', focus: 'Core concepts, machine learning basics, future study', level: 'Aspiring / Studying' },
      { name: 'Git & GitHub', focus: 'Repositories, commits, push/pull, open source tracking', level: 'Beginner Workflow' }
    ]
  }
];

export interface HackathonPillar {
  title: string;
  subtitle: string;
  description: string;
  focusPoints: string[];
}

export const HACKATHON_PILLARS: HackathonPillar[] = [
  {
    title: 'Hackathon Participation',
    subtitle: 'Hands-on sprint learning',
    description: 'Joining college and community hackathons to push beyond classroom theory and build working prototypes under time constraints.',
    focusPoints: [
      'Rapid prototype development within 24-48 hours',
      'Translating problem statements into executable code',
      'Learning to debug and iterate quickly under pressure'
    ]
  },
  {
    title: 'Ideathon Participation',
    subtitle: 'Conceptual problem framing',
    description: 'Participating in idea pitching and design challenges focused on technology-driven solutions for everyday practical challenges.',
    focusPoints: [
      'Brainstorming impactful use-cases for AI and automation',
      'Structuring clear problem-solution fit presentations',
      'Receiving constructive feedback from seniors and mentors'
    ]
  },
  {
    title: 'Team Collaboration',
    subtitle: 'Peer learning and communication',
    description: 'Collaborating with peers from different disciplines to divide responsibilities, brainstorm workflows, and deliver unified projects.',
    focusPoints: [
      'Coordinating roles across logic, presentation, and research',
      'Sharing knowledge and learning new techniques from teammates',
      'Developing strong communication and team presentation habits'
    ]
  },
  {
    title: 'Problem Solving & Growth',
    subtitle: 'Learning through competition',
    description: 'Treating every competition as an intensive learning accelerator to identify gaps in knowledge and discover what to learn next.',
    focusPoints: [
      'Analyzing real-world challenges with an engineering mindset',
      'Adapting to new tools and concepts introduced during events',
      'Continuous motivation to sharpen programming fundamentals'
    ]
  }
];

export const SOCIAL_LINKS = {
  name: 'LOGESH.L',
  role: 'B.Tech Student & Aspiring AI Engineer',
  status: 'B.Tech 1st Semester',
  linkedIn: 'https://www.linkedin.com/in/logesh-l-854496433',
  github: 'https://github.com/Logeshrta1211',
  email: 'logeshkesav2@gmail.com'
};
