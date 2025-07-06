import { User } from './auth';

export interface ProgressEntry {
  id: string;
  projectSlug: string;
  userId: string;
  startedAt: Date;
  completedAt?: Date;
  timeSpent: number; // in minutes
  currentStep: number;
  totalSteps: number;
  notes: string[];
  challenges: string[];
  rating?: number; // 1-5 stars
}

export interface LearningStats {
  totalProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  totalTimeSpent: number;
  averageTimePerProject: number;
  favoriteStack: string[];
  weeklyProgress: {
    week: string;
    projectsCompleted: number;
    timeSpent: number;
  }[];
  skillProgression: {
    beginner: number;
    intermediate: number;
    advanced: number;
  };
}

export class ProgressTracker {
  private static storageKey = 'tracereverse_progress';

  static getProgress(): ProgressEntry[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  static saveProgress(progress: ProgressEntry[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(progress));
  }

  static startProject(projectSlug: string, userId: string, totalSteps: number): ProgressEntry {
    const progress = this.getProgress();
    const newEntry: ProgressEntry = {
      id: `${userId}-${projectSlug}-${Date.now()}`,
      projectSlug,
      userId,
      startedAt: new Date(),
      timeSpent: 0,
      currentStep: 0,
      totalSteps,
      notes: [],
      challenges: []
    };

    progress.push(newEntry);
    this.saveProgress(progress);
    return newEntry;
  }

  static updateProgress(
    entryId: string, 
    updates: Partial<ProgressEntry>
  ): void {
    const progress = this.getProgress();
    const index = progress.findIndex(p => p.id === entryId);
    
    if (index !== -1) {
      progress[index] = { ...progress[index], ...updates };
      this.saveProgress(progress);
    }
  }

  static completeProject(entryId: string, rating: number): void {
    this.updateProgress(entryId, {
      completedAt: new Date(),
      currentStep: -1, // Mark as completed
      rating
    });
  }

  static addNote(entryId: string, note: string): void {
    const progress = this.getProgress();
    const entry = progress.find(p => p.id === entryId);
    
    if (entry) {
      entry.notes.push(note);
      this.saveProgress(progress);
    }
  }

  static getUserStats(userId: string): LearningStats {
    const progress = this.getProgress().filter(p => p.userId === userId);
    const completed = progress.filter(p => p.completedAt);
    const inProgress = progress.filter(p => !p.completedAt);

    const totalTimeSpent = progress.reduce((sum, p) => sum + p.timeSpent, 0);
    const averageTimePerProject = completed.length > 0 
      ? totalTimeSpent / completed.length 
      : 0;

    // Generate weekly progress for last 8 weeks
    const weeklyProgress = this.generateWeeklyProgress(progress);

    return {
      totalProjects: progress.length,
      completedProjects: completed.length,
      inProgressProjects: inProgress.length,
      totalTimeSpent,
      averageTimePerProject,
      favoriteStack: this.getFavoriteStack(progress),
      weeklyProgress,
      skillProgression: {
        beginner: completed.filter(p => this.getProjectDifficulty(p.projectSlug) === 'beginner').length,
        intermediate: completed.filter(p => this.getProjectDifficulty(p.projectSlug) === 'intermediate').length,
        advanced: completed.filter(p => this.getProjectDifficulty(p.projectSlug) === 'advanced').length,
      }
    };
  }

  private static generateWeeklyProgress(progress: ProgressEntry[]) {
    const weeks = [];
    const now = new Date();

    for (let i = 7; i >= 0; i--) {
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - (i * 7));
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);

      const weekProjects = progress.filter(p => {
        const completedAt = p.completedAt ? new Date(p.completedAt) : null;
        return completedAt && completedAt >= weekStart && completedAt <= weekEnd;
      });

      weeks.push({
        week: `${weekStart.getMonth() + 1}/${weekStart.getDate()}`,
        projectsCompleted: weekProjects.length,
        timeSpent: weekProjects.reduce((sum, p) => sum + p.timeSpent, 0)
      });
    }

    return weeks;
  }

  private static getFavoriteStack(progress: ProgressEntry[]): string[] {
    // This would analyze completed projects and return most used technologies
    // For now, return mock data
    return ['React', 'TypeScript', 'Next.js', 'TailwindCSS'];
  }

  private static getProjectDifficulty(projectSlug: string): 'beginner' | 'intermediate' | 'advanced' {
    // Map project slugs to difficulty levels
    const difficultyMap: Record<string, 'beginner' | 'intermediate' | 'advanced'> = {
      'portfolio-site': 'beginner',
      'todo-app-react': 'intermediate',
      'ecommerce-app': 'advanced',
      'blog-platform': 'intermediate',
      'dashboard-analytics': 'advanced'
    };
    
    return difficultyMap[projectSlug] || 'intermediate';
  }
}

// Time tracking hook
export function useTimeTracker(projectSlug: string) {
  let startTime: number;
  let intervalId: NodeJS.Timeout;

  const startTracking = () => {
    startTime = Date.now();
    // In a real app, you might want to persist this more frequently
  };

  const stopTracking = () => {
    if (startTime) {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000 / 60); // in minutes
      // Update progress with time spent
      return timeSpent;
    }
    return 0;
  };

  return { startTracking, stopTracking };
}
