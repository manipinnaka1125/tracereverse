import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinedAt: Date;
  level: number;
  xp: number;
  streak: number;
  totalProjects: number;
  totalHours: number;
  badges: Badge[];
  preferences: UserPreferences;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  emailNotifications: boolean;
  soundEffects: boolean;
  autoSave: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  createdAt: Date;
  read: boolean;
  action?: {
    label: string;
    url: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  completed: boolean;
  completedAt?: Date;
  reward: {
    xp: number;
    badge?: Badge;
  };
}

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  
  // UI state
  sidebarOpen: boolean;
  theme: 'light' | 'dark' | 'auto';
  loading: boolean;
  
  // Notifications
  notifications: Notification[];
  unreadCount: number;
  
  // Achievements
  achievements: Achievement[];
  
  // Search & Filters
  searchQuery: string;
  selectedCategories: string[];
  selectedDifficulty: string[];
  selectedTechnologies: string[];
  sortBy: 'newest' | 'oldest' | 'difficulty' | 'popularity' | 'trending';
  viewMode: 'grid' | 'list';
  
  // Learning progress
  currentProject: string | null;
  completedProjects: string[];
  bookmarkedProjects: string[];
  projectProgress: Record<string, number>;
  studyTime: Record<string, number>;
  
  // Actions
  setUser: (user: User | null) => void;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
  addXP: (xp: number) => void;
  incrementStreak: () => void;
  
  setSidebarOpen: (open: boolean) => void;
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
  setLoading: (loading: boolean) => void;
  
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt' | 'read'>) => void;
  markNotificationRead: (id: string) => void;
  clearNotifications: () => void;
  
  updateAchievement: (id: string, progress: number) => void;
  completeAchievement: (id: string) => void;
  
  setSearchQuery: (query: string) => void;
  setSelectedCategories: (categories: string[]) => void;
  setSelectedDifficulty: (difficulty: string[]) => void;
  setSelectedTechnologies: (technologies: string[]) => void;
  setSortBy: (sortBy: 'newest' | 'oldest' | 'difficulty' | 'popularity' | 'trending') => void;
  setViewMode: (mode: 'grid' | 'list') => void;
  
  setCurrentProject: (projectId: string | null) => void;
  markProjectCompleted: (projectId: string) => void;
  toggleBookmark: (projectId: string) => void;
  updateProjectProgress: (projectId: string, progress: number) => void;
  addStudyTime: (projectId: string, minutes: number) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      
      sidebarOpen: false,
      theme: 'auto',
      loading: false,
      
      notifications: [],
      unreadCount: 0,
      
      achievements: [
        {
          id: 'first-project',
          title: 'First Steps',
          description: 'Complete your first project',
          icon: '🎯',
          progress: 0,
          maxProgress: 1,
          completed: false,
          reward: { xp: 100, badge: {
            id: 'beginner',
            name: 'Beginner',
            description: 'Started your learning journey',
            icon: '🌱',
            unlockedAt: new Date(),
            rarity: 'common'
          }}
        },
        {
          id: 'week-streak',
          title: 'Week Warrior',
          description: 'Maintain a 7-day learning streak',
          icon: '🔥',
          progress: 0,
          maxProgress: 7,
          completed: false,
          reward: { xp: 500 }
        },
        {
          id: 'ten-projects',
          title: 'Project Master',
          description: 'Complete 10 projects',
          icon: '👑',
          progress: 0,
          maxProgress: 10,
          completed: false,
          reward: { xp: 1000 }
        }
      ],
      
      searchQuery: '',
      selectedCategories: [],
      selectedDifficulty: [],
      selectedTechnologies: [],
      sortBy: 'newest',
      viewMode: 'grid',
      
      currentProject: null,
      completedProjects: [],
      bookmarkedProjects: [],
      projectProgress: {},
      studyTime: {},
      
      // Actions
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      
      updateUserPreferences: (preferences) => set((state) => ({
        user: state.user ? { ...state.user, preferences: { ...state.user.preferences, ...preferences } } : null
      })),
      
      addXP: (xp) => set((state) => {
        if (!state.user) return state;
        const newXP = state.user.xp + xp;
        const newLevel = Math.floor(newXP / 1000) + 1;
        return {
          user: { ...state.user, xp: newXP, level: newLevel }
        };
      }),
      
      incrementStreak: () => set((state) => {
        if (!state.user) return state;
        return {
          user: { ...state.user, streak: state.user.streak + 1 }
        };
      }),
      
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setTheme: (theme) => set({ theme }),
      setLoading: (loading) => set({ loading }),
      
      addNotification: (notification) => set((state) => {
        const newNotification: Notification = {
          ...notification,
          id: Date.now().toString(),
          createdAt: new Date(),
          read: false
        };
        return {
          notifications: [newNotification, ...state.notifications],
          unreadCount: state.unreadCount + 1
        };
      }),
      
      markNotificationRead: (id) => set((state) => ({
        notifications: state.notifications.map(n => 
          n.id === id ? { ...n, read: true } : n
        ),
        unreadCount: Math.max(0, state.unreadCount - 1)
      })),
      
      clearNotifications: () => set({ notifications: [], unreadCount: 0 }),
      
      updateAchievement: (id, progress) => set((state) => ({
        achievements: state.achievements.map(a => 
          a.id === id ? { ...a, progress: Math.min(progress, a.maxProgress) } : a
        )
      })),
      
      completeAchievement: (id) => set((state) => {
        const achievement = state.achievements.find(a => a.id === id);
        if (!achievement || achievement.completed) return state;
        
        // Add XP and badge if any
        const newState = { ...state };
        if (newState.user) {
          newState.user.xp += achievement.reward.xp;
          if (achievement.reward.badge) {
            newState.user.badges.push(achievement.reward.badge);
          }
        }
        
        return {
          ...newState,
          achievements: state.achievements.map(a => 
            a.id === id ? { ...a, completed: true, completedAt: new Date() } : a
          )
        };
      }),
      
      setSearchQuery: (query) => set({ searchQuery: query }),
      setSelectedCategories: (categories) => set({ selectedCategories: categories }),
      setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),
      setSelectedTechnologies: (technologies) => set({ selectedTechnologies: technologies }),
      setSortBy: (sortBy) => set({ sortBy }),
      setViewMode: (mode) => set({ viewMode: mode }),
      
      setCurrentProject: (projectId) => set({ currentProject: projectId }),
      
      markProjectCompleted: (projectId) => set((state) => {
        if (state.completedProjects.includes(projectId)) return state;
        
        const newState = {
          completedProjects: [...state.completedProjects, projectId],
          projectProgress: { ...state.projectProgress, [projectId]: 100 }
        };
        
        // Update achievements
        const projectCount = newState.completedProjects.length;
        const updatedAchievements = state.achievements.map(a => {
          if (a.id === 'first-project' && projectCount >= 1) {
            return { ...a, progress: 1 };
          }
          if (a.id === 'ten-projects' && projectCount <= 10) {
            return { ...a, progress: projectCount };
          }
          return a;
        });
        
        return { ...newState, achievements: updatedAchievements };
      }),
      
      toggleBookmark: (projectId) => set((state) => ({
        bookmarkedProjects: state.bookmarkedProjects.includes(projectId)
          ? state.bookmarkedProjects.filter(id => id !== projectId)
          : [...state.bookmarkedProjects, projectId]
      })),
      
      updateProjectProgress: (projectId, progress) => set((state) => ({
        projectProgress: { ...state.projectProgress, [projectId]: progress }
      })),
      
      addStudyTime: (projectId, minutes) => set((state) => ({
        studyTime: { 
          ...state.studyTime, 
          [projectId]: (state.studyTime[projectId] || 0) + minutes 
        }
      }))
    }),
    {
      name: 'tracereverse-storage',
      partialize: (state) => ({
        user: state.user,
        theme: state.theme,
        completedProjects: state.completedProjects,
        bookmarkedProjects: state.bookmarkedProjects,
        projectProgress: state.projectProgress,
        studyTime: state.studyTime,
        achievements: state.achievements,
        notifications: state.notifications.slice(0, 50) // Keep only recent notifications
      })
    }
  )
);
