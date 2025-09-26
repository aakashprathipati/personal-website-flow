import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    liveUrl: "https://demo-taskapp.com",
    githubUrl: "https://github.com/username/task-management",
    technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts using modern web technologies.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    liveUrl: "https://demo-weather.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and featuring dark mode, animations, and optimized performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    liveUrl: "https://demo-portfolio.com",
    githubUrl: "https://github.com/username/portfolio",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"]
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, file sharing, and emoji reactions built with modern technologies.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop",
    liveUrl: "https://demo-chat.com",
    githubUrl: "https://github.com/username/chat-app",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"]
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application with workout planning, progress tracking, and nutrition monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    liveUrl: "https://demo-fitness.com",
    githubUrl: "https://github.com/username/fitness-tracker",
    technologies: ["React Native", "Firebase", "Charts.js", "Redux"]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-20 lg:pt-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-black mb-4 glitch" data-text="PROJECTS">
              PROJECTS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work and creative projects. Each project represents a unique challenge and solution.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projectsData.map((project) => (
              <Card key={project.id} className="group brutal-hover bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Code className="w-5 h-5 text-primary" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1" 
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="inline-block p-8 bg-card/30 backdrop-blur-sm border-2 border-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-primary">Want to collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects and opportunities.
              </p>
              <Button size="lg" className="shadow-neon">
                Get In Touch
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;