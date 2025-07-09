"use client";
import { useState } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  LockClosedIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

export default function ProjectsPage() {
  const [isUnlocked] = useState(false); // Will be true when user completes fundamentals

  const projects = [
    {
      id: 'spotify-clone',
      title: 'Spotify Clone',
      description: 'Full-featured music streaming app with playlists, search, and audio player.',
      image: '/images/spotify-preview.jpg',
      difficulty: 'Advanced',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Spotify API'],
      estimatedTime: '40-50 hours',
      prerequisites: ['HTML/CSS Mastery', 'JavaScript Fundamentals', 'React Basics']
    },
    {
      id: 'discord-clone',
      title: 'Discord Clone',
      description: 'Real-time chat application with servers, channels, and voice chat.',
      image: '/images/discord-preview.jpg',
      difficulty: 'Expert',
      technologies: ['React', 'Next.js', 'Socket.io', 'Node.js', 'MongoDB'],
      estimatedTime: '60-70 hours',
      prerequisites: ['HTML/CSS Mastery', 'JavaScript Fundamentals', 'React Advanced']
    },
    {
      id: 'airbnb-clone',
      title: 'Airbnb Clone',
      description: 'Property rental platform with booking system and user profiles.',
      image: '/images/airbnb-preview.jpg',
      difficulty: 'Advanced',
      technologies: ['React', 'Next.js', 'Prisma', 'PostgreSQL', 'Stripe API'],
      estimatedTime: '50-60 hours',
      prerequisites: ['HTML/CSS Mastery', 'JavaScript Fundamentals', 'React Basics']
    },
    {
      id: 'netflix-clone',
      title: 'Netflix Clone',
      description: 'Video streaming platform with user authentication and recommendations.',
      image: '/images/netflix-preview.jpg',
      difficulty: 'Expert',
      technologies: ['React', 'Next.js', 'Firebase', 'TMDB API', 'Video.js'],
      estimatedTime: '45-55 hours',
      prerequisites: ['HTML/CSS Mastery', 'JavaScript Fundamentals', 'React Advanced']
    },
    {
      id: 'ecommerce-store',
      title: 'E-commerce Store',
      description: 'Complete online store with cart, checkout, and admin dashboard.',
      image: '/images/ecommerce-preview.jpg',
      difficulty: 'Advanced',
      technologies: ['React', 'Next.js', 'Stripe', 'Sanity CMS', 'TypeScript'],
      estimatedTime: '55-65 hours',
      prerequisites: ['HTML/CSS Mastery', 'JavaScript Fundamentals', 'React Basics']
    },
    {
      id: 'twitter-clone',
      title: 'Twitter Clone',
      description: 'Social media platform with posts, likes, follows, and real-time updates.',
      image: '/images/twitter-preview.jpg',
      difficulty: 'Advanced',
      technologies: ['React', 'Next.js', 'Supabase', 'PostgreSQL', 'Real-time'],
      estimatedTime: '40-50 hours',
      prerequisites: ['HTML/CSS Mastery', 'JavaScript Fundamentals', 'React Basics']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-16 text-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl mb-6"
          >
            🚀
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Advanced <span className="text-primary">Projects</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Real-world projects that mirror popular applications. Build your portfolio with industry-standard code.
          </p>

          {!isUnlocked && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8">
              <LockClosedIcon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <p className="text-amber-800 dark:text-amber-200 font-medium mb-2">
                🔒 Complete the fundamentals first!
              </p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Master HTML, CSS, JavaScript & React basics in our{" "}
                <Link href="/learn" className="underline font-medium">
                  Learning Path
                </Link>{" "}
                to unlock these advanced projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`bg-background rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  !isUnlocked ? 'opacity-60' : ''
                }`}>
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                    <div className="text-6xl">
                      {project.id === 'spotify-clone' ? '🎵' :
                       project.id === 'discord-clone' ? '💬' :
                       project.id === 'airbnb-clone' ? '🏠' :
                       project.id === 'netflix-clone' ? '🎬' :
                       project.id === 'ecommerce-store' ? '🛍️' : '🐦'}
                    </div>
                    {!isUnlocked && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <LockClosedIcon className="w-12 h-12 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.difficulty === 'Expert' 
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/20' 
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20'
                      }`}>
                        {project.difficulty}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <ClockIcon className="w-4 h-4" />
                      <span>{project.estimatedTime}</span>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Prerequisites */}
                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Prerequisites:</p>
                      <div className="space-y-1">
                        {project.prerequisites.map((prereq, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <CheckCircleIcon className="w-3 h-3 text-green-500" />
                            <span className="text-muted-foreground">{prereq}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6">
                      {isUnlocked ? (
                        <Link 
                          href={`/projects/${project.id}`}
                          className="w-full block text-center bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                          Start Project
                        </Link>
                      ) : (
                        <button 
                          disabled
                          className="w-full bg-muted text-muted-foreground py-2 px-4 rounded-lg font-medium cursor-not-allowed"
                        >
                          Complete Fundamentals First
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <RocketLaunchIcon className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with our comprehensive learning path to master the fundamentals, 
            then come back to tackle these industry-level projects.
          </p>
          <Link 
            href="/learn"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Begin Learning Journey
            <CheckCircleIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}