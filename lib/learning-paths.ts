export interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  icon: string;
  color: string;
  projects: string[]; // Project slugs in order
  skills: string[];
  prerequisites?: string[];
  learningObjectives: string[];
  certification?: {
    name: string;
    requirements: string[];
  };
}

export const learningPaths: LearningPath[] = [
  {
    id: 'frontend-fundamentals',
    title: 'Frontend Fundamentals',
    description: 'Master the building blocks of web development with HTML, CSS, and JavaScript',
    difficulty: 'beginner',
    estimatedTime: '4-6 weeks',
    icon: '🌐',
    color: 'bg-blue-500/10 text-blue-600 border-blue-200',
    projects: ['portfolio-site', 'todo-app-vanilla', 'weather-app'],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'DOM Manipulation'],
    learningObjectives: [
      'Understand semantic HTML structure',
      'Master CSS layouts with Flexbox and Grid',
      'Learn JavaScript fundamentals and DOM manipulation',
      'Create responsive designs for all devices',
      'Implement interactive user interfaces'
    ]
  },
  {
    id: 'react-mastery',
    title: 'React Mastery',
    description: 'Build modern React applications with hooks, state management, and best practices',
    difficulty: 'intermediate',
    estimatedTime: '6-8 weeks',
    icon: '⚛️',
    color: 'bg-cyan-500/10 text-cyan-600 border-cyan-200',
    projects: ['todo-app-react', 'ecommerce-app', 'social-media-dashboard'],
    skills: ['React', 'JSX', 'Hooks', 'State Management', 'Component Architecture'],
    prerequisites: ['HTML', 'CSS', 'JavaScript'],
    learningObjectives: [
      'Master React components and JSX syntax',
      'Understand React hooks and state management',
      'Learn component composition and props',
      'Implement routing with React Router',
      'Handle forms and user input effectively'
    ],
    certification: {
      name: 'React Developer Certificate',
      requirements: ['Complete all 3 projects', 'Pass final assessment', 'Build a capstone project']
    }
  },
  {
    id: 'fullstack-javascript',
    title: 'Full-Stack JavaScript',
    description: 'Build complete web applications with Node.js, Express, and databases',
    difficulty: 'advanced',
    estimatedTime: '8-12 weeks',
    icon: '🚀',
    color: 'bg-green-500/10 text-green-600 border-green-200',
    projects: ['blog-platform', 'chat-application', 'project-management-tool'],
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication', 'Deployment'],
    prerequisites: ['JavaScript', 'React', 'HTML/CSS'],
    learningObjectives: [
      'Build RESTful APIs with Node.js and Express',
      'Design and implement database schemas',
      'Implement user authentication and authorization',
      'Deploy applications to cloud platforms',
      'Understand server-side rendering and optimization'
    ],
    certification: {
      name: 'Full-Stack Developer Certificate',
      requirements: ['Complete all 3 projects', 'Deploy applications to production', 'Code review session']
    }
  },
  {
    id: 'typescript-professional',
    title: 'TypeScript Professional',
    description: 'Add type safety and advanced features to your JavaScript applications',
    difficulty: 'intermediate',
    estimatedTime: '4-6 weeks',
    icon: '📘',
    color: 'bg-blue-500/10 text-blue-600 border-blue-200',
    projects: ['typescript-api', 'type-safe-react-app', 'cli-tool'],
    skills: ['TypeScript', 'Type System', 'Generics', 'Advanced Types', 'Configuration'],
    prerequisites: ['JavaScript', 'Node.js'],
    learningObjectives: [
      'Understand TypeScript type system and syntax',
      'Implement advanced types and generics',
      'Configure TypeScript for different project types',
      'Migrate existing JavaScript projects to TypeScript',
      'Use TypeScript with popular frameworks'
    ]
  },
  {
    id: 'nextjs-expert',
    title: 'Next.js Expert',
    description: 'Build production-ready React applications with Next.js and modern tooling',
    difficulty: 'advanced',
    estimatedTime: '6-8 weeks',
    icon: '▲',
    color: 'bg-black/10 text-black border-gray-200',
    projects: ['nextjs-blog', 'ecommerce-nextjs', 'dashboard-analytics'],
    skills: ['Next.js', 'SSR', 'SSG', 'API Routes', 'Performance Optimization', 'Deployment'],
    prerequisites: ['React', 'JavaScript', 'TypeScript'],
    learningObjectives: [
      'Master Next.js App Router and file-based routing',
      'Implement server-side rendering and static generation',
      'Build and optimize API routes',
      'Understand performance optimization techniques',
      'Deploy Next.js applications to Vercel and other platforms'
    ],
    certification: {
      name: 'Next.js Expert Certificate',
      requirements: ['Complete all 3 projects', 'Performance audit', 'Production deployment']
    }
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Create cross-platform mobile apps with React Native and Expo',
    difficulty: 'intermediate',
    estimatedTime: '6-8 weeks',
    icon: '📱',
    color: 'bg-purple-500/10 text-purple-600 border-purple-200',
    projects: ['mobile-todo', 'weather-mobile-app', 'social-mobile-app'],
    skills: ['React Native', 'Expo', 'Navigation', 'Native APIs', 'App Store Deployment'],
    prerequisites: ['React', 'JavaScript'],
    learningObjectives: [
      'Understand React Native components and styling',
      'Implement navigation between screens',
      'Access device APIs and native features',
      'Handle data storage and state management',
      'Deploy apps to app stores'
    ]
  }
];

