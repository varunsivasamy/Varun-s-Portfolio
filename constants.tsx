import React from 'react';
import { Database, Brain, Code, Smartphone } from 'lucide-react';
import { Project, Experience, SkillCategory, Education, Publication } from './types';

export const PERSONAL_DETAILS = {
  name: 'Varun Sivasamy',
  roles: ['Aspiring Data Analyst', 'ML Engineer', 'Full Stack Developer'],
  about: "I am a 3rd-year Computer Science and Engineering student with strong fundamentals in Python, SQL, PHP, and MongoDB. As an aspiring Data Analyst & Machine Learning Engineer, I am passionate about data handling, automation, and intelligent systems. I have a track record of building complex systems—from AI voice assistants to e-commerce platforms—and am willing to relocate anywhere in South India to apply my skills.",
  email: 'varunsiva.sm@gmail.com',
  phone: '+91 9677384016',
  github: 'https://github.com/varunsivasamy',
  linkedin: 'https://linkedin.com/in/varun-sivasamy/',
  location: 'Tirupur, Tamil Nadu',
  address: '2/483, Onnan Thottam, Palvarayan Palayam, 63 Velampalayam(PO), Tirupur- 641028'
};

export const EDUCATION: Education[] = [
  {
    id: '1',
    institution: 'Sri Shakthi Institute of Engineering and Technology',
    degree: 'B.E. Computer Science and Engineering',
    year: '2023 – 2027',
    score: '8.22 CGPA'
  },
  {
    id: '2',
    institution: 'Literacy Mission Matric Higher Secondary School',
    degree: 'HSC',
    year: '2022 – 2023',
    score: '91.5%'
  },
  {
    id: '3',
    institution: 'Literacy Mission Matric Higher Secondary School',
    degree: 'SSLC',
    year: '2020 – 2021',
    score: 'Completed'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Machine Learning & AI",
    skills: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "LiveKit", "TensorFlow"],
    icon: <Brain className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Web Development",
    skills: ["MERN Stack", "React.js", "Node.js", "MongoDB", "PHP", "Tailwind CSS"],
    icon: <Database className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "App & IoT",
    skills: ["Flutter", "Dart", "IoT Sensors", "Arduino"],
    icon: <Smartphone className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Tools & Automation",
    skills: ["Git", "SQL", "Automation Scripting", "Vercel", "Linux"],
    icon: <Code className="w-6 h-6 text-indigo-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Anime Recommendation System',
    category: 'Machine Learning',
    problem: 'Users struggle to find new anime similar to their tastes due to volume of content.',
    features: ['Sentence Transformers', 'Cosine Similarity Scoring', 'Content-based Filtering', 'Metadata Normalization'],
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit', 'Sentence Transformers'],
    approach: 'Developed a pipeline using Sentence Transformers to convert descriptions into semantic embeddings and implemented fast cosine similarity ranking.',
    results: 'Delivers highly relevant, personalized recommendations based on genre and synopsis similarity.',
    learned: 'Deepened understanding of NLP, vector embeddings, and recommendation logic.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1200', // Anime/Japan Vibe
    githubLink: 'https://github.com/varunsivasamy/anime_recommandation'
  },
  {
    id: '2',
    title: 'Voice Assistant with LiveKit',
    category: 'AI / Real-Time',
    problem: 'Need for low-latency, real-time speech interaction for automation.',
    features: ['Real-time ASR', 'Context Memory Buffer', 'Command Interpretation', 'Low-latency Streaming'],
    techStack: ['LiveKit', 'Python', 'Speech Recognition', 'ML Classification'],
    approach: 'Integrated LiveKit for real-time audio streaming and built a command interpreter with keyword extraction and light ML classification.',
    results: 'Smooth, responsive voice interactions capable of handling multi-step commands on standard internet speeds.',
    learned: 'Real-time audio processing and state management in conversational AI.',
    image: 'https://images.unsplash.com/photo-1625316708582-7c38734c3121?auto=format&fit=crop&q=80&w=1200', // AI Waveform
    githubLink: 'https://github.com/varunsivasamy/voice_assistent'
  },
  {
    id: '3',
    title: 'Petspot (MERN Pet Shop)',
    category: 'Full Stack Web',
    problem: 'Connecting pet adopters with supplies and animals in a unified platform.',
    features: ['JWT Authentication', 'Dynamic Cart', 'Admin Dashboard', 'Optimized MongoDB Schema'],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux'],
    approach: 'Built a secure RESTful API with optimized indexing for product filtering and a responsive React frontend.',
    results: 'A feature-complete e-commerce system with secure auth and order management.',
    learned: 'End-to-end MERN development, security best practices, and state management.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1200', // Pet dog
    gallery: [
      'https://images.unsplash.com/photo-1541781777631-fa9531eaa16d?auto=format&fit=crop&q=80&w=800', // Puppy
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800', // Dog
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800'  // Cat
    ],
    githubLink: 'https://github.com/varunsivasamy/Petspot'
  },
  {
    id: '4',
    title: 'AI-Augmented Chess Game',
    category: 'Game Dev / AI',
    problem: 'Beginners need assistance and feedback to improve their chess strategy.',
    features: ['Move Suggestion', 'Timed Scoring', 'Risk Assessment Indicators', 'Piece-Square Tables'],
    techStack: ['Flutter', 'Dart', 'Game Logic', 'Heuristics'],
    approach: 'Designed a move evaluation system using scoring heuristics to suggest strong moves and integrated a timer-based point system.',
    results: 'An engaging chess application that actively helps players learn strategy through feedback.',
    learned: 'Game state management, heuristic algorithms, and mobile UI design.',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1200', // Chess Board
    githubLink: 'https://github.com/varunsivasamy/hpchessgame'
  },
  {
    id: '5',
    title: 'Unified Data Platform (SIH)',
    category: 'Data Science',
    problem: 'Lack of unified insights for oceanographic, fisheries, and biodiversity data.',
    features: ['Data Aggregation', 'Predictive Modeling', 'Fisheries Insights', 'Coral Reef Protection'],
    techStack: ['AI', 'Data Analytics', 'Web Tech'],
    approach: 'Collaborated to build a platform that identifies optimal harvesting zones to reduce reliance on trawlers.',
    results: 'Strategically assists fishermen while mitigating damage to coral ecosystems.',
    learned: 'Handling large-scale environmental data and collaborative hackathon development.',
    image: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&q=80&w=1200' // Ocean
  },
  {
    id: '6',
    title: 'Among AI',
    category: 'Web / AI',
    problem: 'Difficulty in identifying less performant AI models in a fun way.',
    features: ['Game-like Interface', 'Model Comparison', 'Interactive UI'],
    techStack: ['Vercel AI SDK', 'Next.js', 'React'],
    approach: 'Developed a game based on "Among Us" mechanics to identify "imposter" (low performance) AI models.',
    results: 'Gamified the process of evaluating AI model performance.',
    learned: 'Creative UI design and integration with Vercel AI Gateway.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200' // Cyberpunk/Tech
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Participant & Team Member',
    company: 'SIH-2025 (Smart India Hackathon)',
    duration: '2025',
    type: 'hackathon',
    description: [
      'Participated in a national-level hackathon.',
      'Collaborated on an AI-Driven Unified Data Platform for Oceanographic, Fisheries, and Molecular Biodiversity Insights.',
      'Worked on strategies to help fishermen identify optimal harvesting zones.'
    ]
  },
  {
    id: '2',
    role: 'Event Organizer',
    company: 'KALAM',
    duration: 'Jan 2022',
    type: 'position',
    description: [
      'Conducted Inter-college Level Events for both Technical and Non-Technical domains.',
      'Managed logistics, scheduling, and participant coordination for multiple simultaneous events.'
    ]
  },
  {
    id: '3',
    role: 'Team Lead / Developer',
    company: 'Agents Intensive Capstone',
    duration: '2024',
    type: 'hackathon',
    description: [
      'Successfully developed a model to tackle issues arising from the updating or deprecation of package versions.',
      'Led the team in architectural decisions and implementation.'
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: 'MINI JARVIS - AI VOICE ASSISTANT',
    journal: 'International Research Journal of Modernization in Engineering Technology and Science',
    description: 'A minimal, fast, and modular voice assistant built using LiveKit’s real-time audio streaming capabilities.'
  },
  {
    id: '2',
    title: 'Prevention System to Identify Animal Intervention Using IOT',
    journal: 'International Journal of Research Publication and Reviews',
    description: 'An IoT system that notifies farmers via mobile when animals enter the field, aiding in crop protection.'
  },
  {
    id: '3',
    title: 'Digital Outpass Generator',
    journal: 'International Journal of Research Publication and Reviews',
    description: 'A digital system to streamline and automate the manual outpass generation process for institutions.'
  }
];