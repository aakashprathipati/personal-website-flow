import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices and Patterns",
    excerpt: "Learn the essential patterns and best practices for building maintainable and scalable React applications that can grow with your team.",
    author: "John Doe",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "The Complete Guide to TypeScript in 2024",
    excerpt: "Master TypeScript with this comprehensive guide covering advanced types, generics, decorators, and real-world usage patterns.",
    author: "Jane Smith",
    date: "2024-03-12",
    readTime: "12 min read",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "Mastering CSS Grid: From Basics to Advanced Layouts",
    excerpt: "Discover the power of CSS Grid and learn how to create complex, responsive layouts with ease using modern CSS techniques.",
    author: "Mike Johnson",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Node.js Performance Optimization: Tips and Tricks",
    excerpt: "Boost your Node.js application performance with these proven optimization techniques, from memory management to async patterns.",
    author: "Sarah Wilson",
    date: "2024-03-08",
    readTime: "10 min read",
    category: "Node.js",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
    featured: false
  },
  {
    id: 5,
    title: "Understanding JavaScript Closures and Scope",
    excerpt: "Demystify JavaScript closures and scope with practical examples and learn how to leverage them in your everyday coding.",
    author: "Alex Brown",
    date: "2024-03-05",
    readTime: "7 min read",
    category: "JavaScript",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "Getting Started with Docker for Web Developers",
    excerpt: "Learn how to containerize your web applications with Docker, from basic concepts to production deployment strategies.",
    author: "Tom Davis",
    date: "2024-03-03",
    readTime: "9 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop",
    featured: false
  },
  {
    id: 7,
    title: "AI-Powered Development: Tools and Techniques",
    excerpt: "Explore how AI is transforming software development with code completion, automated testing, and intelligent debugging tools.",
    author: "Emma Taylor",
    date: "2024-03-01",
    readTime: "11 min read",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    featured: true
  },
  {
    id: 8,
    title: "Modern Database Design Patterns",
    excerpt: "Learn about modern database design patterns, from NoSQL to microservices architecture and data consistency strategies.",
    author: "Chris Lee",
    date: "2024-02-28",
    readTime: "13 min read",
    category: "Database",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
    featured: false
  }
];

const categories = ["All", "React", "TypeScript", "JavaScript", "CSS", "Node.js", "DevOps", "AI/ML", "Database"];

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-20 lg:pt-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-black mb-4 glitch" data-text="BLOG">
              BLOG
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, programming, and technology trends.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                size="sm"
                className="transition-all duration-200 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Featured Posts
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="group brutal-hover bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors duration-200">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <Button size="sm" className="group-hover:shadow-neon transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-secondary" />
              Latest Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group brutal-hover bg-card/50 backdrop-blur-sm border-2 border-border hover:border-secondary/50 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-secondary transition-colors duration-200">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                      <Button size="sm" variant="outline">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <Card className="inline-block p-8 bg-card/30 backdrop-blur-sm border-2 border-accent/30">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-accent">Stay Updated</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Subscribe to get the latest posts delivered directly to your inbox. No spam, just quality content.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="shadow-neon">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;