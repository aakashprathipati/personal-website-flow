import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Brain, 
  Shield, 
  Blocks, 
  Cloud, 
  BarChart3, 
  Code2, 
  Sparkles,
  Cpu,
  Lock,
  Database
} from 'lucide-react';

const skills = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    color: "primary",
    items: ["Deep Learning", "Natural Language Processing", "Computer Vision"]
  },
  {
    category: "Cybersecurity & Ethical Hacking", 
    icon: Shield,
    color: "secondary",
    items: ["Penetration Testing", "Threat Intelligence", "Risk Assessment"]
  },
  {
    category: "Blockchain & Web3",
    icon: Blocks,
    color: "accent", 
    items: ["Smart Contracts", "DApps Development", "Tokenomics"]
  },
  {
    category: "Cloud Computing",
    icon: Cloud,
    color: "warning",
    items: ["Multi-cloud Architecture", "Infrastructure Management", "DevOps"]
  },
  {
    category: "Data Science & Analytics",
    icon: BarChart3,
    color: "primary",
    items: ["Predictive Modeling", "Big Data Processing", "Business Intelligence"]
  },
  {
    category: "Software & Web Development",
    icon: Code2,
    color: "secondary",
    items: ["Full-stack Development", "API Design", "System Architecture"]
  }
];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-visible lg:overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black font-brutal mb-6">
            TECHNICAL
            <span className="glitch text-primary ml-4" data-text="ARSENAL">
              ARSENAL
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build the future of digital innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card
                key={index}
                className={`p-8 border-2 border-foreground shadow-brutal hover:shadow-neon transition-all duration-300 cursor-pointer group ${
                  hoveredSkill === index ? 'scale-105 -rotate-1' : ''
                }`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-${skill.color} text-${skill.color}-foreground rounded-lg flex items-center justify-center shadow-brutal group-hover:animate-pulse-neon`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold font-brutal">{skill.category}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {skill.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <div className={`w-2 h-2 bg-${skill.color} animate-pulse`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Floating action button */}
        <div className="flex justify-center mt-16">
          <Button 
            size="lg" 
            className="brutal-hover bg-gradient-cyber text-primary-foreground font-bold px-12 py-6 text-lg"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            EXPLORE MY WORK
          </Button>
        </div>
      </div>

      {/* Floating tech symbols */}
      <div className="absolute top-20 right-20 w-8 h-8 bg-accent opacity-30 animate-memphis-float">
        <Cpu className="w-full h-full text-accent-foreground" />
      </div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-secondary opacity-40 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-10 w-10 h-10 bg-warning opacity-25 rotate-45 animate-memphis-float" style={{ animationDelay: '1.5s' }}>
        <Lock className="w-full h-full text-warning-foreground -rotate-45" />
      </div>
    </section>
  );
};

export default SkillsSection;