import { projects } from '@/content/projects';

export interface SearchFilters {
  query: string;
  stack: string[];
  difficulty: string[];
  duration: string[];
  categories: string[];
  sortBy: 'relevance' | 'difficulty' | 'duration' | 'popularity' | 'newest';
  onlyCompleted?: boolean;
  onlyBookmarked?: boolean;
}

export interface SearchResult {
  project: any;
  relevanceScore: number;
  matchedFields: string[];
}

export class ProjectSearchEngine {
  private static fuse: any = null;

  static async initializeSearch() {
    if (typeof window === 'undefined') return;
    
    // Dynamic import of Fuse.js for better performance
    const Fuse = (await import('fuse.js')).default;
    
    this.fuse = new Fuse(projects, {
      keys: [
        { name: 'title', weight: 0.3 },
        { name: 'description', weight: 0.2 },
        { name: 'tagline', weight: 0.2 },
        { name: 'stack', weight: 0.15 },
        { name: 'concepts', weight: 0.1 },
        { name: 'features', weight: 0.05 }
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true
    });
  }

  static searchProjects(filters: Partial<SearchFilters>): SearchResult[] {
    let results = projects.map(project => ({
      project,
      relevanceScore: 1,
      matchedFields: [] as string[]
    }));

    // Text search
    if (filters.query && this.fuse) {
      const fuseResults = this.fuse.search(filters.query);
      results = fuseResults.map((result: any) => ({
        project: result.item,
        relevanceScore: 1 - (result.score || 0),
        matchedFields: result.matches?.map((match: any) => match.key) || []
      }));
    }

    // Filter by stack
    if (filters.stack && filters.stack.length > 0) {
      results = results.filter(result => 
        filters.stack!.some(tech => 
          result.project.stack.some((projectTech: string) => 
            projectTech.toLowerCase().includes(tech.toLowerCase())
          )
        )
      );
    }

    // Filter by difficulty
    if (filters.difficulty && filters.difficulty.length > 0) {
      results = results.filter(result => 
        filters.difficulty!.includes(this.getProjectDifficulty(result.project))
      );
    }

    // Filter by estimated duration
    if (filters.duration && filters.duration.length > 0) {
      results = results.filter(result => 
        filters.duration!.includes(this.getProjectDuration(result.project))
      );
    }

    // Sort results
    results = this.sortResults(results, filters.sortBy || 'relevance');

    return results;
  }

  private static getProjectDifficulty(project: any): string {
    const stackComplexity = this.calculateStackComplexity(project.stack);
    const conceptCount = project.concepts?.length || 0;
    
    if (stackComplexity >= 8 || conceptCount >= 10) return 'advanced';
    if (stackComplexity >= 5 || conceptCount >= 6) return 'intermediate';
    return 'beginner';
  }

  private static getProjectDuration(project: any): string {
    const instructionCount = project.instructions?.length || 0;
    const conceptCount = project.concepts?.length || 0;
    
    const estimatedHours = instructionCount * 0.5 + conceptCount * 0.3;
    
    if (estimatedHours >= 20) return 'long'; // 20+ hours
    if (estimatedHours >= 8) return 'medium'; // 8-20 hours
    return 'short'; // < 8 hours
  }

  private static calculateStackComplexity(stack: string[]): number {
    const complexityMap: Record<string, number> = {
      'HTML': 1, 'CSS': 1, 'JavaScript': 2,
      'React': 3, 'Vue': 3, 'Angular': 4,
      'TypeScript': 2, 'Node.js': 3,
      'Express': 2, 'Next.js': 4,
      'MongoDB': 3, 'PostgreSQL': 3,
      'Docker': 4, 'AWS': 4,
      'GraphQL': 4, 'WebSocket': 3
    };

    return stack.reduce((total, tech) => total + (complexityMap[tech] || 2), 0);
  }

  private static sortResults(results: SearchResult[], sortBy: string): SearchResult[] {
    switch (sortBy) {
      case 'difficulty':
        return results.sort((a, b) => {
          const diffA = this.getProjectDifficulty(a.project);
          const diffB = this.getProjectDifficulty(b.project);
          const order = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
          return (order[diffA as keyof typeof order] || 2) - (order[diffB as keyof typeof order] || 2);
        });
      
      case 'duration':
        return results.sort((a, b) => {
          const durA = this.getProjectDuration(a.project);
          const durB = this.getProjectDuration(b.project);
          const order = { 'short': 1, 'medium': 2, 'long': 3 };
          return (order[durA as keyof typeof order] || 2) - (order[durB as keyof typeof order] || 2);
        });
      
      case 'popularity':
        // Sort by stack popularity (React, Next.js projects first)
        return results.sort((a, b) => {
          const popularStacks = ['React', 'Next.js', 'TypeScript', 'JavaScript'];
          const scoreA = a.project.stack.filter((tech: string) => popularStacks.includes(tech)).length;
          const scoreB = b.project.stack.filter((tech: string) => popularStacks.includes(tech)).length;
          return scoreB - scoreA;
        });
      
      case 'newest':
        // In a real app, you'd sort by creation date
        return results.reverse();
      
      default: // 'relevance'
        return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
    }
  }

  static getFilterOptions() {
    const allStacks = Array.from(new Set(projects.flatMap(p => p.stack))).sort();
    const difficulties = ['beginner', 'intermediate', 'advanced'];
    const durations = ['short', 'medium', 'long'];
    const categories = Array.from(new Set(projects.map(p => this.getProjectCategory(p)))).sort();

    return { allStacks, difficulties, durations, categories };
  }

  private static getProjectCategory(project: any): string {
    const stack = project.stack.join(' ').toLowerCase();
    
    if (stack.includes('react') || stack.includes('vue') || stack.includes('angular')) {
      return 'Frontend Framework';
    }
    if (stack.includes('node') || stack.includes('express') || stack.includes('api')) {
      return 'Backend/API';
    }
    if (stack.includes('html') && stack.includes('css') && !stack.includes('react')) {
      return 'Vanilla Web';
    }
    if (stack.includes('mobile') || stack.includes('react native')) {
      return 'Mobile';
    }
    return 'Full Stack';
  }

  static getSuggestions(query: string): string[] {
    if (!query || query.length < 2) return [];
    
    const suggestions = new Set<string>();
    
    // Add matching project titles
    projects.forEach(project => {
      if (project.title.toLowerCase().includes(query.toLowerCase())) {
        suggestions.add(project.title);
      }
      
      // Add matching stack technologies
      project.stack.forEach(tech => {
        if (tech.toLowerCase().includes(query.toLowerCase())) {
          suggestions.add(tech);
        }
      });
    });

    return Array.from(suggestions).slice(0, 8);
  }
}
