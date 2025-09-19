import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Zap,
  Heart,
  Star
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aakashprathipaticore@gmail.com",
    href: "mailto:aakashprathipaticore@gmail.com",
    color: "primary"
  },
  {
    icon: Phone,
    label: "Phone", 
    value: "+91 7730901750",
    href: "tel:+917730901750",
    color: "secondary"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vijayawada, Tadepalli",
    href: "https://maps.google.com/?q=Vijayawada,Tadepalli",
    color: "accent"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/aakashprathipati",
    color: "primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/aakash-prathipati-741b18347/",
    color: "secondary"
  }
];

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-visible lg:overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary animate-memphis-float" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary rounded-full animate-float" />
          <div className="absolute bottom-1/4 left-1/3 w-20 h-40 bg-accent animate-memphis-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black font-brutal mb-6">
            LET'S
            <span className="glitch text-accent ml-4" data-text="CONNECT">
              CONNECT
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build something amazing together? Drop me a line and let's make it happen!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-brutal mb-8">
              <Zap className="inline-block w-8 h-8 mr-3 text-warning" />
              GET IN TOUCH
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 border-2 border-foreground shadow-brutal hover:shadow-neon transition-all duration-300 group hover:scale-105"
                    onMouseEnter={() => setIsHovered(contact.label)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <a 
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                    >
                      <div className={`w-14 h-14 bg-${contact.color} text-${contact.color}-foreground rounded-lg flex items-center justify-center shadow-brutal group-hover:animate-pulse-neon`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold font-brutal text-lg">{contact.label}</p>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-brutal">
                <Heart className="inline-block w-5 h-5 mr-2 text-destructive" />
                SOCIAL PRESENCE
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={`w-14 h-14 border-2 border-foreground shadow-brutal hover:shadow-neon bg-${social.color} text-${social.color}-foreground hover:scale-110 transition-all duration-300`}
                      asChild
                    >
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                      >
                        <IconComponent className="w-7 h-7" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="p-8 border-2 border-foreground shadow-brutal hover:shadow-neon transition-all duration-500 group">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-cyber rounded-full flex items-center justify-center mx-auto shadow-brutal group-hover:animate-pulse-neon">
                  <Send className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-brutal">
                    READY TO COLLABORATE?
                  </h3>
                  <p className="text-muted-foreground">
                    Whether you have a project in mind, want to discuss opportunities, 
                    or just want to say hello - I'd love to hear from you!
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="brutal-hover bg-primary text-primary-foreground font-bold px-8 w-full"
                    asChild
                  >
                    <a href="mailto:aakashprathipaticore@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      SEND MESSAGE
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="brutal-hover border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold w-full"
                    asChild
                  >
                    <a href="tel:+917730901750">
                      <Phone className="w-5 h-5 mr-2" />
                      CALL NOW
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Fun Facts */}
            <Card className="p-6 border-2 border-foreground shadow-memphis bg-gradient-neon/10 hover:shadow-neon transition-all duration-300 animate-float">
              <div className="text-center space-y-4">
                <Star className="w-8 h-8 text-warning mx-auto animate-pulse" />
                <h4 className="font-bold font-brutal">FUN FACT</h4>
                <p className="text-muted-foreground text-sm">
                  I speak <span className="text-primary font-bold">English</span>, 
                  <span className="text-secondary font-bold"> Telugu</span>, and 
                  <span className="text-accent font-bold"> Hindi</span> fluently - 
                  perfect for global collaboration!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;