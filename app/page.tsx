"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon, CodeBracketIcon, AcademicCapIcon, StarIcon } from "@heroicons/react/24/outline";
import { projects } from "@/content/projects";
import { learningPaths } from "@/lib/learning-paths";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const stats = {
    totalProjects: projects.length,
    githubStars: 2400,
    learningPaths: learningPaths.length,
    openSource: 100
  };

  const featuredProjects = projects.slice(0, 6);
  const featuredPaths = learningPaths.slice(0, 3);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer at Google",
      content: "TraceReverse helped me understand how modern web apps are built. The reverse engineering approach is brilliant!",
      avatar: "👩‍💻"
    },
    {
      name: "Marcus Rodriguez",
      role: "Full Stack Engineer",
      content: "I learned so much by studying real projects. The hands-on approach is unmatched.",
      avatar: "👨‍💻"
    },
    {
      name: "Aisha Patel",
      role: "React Developer",
      content: "Finally, a platform that teaches by showing real code instead of toy examples. Game changer!",
      avatar: "👩‍🎓"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl mb-6"
          >
            🔍
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Learn by <span className="text-primary">Reverse Engineering</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Clone real-world projects, study the code, understand every line, 
            and rebuild them yourself. The best way to learn is by doing.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-6 mb-8 text-sm font-medium"
          >
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <span className="text-lg">✓</span>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <span className="text-lg">✓</span>
              <span>No Sign-up Required</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
              <span className="text-lg">✓</span>
              <span>Open Source</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/projects">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-200"
              >
                Explore Projects 🚀
              </motion.button>
            </Link>
            <Link href="/learning-paths">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-border bg-background hover:bg-muted font-semibold rounded-lg transition-all duration-200"
              >
                Browse Learning Paths
              </motion.button>
            </Link>
          </motion.div>

          {/* Platform Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className="text-2xl font-bold text-primary">{stats.totalProjects}+</div>
              <div className="text-sm text-muted-foreground">Real Projects</div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className="text-2xl font-bold text-primary">{stats.learningPaths}</div>
              <div className="text-sm text-muted-foreground">Learning Paths</div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className="text-2xl font-bold text-primary">{stats.githubStars.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">GitHub Stars</div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className="text-2xl font-bold text-primary">{stats.openSource}%</div>
              <div className="text-sm text-muted-foreground">Open Source</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Master web development by reverse engineering real-world applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Clone & Explore</h3>
              <p className="text-muted-foreground">
                Clone real-world projects from GitHub and explore their structure, code, and features.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Study & Learn</h3>
              <p className="text-muted-foreground">
                Follow guided tutorials to understand every line of code and the patterns used.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Build & Master</h3>
              <p className="text-muted-foreground">
                Recreate features from scratch and build your own variations to cement your learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Structured Learning Paths</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow curated learning paths designed by industry experts to master specific technologies and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{path.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{path.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{path.projects.length} projects</span>
                      <span>{path.difficulty}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{path.description}</p>
                <div className="flex flex-wrap gap-2">
                  {path.skills?.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {path.skills && path.skills.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{path.skills.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/learning-paths">
              <button className="px-6 py-3 bg-background border border-border rounded-lg hover:bg-muted transition-colors">
                View All Learning Paths
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive into real-world applications and learn by dissecting their code
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/projects">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Explore All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">What Developers Say</h2>
            <p className="text-muted-foreground">
              Join thousands of developers who learned by reverse engineering
            </p>
          </div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-xl p-8 border border-border text-center"
              >
                <div className="text-4xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <blockquote className="text-lg text-muted-foreground mb-4">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="font-semibold text-foreground">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Learn by Doing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start reverse engineering real projects today. No signup required, completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-200"
              >
                Start Learning Now
              </motion.button>
            </Link>
            <Link href="/learning-paths">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-border bg-background hover:bg-muted font-semibold rounded-lg transition-all duration-200"
              >
                Browse Learning Paths
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
