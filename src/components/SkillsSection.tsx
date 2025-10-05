import { Card } from '@/components/ui/card';
import { Brain, Shield, Blocks, Cloud, BarChart3, Code2 } from 'lucide-react';

const skills = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    items: ["Deep Learning", "Natural Language Processing", "Computer Vision"]
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    items: ["Penetration Testing", "Threat Intelligence", "Risk Assessment"]
  },
  {
    category: "Blockchain & Web3",
    icon: Blocks,
    items: ["Smart Contracts", "DApps Development", "Tokenomics"]
  },
  {
    category: "Cloud Computing",
    icon: Cloud,
    items: ["Multi-cloud Architecture", "Infrastructure Management", "DevOps"]
  },
  {
    category: "Data Science",
    icon: BarChart3,
    items: ["Predictive Modeling", "Big Data Processing", "Business Intelligence"]
  },
  {
    category: "Full-stack Development",
    icon: Code2,
    items: ["React & Node.js", "API Design", "System Architecture"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="neon-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card
                key={index}
                className="glass-card p-6 slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{skill.category}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;