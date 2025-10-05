import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    title: "Research Programmer",
    company: "Gold Light Technologies Pvt Ltd",
    location: "Remote",
    duration: "Present",
    description: [
      "Engineered end-to-end AI systems for flood assessment and cancer detection, transforming raw imagery into actionable intelligence",
      "Trained deep learning models using PyTorch for pixel-level semantic segmentation on aerial/satellite imagery and medical scans",
      "Implemented reasoning and summarization modules converting technical AI outputs into human-readable reports",
      "Designed scalable, modular architecture with separate frontend, backend, and model layers ensuring robustness and maintainability",
      "Utilized Docker containerization for portability and consistent performance across deployment environments"
    ],
    technologies: ["PyTorch", "Python", "Docker", "AI/ML", "Computer Vision", "Semantic Segmentation", "Deep Learning"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="neon-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building cutting-edge solutions and pushing technological boundaries
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-card slide-in"
            >
              <CardHeader>
                <div className="space-y-4">
                  <CardTitle className="text-2xl font-bold neon-underline inline-block">
                    {exp.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;