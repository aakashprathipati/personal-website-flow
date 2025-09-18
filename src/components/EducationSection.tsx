import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "KL University",
    duration: "2022 - 2026",
    location: "Vijayawada, Andhra Pradesh",
    focus: "Computer Science Engineering",
    description: "Pursuing a comprehensive B.Tech program with focus on practical problem-solving and emerging technologies. Actively exploring AI, Cybersecurity, and working on real-world projects while staying ahead of industry trends.",
    highlights: ["AI & Machine Learning", "Cybersecurity Research", "Full-stack Development", "Data Science Projects"]
  },
  {
    degree: "Bachelor of Business Administration",
    institution: "KL University", 
    duration: "2023 - 2026",
    location: "Vijayawada, Andhra Pradesh",
    focus: "Strategic Management & Technology Integration",
    description: "Dual degree program focusing on strategic management, marketing, and financial analysis. Building expertise in business-technology convergence and data-driven decision making.",
    highlights: ["Strategic Management", "Financial Analysis", "Digital Marketing", "Business Analytics"]
  }
];

const certifications = [
  {
    title: "AI Associate",
    issuer: "Salesforce Certified",
    date: "October 2024",
    color: "primary"
  },
  {
    title: "Multicloud Network Associate",
    issuer: "Aviatrix",
    date: "January 2025", 
    color: "secondary"
  },
  {
    title: "Certified Essential Automation Professional",
    issuer: "Automation Anywhere",
    date: "July 2025",
    color: "accent"
  }
];

const EducationSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary/20 rotate-45 animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-accent/10 rounded-full animate-memphis-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black font-brutal mb-6">
            ACADEMIC
            <span className="glitch text-secondary ml-4" data-text="JOURNEY">
              JOURNEY
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation through continuous learning and professional development
          </p>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-brutal mb-8 text-center">
            <GraduationCap className="inline-block w-8 h-8 mr-3 text-primary" />
            EDUCATION
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-8 border-2 border-foreground shadow-brutal hover:shadow-neon transition-all duration-300 group hover:scale-105"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold font-brutal text-primary group-hover:animate-pulse">
                      {edu.degree}
                    </h4>
                    <div className="space-y-2">
                      <p className="text-xl font-semibold">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-accent font-semibold">{edu.focus}</p>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold">Key Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <Badge 
                          key={highlightIndex}
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold font-brutal mb-8 text-center">
            <Trophy className="inline-block w-8 h-8 mr-3 text-warning" />
            CERTIFICATIONS
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className={`p-6 border-2 border-foreground shadow-brutal hover:shadow-neon transition-all duration-300 group hover:-rotate-2 hover:scale-105 animate-float`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-${cert.color} text-${cert.color}-foreground rounded-full flex items-center justify-center mx-auto shadow-brutal group-hover:animate-pulse-neon`}>
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold font-brutal text-lg">{cert.title}</h4>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <Badge 
                      variant="outline" 
                      className={`border-${cert.color} text-${cert.color}`}
                    >
                      {cert.date}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;