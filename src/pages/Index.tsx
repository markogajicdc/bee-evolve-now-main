import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Bee I4.0 - Industry 4.0 Business Process Automation Solutions";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Transform your business with Bee I4.0's Industry 4.0 automation solutions. RPA bots, email automation, and end-to-end BI solutions to scale efficiently."
      );
    }

    // ✅ WONDERCHAT WIDGET INJECTION
    if (!document.getElementById("wonderchat-script")) {
      const script = document.createElement("script");
      script.id = "wonderchat-script";
      script.src = "https://app.wonderchat.io/scripts/wonderchat-seo.js";
      script.defer = true;

      // Required data attributes
      script.setAttribute("data-name", "wonderchat-seo");
      script.setAttribute("data-address", "app.wonderchat.io");
      script.setAttribute("data-id", "cmi84xc2k0i1qdu9x7mbi0f2z");
      script.setAttribute("data-widget-size", "normal");
      script.setAttribute("data-widget-button-size", "normal");

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
