import Link from "next/link";

export default function LearnPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">🎓</div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          How TraceReverse Works
        </h1>
        <p className="text-xl text-muted-foreground">
          Master frontend development by reverse engineering real-world projects
        </p>
      </div>

      {/* Learning Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">The Learning Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="text-3xl mb-3">1️⃣</div>
            <h3 className="text-lg font-semibold mb-2">Choose a Project</h3>
            <p className="text-muted-foreground text-sm">
              Browse our curated collection of real-world projects and select one that matches your skill level.
            </p>
          </div>
          
          <div className="card p-6">
            <div className="text-3xl mb-3">2️⃣</div>
            <h3 className="text-lg font-semibold mb-2">Clone & Study</h3>
            <p className="text-muted-foreground text-sm">
              Clone the repository and examine the code structure, understanding how each part works.
            </p>
          </div>
          
          <div className="card p-6">
            <div className="text-3xl mb-3">3️⃣</div>
            <h3 className="text-lg font-semibold mb-2">Rebuild Yourself</h3>
            <p className="text-muted-foreground text-sm">
              Start from scratch and rebuild the project using your own approach and style.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Step-by-Step Guide</h2>
        <div className="space-y-6">
          <div className="flex gap-4 p-6 card">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Browse Projects</h3>
              <p className="text-muted-foreground mb-2">
                Visit our <Link href="/projects" className="text-primary hover:underline">projects page</Link> and find something that interests you.
              </p>
              <p className="text-sm text-muted-foreground">
                Use filters to find projects by technology stack or difficulty level.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 card">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Read the Instructions</h3>
              <p className="text-muted-foreground mb-2">
                Click "View Instructions" to see the detailed breakdown, learning objectives, and challenges.
              </p>
              <p className="text-sm text-muted-foreground">
                Understand what you'll learn and what tools you'll need.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 card">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Clone the Repository</h3>
              <p className="text-muted-foreground mb-2">
                Click the GitHub link and clone the repository to your local machine:
              </p>
              <code className="block bg-muted p-3 rounded-lg text-sm">
                git clone https://github.com/username/repo-name.git
              </code>
            </div>
          </div>

          <div className="flex gap-4 p-6 card">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Explore the Code</h3>
              <p className="text-muted-foreground mb-2">
                Open the project in your favorite code editor (we recommend VS Code):
              </p>
              <code className="block bg-muted p-3 rounded-lg text-sm mb-2">
                cd repo-name && code .
              </code>
              <p className="text-sm text-muted-foreground">
                Study the file structure, dependencies, and how components are organized.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 card">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Run the Project</h3>
              <p className="text-muted-foreground mb-2">
                Install dependencies and start the development server:
              </p>
              <code className="block bg-muted p-3 rounded-lg text-sm mb-2">
                npm install && npm start
              </code>
              <p className="text-sm text-muted-foreground">
                Or open index.html directly in your browser for simple HTML/CSS projects.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 card">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              6
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Learn & Rebuild</h3>
              <p className="text-muted-foreground mb-2">
                Understand every line of code, then start rebuilding from scratch:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Try to recreate the same functionality</li>
                <li>• Add your own features and improvements</li>
                <li>• Use different technologies or approaches</li>
                <li>• Deploy your version and add it to your portfolio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Pro Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="text-2xl mb-3">💡</div>
            <h3 className="text-lg font-semibold mb-2">Start Small</h3>
            <p className="text-muted-foreground text-sm">
              Begin with simpler projects and gradually work your way up to more complex applications.
            </p>
          </div>
          
          <div className="card p-6">
            <div className="text-2xl mb-3">🔧</div>
            <h3 className="text-lg font-semibold mb-2">Use Developer Tools</h3>
            <p className="text-muted-foreground text-sm">
              Inspect elements, debug JavaScript, and understand how the project works under the hood.
            </p>
          </div>
          
          <div className="card p-6">
            <div className="text-2xl mb-3">📝</div>
            <h3 className="text-lg font-semibold mb-2">Take Notes</h3>
            <p className="text-muted-foreground text-sm">
              Document interesting patterns, techniques, and solutions you discover while studying the code.
            </p>
          </div>
          
          <div className="card p-6">
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Add Your Touch</h3>
            <p className="text-muted-foreground text-sm">
              Don't just copy—improve! Add new features, better styling, or different functionality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-primary/5 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Ready to Start Learning?</h2>
        <p className="text-muted-foreground mb-6">
          Browse our collection of real-world projects and start your journey today.
        </p>
        <Link href="/projects">
          <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            Explore Projects 🎯
          </button>
        </Link>
      </section>
    </div>
  );
}
