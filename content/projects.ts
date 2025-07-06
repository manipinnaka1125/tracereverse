export const projects = [
  {
    slug: "spotify-clone",
    title: "Spotify Clone",
    tagline: "Full-stack music streaming platform",
    description: "A complete Spotify clone with user authentication, playlists, music player, and real-time features built with Next.js and Supabase.",
    github: "https://github.com/AntonioErdeljac/spotify-clone",
    features: [
      "Music streaming and playback",
      "User authentication with Supabase",
      "Create and manage playlists",
      "Real-time music player",
      "Responsive design",
      "File upload functionality"
    ],
    stack: ["Next.js", "React", "Supabase", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    difficulty: "advanced" as const,
    estimatedTime: "8-12 hours",
    category: "Full Stack",
    instructions: [
      "Clone the repository from GitHub",
      "Install dependencies with npm install",
      "Set up Supabase database and authentication",
      "Configure environment variables",
      "Study the component structure and state management",
      "Understand the file upload and audio streaming logic",
      "Examine the real-time features implementation"
    ],
    concepts: [
      "Next.js App Router",
      "Supabase authentication",
      "File upload and storage",
      "Audio streaming",
      "Real-time subscriptions",
      "Database relationships",
      "State management with Zustand"
    ],
    challenges: [
      "Implement custom audio controls",
      "Add song recommendations",
      "Create a mobile app version",
      "Add social features like following artists"
    ]
  },
  {
    slug: "discord-clone",
    title: "Discord Clone",
    tagline: "Real-time chat application",
    description: "A Discord clone with servers, channels, voice/video calls, and real-time messaging built with Next.js and Socket.io.",
    github: "https://github.com/AntonioErdeljac/discord-clone",
    features: [
      "Real-time messaging",
      "Voice and video calls",
      "Server and channel management",
      "User roles and permissions",
      "File sharing",
      "Dark/Light mode"
    ],
    stack: ["Next.js", "React", "Socket.io", "Prisma", "MySQL", "TypeScript"],
    difficulty: "advanced" as const,
    estimatedTime: "10-15 hours",
    category: "Real-time Apps",
    instructions: [
      "Clone the repository",
      "Set up the database with Prisma",
      "Configure Socket.io for real-time features",
      "Study the authentication flow",
      "Understand the server/channel architecture",
      "Examine the real-time messaging implementation",
      "Learn about WebRTC for voice/video calls"
    ],
    concepts: [
      "Real-time communication",
      "WebSocket connections",
      "Database schema design",
      "File upload handling",
      "Role-based access control",
      "WebRTC implementation"
    ],
    challenges: [
      "Add screen sharing functionality",
      "Implement message reactions",
      "Create mobile responsive design",
      "Add bot integration capabilities"
    ]
  },
  {
    slug: "airbnb-clone",
    title: "Airbnb Clone",
    tagline: "Property rental marketplace",
    description: "A full-featured Airbnb clone with property listings, booking system, payments, and user management.",
    github: "https://github.com/AntonioErdeljac/next13-airbnb-clone",
    features: [
      "Property search and filtering",
      "Booking system with calendar",
      "User authentication",
      "Property hosting",
      "Payment integration",
      "Review system"
    ],
    stack: ["Next.js", "React", "Prisma", "MongoDB", "NextAuth.js", "Cloudinary"],
    difficulty: "intermediate" as const,
    estimatedTime: "6-10 hours",
    category: "E-commerce",
    instructions: [
      "Clone and setup the project",
      "Configure MongoDB database",
      "Set up authentication with NextAuth.js",
      "Study the property listing components",
      "Understand the booking logic",
      "Examine the search and filter functionality",
      "Learn about image upload with Cloudinary"
    ],
    concepts: [
      "Database modeling for bookings",
      "Authentication strategies",
      "Image upload and optimization",
      "Date range selection",
      "Search and filtering logic",
      "Payment processing"
    ],
    challenges: [
      "Add map integration",
      "Implement instant booking",
      "Create host dashboard",
      "Add messaging between guests and hosts"
    ]
  },
  {
    slug: "netflix-clone",
    title: "Netflix Clone",
    tagline: "Video streaming platform",
    description: "A Netflix clone with user authentication, video streaming, favorites, and a beautiful UI built with Next.js.",
    github: "https://github.com/AntonioErdeljac/next-netflix-clone",
    features: [
      "User authentication",
      "Video streaming",
      "Favorites system",
      "Movie/TV show browsing",
      "Responsive design",
      "User profiles"
    ],
    stack: ["Next.js", "React", "Prisma", "MongoDB", "NextAuth.js", "TypeScript"],
    image: "/images/netflix-clone.jpg",
    difficulty: "intermediate" as const,
    estimatedTime: "5-8 hours",
    category: "Media Streaming",
    instructions: [
      "Clone the repository",
      "Set up MongoDB and Prisma",
      "Configure NextAuth.js authentication",
      "Study the video player implementation",
      "Understand the data fetching patterns",
      "Examine the responsive design approach",
      "Learn about the favorites functionality"
    ],
    concepts: [
      "Video streaming techniques",
      "Authentication with NextAuth.js",
      "Database design for media content",
      "Responsive grid layouts",
      "State management patterns",
      "API route optimization"
    ],
    challenges: [
      "Add video progress tracking",
      "Implement search functionality",
      "Create admin panel for content management",
      "Add subtitles support"
    ]
  },
  {
    slug: "twitter-clone",
    title: "Twitter Clone",
    tagline: "Social media platform",
    description: "A Twitter clone with tweets, likes, comments, follows, and real-time updates built with Next.js and Prisma.",
    github: "https://github.com/AntonioErdeljac/twitter-clone",
    features: [
      "Tweet creation and deletion",
      "Like and comment system",
      "Follow/Unfollow users",
      "Real-time updates",
      "Image uploads",
      "User profiles"
    ],
    stack: ["Next.js", "React", "Prisma", "MongoDB", "NextAuth.js", "SWR"],
    image: "/images/twitter-clone.jpg",
    difficulty: "intermediate" as const,
    estimatedTime: "6-9 hours",
    category: "Social Media",
    instructions: [
      "Clone and set up the project",
      "Configure database with Prisma",
      "Study the tweet component structure",
      "Understand the like/comment functionality",
      "Examine the follow system implementation",
      "Learn about real-time data fetching with SWR",
      "Study the image upload workflow"
    ],
    concepts: [
      "Social media data modeling",
      "Real-time data fetching",
      "Optimistic UI updates",
      "Image handling and optimization",
      "Infinite scrolling",
      "User relationship management"
    ],
    challenges: [
      "Add retweet functionality",
      "Implement direct messaging",
      "Create trending topics",
      "Add notification system"
    ]
  },
  {
    slug: "ecommerce-store",
    title: "E-commerce Store",
    tagline: "Full-stack online store",
    description: "A complete e-commerce solution with product catalog, shopping cart, checkout, and payment processing.",
    github: "https://github.com/AntonioErdeljac/ecommerce-store",
    features: [
      "Product catalog with categories",
      "Shopping cart functionality",
      "Secure checkout process",
      "Payment integration",
      "Order management",
      "Responsive design"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Zustand"],
    image: "/images/ecommerce-store.jpg",
    difficulty: "intermediate" as const,
    estimatedTime: "7-10 hours",
    category: "E-commerce",
    instructions: [
      "Clone the repository",
      "Set up Stripe for payments",
      "Study the product catalog structure",
      "Understand the shopping cart implementation",
      "Examine the checkout flow",
      "Learn about state management with Zustand",
      "Study the responsive design patterns"
    ],
    concepts: [
      "E-commerce data flow",
      "Payment processing with Stripe",
      "Shopping cart state management",
      "Product filtering and search",
      "Checkout optimization",
      "Order confirmation workflow"
    ],
    challenges: [
      "Add product reviews system",
      "Implement wishlist functionality",
      "Create admin dashboard",
      "Add inventory management"
    ]
  }
];
