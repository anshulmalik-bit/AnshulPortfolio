import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Let's Connect</h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm currently looking for analyst roles and internships. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:anshulmalik694@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email Me</p>
                  <p className="font-semibold">anshulmalik694@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/anshul-malik-33584622a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="bg-blue-600/10 p-3 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Connect on LinkedIn</p>
                  <p className="font-semibold">Anshul Malik</p>
                </div>
              </a>

              <a
                href="https://github.com/anshulmalik-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="bg-gray-800/10 p-3 rounded-full text-gray-800 dark:text-white group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Check my Code</p>
                  <p className="font-semibold">github.com/anshulmalik-bit</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
