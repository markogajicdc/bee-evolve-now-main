import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, ArrowRight } from "lucide-react";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver exact solutions tailored to your unique business processes and requirements."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with our clients as trusted partners in their digital transformation journey."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage cutting-edge Industry 4.0 technologies to create forward-thinking solutions."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary/10 animate-hexagon" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}} />
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-accent/10 animate-hexagon delay-1000" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Bee I4.0</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Bee I4.0 is at the forefront of Business Process Automation in the Industry 4.0 era. 
              We specialize in transforming traditional business operations through intelligent automation, 
              advanced analytics, and seamless integration solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team combines deep technical expertise with practical business understanding to deliver 
              solutions that not only automate processes but also drive measurable business value. 
              From RPA implementation to comprehensive BI solutions, we help organizations scale 
              efficiently and make data-driven decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" onClick={scrollToContact} className="px-6">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
                View Our Solutions
              </Button>
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-tech group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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

export default About;