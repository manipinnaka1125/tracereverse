"use client";
import Link from "next/link";

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
      case 'beginner': return 'bg-green-500/10 text-green-600 border-green-200 dark:border-green-800';
      case 'intermediate': return 'bg-yellow-500/10 text-yellow-600 border-yellow-200 dark:border-yellow-800';
      case 'advanced': return 'bg-red-500/10 text-red-600 border-red-200 dark:border-red-800';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 to-secondary/10">
        <img
          src={project.image || "/images/default.png"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          alt={project.title}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/default.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Difficulty Badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 ${getDifficultyColor(project.difficulty || 'intermediate')}`}>
            {project.difficulty || 'Intermediate'}
          </span>
        </div>

        {/* Estimated Time Badge */}
        <div className="absolute bottom-4 right-4">
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
            {project.estimatedTime || '8-12 hours'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-primary font-medium">
            {project.tagline}
          </p>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Features */}
        {project.features && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {project.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md"
                >
                  {feature}
                </span>
              ))}
              {project.features.length > 3 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                  +{project.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {project.stack.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link 
            href={`/projects/${project.slug}`}
            className="flex-1 bg-primary text-primary-foreground text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Learn Now
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-border text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
