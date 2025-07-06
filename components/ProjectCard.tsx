"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClockIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  image?: string;
  github: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
  features?: string[];
}

export function ProjectCard({ project }: { project: Project }) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'advanced': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
    >
      {/* Header with difficulty badge */}
      <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border/50 relative">
        {/* Difficulty Badge */}
        {project.difficulty && (
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
              {project.difficulty}
            </span>
          </div>
        )}
        
        {/* Project Icon */}
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <CodeBracketIcon className="w-6 h-6 text-primary" />
        </div>
        
        {/* Title and tagline */}
        <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-primary font-medium">{project.tagline}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          {project.estimatedTime && (
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              <span>{project.estimatedTime}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <CodeBracketIcon className="w-4 h-4" />
            <span>{project.stack.length} technologies</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{project.stack.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link 
            href={`/projects/${project.slug}`}
            className="flex-1"
          >
            <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
              Start Learning
            </button>
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
