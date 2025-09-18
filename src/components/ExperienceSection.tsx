import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Research Programmer",
      company: "Gold Light Technologies Pvt Ltd",
      location: "Remote",
      duration: "Present",
      description: [
        "Engineered and developed an end-to-end AI system for flood assessment and a hypothetical cancer detection system, each designed to transform raw imagery into actionable intelligence for different domains",
        "Trained a deep learning model using PyTorch to perform precise, pixel-level semantic segmentation on both aerial/satellite imagery for flood mapping and medical scans for identifying cancerous growths",
        "Implemented a reasoning and summarization module that converts the technical output of the AI models into human-readable reports and actionable recommendations",
        "Designed a scalable and modular architecture with separate frontend, backend, and model layers, ensuring that both systems are robust, maintainable, and adaptable to future improvements",
        "Utilized containerization with Docker to ensure the portability and consistent performance of both applications, streamlining the deployment process from development to real-world use"
      ],
      technologies: ["PyTorch", "Python", "Docker", "AI/ML", "Computer Vision", "Semantic Segmentation", "Deep Learning", "System Architecture"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Memphis background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary opacity-10 rotate-45" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-secondary opacity-15 rounded-full" />
      <div className="absolute bottom-20 left-1/4 w-24 h-12 bg-accent opacity-12" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-black font-brutal mb-6 glitch" data-text="EXPERIENCE">
            EXPERIENCE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey building cutting-edge solutions and pushing technological boundaries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="group brutal-card hover:shadow-neon transition-all duration-300 border-2 border-foreground bg-background"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-brutal text-primary group-hover:text-accent transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
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
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="brutal-hover font-bold bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
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