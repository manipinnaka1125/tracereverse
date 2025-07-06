"use client";
import { useState } from 'react';
import { learningPaths, LearningPath } from '@/lib/learning-paths';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ClockIcon, AcademicCapIcon, StarIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function LearningPathsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');

  const filteredPaths = selectedDifficulty 
    ? learningPaths.filter(path => path.difficulty === selectedDifficulty)
    : learningPaths;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'advanced': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Learning Paths</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Structured learning journeys to master specific technologies and frameworks through real-world projects
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-2 p-1 bg-muted rounded-lg">
          <button
            onClick={() => setSelectedDifficulty('')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedDifficulty === '' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All Levels
          </button>
          <button
            onClick={() => setSelectedDifficulty('beginner')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedDifficulty === 'beginner' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Beginner
          </button>
          <button
            onClick={() => setSelectedDifficulty('intermediate')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedDifficulty === 'intermediate' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Intermediate
          </button>
          <button
            onClick={() => setSelectedDifficulty('advanced')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedDifficulty === 'advanced' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Advanced
          </button>
        </div>
      </div>

      {/* Learning Paths Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPaths.map((path, index) => (
          <motion.div
            key={path.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
          >
            {/* Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">{path.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{path.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(path.difficulty)}`}>
                      {path.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <ClockIcon className="w-4 h-4" />
                      <span>{path.estimatedTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">{path.description}</p>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{path.projects.length}</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{path.skills.length}</div>
                  <div className="text-xs text-muted-foreground">Skills</div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">You'll Learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {path.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {path.skills.length > 4 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{path.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Learning Objectives */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Objectives:</h4>
                <ul className="space-y-1">
                  {path.learningObjectives.slice(0, 3).map((objective, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <StarIcon className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link href={`/projects`} className="block">
                <button className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Start Learning Path
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPaths.length === 0 && (
        <div className="text-center py-12">
          <AcademicCapIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No learning paths found</h3>
          <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-12 p-8 bg-muted/30 rounded-xl">
        <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Choose a learning path that matches your skill level and start building real-world projects today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Browse All Projects
            </button>
          </Link>
          <Link href="/learn">
            <button className="px-6 py-3 border border-border bg-background hover:bg-muted rounded-lg transition-colors font-medium">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
