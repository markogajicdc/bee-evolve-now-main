import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Mail, BarChart3, Clock, Shield, TrendingUp, Zap, Database, Users } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Bot,
      title: "RPA Bots",
      description: "Automate manual tasks using Microsoft Power Automate combined with Python, SQL, and PowerShell for advanced scenarios.",
      details: "Bots can run over Remote Desktop connections and execute repetitive business processes (mostly web-based).",
      benefits: [
        { icon: Clock, text: "Saves time and reduces manual effort" },
        { icon: Shield, text: "Reduces errors and improves accuracy" },
        { icon: TrendingUp, text: "Improves productivity and scales easily" },
      ],
      variant: "automation" as const,
    },
    {
      icon: Mail,
      title: "Email Alerts & Automation",
      description: "Automated email workflows and smart alerts to keep your team connected and informed.",
      details: "Intelligent notification system that ensures critical information reaches the right people at the right time.",
      benefits: [
        { icon: Users, text: "Keeps teams updated and aligned" },
        { icon: Clock, text: "Avoids missed deadlines" },
        { icon: Zap, text: "Improves communication efficiency" },
      ],
      variant: "innovation" as const,
    },
    {
      icon: BarChart3,
      title: "End-to-End BI & Data Solutions",
      description: "Full Data Engineering stack using Microsoft Azure, Microsoft Fabric, Python, PySpark, SQL, Power BI, and DAX.",
      details: "Building complete pipelines from raw data to dashboards and actionable insights for your business.",
      benefits: [
        { icon: TrendingUp, text: "Clear decision-making with data insights" },
        { icon: Database, text: "Optimized reporting and analytics" },
        { icon: Shield, text: "Modern scalable analytics infrastructure" },
      ],
      variant: "default" as const,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 hexagon-grid opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation solutions designed to transform your business operations 
            and drive efficiency in the Industry 4.0 era.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-tech group">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="h-8 w-8 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground">{product.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
              <p className="text-sm text-muted-foreground mb-6 italic">{product.details}</p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Benefits:</h4>
                {product.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start space-x-3">
                    <benefit.icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant={product.variant}
                onClick={scrollToContact}
                className="w-full"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;