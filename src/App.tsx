import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {

  useEffect(() => {
    // ✅ Inject chatbot widget globally
    if (!document.getElementById("chat-widget-script")) {
      const script = document.createElement("script");
      script.id = "chat-widget-script";

      // 👉 CHANGE THIS depending on widget:
      // Your TOB widget:
      // script.src = "https://tob-chatbot.netlify.app/tob-widget.js";

      // OR Wonderchat widget:
      script.src = "https://app.wonderchat.io/scripts/wonderchat-seo.js";
      script.defer = true;

      // Only needed for Wonderchat
      script.setAttribute("data-name", "wonderchat-seo");
      script.setAttribute("data-address", "app.wonderchat.io");
      script.setAttribute("data-id", "cmi84xc2k0i1qdu9x7mbi0f2z");
      script.setAttribute("data-widget-size", "normal");
      script.setAttribute("data-widget-button-size", "normal");

      document.body.appendChild(script);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
