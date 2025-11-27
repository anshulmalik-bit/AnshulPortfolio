import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_data_visualization_background_with_geometric_shapes_and_subtle_gradients.png";
import profileImg from "@assets/generated_images/professional_headshot_of_a_young_male_data_analyst.png";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-4">
            Data Analyst & HR Professional
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
            Hi, I’m <span className="text-primary">Anshul.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            B.Tech CSE + MBA in Data Analytics & HR
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I combine technology, data, and people insights to solve complex business problems and drive organizational success.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="/resume.pdf" download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Decorative Circle */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-primary/10 scale-125" />
            
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl relative z-10">
              <img
                src={profileImg}
                alt="Anshul Malik"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border z-20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">Status</p>
                  <p className="text-sm font-bold text-foreground">Open to Work</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
