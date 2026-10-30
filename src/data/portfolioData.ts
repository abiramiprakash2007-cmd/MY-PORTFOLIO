import { Project, SkillCategory, InternshipItem, AreaOfInterest, CareerMilestone } from '../types/portfolio';

export interface ProfessionalDevelopmentItem {
  title: string;
  category: 'Hackathons' | 'Technical Exploration' | 'Innovation & Community' | 'Academic Research';
  period: string;
  description: string;
  keyOutcomes: string[];
  tags: string[];
}

export const personalInfo = {
  name: 'Abirami',
  role: 'Aspiring AI Engineer | Computer Science & Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  institution: 'REVA University',
  degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
  location: 'Bengaluru, Karnataka, India',
  email: 'abiramiprakash2007@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  portfolioMotto: 'Learning with Purpose. Building with Curiosity.',
  shortIntro:
    'Dedicated to building intelligent, mathematically grounded machine learning solutions and computer vision systems. Passionate about transforming computational research into impactful real-world innovations.',
  bioSnippet:
    'B.Tech Computer Science and Engineering student specializing in AI & Machine Learning at REVA University, Bengaluru. Driven by an unrelenting curiosity for neural architectures, computer vision, and applied software engineering.',
};

export const educationData = {
  degree: 'Bachelor of Technology (B.Tech)',
  major: 'Computer Science & Engineering (Artificial Intelligence & Machine Learning)',
  institution: 'REVA University',
  location: 'Bengaluru, Karnataka, India',
  period: '2023 – 2027 (Undergraduate)',
  status: 'In Progress · Specializing in AI & ML',
  description:
    'Pursuing an intensive undergraduate curriculum blending classical computer science foundations (algorithms, operating systems, databases) with advanced artificial intelligence, neural networks, and mathematical computing.',
  keyCoursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (C++, Java)',
    'Linear Algebra & Calculus for Machine Learning',
    'Artificial Intelligence & Expert Systems',
    'Probability, Statistics & Random Processes',
    'Computer Vision & Image Processing',
    'Database Management Systems (DBMS)',
    'Computer Networks & Distributed Systems',
  ],
  academicHighlights: [
    'Active member of university technical forums and machine learning study circles.',
    'Lead team contributor on national hackathon project development (SIH 2026 initiative).',
    'Dedicated focus on bridging mathematical proofs with deployable Python/C++ code.',
  ],
};

