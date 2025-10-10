import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "KL University",
    duration: "2022 - 2026",
    location: "Vijayawada, India",
    focus: "Computer Science Engineering",
    description: "Comprehensive B.Tech program focusing on practical problem-solving and emerging technologies",
    highlights: ["AI & Machine Learning", "Software Development", "Full-stack Development", "Data Science"]
  },
  {
    degree: "Bachelor of Business Administration",
    institution: "KL University",
    duration: "2023 - 2026",
    location: "Vijayawada, India",
    focus: "Strategic Management",
    description: "Dual degree focusing on strategic management, marketing, and business-technology convergence",
    highlights: ["Strategic Management", "Financial Analysis", "Digital Marketing", "Business Analytics"]
  }
];

const certifications = [
  { title: "AI Associate", issuer: "Salesforce", date: "October 2024" },
  { title: "Multicloud Network Associate", issuer: "Aviatrix", date: "January 2025" },
  { title: "Certified Essential Automation Professional", issuer: "Automation Anywhere", date: "July 2025" }
];

const EducationSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="neon-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development journey
          </p>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="glass-card p-6 slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <h4 className="text-xl font-bold neon-underline inline-block">
                    {edu.degree}
                  </h4>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-primary">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-secondary">{edu.focus}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {edu.highlights.map((highlight, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className="border-primary/50 text-xs"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="glass-card p-6 text-center slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <Badge variant="secondary" className="text-xs">
                    {cert.date}
                  </Badge>
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