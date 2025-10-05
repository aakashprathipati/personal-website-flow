import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aakashprathipaticore@gmail.com",
    href: "mailto:aakashprathipaticore@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7730901750",
    href: "tel:+917730901750"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vijayawada, India",
    href: "https://maps.google.com/?q=Vijayawada,India"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="neon-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={index}
                  className="glass-card p-6 slide-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a 
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">{contact.label}</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </Card>
              );
            })}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-muted-foreground mb-4">Connect on social</p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="cyber-border h-12 w-12"
                  asChild
                >
                  <a href="https://github.com/aakashprathipati" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="cyber-border h-12 w-12"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/aakash-prathipati-741b18347/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="glass-card p-8 slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-cyber rounded-2xl flex items-center justify-center mx-auto pulse-glow">
                <Send className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Ready to Collaborate?</h3>
                <p className="text-muted-foreground">
                  Whether it's a groundbreaking project, an exciting opportunity, or just a friendly chat - I'm all ears!
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Button 
                  size="lg" 
                  className="w-full glass-card"
                  asChild
                >
                  <a href="mailto:aakashprathipaticore@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full cyber-border"
                  asChild
                >
                  <a href="tel:+917730901750">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Me
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;