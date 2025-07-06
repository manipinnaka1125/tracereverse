import { projects } from "@/content/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - TraceReverse`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {project.tagline}
        </p>
        
        {/* Project Image */}
        {project.image && (
          <div className="rounded-xl overflow-hidden mb-6 shadow-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </div>
        )}
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Key Features */}
      {project.features && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center text-muted-foreground">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Learning Concepts */}
      {project.concepts && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.concepts.map((concept, index) => (
              <div key={index} className="flex items-center p-3 bg-card rounded-lg">
                <span className="text-blue-500 mr-2">📚</span>
                <span className="text-foreground">{concept}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Step-by-Step Instructions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Instructions</h2>
        <div className="space-y-4">
          {project.instructions.map((step, index) => (
            <div key={index} className="flex gap-4 p-4 bg-card rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-foreground">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      {project.challenges && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Extra Challenges 🎯</h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
            <p className="text-amber-800 dark:text-amber-200 mb-4 font-medium">
              Ready to level up? Try these additional challenges:
            </p>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start text-amber-700 dark:text-amber-300">
                  <span className="text-amber-500 mr-2 mt-1">🚀</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* GitHub Link */}
      <section className="mb-8">
        <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start?</h2>
          <p className="text-muted-foreground mb-4">
            Clone the repository and start building! Follow the instructions above to get started.
          </p>
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
