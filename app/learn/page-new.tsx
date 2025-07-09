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
  AcademicCapIcon,
  BeakerIcon,
  CommandLineIcon,
  CpuChipIcon,
  FireIcon,
  LightBulbIcon,
  PuzzlePieceIcon
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
        </div>
      </section>

      {/* Learning Path Overview */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Your Complete Learning Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phase 1: HTML & CSS */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <DocumentTextIcon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 1</h3>
              <h4 className="text-lg font-medium text-orange-700 dark:text-orange-300 mb-3">HTML & CSS</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Master semantic HTML structure and modern CSS layouts, animations, and responsive design.
              </p>
              <div className="text-xs text-orange-600 font-medium">3-4 weeks • Foundation</div>
            </div>

            {/* Phase 2: JavaScript */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                <CodeBracketIcon className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 2</h3>
              <h4 className="text-lg font-medium text-yellow-700 dark:text-yellow-300 mb-3">JavaScript</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Learn programming fundamentals, DOM manipulation, API integration, and modern ES6+ features.
              </p>
              <div className="text-xs text-yellow-600 font-medium">4-5 weeks • Programming</div>
            </div>

            {/* Phase 3: React */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <CubeTransparentIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 3</h3>
              <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-3">React</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Build interactive UIs with components, hooks, state management, and modern React patterns.
              </p>
              <div className="text-xs text-blue-600 font-medium">4-5 weeks • Frontend</div>
            </div>

            {/* Phase 4: Full-Stack */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <CommandLineIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 4</h3>
              <h4 className="text-lg font-medium text-purple-700 dark:text-purple-300 mb-3">Node.js</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Create APIs, handle databases, authentication, and deploy full-stack applications.
              </p>
              <div className="text-xs text-purple-600 font-medium">5-6 weeks • Backend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus: HTML & CSS Deep Dive */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-full mb-4">
              <span className="text-2xl">🏗️</span>
              <span className="font-semibold">Currently Learning</span>
              <span>•</span>
              <span>Phase 1: HTML & CSS</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              HTML & CSS Fundamentals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Before jumping into complex frameworks, let's master the foundational technologies that power every website.
            </p>
          </div>

          {/* HTML Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                  <DocumentTextIcon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">HTML Mastery</h3>
                  <p className="text-muted-foreground">Semantic structure & accessibility</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Document structure & semantic elements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Forms, inputs & validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Accessibility best practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm">SEO-friendly markup</span>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <PuzzlePieceIcon className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-sm">Project:</span>
                </div>
                <p className="text-sm font-medium">Portfolio Landing Page</p>
                <p className="text-xs text-muted-foreground mt-1">Build a responsive personal portfolio with semantic HTML</p>
              </div>
            </div>

            {/* CSS Section */}
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <SwatchIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">CSS Mastery</h3>
                  <p className="text-muted-foreground">Modern layouts & styling</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Flexbox & Grid layouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Responsive design principles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Animations & transitions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm">CSS variables & architecture</span>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <PuzzlePieceIcon className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-sm">Project:</span>
                </div>
                <p className="text-sm font-medium">E-commerce Product Page</p>
                <p className="text-xs text-muted-foreground mt-1">Responsive design with modern CSS techniques</p>
              </div>
            </div>
          </div>

          {/* Hands-on Example */}
          <div className="bg-background rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Learn by Building: Modern Card Component
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* HTML Code */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                    <DocumentTextIcon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">HTML Structure</h4>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                  <pre className="text-sm text-gray-100">
{`<article class="profile-card">
  <header class="card-header">
    <img src="avatar.jpg" 
         alt="Sarah Wilson" 
         class="avatar">
    <div class="user-info">
      <h2 class="name">Sarah Wilson</h2>
      <p class="title">Frontend Developer</p>
    </div>
  </header>
  
  <main class="card-content">
    <p class="bio">
      Passionate about creating beautiful, 
      accessible web experiences.
    </p>
  </main>
  
  <footer class="card-actions">
    <button class="btn primary">Follow</button>
    <button class="btn secondary">Message</button>
  </footer>
</article>`}
                  </pre>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• <strong>Semantic HTML:</strong> Using proper elements like article, header, main, footer</p>
                  <p>• <strong>Accessibility:</strong> Alt text for images, proper heading hierarchy</p>
                  <p>• <strong>Clean Structure:</strong> Logical organization of content</p>
                </div>
              </div>

              {/* CSS Code */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <SwatchIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">CSS Styling</h4>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4 max-h-80 overflow-y-auto">
                  <pre className="text-sm text-gray-100">
{`.profile-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 400px;
  transition: transform 0.2s ease;
}

.profile-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f0f0f0;
}

.name {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
}

.title {
  font-size: 0.875rem;
  color: #666;
  margin: 4px 0 0 0;
}

.bio {
  color: #4a4a4a;
  line-height: 1.5;
  margin-bottom: 20px;
}

.card-actions {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn.primary {
  background: #3b82f6;
  color: white;
}

.btn.primary:hover {
  background: #2563eb;
}

.btn.secondary {
  background: #f1f5f9;
  color: #475569;
}

.btn.secondary:hover {
  background: #e2e8f0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-card {
    padding: 16px;
    max-width: 100%;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
  }
  
  .card-actions {
    flex-direction: column;
  }
}`}
                  </pre>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• <strong>Modern CSS:</strong> Flexbox for layouts, custom properties</p>
                  <p>• <strong>Responsive:</strong> Mobile-first approach with media queries</p>
                  <p>• <strong>Interactive:</strong> Hover effects and smooth transitions</p>
                </div>
              </div>
            </div>

            {/* Live Result */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="text-xl font-semibold text-center mb-6 text-foreground">Live Result</h4>
              <div className="flex justify-center">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm border transform hover:-translate-y-1 transition-all duration-200 hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-15 h-15 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-3 border-gray-100">
                      SW
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Sarah Wilson</h4>
                      <p className="text-gray-600 text-sm">Frontend Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5 leading-relaxed">Passionate about creating beautiful, accessible web experiences.</p>
                  <div className="flex gap-3">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                      Follow
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors">
                      Message
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-4 text-sm">
                This is what your code creates! Professional, responsive, and interactive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon: Advanced Projects */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-border">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <RocketLaunchIcon className="w-8 h-8 text-gray-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              🔒 Advanced Projects Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Master HTML & CSS fundamentals first, then unlock these exciting projects:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 opacity-60">
              {[
                '🎵 Spotify Clone with Audio Player',
                '💬 Discord Clone with Real-time Chat', 
                '🏠 Airbnb Clone with Booking System',
                '🎬 Netflix Clone with Video Streaming',
                '🛒 E-commerce Store with Cart',
                '🐦 Twitter Clone with Posts & Likes',
                '📱 Instagram Clone with Photo Sharing',
                '💼 LinkedIn Clone with Networking'
              ].map((project, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm">{project}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6 border border-border/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <LightBulbIcon className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-foreground">Why Fundamentals First?</span>
              </div>
              <p className="text-sm text-muted-foreground">
                These advanced projects use frameworks like React, Next.js, and Node.js. Having solid HTML/CSS/JavaScript 
                knowledge makes learning them <strong>10x easier and more enjoyable!</strong> You'll understand what's 
                happening under the hood and build better, more maintainable applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Begin with HTML & CSS fundamentals, build real projects, and progressively unlock advanced web development skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 justify-center">
              <PlayIcon className="w-5 h-5" />
              Start HTML Fundamentals
            </button>
            <Link href="/projects" className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-200 flex items-center gap-2 justify-center">
              <ArrowRightIcon className="w-5 h-5" />
              Preview Advanced Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
