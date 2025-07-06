// Authentication system for TraceReverse
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  joinedAt: Date;
  completedProjects: string[];
  bookmarkedProjects: string[];
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    preferredLanguages: string[];
  };
  stats: {
    projectsCompleted: number;
    totalTimeSpent: number; // in minutes
    streakDays: number;
    longestStreak: number;
    badgesEarned: string[];
  };
}

// Mock authentication - in real app, use NextAuth.js or similar
export class AuthService {
  private static currentUser: User | null = null;

  static getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    
    if (!this.currentUser) {
      const userData = localStorage.getItem('tracereverse_user');
      if (userData) {
        this.currentUser = JSON.parse(userData);
      }
    }
    return this.currentUser;
  }

  static login(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock login
        const user: User = {
          id: 'user-1',
          username: 'developer_pro',
          email: email,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          joinedAt: new Date('2024-01-15'),
          completedProjects: ['portfolio-site', 'todo-app-react'],
          bookmarkedProjects: ['ecommerce-app', 'blog-platform'],
          skillLevel: 'intermediate',
          preferences: {
            theme: 'dark',
            notifications: true,
            preferredLanguages: ['JavaScript', 'TypeScript', 'React']
          },
          stats: {
            projectsCompleted: 12,
            totalTimeSpent: 2480, // ~41 hours
            streakDays: 7,
            longestStreak: 15,
            badgesEarned: ['first-project', 'week-streak', 'react-master']
          }
        };

        this.currentUser = user;
        localStorage.setItem('tracereverse_user', JSON.stringify(user));
        resolve(user);
      }, 1000);
    });
  }

  static logout(): void {
    this.currentUser = null;
    localStorage.removeItem('tracereverse_user');
  }

  static updateUser(updates: Partial<User>): void {
    if (this.currentUser) {
      this.currentUser = { ...this.currentUser, ...updates };
      localStorage.setItem('tracereverse_user', JSON.stringify(this.currentUser));
    }
  }

  static completeProject(projectSlug: string): void {
    if (this.currentUser && !this.currentUser.completedProjects.includes(projectSlug)) {
      this.currentUser.completedProjects.push(projectSlug);
      this.currentUser.stats.projectsCompleted++;
      this.updateUser(this.currentUser);
    }
  }

  static toggleBookmark(projectSlug: string): void {
    if (!this.currentUser) return;
    
    const isBookmarked = this.currentUser.bookmarkedProjects.includes(projectSlug);
    if (isBookmarked) {
      this.currentUser.bookmarkedProjects = this.currentUser.bookmarkedProjects.filter(p => p !== projectSlug);
    } else {
      this.currentUser.bookmarkedProjects.push(projectSlug);
    }
    this.updateUser(this.currentUser);
  }
}

// Achievement system
export const achievements = [
  {
    id: 'first-project',
    title: 'First Steps',
    description: 'Complete your first project',
    icon: '🎯',
    condition: (user: User) => user.stats.projectsCompleted >= 1
  },
  {
    id: 'week-streak',
    title: 'Week Warrior',
    description: 'Maintain a 7-day learning streak',
    icon: '🔥',
    condition: (user: User) => user.stats.streakDays >= 7
  },
  {
    id: 'react-master',
    title: 'React Master',
    description: 'Complete 5 React projects',
    icon: '⚛️',
    condition: (user: User) => user.completedProjects.length >= 5
  },
  {
    id: 'code-veteran',
    title: 'Code Veteran',
    description: 'Spend 100+ hours learning',
    icon: '🏆',
    condition: (user: User) => user.stats.totalTimeSpent >= 6000
  }
];

export function getUnlockedAchievements(user: User) {
  return achievements.filter(achievement => achievement.condition(user));
}
