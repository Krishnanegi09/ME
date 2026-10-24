export const personalInfo = {
  name: "Krishna Singh Negi",
  shortName: "Krishna Negi",
  monogram: "KN",
  role: "Cybersecurity Specialist & Full-Stack Developer",
  tagline: "Computer Science Engineer (Cybersecurity) at Graphic Era Hill University, Dehradun",
  location: "Dehradun, Uttarakhand, India",
  locationShort: "Dehradun, IN",
  status: "Available for Software Engineering & Cybersecurity Roles",
  education: {
    degree: "B.Tech in Computer Science & Engineering (Cybersecurity Specialization)",
    institution: "Graphic Era Hill University, Dehradun",
    year: "2023 – 2027",
    score: "7.2 / 10.0 CGPA"
  },
  certifications: [
    { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services (AWS)", date: "Verified" },
    { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "Amazon Web Services (AWS)", date: "Verified" },
    { title: "Fundamental of Information Security", issuer: "Infosys Springboard", date: "Verified" }
  ],
  bio: [
    "I am a Cybersecurity and Software Engineering student at Graphic Era Hill University, Dehradun, passionate about building defensive security tooling, full-stack applications, and real-world software.",
    "My hands-on work spans across building automated vulnerability scanners with Python and Nmap, developing AI phishing detection platforms with FastAPI and React, implementing AES-128 symmetric cryptography systems, and crafting responsive web applications."
  ],
  stats: [
    { value: "GEHU", label: "Dehradun CSE (Cybersecurity)" },
    { value: "3+", label: "Industry Certifications (AWS, Infosys)" },
    { value: "7+", label: "Verified Technical Projects" },
    { value: "20%", label: "Crystal 4K Glass Tint" }
  ],
  socials: {
    github: {
      url: "https://github.com/Krishnanegi09",
      handle: "@Krishnanegi09",
      label: "GitHub"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/krishna-singh-negi/",
      handle: "krishna-singh-negi",
      label: "LinkedIn"
    },
    instagram: {
      url: "https://instagram.com/krishnanegiii_",
      handle: "@krishnanegiii_",
      label: "Instagram"
    },
    whatsapp: {
      url: "https://wa.me/919411593708?text=Hi%20Krishna%2C%20I%20viewed%20your%20portfolio%20and%20would%20love%20to%20connect!",
      number: "+91 94115 93708",
      handle: "+91 94115 93708",
      label: "WhatsApp"
    },
    email: "krishnanegi0906@gmail.com"
  }
};

export const realProjects = [
  {
    id: "phishguard",
    title: "PhishGuard AI Platform",
    category: "security",
    categoryLabel: "CYBERSECURITY & AI",
    badgeColor: "accent-red",
    year: "2026",
    summary: "Cybersecurity platform for automated phishing threat detection. Evaluates domain entropy, SSL telemetry, and linguistic cues in real-time.",
    architecture: "React + TypeScript frontend connected to FastAPI microservice backend with sub-50ms inference and explainable risk scores.",
    tags: ["React", "TypeScript", "FastAPI", "Python", "Threat Analysis", "Cybersecurity"],
    github: "https://github.com/Krishnanegi09",
    highlight: "Real-time Domain & URL Threat Inspection"
  },
  {
    id: "vulnerability-scanner",
    title: "Automated Vulnerability Scanner",
    category: "security",
    categoryLabel: "NETWORK SECURITY",
    badgeColor: "accent-blue",
    year: "2025",
    summary: "Automated network and web security scanner designed to inspect open attack vectors, ports, SSL configurations, and known CVE vulnerabilities.",
    architecture: "Python security engine utilizing socket scanning, Nmap integration, and automated vulnerability report synthesis.",
    tags: ["Python", "Nmap", "Network Security", "Socket Programming", "CVE Auditing"],
    github: "https://github.com/Krishnanegi09",
    highlight: "Automated Security Audit & Threat Scoring"
  },
  {
    id: "password-manager",
    title: "AES-128 Password Security Vault",
    category: "security",
    categoryLabel: "CRYPTOGRAPHY",
    badgeColor: "accent-green",
    year: "2025",
    summary: "Secure desktop credential vault engineered with Python and Fernet symmetric encryption, utilizing AES-128 to protect and manage stored user credentials.",
    architecture: "Fernet key derivation with secure local storage, salted hashes, and GUI integration with Tkinter.",
    tags: ["Python", "Fernet Cryptography", "AES-128", "Tkinter", "Data Protection"],
    github: "https://github.com/Krishnanegi09",
    highlight: "AES-128 Symmetric Key Protection"
  },
  {
    id: "file-crypto",
    title: "File Encryption & Decryption System",
    category: "security",
    categoryLabel: "SECURITY TOOL",
    badgeColor: "accent-purple",
    year: "2025",
    summary: "Cryptographic desktop tool enabling users to securely encrypt and decrypt sensitive documents and payloads before cloud or email transmission.",
    architecture: "Python cryptography library with binary stream chunking, preventing unauthorized file inspection.",
    tags: ["Python", "Fernet", "Cryptography", "File Security", "Tkinter"],
    github: "https://github.com/Krishnanegi09",
    highlight: "End-to-End File Payload Protection"
  },
  {
    id: "cookmate",
    title: "CookMate V2 Culinary Platform",
    category: "fullstack",
    categoryLabel: "FULL-STACK APP",
    badgeColor: "accent-amber",
    year: "2026",
    summary: "Interactive recipe discovery and pantry management application featuring real-time ingredient filtering and meal planning.",
    architecture: "Full-stack web application with responsive UI, dynamic client-side filtering, and modular component architecture.",
    tags: ["JavaScript", "Node.js", "Full-Stack", "Interactive UI", "State Architecture"],
    github: "https://github.com/Krishnanegi09",
    highlight: "Interactive Filtering & State Management"
  },
  {
    id: "roomkhoj",
    title: "RoomKhoj (Book My Room)",
    category: "fullstack",
    categoryLabel: "WEB PLATFORM",
    badgeColor: "accent-cyan",
    year: "2026",
    summary: "Accommodation discovery platform built to assist students and professionals in finding verified rooms, hostels, and rentals in Dehradun.",
    architecture: "React + Vite single-page application with modular routing, dynamic cards, and responsive mobile-first views.",
    tags: ["React", "Vite", "Responsive Design", "Client Routing", "JavaScript"],
    github: "https://github.com/Krishnanegi09",
    highlight: "Student Housing Discovery in Dehradun"
  },
  {
    id: "bank-mgmt",
    title: "Core Bank Management Architecture",
    category: "systems",
    categoryLabel: "SYSTEMS CODE",
    badgeColor: "accent-red",
    year: "2025",
    summary: "C++ core banking engine managing account life cycles, transaction ledgers, deposits, withdrawals, and balance verification.",
    architecture: "Object-Oriented C++ architecture with file persistence, transaction logs, and defensive boundary validation.",
    tags: ["C++", "OOP", "File Handling", "Data Structures", "Transaction Logic"],
    github: "https://github.com/Krishnanegi09",
    highlight: "Deterministic Ledger & Transaction Engine"
  }
];

export const verifiedSkills = [
  {
    category: "Programming & Core Engineering",
    skills: ["C", "C++", "Python", "Java", "JavaScript (ES6+)", "TypeScript", "Bash / Shell", "SQL", "HTML5 & CSS3"]
  },
  {
    category: "Cybersecurity & Defensive Tools",
    skills: ["Kali Linux", "Nmap Network Scanning", "Scapy Packet Crafting", "Burp Suite", "Cryptography (Fernet, AES-128)", "OWASP Top 10", "Network Protocols (TCP/IP, DNS)"]
  },
  {
    category: "Web Frameworks & Cloud",
    skills: ["React 19 & Vite", "FastAPI (Python)", "Flask & Flask-CORS", "Node.js", "AWS Cloud Essentials", "Git & GitHub", "Linux / macOS CLI"]
  }
];
