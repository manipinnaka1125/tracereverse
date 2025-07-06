import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Project Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Browse All Projects
            </button>
          </Link>
          <Link href="/">
            <button className="px-6 py-3 border border-border bg-background hover:bg-muted font-semibold rounded-lg transition-colors">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