export interface LearningProgress {
  pathId: string;
  userId: string;
  currentProjectIndex: number;
  completedProjects: string[];
  startedAt: Date;
  estimatedCompletion?: Date;
  skillsAcquired: string[];
  timeSpent: number; // in minutes
}

export class LearningPathManager {
  private static storageKey = 'tracereverse_learning_paths';

  static getPathProgress(userId: string): LearningProgress[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(this.storageKey);
    const allProgress = data ? JSON.parse(data) : [];
    return allProgress.filter((p: LearningProgress) => p.userId === userId);
  }

  static startLearningPath(pathId: string, userId: string): LearningProgress {
    const path = learningPaths.find(p => p.id === pathId);
    if (!path) throw new Error('Learning path not found');

    const progress: LearningProgress = {
      pathId,
      userId,
      currentProjectIndex: 0,
      completedProjects: [],
      startedAt: new Date(),
      skillsAcquired: [],
      timeSpent: 0
    };

    const allProgress = this.getAllProgress();
    allProgress.push(progress);
    this.saveAllProgress(allProgress);

    return progress;
  }

  static updateProgress(userId: string, pathId: string, updates: Partial<LearningProgress>): void {
    const allProgress = this.getAllProgress();
    const index = allProgress.findIndex(
      (p: LearningProgress) => p.userId === userId && p.pathId === pathId
    );

    if (index !== -1) {
      allProgress[index] = { ...allProgress[index], ...updates };
      this.saveAllProgress(allProgress);
    }
  }

  static completeProject(userId: string, pathId: string, projectSlug: string): void {
    const pathProgress = this.getPathProgress(userId).find(p => p.pathId === pathId);
    if (!pathProgress) return;

    if (!pathProgress.completedProjects.includes(projectSlug)) {
      pathProgress.completedProjects.push(projectSlug);
      pathProgress.currentProjectIndex = Math.min(
        pathProgress.currentProjectIndex + 1,
        learningPaths.find(p => p.id === pathId)?.projects.length || 0
      );

      this.updateProgress(userId, pathId, {
        completedProjects: pathProgress.completedProjects,
        currentProjectIndex: pathProgress.currentProjectIndex
      });
    }
  }

  static getPathRecommendations(userId: string, completedProjects: string[]): LearningPath[] {
    const userProgress = this.getPathProgress(userId);
    const activePaths = userProgress.map(p => p.pathId);

    // Filter out already started paths and recommend based on completed projects
    const recommendations = learningPaths.filter(path => {
      if (activePaths.includes(path.id)) return false;

      // Check if user has prerequisites
      if (path.prerequisites) {
        const hasPrereqs = path.prerequisites.every(skill =>
          completedProjects.some(project => {
            // In a real app, you'd have a mapping of projects to skills
            return true; // Simplified for demo
          })
        );
        return hasPrereqs;
      }

      return true;
    });

    // Sort by difficulty (beginners first for new users)
    return recommendations.sort((a, b) => {
      const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    });
  }

  static calculatePathCompletion(userId: string, pathId: string): number {
    const progress = this.getPathProgress(userId).find(p => p.pathId === pathId);
    const path = learningPaths.find(p => p.id === pathId);

    if (!progress || !path) return 0;

    return (progress.completedProjects.length / path.projects.length) * 100;
  }

  private static getAllProgress(): LearningProgress[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private static saveAllProgress(progress: LearningProgress[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(progress));
  }
}
