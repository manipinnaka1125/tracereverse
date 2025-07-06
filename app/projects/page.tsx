"use client";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useState, useEffect } from "react";
import { ProjectSearchEngine, SearchFilters } from '@/lib/search';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStack, setSelectedStack] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isSearchInitialized, setIsSearchInitialized] = useState(false);

  // Initialize search engine
  useEffect(() => {
    ProjectSearchEngine.initializeSearch().then(() => {
      setIsSearchInitialized(true);
    });
  }, []);

  // Get filter options
  const { allStacks, difficulties, durations } = ProjectSearchEngine.getFilterOptions();

  // Apply filters
  useEffect(() => {
    if (!isSearchInitialized) return;

    const filters: Partial<SearchFilters> = {
      query: searchTerm,
      stack: selectedStack ? [selectedStack] : [],
      difficulty: selectedDifficulty ? [selectedDifficulty] : [],
      duration: selectedDuration ? [selectedDuration] : [],
      sortBy: sortBy as any
    };

    const results = ProjectSearchEngine.searchProjects(filters);
    setFilteredProjects(results.map(r => r.project));
  }, [searchTerm, selectedStack, selectedDifficulty, selectedDuration, sortBy, isSearchInitialized]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedStack("");
    setSelectedDifficulty("");
    setSelectedDuration("");
    setSortBy("relevance");
  };

  const hasActiveFilters = searchTerm || selectedStack || selectedDifficulty || selectedDuration || sortBy !== "relevance";

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Explore Projects 🎯
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Clone, study, and rebuild these hand-picked real-world projects. 
          Each comes with step-by-step instructions and learning objectives.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search projects, technologies, concepts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
          </div>
          
          {/* View Toggle */}
          <div className="flex border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-3 flex items-center gap-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-background text-foreground hover:bg-muted'} transition-colors`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-3 flex items-center gap-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-background text-foreground hover:bg-muted'} transition-colors`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              List
            </button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <select
            value={selectedStack}
            onChange={(e) => setSelectedStack(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="">All Technologies</option>
            {allStacks.map(stack => (
              <option key={stack} value={stack}>{stack}</option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="">All Levels</option>
            {difficulties.map(diff => (
              <option key={diff} value={diff}>
                {diff.charAt(0).toUpperCase() + diff.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="">Any Duration</option>
            {durations.map(duration => (
              <option key={duration} value={duration}>
                {duration === 'short' ? '< 8 hours' : duration === 'medium' ? '8-20 hours' : '20+ hours'}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="relevance">Relevance</option>
            <option value="difficulty">Difficulty</option>
            <option value="duration">Duration</option>
            <option value="popularity">Popularity</option>
            <option value="newest">Newest</option>
          </select>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors text-foreground flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Results Count and Active Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <p className="text-muted-foreground">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
          </p>
          
          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  "{searchTerm}"
                </span>
              )}
              {selectedStack && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {selectedStack}
                </span>
              )}
              {selectedDifficulty && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {selectedDifficulty}
                </span>
              )}
              {selectedDuration && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {selectedDuration === 'short' ? '< 8h' : selectedDuration === 'medium' ? '8-20h' : '20h+'}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Projects Grid/List */}
      {filteredProjects.length > 0 ? (
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">No projects found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search terms or filters
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Loading State */}
      {!isSearchInitialized && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground mt-2">Initializing search...</p>
        </div>
      )}
    </div>
  );
}
