import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Code2, Database, Sparkles, Zap } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const cheatSheetsData = [
  {
    id: 1,
    title: "HTML Essentials",
    description: "Complete HTML reference with semantic elements, forms, accessibility, and best practices.",
    icon: Code2,
    color: "text-orange-500",
    category: "Frontend",
    pages: 12,
    downloadUrl: "/cheatsheets/html-cheatsheet.pdf"
  },
  {
    id: 2,
    title: "CSS Mastery",
    description: "CSS properties, selectors, flexbox, grid, animations, and responsive design techniques.",
    icon: Sparkles,
    color: "text-blue-500",
    category: "Frontend",
    pages: 18,
    downloadUrl: "/cheatsheets/css-cheatsheet.pdf"
  },
  {
    id: 3,
    title: "JavaScript Quick Reference",
    description: "ES6+ features, DOM manipulation, async/await, promises, and modern JavaScript patterns.",
    icon: Zap,
    color: "text-yellow-500",
    category: "Frontend",
    pages: 24,
    downloadUrl: "/cheatsheets/javascript-cheatsheet.pdf"
  },
  {
    id: 4,
    title: "Python Fundamentals",
    description: "Python syntax, data structures, functions, classes, and popular libraries overview.",
    icon: Database,
    color: "text-green-500",
    category: "Backend",
    pages: 20,
    downloadUrl: "/cheatsheets/python-cheatsheet.pdf"
  },
  {
    id: 5,
    title: "React Components",
    description: "React hooks, component patterns, state management, and performance optimization tips.",
    icon: Code2,
    color: "text-cyan-500",
    category: "Frontend",
    pages: 16,
    downloadUrl: "/cheatsheets/react-cheatsheet.pdf"
  },
  {
    id: 6,
    title: "Node.js & Express",
    description: "Node.js APIs, Express middleware, routing, authentication, and deployment strategies.",
    icon: Database,
    color: "text-emerald-500",
    category: "Backend",
    pages: 22,
    downloadUrl: "/cheatsheets/nodejs-cheatsheet.pdf"
  },
  {
    id: 7,
    title: "Git Commands",
    description: "Essential Git commands, branching strategies, merge conflicts, and collaboration workflows.",
    icon: FileText,
    color: "text-red-500",
    category: "Tools",
    pages: 8,
    downloadUrl: "/cheatsheets/git-cheatsheet.pdf"
  },
  {
    id: 8,
    title: "SQL Database Queries",
    description: "SQL syntax, joins, subqueries, indexes, and database optimization techniques.",
    icon: Database,
    color: "text-purple-500",
    category: "Database",
    pages: 14,
    downloadUrl: "/cheatsheets/sql-cheatsheet.pdf"
  },
  {
    id: 9,
    title: "GPT Prompts Library",
    description: "Effective prompt engineering techniques, examples, and best practices for AI interactions.",
    icon: Sparkles,
    color: "text-pink-500",
    category: "AI/ML",
    pages: 10,
    downloadUrl: "/cheatsheets/gpt-prompts-cheatsheet.pdf"
  },
  {
    id: 10,
    title: "Docker Essentials",
    description: "Docker commands, Dockerfile best practices, container orchestration, and deployment.",
    icon: Code2,
    color: "text-indigo-500",
    category: "DevOps",
    pages: 12,
    downloadUrl: "/cheatsheets/docker-cheatsheet.pdf"
  },
  {
    id: 11,
    title: "TypeScript Guide",
    description: "TypeScript types, interfaces, generics, decorators, and advanced type patterns.",
    icon: Zap,
    color: "text-blue-600",
    category: "Frontend",
    pages: 18,
    downloadUrl: "/cheatsheets/typescript-cheatsheet.pdf"
  },
  {
    id: 12,
    title: "AWS Services Overview",
    description: "Essential AWS services, CLI commands, IAM, S3, EC2, Lambda, and cloud architecture.",
    icon: Database,
    color: "text-orange-600",
    category: "Cloud",
    pages: 26,
    downloadUrl: "/cheatsheets/aws-cheatsheet.pdf"
  }
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools", "AI/ML", "DevOps", "Cloud"];

const CheatSheets = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDownload = (downloadUrl: string, title: string) => {
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = title.toLowerCase().replace(/\s+/g, '-') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSheets = selectedCategory === "All" 
    ? cheatSheetsData 
    : cheatSheetsData.filter(sheet => sheet.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-20 lg:pt-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-black mb-4 glitch" data-text="CHEAT SHEETS">
              CHEAT SHEETS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick reference guides and cheat sheets for various programming languages, frameworks, and tools. 
              Download PDFs for offline reference.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Cheat Sheets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredSheets.map((sheet) => {
              const IconComponent = sheet.icon;
              return (
                <Card key={sheet.id} className="group brutal-hover bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-card ${sheet.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {sheet.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {sheet.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {sheet.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {sheet.pages} pages
                      </span>
                      <span>PDF Format</span>
                    </div>
                    
                    <Button 
                      className="w-full group-hover:shadow-neon transition-all duration-300"
                      onClick={() => handleDownload(sheet.downloadUrl, sheet.title)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-2 border-primary/30">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Regular Updates
              </h3>
              <p className="text-muted-foreground">
                All cheat sheets are regularly updated with the latest features, best practices, and industry standards.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-2 border-secondary/30">
              <h3 className="text-xl font-bold mb-4 text-secondary flex items-center gap-2">
                <Download className="w-5 h-5" />
                Free Downloads
              </h3>
              <p className="text-muted-foreground">
                All cheat sheets are available for free download. Perfect for quick reference during development.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheatSheets;