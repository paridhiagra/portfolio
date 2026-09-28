export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  icon: string;
  skills: string[];
  footer: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  headerGraphic: {
    title: string;
    subtitle: string;
    icon: string;
    badge?: string;
  };
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  details: {
    problemStatement: string;
    architecture: string;
    keyFeatures: string[];
    technicalHighlights: string[];
    componentsList?: string[];
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  status?: string;
  linkText: string;
  isEnrolled?: boolean;
  driveRef?: string;
  description?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  branch?: string;
  timeline: string;
  boardOrUniversity?: string;
  location?: string;
  badge: string;
  description?: string;
  coursework?: string[];
}

export interface Activity {
  id: string;
  badge: string;
  dateOrYear: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface ProfileCard {
  platform: string;
  handle: string;
  url: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Paridhi Agrawal',
    initials: 'PA',
    subtitle: 'ECE • Embedded Systems • IoT',
    status: 'B.Tech Undergrad (2023 — Present)',
    location: 'Kanpur, Uttar Pradesh',
    phone: '+91 7454920347',
    email: 'agrawalparidhi60@gmail.com',
    github: 'https://github.com/paridhiagra',
    githubHandle: 'paridhiagra',
    linkedin: 'https://www.linkedin.com/in/paridhi-agrawal-313932325',
    linkedinHandle: 'paridhi-agrawal-313932325',
    leetcode: 'https://leetcode.com/u/paridhi__12/',
    leetcodeHandle: '@paridhi__12',
    hackerrank: 'https://www.hackerrank.com/profile/ec4a_paridhi_091',
    hackerrankHandle: '@ec4a_paridhi_091',
    resumeDownloadUrl: 'https://drive.google.com/uc?export=download&id=1kOD78VRHBrChpJE9wB3ENnNUhtt2m0Rj',
    resumeDriveViewUrl: 'https://drive.google.com/file/d/1kOD78VRHBrChpJE9wB3ENnNUhtt2m0Rj/view?usp=sharing',
    certificatesDriveFolder: 'https://drive.google.com/drive/folders/1hJ00aQ4tmgMuR9vP3C5WhGOfjmECGpEc?usp=sharing',
    aboutParagraph: `Electronics Communication Engineering student with hands-on experience in embedded systems, microcontrollers, IoT, and hardware-software integration. Skilled in C, C++, Python, Arduino, ESP32, sensor interfacing, and circuit prototyping, with experience in developing and testing real-world electronic systems. Strong foundation in problem-solving, system design, and embedded programming.`,
  },
  highlights: [
    {
      id: 'education',
      icon: 'GraduationCap',
      label: 'EDUCATION',
      title: 'B.Tech — Electronics & Communication',
      subtitle: 'PSIT Kanpur • CGPA: 7.37 (2023 — Present)',
    },
    {
      id: 'core-focus',
      icon: 'Terminal',
      label: 'CORE FOCUS',
      title: 'Embedded Systems • IoT • Robotics',
      subtitle: 'Microcontrollers, sensor interfacing & circuit prototyping',
    },
    {
      id: 'location',
      icon: 'MapPin',
      label: 'LOCATION',
      title: 'Kanpur, Uttar Pradesh',
      subtitle: 'Available for technical internships & research',
    },
    {
      id: 'learning',
      icon: 'Target',
      label: 'CORE CONCEPTS',
      title: 'DSA • OOP • DBMS • Embedded C',
      subtitle: 'Real-time firmware & system integration',
    },
  ],
  skills: [
    {
      id: 'embedded-hardware',
      title: 'Embedded Systems & Hardware',
      badge: 'CORE HARDWARE',
      icon: 'CircuitBoard',
      skills: [
        'Arduino Nano',
        'Arduino Mega',
        'Raspberry Pi 3B+',
        'ESP32',
        'ESP32-CAM',
        'Sensor Interfacing',
        'Wireless Modules',
      ],
      footer: 'Physical Computing, Robotics & Microcontrollers',
    },
    {
      id: 'electronics-tools',
      title: 'Electronics & Engineering Tools',
      badge: 'PROTOTYPING',
      icon: 'Cpu',
      skills: [
        'Circuit Design & Simulation',
        'Arduino IDE',
        'MultiSim',
        'Tinkercad',
        'MATLAB',
        'VLSI Tools',
      ],
      footer: 'Schematic Design, Simulation & Testing',
    },
    {
      id: 'core-concepts',
      title: 'Core Computer Science Concepts',
      badge: 'ACADEMIC RIGOR',
      icon: 'Brain',
      skills: [
        'Data Structures & Algorithms (DSA)',
        'Object-Oriented Programming (OOP)',
        'Database Management Systems (DBMS)',
        'System Design Foundations',
      ],
      footer: 'Algorithmic Optimization & Robust Code Design',
    },
    {
      id: 'programming-languages',
      title: 'Programming Languages',
      badge: '5 LANGUAGES',
      icon: 'Code2',
      skills: ['C', 'C++', 'Python', 'JavaScript', 'Embedded C'],
      footer: 'Firmware & High-Level Software Development',
    },
    {
      id: 'soft-skills',
      title: 'Soft Skills & Leadership',
      badge: 'COLLABORATION',
      icon: 'Sparkles',
      skills: [
        'Problem Solving',
        'Team Collaboration',
        'Site Coordination',
        'Communication',
        'Adaptability',
        'Time Management',
      ],
      footer: 'Team Execution, Technical Outreach & Delivery',
    },
  ],
  projects: [
    {
      id: 'veilix-ai',
      title: 'Veilix AI',
      category: 'AI • SECURITY • WEB',
      headerGraphic: {
        title: 'AI PRIVACY AUDITOR',
        subtitle: 'Permission Risk Modeling',
        icon: 'ShieldCheck',
      },
      description:
        'An AI-powered application permission analyzer that evaluates application permissions and supporting evidence to identify potential privacy risks and generate understandable security insights.',
      techStack: ['React', 'Vite', 'Node.js', 'Express', 'Gemini API', 'REST API'],
      githubUrl: 'https://github.com/paridhiagra/veilix-ai',
      liveDemoUrl: 'https://veilix-ai.vercel.app/',
      details: {
        problemStatement:
          'Users and administrators struggle to understand opaque mobile/web permission manifests, often granting dangerous microphone, SMS, and location privileges without knowing the risks.',
        architecture:
          'React/Vite single-page audit interface backed by an Express engine that scans permission trees and runs Gemini API risk assessments with verifiable reasoning.',
        keyFeatures: [
          'Deep Android / Web App permission manifest parsing',
          'Dynamic Risk Scoring matrix (Privilege Escalation, Data Exfiltration, Stealth Background)',
          'Automated plain-English privacy breakdown explaining "Why is this dangerous?"',
          'Security posture recommendations and mitigation steps',
        ],
        technicalHighlights: [
          'Structured JSON schema parsing with validation filters',
          'Gemini model system prompting ensuring reproducible vulnerability categorizations',
          'Interactive danger meters with visual color-coded risk vectors',
        ],
      },
    },
    {
      id: 'mindmesh-ai',
      title: 'MindMesh AI',
      category: 'AI • KNOWLEDGE GRAPH • INTELLIGENCE',
      headerGraphic: {
        title: 'NEURAL KNOWLEDGE MESH',
        subtitle: 'Contextual Synthesis & Semantic Mapping',
        icon: 'BrainCircuit',
        badge: 'AI GRAPH / COGNITIVE',
      },
      description:
        'An intelligent cognitive workspace and knowledge mesh powered by AI that interconnects thoughts, documents, and research notes into dynamic semantic relationship maps.',
      techStack: [
        'React',
        'TypeScript',
        'Gemini API',
        'Node.js',
        'Graph Visualization',
        'Tailwind CSS',
      ],
      githubUrl: 'https://github.com/paridhiagra/MindMesh-AI.git',
      details: {
        problemStatement:
          'Information overload and fragmented note-taking tools isolate key ideas in disconnected silos, making it difficult to uncover latent connections, synthesize multi-domain research, and generate cohesive insights.',
        architecture:
          'Interactive graph-based frontend orchestrated with high-dimensional embedding and Gemini cognitive engines to extract semantic nodes, establish relational weighted edges, and offer conversational intelligence across connected knowledge.',
        keyFeatures: [
          'Dynamic interactive knowledge graph with node clustering & semantic entity linking',
          'AI-assisted context synthesis generating summaries, hypotheses, and cross-topic insights',
          'Semantic search and contextual question answering over personal research repositories',
          'Real-time concept node creation with automated keyword and entity extraction',
        ],
        technicalHighlights: [
          'High-performance graph layout algorithms delivering fluid 60 FPS spatial visual exploration',
          'Few-shot prompt engineering pipeline with Gemini API for accurate relationship classification',
          'Responsive glassmorphic UI architecture with localized state synchronization',
        ],
      },
    },
    {
      id: 'gesture-robot',
      title: 'Gesture Controlled Robot with Wireless Surveillance',
      category: 'EMBEDDED SYSTEMS • ROBOTICS',
      headerGraphic: {
        title: 'WIRELESS TELEOPERATED SYSTEM',
        subtitle: 'Sensor Fusion • Motor Actuation • Surveillance',
        icon: 'Radio',
      },
      description:
        'A gesture-controlled robotic system that translates hand movements into wireless robot commands and real-time surveillance feed using sensors, Arduino, Raspberry Pi, and motor control.',
      techStack: [
        'Arduino Mega',
        'Raspberry Pi',
        'Wireless Camera',
        'Flex Sensor',
        'MPU-6050',
        'L293D',
        'Embedded C/C++',
      ],
      githubUrl: 'https://github.com/paridhiagra/Gesture-Controlled-Robot-with-Wireless-Surveillance',
      details: {
        problemStatement:
          'Industrial and hazardous exploration tasks require intuitive, hands-free teleoperation where conventional gamepads or keyboards are clumsy or infeasible.',
        architecture:
          'Transmitter glove integrating MPU-6050 accelerometer & flex sensors communicating via RF/Wi-Fi to an Arduino Mega/Raspberry Pi chassis driving dual DC motors via L293D H-bridge.',
        keyFeatures: [
          'Multi-axis tilt detection (pitch & roll) for smooth directional steering',
          'Flex sensor finger-bend thresholding for claw grip and velocity scaling',
          'Sub-25ms teleoperation latency with packet verification',
          'Failsafe emergency auto-brake on telemetry loss',
        ],
        technicalHighlights: [
          'Digital I2C filtering with complementary filter on raw gyro/accel data',
          'Pulse Width Modulation (PWM) speed grading for fine motor control',
          'Custom lightweight binary packet structure minimizing packet loss over RF',
        ],
      },
    },
    {
      id: 'smart-trolley',
      title: 'Smart Trolley with Automatic Billing System',
      category: 'EMBEDDED SYSTEMS • IOT',
      headerGraphic: {
        title: 'AUTOMATED BILLING SYSTEM',
        subtitle: 'RFID Transponder Integration',
        icon: 'ShoppingCart',
      },
      description:
        'An RFID-based smart shopping trolley designed to automatically identify products and generate a dynamic bill, reducing manual checkout effort.',
      techStack: [
        'Arduino Nano',
        'RFID RC522',
        'C/C++',
        'Embedded Systems',
        'LCD Display',
      ],
      githubUrl: 'https://github.com/paridhiagra/Smart-Trolley-with-Automatic-Billing-System-',
      details: {
        problemStatement:
          'Long checkout queues in supermarkets waste time and require high cashier labor during peak shopping hours.',
        architecture:
          'Cart-mounted Arduino Nano micro-controller wired to an RC522 RFID reader module, 16x2 I2C LCD, and buzzer, maintaining item counts and calculating totals on the fly.',
        keyFeatures: [
          'Instant item identification when products enter the cart bay',
          'Real-time cumulative sum and itemized list on 16x2 LCD screen',
          'Dual-action item removal button to deduct mistakenly scanned items',
          'Audio feedback buzzer and buzzer confirmation tones',
        ],
        technicalHighlights: [
          'Debounced interrupt-driven tag detection avoiding double-charging errors',
          'EEPROM persistent storage saving transaction records during power dips',
          'Low power consumption operational profile for long rechargeable battery runtime',
        ],
      },
    },
  ],
  education: {
    institution: 'Pranveer Singh Institute of Technology (PSIT)',
    degree: 'B.Tech Undergraduate • CGPA: 7.37',
    branch: 'B.Tech in Electronics and Communication',
    timeline: 'Oct. 2023 — Present',
    location: 'Kanpur, Uttar Pradesh',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Circuit Design & Simulation',
      'Embedded Systems',
      'Microcontrollers & Sensor Interfacing',
      'VLSI Design',
      'MATLAB & MultiSim',
    ],
    history: [
      {
        id: 'btech',
        institution: 'Pranveer Singh Institute of Technology',
        degree: 'B.Tech in Electronics and Communication',
        branch: 'CGPA: 7.37',
        timeline: 'Oct. 2023 — Present',
        boardOrUniversity: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
        location: 'Kanpur, Uttar Pradesh',
        badge: 'UNDERGRADUATE • 7.37 CGPA',
        description: 'Hands-on focus in embedded systems, microcontrollers, IoT, circuit prototyping, and hardware-software integration.',
        coursework: [
          'Data Structures & Algorithms (DSA)',
          'Object-Oriented Programming (OOP)',
          'Database Management Systems (DBMS)',
          'Circuit Design & Simulation',
          'Embedded Systems',
          'Sensor Interfacing',
          'MATLAB',
        ],
      },
      {
        id: 'class-12',
        institution: 'SSD Educational Academy',
        degree: 'CBSE (12th Standard)',
        branch: 'Percentage: 73.3%',
        timeline: '2022 — 2023',
        boardOrUniversity: 'CBSE Board',
        location: 'Mainpuri, Uttar Pradesh',
        badge: 'CLASS 12TH • 73.3%',
        description: 'Senior Secondary education completed under CBSE Board with focus on science, mathematics, and problem solving.',
      },
      {
        id: 'class-10',
        institution: 'Baba International School',
        degree: 'CBSE (10th Standard)',
        branch: 'Percentage: 92.3%',
        timeline: '2020 — 2021',
        boardOrUniversity: 'CBSE Board',
        location: 'Mainpuri, Uttar Pradesh',
        badge: 'CLASS 10TH • 92.3%',
        description: 'Secondary School Certificate completed under CBSE Board with 92.3% aggregate distinction.',
      },
    ],
  },
  certifications: [
    {
      id: 'cert-vlsi',
      title: 'VLSI Course',
      issuer: 'Simplilearn',
      year: '2025',
      linkText: 'Certificate ↗',
      driveRef: 'vlsi course',
      description: 'CMOS fundamentals, digital logic synthesis, circuit simulation, and semiconductor system layouts.',
    },
    {
      id: 'cert-py1',
      title: 'Python Essential 1',
      issuer: 'Cisco',
      year: '2026',
      linkText: 'Certificate ↗',
      description: 'Fundamental programming paradigms, control flow, functions, modular architecture, and algorithms in Python.',
    },
    {
      id: 'cert-py2',
      title: 'Python Essential 2',
      issuer: 'Cisco',
      year: '2026',
      linkText: 'Certificate ↗',
      description: 'Advanced data structures, object-oriented programming (OOP), file I/O operations, exceptions, and packages in Python.',
    },
    {
      id: 'cert-ml',
      title: 'Machine Learning & Predictive Modeling',
      issuer: 'Infosys Springboard',
      year: '2024',
      linkText: 'Certificate ↗',
      driveRef: 'ML_29dec',
      description: 'Supervised and unsupervised learning, regression, classification pipelines, model training and predictive evaluation.',
    },
    {
      id: 'cert-sql',
      title: 'SQL (Basic) Certification',
      issuer: 'HackerRank',
      year: '2024',
      linkText: 'Certificate ↗',
      driveRef: 'SQL_basic',
      description: 'Relational database querying, multi-table joins, aggregations, filtering, group by operations and subqueries.',
    },
  ],
  activities: [
    {
      id: 'act-1',
      badge: 'HACKATHON',
      dateOrYear: 'July 2026',
      title: 'CodeStreet 2026',
      subtitle: 'Hosted by American Express',
      description:
        'Participated in CodeStreet 2026, a hackathon hosted by American Express (July 2026), and built BenefitFlow as part of a team, gaining hands-on experience in collaborative project development.',
      tags: ['American Express', 'BenefitFlow', 'GitHub'],
    },
    {
      id: 'act-volunteer',
      badge: 'COLLEGE CLUB',
      dateOrYear: 'PSIT',
      title: 'Volunteer — Creative & Design Team',
      subtitle: 'IoT Club, PSIT',
      description:
        'Active volunteer in the Creative & Design Team at IoT Club, PSIT, designing visual technical media and coordinating student innovation hardware events.',
      tags: ['IoT Club', 'PSIT', 'Creative & Design'],
    },
    {
      id: 'act-iete',
      badge: 'ACADEMIC ASSOCIATION',
      dateOrYear: 'Nov. 2024 — Nov. 2027',
      title: 'Institution of Electronics and Telecommunication Engineers (IETE)',
      subtitle: 'Student Member',
      description:
        'Student Member of the Institution of Electronics and Telecommunication Engineers (IETE), participating in technical symposiums, research seminars, and engineering workshops.',
      tags: ['IETE', 'Student Member', '2024 — 2027'],
    },
  ],
  profiles: [
    {
      platform: 'GitHub',
      handle: '@paridhiagra',
      url: 'https://github.com/paridhiagra',
      icon: 'Github',
    },
    {
      platform: 'LeetCode',
      handle: '@paridhi__12',
      url: 'https://leetcode.com/u/paridhi__12/',
      icon: 'Code2',
    },
    {
      platform: 'HackerRank',
      handle: '@ec4a_paridhi_091',
      url: 'https://www.hackerrank.com/profile/ec4a_paridhi_091',
      icon: 'Terminal',
    },
  ],
};
