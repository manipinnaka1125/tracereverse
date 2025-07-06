export const projects = [
  {
    slug: "portfolio-site",
    title: "Personal Portfolio Website",
    tagline: "Modern portfolio with dark mode and animations",
    description:
      "A stunning personal portfolio website featuring responsive design, smooth animations, dark mode toggle, and optimized performance. Perfect for showcasing your projects and skills to potential employers.",
    github: "https://github.com/TraceReverse/portfolio-clone",
    features: ["Responsive Design", "Dark Mode Toggle", "Smooth Animations", "SEO Optimized", "Fast Loading"],
    stack: ["HTML", "CSS", "JavaScript", "GSAP", "Vercel"],
    image: "/images/portfolio.png",
    difficulty: "beginner",
    estimatedTime: "4-6 hours",
    category: "Frontend",
    instructions: [
      "Click the GitHub button below to access the repository.",
      "Clone the repository: `git clone https://github.com/TraceReverse/portfolio-clone.git`",
      "Navigate to the project folder: `cd portfolio-clone`",
      "Open the project in VS Code: `code .`",
      "Open `index.html` in your browser to see the live site.",
      "Study the HTML structure and semantic elements used.",
      "Analyze the CSS Grid and Flexbox layouts in `styles.css`.",
      "Understand the JavaScript animations and dark mode implementation.",
      "Try rebuilding sections from scratch to test your understanding."
    ],
    concepts: [
      "Semantic HTML5 structure",
      "Advanced CSS Grid & Flexbox",
      "CSS Custom Properties (Variables)",
      "JavaScript DOM manipulation",
      "Responsive design principles",
      "Performance optimization",
      "Accessibility best practices",
      "Animation with GSAP"
    ],
    challenges: [
      "Add a contact form with validation",
      "Implement a blog section with Markdown support",
      "Create your own custom animations",
      "Add a skills progress bar animation",
      "Deploy to your own custom domain"
    ]
  },
  {
    slug: "todo-app-react",
    title: "Advanced Todo App",
    tagline: "React Todo with local storage and filtering",
    description:
      "A feature-rich todo application built with React and TypeScript. Includes drag-and-drop functionality, local storage persistence, advanced filtering, and a beautiful Material Design interface.",
    github: "https://github.com/TraceReverse/react-todo-advanced",
    features: ["Drag & Drop", "Local Storage", "Advanced Filtering", "Dark Mode", "TypeScript"],
    stack: ["React", "TypeScript", "CSS Modules", "React DnD", "Local Storage"],
    image: "/images/todo-app.png",
    difficulty: "intermediate",
    estimatedTime: "8-12 hours",
    category: "Frontend Framework",
    instructions: [
      "Clone the repository and install dependencies with `npm install`",
      "Start the development server with `npm start`",
      "Explore the component structure in the `src/components` folder",
      "Study the custom hooks in `src/hooks` for state management",
      "Analyze the TypeScript interfaces in `src/types`",
      "Understand the drag-and-drop implementation",
      "Learn how local storage persistence works",
      "Experiment with adding new features"
    ],
    concepts: [
      "React functional components",
      "Custom React hooks",
      "TypeScript interfaces and types",
      "Local storage API",
      "Drag and drop functionality",
      "CSS Modules for styling",
      "State management patterns",
      "Performance optimization"
    ],
    challenges: [
      "Add categories and tags to todos",
      "Implement due dates with notifications",
      "Create a calendar view",
      "Add collaboration features",
      "Integrate with a backend API"
    ]
  },
  {
    slug: "ecommerce-app",
    title: "E-commerce Platform",
    tagline: "Full-featured online store with cart and checkout",
    description:
      "A complete e-commerce platform built with Next.js, featuring product catalog, shopping cart, user authentication, payment processing, and admin dashboard. Includes modern UI/UX patterns and mobile optimization.",
    github: "https://github.com/TraceReverse/ecommerce-nextjs",
    features: ["Product Catalog", "Shopping Cart", "User Auth", "Payment Integration", "Admin Dashboard", "Responsive Design"],
    stack: ["Next.js", "React", "TypeScript", "Stripe", "Prisma", "PostgreSQL", "TailwindCSS"],
    image: "/images/ecommerce.png",
    difficulty: "advanced",
    estimatedTime: "20-30 hours",
    category: "Full Stack",
    instructions: [
      "Clone the repository and set up environment variables",
      "Install dependencies: `npm install`",
      "Set up the database: `npx prisma migrate dev`",
      "Start the development server: `npm run dev`",
      "Explore the Next.js App Router structure",
      "Study the Prisma database schema",
      "Understand the Stripe payment integration",
      "Learn the authentication flow with NextAuth",
      "Analyze the admin dashboard implementation"
    ],
    concepts: [
      "Next.js App Router and server components",
      "Database design and relationships",
      "Payment processing with Stripe",
      "User authentication and authorization",
      "API route handlers",
      "State management with Zustand",
      "Form handling and validation",
      "SEO optimization and metadata"
    ],
    challenges: [
      "Add product reviews and ratings",
      "Implement inventory management",
      "Create a wishlist feature",
      "Add order tracking",
      "Implement email notifications",
      "Create a mobile app version"
    ]
  },
  {
    slug: "blog-platform",
    title: "Modern Blog Platform",
    tagline: "Content management with MDX and real-time comments",
    description:
      "A powerful blog platform featuring MDX content, syntax highlighting, real-time comments, author profiles, and SEO optimization. Built with Next.js and includes a headless CMS integration.",
    github: "https://github.com/TraceReverse/blog-platform",
    features: ["MDX Content", "Syntax Highlighting", "Real-time Comments", "SEO Optimized", "Author Profiles", "Search"],
    stack: ["Next.js", "MDX", "Sanity CMS", "Socket.io", "Algolia", "Vercel"],
    image: "/images/blog-platform.png",
    difficulty: "intermediate",
    estimatedTime: "15-20 hours",
    category: "Full Stack",
    instructions: [
      "Set up the Sanity CMS and configure the schema",
      "Clone and install the Next.js frontend",
      "Configure environment variables for all services",
      "Set up Algolia search integration",
      "Deploy the CMS and frontend to Vercel",
      "Study the MDX content processing pipeline",
      "Understand the real-time comment system",
      "Learn about SEO optimization techniques"
    ],
    concepts: [
      "Headless CMS integration",
      "MDX processing and rendering",
      "Real-time data with WebSockets",
      "Search functionality with Algolia",
      "Static site generation",
      "Image optimization",
      "SEO best practices",
      "Content delivery networks"
    ],
    challenges: [
      "Add newsletter subscription",
      "Implement content analytics",
      "Create a mobile reading app",
      "Add multi-language support",
      "Implement content scheduling",
      "Add social media integration"
    ]
  },
  {
    slug: "dashboard-analytics",
    title: "Analytics Dashboard",
    tagline: "Real-time data visualization with charts and metrics",
    description:
      "A comprehensive analytics dashboard featuring real-time data visualization, interactive charts, KPI metrics, and customizable widgets. Built with modern React patterns and D3.js for advanced visualizations.",
    github: "https://github.com/TraceReverse/analytics-dashboard",
    features: ["Real-time Data", "Interactive Charts", "Custom Widgets", "Export Features", "Responsive Design", "Dark Mode"],
    stack: ["React", "TypeScript", "D3.js", "Recharts", "Socket.io", "Express", "MongoDB"],
    image: "/images/dashboard.png",
    difficulty: "advanced",
    estimatedTime: "25-35 hours",
    category: "Full Stack",
    instructions: [
      "Set up the MongoDB database and seed with sample data",
      "Start the Express API server",
      "Install and run the React frontend",
      "Study the real-time data flow architecture",
      "Explore the D3.js chart implementations",
      "Understand the widget system design",
      "Learn about data aggregation and caching",
      "Analyze the responsive design patterns"
    ],
    concepts: [
      "Real-time data streaming",
      "Data visualization with D3.js",
      "WebSocket connections",
      "Database aggregation pipelines",
      "Caching strategies",
      "Custom React hooks",
      "Performance optimization",
      "Responsive chart design"
    ],
    challenges: [
      "Add predictive analytics",
      "Implement data export to PDF/Excel",
      "Create custom chart types",
      "Add user role management",
      "Implement data alerts and notifications",
      "Add multi-tenant support"
    ]
  },
  {
    slug: "chat-application",
    title: "Real-time Chat App",
    tagline: "WebSocket-powered messaging with rooms and file sharing",
    description:
      "A modern chat application with real-time messaging, chat rooms, file sharing, emoji reactions, and user presence. Features end-to-end encryption and mobile-responsive design.",
    github: "https://github.com/TraceReverse/chat-app",
    features: ["Real-time Messaging", "Chat Rooms", "File Sharing", "Emoji Reactions", "User Presence", "Encryption"],
    stack: ["React", "Node.js", "Socket.io", "Redis", "MongoDB", "AWS S3", "JWT"],
    image: "/images/chat-app.png",
    difficulty: "advanced",
    estimatedTime: "20-25 hours",
    category: "Full Stack",
    instructions: [
      "Set up Redis for session management",
      "Configure MongoDB for message storage",
      "Set up AWS S3 for file uploads",
      "Start the Node.js server with Socket.io",
      "Run the React client application",
      "Study the WebSocket event handling",
      "Understand the encryption implementation",
      "Learn about scalability patterns"
    ],
    concepts: [
      "WebSocket real-time communication",
      "Event-driven architecture",
      "File upload and storage",
      "Message encryption",
      "Session management with Redis",
      "Scalable chat architecture",
      "User presence tracking",
      "Mobile-first design"
    ],
    challenges: [
      "Add video/voice calling",
      "Implement message threads",
      "Create bot integrations",
      "Add message search",
      "Implement message reactions",
      "Add screen sharing"
    ]
  },
  {
    slug: "weather-app",
    title: "Weather Forecast App",
    tagline: "Beautiful weather app with maps and alerts",
    description:
      "A comprehensive weather application featuring current conditions, 7-day forecasts, interactive maps, weather alerts, and location-based services. Includes data visualization and offline functionality.",
    github: "https://github.com/TraceReverse/weather-app",
    features: ["Current Weather", "7-Day Forecast", "Interactive Maps", "Weather Alerts", "Offline Mode", "Geolocation"],
    stack: ["React", "TypeScript", "Mapbox", "PWA", "Service Workers", "Weather API"],
    image: "/images/weather-app.png",
    difficulty: "intermediate",
    estimatedTime: "12-15 hours",
    category: "Frontend",
    instructions: [
      "Obtain API keys for weather data and maps",
      "Clone and install the React application",
      "Configure environment variables",
      "Study the API integration patterns",
      "Understand the PWA implementation",
      "Learn about service worker caching",
      "Explore the map visualization features",
      "Test the offline functionality"
    ],
    concepts: [
      "API integration and error handling",
      "Progressive Web App features",
      "Service workers and caching",
      "Geolocation API",
      "Data visualization",
      "Responsive design patterns",
      "Performance optimization",
      "Offline-first architecture"
    ],
    challenges: [
      "Add weather radar imagery",
      "Implement push notifications",
      "Create weather widgets",
      "Add social sharing features",
      "Implement location favorites",
      "Add weather-based recommendations"
    ]
  },
  {
    slug: "social-media-dashboard",
    title: "Social Media Dashboard",
    tagline: "Multi-platform analytics and content management",
    description:
      "A unified social media management dashboard that aggregates data from multiple platforms, schedules posts, tracks engagement metrics, and provides comprehensive analytics with AI-powered insights.",
    github: "https://github.com/TraceReverse/social-dashboard",
    features: ["Multi-platform Integration", "Post Scheduling", "Analytics", "Content Calendar", "AI Insights", "Team Management"],
    stack: ["Next.js", "React", "TypeScript", "Prisma", "Redis", "OpenAI API", "Social APIs"],
    image: "/images/social-dashboard.png",
    difficulty: "advanced",
    estimatedTime: "25-30 hours",
    category: "Full Stack",
    instructions: [
      "Set up API integrations for social platforms",
      "Configure database and authentication",
      "Install and run the Next.js application",
      "Study the multi-platform data aggregation",
      "Understand the post scheduling system",
      "Learn about the analytics implementation",
      "Explore the AI-powered insights feature",
      "Analyze the team collaboration features"
    ],
    concepts: [
      "Third-party API integrations",
      "Data aggregation and normalization",
      "Scheduled job processing",
      "AI and machine learning integration",
      "Complex data visualization",
      "Multi-tenant architecture",
      "Caching strategies",
      "Real-time data updates"
    ],
    challenges: [
      "Add sentiment analysis",
      "Implement competitor tracking",
      "Create custom report builder",
      "Add automated responses",
      "Implement content suggestions",
      "Add influencer discovery"
    ]
  },
  {
    slug: "cryptocurrency-tracker",
    title: "Cryptocurrency Tracker",
    tagline: "Real-time crypto prices with portfolio management",
    description:
      "A comprehensive cryptocurrency tracking application featuring real-time price updates, portfolio management, price alerts, market analysis, and trading simulation with advanced charting capabilities.",
    github: "https://github.com/TraceReverse/crypto-tracker",
    features: ["Real-time Prices", "Portfolio Tracking", "Price Alerts", "Market Analysis", "Trading Simulator", "Advanced Charts"],
    stack: ["React", "TypeScript", "WebSockets", "Chart.js", "Redis", "CoinGecko API"],
    image: "/images/crypto-tracker.png",
    difficulty: "intermediate",
    estimatedTime: "18-22 hours",
    category: "Frontend",
    instructions: [
      "Set up WebSocket connections for real-time data",
      "Configure the cryptocurrency API integration",
      "Install and run the React application",
      "Study the real-time data handling",
      "Understand the portfolio calculation logic",
      "Learn about the alert system implementation",
      "Explore the advanced charting features",
      "Test the trading simulation functionality"
    ],
    concepts: [
      "Real-time data streaming",
      "Financial calculations",
      "Advanced data visualization",
      "WebSocket management",
      "Local storage optimization",
      "Performance with large datasets",
      "Alert and notification systems",
      "Trading simulation logic"
    ],
    challenges: [
      "Add technical analysis indicators",
      "Implement news sentiment tracking",
      "Create automated trading bots",
      "Add social trading features",
      "Implement DeFi protocol integration",
      "Add tax calculation features"
    ]
  }
];
