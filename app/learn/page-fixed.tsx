"use client";
import React from 'react';
import Link from "next/link";
import { 
  DocumentTextIcon,
  SwatchIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  PlayIcon,
  ArrowRightIcon,
  BookOpenIcon,
  LightBulbIcon,
  AcademicCapIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
  FireIcon,
  EyeIcon,
  CpuChipIcon
} from "@heroicons/react/24/outline";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-16 text-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-8">🎓</div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Master <span className="text-primary">Web Development</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn to reverse engineer and build any website from scratch. Start with HTML & CSS fundamentals, 
            then progress through JavaScript, React, and Node.js with hands-on projects.
          </p>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 justify-center mb-3">
              <FireIcon className="w-6 h-6 text-orange-600" />
              <span className="text-orange-800 dark:text-orange-200 font-semibold text-lg">
                Fundamentals-First Approach
              </span>
            </div>
            <p className="text-orange-700 dark:text-orange-300">
              Master the building blocks before tackling complex projects. No shortcuts, just solid foundations.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="#html-css" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <PlayIcon className="w-5 h-5" />
              Start Learning
            </Link>
            <Link 
              href="#curriculum" 
              className="border border-border bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center gap-2"
            >
              <BookOpenIcon className="w-5 h-5" />
              View Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Path Overview */}
      <section id="curriculum" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Complete Learning Path
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* HTML & CSS Fundamentals */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <DocumentTextIcon className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-foreground">HTML & CSS</h3>
                <CheckCircleIcon className="w-6 h-6 text-green-600 ml-auto" />
              </div>
              <p className="text-muted-foreground mb-4">
                Master the structure and styling of web pages. Learn semantic HTML and modern CSS techniques.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Topics covered:</div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Semantic HTML Elements</li>
                  <li>• CSS Grid & Flexbox</li>
                  <li>• Responsive Design</li>
                  <li>• CSS Animations</li>
                </ul>
              </div>
              <Link 
                href="#html-css" 
                className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                Start Learning <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* JavaScript */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <CodeBracketIcon className="w-8 h-8 text-yellow-600" />
                <h3 className="text-xl font-semibold text-foreground">JavaScript</h3>
                <div className="ml-auto w-6 h-6 rounded-full border-2 border-muted"></div>
              </div>
              <p className="text-muted-foreground mb-4">
                Learn programming fundamentals and DOM manipulation to make your websites interactive.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Topics covered:</div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Variables & Functions</li>
                  <li>• DOM Manipulation</li>
                  <li>• Event Handling</li>
                  <li>• ES6+ Features</li>
                </ul>
              </div>
              <div className="mt-4 text-sm text-muted-foreground italic">
                Complete HTML & CSS first
              </div>
            </div>

            {/* React */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <CubeTransparentIcon className="w-8 h-8 text-cyan-600" />
                <h3 className="text-xl font-semibold text-foreground">React</h3>
                <div className="ml-auto w-6 h-6 rounded-full border-2 border-muted"></div>
              </div>
              <p className="text-muted-foreground mb-4">
                Build modern, component-based user interfaces with React and its ecosystem.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Topics covered:</div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Components & JSX</li>
                  <li>• State & Props</li>
                  <li>• Hooks & Context</li>
                  <li>• React Router</li>
                </ul>
              </div>
              <div className="mt-4 text-sm text-muted-foreground italic">
                Complete JavaScript first
              </div>
            </div>

            {/* Node.js */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <CommandLineIcon className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-foreground">Node.js</h3>
                <div className="ml-auto w-6 h-6 rounded-full border-2 border-muted"></div>
              </div>
              <p className="text-muted-foreground mb-4">
                Learn server-side JavaScript to build APIs and full-stack applications.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Topics covered:</div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Express.js Framework</li>
                  <li>• RESTful APIs</li>
                  <li>• Database Integration</li>
                  <li>• Authentication</li>
                </ul>
              </div>
              <div className="mt-4 text-sm text-muted-foreground italic">
                Complete React first
              </div>
            </div>

            {/* Advanced Projects */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-semibold text-foreground">Advanced Projects</h3>
                <div className="ml-auto w-6 h-6 rounded-full border-2 border-muted"></div>
              </div>
              <p className="text-muted-foreground mb-4">
                Reverse engineer and rebuild complex real-world applications from scratch.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Projects include:</div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• E-commerce Platform</li>
                  <li>• Social Media App</li>
                  <li>• Dashboard Analytics</li>
                  <li>• Mobile-First Design</li>
                </ul>
              </div>
              <div className="mt-4 text-sm text-muted-foreground italic">
                Complete all fundamentals first
              </div>
            </div>

            {/* Tools & Deployment */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <CpuChipIcon className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold text-foreground">Tools & Deployment</h3>
                <div className="ml-auto w-6 h-6 rounded-full border-2 border-muted"></div>
              </div>
              <p className="text-muted-foreground mb-4">
                Learn industry-standard tools and deployment strategies for production apps.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Topics covered:</div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Git & GitHub</li>
                  <li>• Webpack & Vite</li>
                  <li>• Docker & CI/CD</li>
                  <li>• Cloud Deployment</li>
                </ul>
              </div>
              <div className="mt-4 text-sm text-muted-foreground italic">
                Complete Node.js first
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HTML & CSS Section */}
      <section id="html-css" className="px-6 py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <DocumentTextIcon className="w-10 h-10 text-blue-600" />
            <div>
              <h2 className="text-3xl font-bold text-foreground">HTML & CSS Fundamentals</h2>
              <p className="text-muted-foreground">Start here - Master the building blocks of the web</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Learning Content */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <LightBulbIcon className="w-6 h-6 text-yellow-500" />
                  What You'll Learn
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Semantic HTML structure and accessibility
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    CSS Grid and Flexbox for modern layouts
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Responsive design and mobile-first approach
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    CSS animations and transitions
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <PuzzlePieceIcon className="w-6 h-6 text-blue-500" />
                  Hands-on Projects
                </h3>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Personal Portfolio</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Build a responsive portfolio website showcasing your skills and projects.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded">HTML5</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded">CSS3</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded">Responsive</span>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Landing Page</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Create a modern landing page with animations and modern CSS techniques.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded">Flexbox</span>
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded">Grid</span>
                      <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded">Animations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpenIcon className="w-6 h-6 text-green-500" />
                  Essential Resources
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="font-medium text-foreground">MDN HTML Documentation</div>
                    <div className="text-sm text-muted-foreground">Complete HTML reference and guides</div>
                  </a>
                  <a 
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="font-medium text-foreground">MDN CSS Documentation</div>
                    <div className="text-sm text-muted-foreground">Comprehensive CSS reference</div>
                  </a>
                  <a 
                    href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="font-medium text-foreground">CSS-Tricks Flexbox Guide</div>
                    <div className="text-sm text-muted-foreground">Visual guide to CSS Flexbox</div>
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AcademicCapIcon className="w-6 h-6 text-purple-500" />
                  Learning Tips
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Practice coding every day, even if just for 30 minutes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Build projects you're passionate about
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Don't move to JavaScript until you're comfortable with CSS
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Use browser dev tools to experiment and debug
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <CheckCircleIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                Ready to Start?
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Begin with HTML & CSS fundamentals. Master these concepts before moving to JavaScript.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Begin HTML & CSS Course
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers who've mastered web development through hands-on projects and real-world practice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="#html-css" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <RocketLaunchIcon className="w-6 h-6" />
              Start Learning Now
            </Link>
            <Link 
              href="/projects" 
              className="border border-border bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center gap-2"
            >
              <EyeIcon className="w-6 h-6" />
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