export const internshipData: InternshipItem[] = [
  {
    company: '[Industry Organisation / Research Lab Placeholder]',
    role: 'AI & Machine Learning Intern (Target 2026/2027 Cohort)',
    duration: 'Seeking Upcoming Term / Summer 2026',
    type: 'Internship / Engineering Trainee',
    location: 'Bengaluru, India / Hybrid / Remote',
    status: 'Open for Opportunities',
    note: 'Transparent Disclosure: Actively seeking pre-final year / summer internship opportunities. Placeholders provided for incoming verified placements.',
    responsibilities: [
      'Applying computer vision models (MediaPipe Hands, OCR pipelines) to structured and real-time datasets.',
      'Conducting rigorous Exploratory Data Analysis (EDA), missing-value imputation, and feature engineering with NumPy and Pandas.',
      'Benchmarking inference latency, false-positive tradeoffs, and model accuracy against baseline metrics.',
      'Collaborating in version-controlled Git workflows and documenting experimental findings in technical notes.',
    ],
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'PaddleOCR', 'NumPy', 'Pandas', 'Git', 'Jupyter Notebook'],
    learningOutcomes: [
      'Experience in real-world ML lifecycle management and data validation.',
      'Cross-functional engineering communication and agile code review practices.',
      'Optimizing inference pipelines for resource-constrained client machines.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    categoryName: 'AI & Computer Vision',
    iconName: 'Eye',
    description: 'Skeletal landmark tracking, optical character recognition, and core machine learning fundamentals.',
    skills: [
      { name: 'MediaPipe Hands', level: 'Practical Prototyping', tag: '21 Landmark Skeletal Tracking', highlight: true },
      { name: 'OCR & PaddleOCR', level: 'Active Exploration', tag: 'Document & Label Parsing', highlight: true },
      { name: 'Image Processing', level: 'Core Competency', tag: 'Thresholding, Morphology, Bounding Boxes' },
      { name: 'Machine Learning Fundamentals', level: 'Foundational Theory & Practice', tag: 'Supervised Learning & Metrics' },
    ],
  },
  {
    categoryName: 'Programming Languages',
    iconName: 'Code2',
    description: 'Algorithmic programming and object-oriented software engineering.',
    skills: [
      { name: 'Python', level: 'Primary Language', tag: 'Data Science & ML Scripting', highlight: true },
      { name: 'C', level: 'Foundational Rigor', tag: 'Memory & Pointer Fundamentals' },
      { name: 'C++', level: 'Core Competency', tag: 'OOP & Data Structures' },
      { name: 'Java', level: 'Working Knowledge', tag: 'Object-Oriented Architecture' },
    ],
  },
  {
    categoryName: 'Data Science & Analytics',
    iconName: 'BarChart3',
    description: 'Mathematical arrays, tabular data wrangling, and statistical visual storytelling.',
    skills: [
      { name: 'NumPy', level: 'Proficient', tag: 'Vectorized Computing & Matrix Operations', highlight: true },
      { name: 'Pandas', level: 'Proficient', tag: 'DataFrames & Data Wrangling', highlight: true },
      { name: 'Matplotlib', level: 'Proficient', tag: 'Visual Plotting & Charts' },
      { name: 'Seaborn', level: 'Proficient', tag: 'Statistical Distributions & Heatmaps' },
      { name: 'Exploratory Data Analysis (EDA)', level: 'Applied Practice', tag: 'Outlier Auditing & Feature Correlation' },
    ],
  },
  {
    categoryName: 'Web Development',
    iconName: 'Globe',
    description: 'Modern markup and styling for responsive interactive frontends.',
    skills: [
      { name: 'HTML5', level: 'Proficient', tag: 'Semantic Layouts & Accessibility' },
      { name: 'CSS3', level: 'Proficient', tag: 'Responsive Design & Modern Glassmorphism' },
    ],
  },
  {
    categoryName: 'Developer Tools',
    iconName: 'Wrench',
    description: 'Version control, developer environments, and computational notebooks.',
    skills: [
      { name: 'Git', level: 'Proficient', tag: 'Version Control & Branching' },
      { name: 'GitHub', level: 'Proficient', tag: 'Collaborative Repositories & Review' },
      { name: 'VS Code', level: 'Primary Environment', tag: 'Debugging & Extensions' },
      { name: 'Jupyter Notebook', level: 'Interactive Compute', tag: 'Exploratory Analysis & Prototyping' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'signiq',
    title: 'SignIQ',
    tagline: 'AI-Powered Hand Gesture Recognition Prototype',
    category: 'AI & Computer Vision',
    status: 'Prototype',
    statusColor: '#6EE7B7',
    description:
      'AI-powered hand gesture recognition prototype using MediaPipe Hands, recognising 20 out of 26 ASL fingerspelling letters in real time from standard video streams.',
    fullOverview:
      'SignIQ is an assistive computer vision system engineered to bridge communication barriers for individuals with hearing and speech impairments. By processing live video feeds, the system maps 21 three-dimensional skeletal hand landmarks per hand, normalizes coordinate spatial vectors against wrist orientation, and classifies American Sign Language (ASL) fingerspelling gestures—currently demonstrating accurate recognition for 20 out of 26 letters of the alphabet.',
    problemStatement:
      'Over 70 million individuals worldwide depend on sign language as their primary mode of communication, yet everyday educational, healthcare, and civic interfaces lack automated, real-time sign recognition capabilities.',
    solutionApproach:
      'Employed Google MediaPipe Hands to extract normalized 21-point 3D skeletal landmarks, paired with OpenCV for real-time bounding box tracking and NumPy distance calculations to classify articulation states without requiring specialized sensory gloves.',
    keyFeatures: [
      'Recognises 20 out of 26 ASL fingerspelling letters accurately in real time',
      'Tracks 21 3D hand skeletal landmark coordinates per frame with low CPU latency',
      'Adaptive coordinate normalization robust against varying hand distance and scale',
      'Real-time HUD with gesture prediction output and visual landmark connectivity overlay',
    ],
    technologies: ['Python', 'MediaPipe Hands', 'OpenCV', 'NumPy', 'Scikit-learn', 'Git'],
    metrics: [
      { label: 'ASL Coverage', value: '20 / 26 Letters' },
      { label: 'Tracking Points', value: '21 3D Landmarks' },
      { label: 'Inference', value: 'Real-Time Webcam' },
    ],
    githubUrl: 'https://github.com/abirami/SignIQ-Gesture-Recognition',
    demoUrl: '#signiq-demo',
    architectureNotes:
      'Camera Input → MediaPipe Hands Landmark Extractor (21 3D points) → Vector Normalization (Wrist-Centric) → Geometric Angle & Distance Classifier → HUD Output HUD',
  },
  {
    id: 'legal-metrology',
    title: 'Legal Metrology Compliance Checker',
    tagline: 'Intelligent Compliance Checking Solution Concept for Packaged Commodities',
    category: 'Hackathon',
    status: 'SIH 2026',
    statusColor: '#E0D4FC',
    description:
      'An intelligent compliance checking solution concept for packaged commodities using OCR, image processing, AI-assisted interpretation and rule-based validation for Smart India Hackathon 2026.',
    fullOverview:
      'Developed as an innovative concept for the Smart India Hackathon 2026, this system automates the inspection of consumer packaged goods labels. It processes packaging photographs to verify statutory declarations mandated under the Legal Metrology (Packaged Commodities) Rules, including Maximum Retail Price (MRP), date of manufacture/import, net quantity, manufacturer origin, and consumer helpline details.',
    problemStatement:
      'Manual regulatory auditing across millions of packaged items in retail and e-commerce supply chains is laborious, slow, and prone to human oversight, resulting in statutory non-compliance.',
    solutionApproach:
      'Formulated an automated pipeline integrating adaptive contrast enhancement, perspective dewarping, PaddleOCR / Tesseract text detection, and regex pattern matching to validate statutory entities against legal standards.',
    keyFeatures: [
      'Exploration of PaddleOCR and Tesseract engines for robust multilingual label reading',
      'Image preprocessing algorithms to rectify skewed, curved, and glare-affected product labels',
      'Automated extraction and validation of mandatory entities: MRP, Mfg Date, Net Qty, Country of Origin',
      'Structured audit checklist output highlighting missing or non-compliant disclosures',
    ],
    technologies: ['Python', 'PaddleOCR', 'OpenCV', 'Image Processing', 'Regular Expressions', 'EDA'],
    metrics: [
      { label: 'Hackathon', value: 'Smart India Hackathon 2026' },
      { label: 'Validation Type', value: 'Statutory Label Audit' },
      { label: 'Key Engine', value: 'PaddleOCR + Regex' },
    ],
    githubUrl: 'https://github.com/abirami/Legal-Metrology-Compliance-SIH2026',
    demoUrl: '#legal-metrology-demo',
    architectureNotes:
      'Packaging Image → Preprocessing & Grayscale Adaptive Filtering → Text Detection (PaddleOCR) → NLP Entity Extraction → Statutory Compliance Checker Matrix',
  },
  {
    id: 'netsentinel',
    title: 'NetSentinel',
    tagline: 'AI-Powered Network Intrusion & Threat Visualisation Concept',
    category: 'Security & Systems',
    status: 'Prototype',
    statusColor: '#FBCFE8',
    description:
      'AI-powered network intrusion and cyber-threat visualisation concept analyzing packet flows and telemetry to detect anomalous patterns and potential attacks.',
    fullOverview:
      'NetSentinel explores the application of machine learning classification to network telemetry. By analyzing packet flow duration, byte distributions, flag frequencies, and header metadata, the prototype trains classification algorithms to differentiate between legitimate network traffic and malicious activity such as port scans, DoS flooding, and unauthorized access attempts.',
    problemStatement:
      'Traditional signature-based intrusion detection systems struggle against zero-day anomalies and generate overwhelming false positive alerts for security operation teams.',
    solutionApproach:
      'Built a structured data preprocessing and exploratory data analysis pipeline using Pandas and NumPy, followed by comparative machine learning classifier evaluations with Seaborn visualization heatmaps.',
    keyFeatures: [
      'Comprehensive exploratory data analysis examining feature correlation and packet distributions',
      'Feature engineering including flow byte ratios, packet rate averages, and protocol encoding',
      'Comparative evaluation of classification models (Random Forest, Decision Trees, SVM)',
      'Threat visualization diagrams illustrating anomaly score distributions and alert priorities',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    metrics: [
      { label: 'Telemetry Type', value: 'Flow-based Packet Data' },
      { label: 'EDA Focus', value: 'Correlation & Outliers' },
      { label: 'Goal', value: 'Threat Anomaly Detection' },
    ],
    githubUrl: 'https://github.com/abirami/NetSentinel-NIDS',
    demoUrl: '#netsentinel-demo',
    architectureNotes:
      'Traffic Capture Logs → Pandas Data Wrangling → Feature Scaling & Collinearity Check → ML Classification Core → Threat Visualisation Score',
  },
  {
    id: 'women-safety',
    title: 'Women Safety Alert System',
    tagline: 'Technology-Based Emergency Safety Solution Concept',
    category: 'Social Good',
    status: 'Proposed Idea',
    statusColor: '#6EE7B7',
    description:
      'A technology-based safety solution concept formulated with discrete emergency triggers, instant GPS geolocation tracking, and multi-channel distress beacon broadcast.',
    fullOverview:
      'A human-centric safety architecture formulated to offer rapid, discrete emergency alerting for women facing unsafe situations. The concept integrates physical shortcut triggers (such as hardware button sequences) with background geolocation polling to immediately package GPS coordinates, timestamp, and battery level into a prioritized dispatch packet for designated emergency contacts and local authorities.',
    problemStatement:
      'In high-stress emergency scenarios, opening a mobile phone, unlocking the screen, and dialing emergency services is often impossible or elevates danger due to perpetrator visibility.',
    solutionApproach:
      'Designed a low-latency trigger protocol supporting hardware shortcuts or 1-tap widgets that instantly capture geolocation coordinates and trigger multi-channel SMS and alert broadcasts.',
    keyFeatures: [
      'Discrete emergency activation protocol requiring minimal physical interaction',
      'Precise GPS coordinate latching with dynamic emergency map link formatting',
      'Multi-recipient notification cascade blueprint for trusted contacts and response hubs',
      'Battery-efficient background telemetry architecture designed for fail-safe transmission',
    ],
    technologies: ['System Design', 'Python / Web Prototyping', 'Geolocation APIs', 'HTML/CSS', 'Notification Gateways'],
    metrics: [
      { label: 'Trigger Time', value: '< 2 Seconds (Design)' },
      { label: 'Domain', value: 'Civic & Personal Safety' },
      { label: 'Status', value: 'Proposed Concept' },
    ],
    githubUrl: 'https://github.com/abirami/Women-Safety-Alert-Architecture',
    demoUrl: '#women-safety-demo',
    architectureNotes:
      'Discrete Trigger → Geolocation Latency Engine → Emergency Dispatch Payload → SMS / Web Gateway Cascade',
  },
  {
    id: 'resqnet',
    title: 'ResQNet',
    tagline: 'AI-Powered Smart Disaster Management Concept',
    category: 'Social Good',
    status: 'Proposed Idea',
    statusColor: '#E0D4FC',
    description:
      'AI-powered smart disaster management concept optimizing emergency resource allocation, hazard severity triage, and volunteer dispatch routing during natural catastrophes.',
    fullOverview:
      'ResQNet is an intelligent disaster relief architecture designed to eliminate logistical bottlenecks following floods, cyclones, and earthquakes. By structuring situational reports into a unified spatial triage matrix, the system algorithmically evaluates regional vulnerability scores and matches available relief supplies with community needs.',
    problemStatement:
      'In the critical first 72 hours after natural disasters, rescue and relief efforts frequently suffer from misdirected supply shipments, duplicate deployments, and blind spots in isolated zones.',
    solutionApproach:
      'Devised a priority-weighted allocation algorithm balancing reported water/hazard depth, population density, and medical urgency to compute equitable, congestion-aware dispatch queues.',
    keyFeatures: [
      'Hazard triage scoring combining disaster severity reports and population vulnerability',
      'Dynamic inventory tracking for drinking water, rations, emergency medicine, and shelter kits',
      'Volunteer and relief vehicle dispatch scheduler to prevent route congestion in affected sectors',
      'Architectural blueprint designed for intermittent, low-bandwidth communications',
    ],
    technologies: ['Conceptual Architecture', 'Data Analytics', 'Python Simulation', 'Matplotlib', 'Algorithm Design'],
    metrics: [
      { label: 'Domain', value: 'Humanitarian & Crisis AI' },
      { label: 'Core Mechanism', value: 'Priority Allocation Algorithm' },
      { label: 'Status', value: 'Proposed Concept' },
    ],
    githubUrl: 'https://github.com/abirami/ResQNet-Disaster-Management',
    demoUrl: '#resqnet-demo',
    architectureNotes:
      'Field SOS Reports → Severity Scoring Algorithm → Central Resource Pool Matching → Optimal Dispatch Route Output',
  },
];

export const professionalDevelopmentData: ProfessionalDevelopmentItem[] = [
  {
    title: 'Smart India Hackathon 2026 Initiative',
    category: 'Hackathons',
    period: 'Active Project Initiative · 2026',
    description:
      'Serving as an engineering team member tackling the Legal Metrology Compliance challenge, exploring OCR extraction and automated regulatory compliance validation.',
    keyOutcomes: [
      'Architected text detection pipeline using PaddleOCR and adaptive image filters.',
      'Designed regular-expression validation matrix for statutory packaged commodity declarations.',
      'Collaborated on cross-functional problem statement decomposition and pitch preparation.',
    ],
    tags: ['SIH 2026', 'PaddleOCR', 'Image Processing', 'Regulatory AI'],
  },
  {
    title: 'Computer Vision & Skeletal Landmark Exploration',
    category: 'Technical Exploration',
    period: '2024 – Present',
    description:
      'Deep dive into real-time skeletal tracking frameworks (Google MediaPipe Hands) and computational geometry for assistive communication.',
    keyOutcomes: [
      'Developed SignIQ prototype successfully recognizing 20 out of 26 ASL fingerspelling gestures.',
      'Implemented real-time 3D coordinate normalization resisting variations in camera distance.',
      'Explored OpenCV pipeline integration for low-latency video feed processing on consumer CPUs.',
    ],
    tags: ['MediaPipe', 'OpenCV', 'Assistive AI', 'NumPy'],
  },
  {
    title: 'Data Science & Statistical Modeling Mastery',
    category: 'Academic Research',
    period: '2023 – Present',
    description:
      'Hands-on laboratory experimentation with scientific Python libraries (NumPy, Pandas, Matplotlib, Seaborn) for exploratory analysis and predictive modeling.',
    keyOutcomes: [
      'Conducted end-to-end Exploratory Data Analysis on network telemetry and tabular benchmark datasets.',
      'Implemented feature correlation matrices, outlier detection, and missing-value imputation protocols.',
      'Studied foundational supervised learning algorithms and bias-variance tradeoff dynamics.',
    ],
    tags: ['Pandas', 'NumPy', 'EDA', 'Scikit-learn'],
  },
  {
    title: 'REVA University Technical Forums & Community',
    category: 'Innovation & Community',
    period: '2023 – Present',
    description:
      'Active participant in university programming workshops, AI study circles, and peer coding sessions in Bengaluru’s thriving technical ecosystem.',
    keyOutcomes: [
      'Participated in campus algorithmic challenges in C, C++, and Python.',
      'Collaborated with fellow student developers on social-good and civic technology proposals.',
      'Maintained disciplined version control and repository hygiene on GitHub.',
    ],
    tags: ['REVA University', 'Peer Collaboration', 'Git / GitHub', 'Continuous Learning'],
  },
];

export const areasOfInterest: AreaOfInterest[] = [
  {
    title: 'Artificial Intelligence & Deep Learning',
    description: 'Investigating neural network architectures, representation learning, and how computational models solve perception and decision problems.',
    keyFocus: ['Neural Network Architectures', 'Model Optimization', 'Assistive AI Applications'],
    icon: 'Brain',
  },
  {
    title: 'Machine Learning Fundamentals',
    description: 'Mastering supervised and unsupervised learning algorithms, feature engineering, and robust statistical validation techniques.',
    keyFocus: ['Classification & Regression', 'Ensemble Methods', 'Bias-Variance Tradeoffs'],
    icon: 'Cpu',
  },
  {
    title: 'Computer Vision & Spatial AI',
    description: 'Transforming video feeds into actionable semantic understanding through skeletal tracking, segmentation, and OCR.',
    keyFocus: ['MediaPipe Pipelines', 'PaddleOCR & Tesseract', 'Real-time Gesture Recognition'],
    icon: 'Eye',
  },
  {
    title: 'Data Science & Visual Analytics',
    description: 'Extracting meaningful insights from complex tabular datasets through rigorous exploratory data analysis and visual storytelling.',
    keyFocus: ['NumPy & Pandas Wrangling', 'Matplotlib & Seaborn Visualizations', 'Hypothesis Testing'],
    icon: 'BarChart2',
  },
  {
    title: 'Software Development & Clean Code',
    description: 'Engineering maintainable, modular software with strong foundations in C, C++, Java, and Python.',
    keyFocus: ['Object-Oriented Design', 'Data Structures & Algorithms', 'Version Control with Git'],
    icon: 'Terminal',
  },
  {
    title: 'Hackathons & Rapid Innovation',
    description: 'Collaborating in high-tempo problem-solving sprints to build functional prototypes for civic, regulatory, and industrial challenges.',
    keyFocus: ['Smart India Hackathon (SIH 2026)', 'Cross-Disciplinary Prototyping', 'User-Centric Design'],
    icon: 'Sparkles',
  },
];

export const careerMilestones: CareerMilestone[] = [
  {
    phase: 'Immediate Milestone (2026)',
    title: 'AI/ML Internship & Advanced Vision Prototyping',
    timeline: 'Present – 2026',
    focus:
      'Secure a meaningful engineering internship in AI/ML or Computer Vision. Deepen mastery in neural pipelines, OCR systems (PaddleOCR), and deployment workflows.',
    deliverables: [
      'Contribute to production-grade AI or computer vision tasks within an engineering team.',
      'Refine the Legal Metrology Compliance Checker for the Smart India Hackathon 2026.',
      'Ship polished open-source AI projects with comprehensive documentation.',
    ],
  },
  {
    phase: 'Academic Graduation (2027)',
    title: 'B.Tech Completion with Honors & Applied Impact',
    timeline: '2026 – 2027',
    focus:
      'Graduate from REVA University with distinguished academic credentials in CSE (AI & ML). Deliver an impactful capstone project solving a high-value real-world challenge.',
    deliverables: [
      'Complete undergraduate degree with strong academic record at REVA University.',
      'Author or co-author applied research exploring assistive computer vision or document automation.',
      'Mentor junior engineering peers in programming and machine learning fundamentals.',
    ],
  },
  {
    phase: 'Long-Term Vision (2027 & Beyond)',
    title: 'Senior AI Engineer & Purpose-Driven Innovator',
    timeline: 'Future Horizon',
    focus:
      'Evolve into a senior AI engineer architecting reliable, human-centric artificial intelligence systems that democratize accessibility, improve safety, and empower communities.',
    deliverables: [
      'Architect large-scale machine learning systems deployed in mission-critical environments.',
      'Champion ethical, fair, and accessible AI engineering practices.',
      'Bridge the gap between academic research breakthroughs and practical human utility.',
    ],
  },
];
