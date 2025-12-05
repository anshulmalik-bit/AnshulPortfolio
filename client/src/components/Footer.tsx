import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold font-heading text-primary mb-2">Anshul Malik</h3>
          <p className="text-sm text-muted-foreground">
            © 2025 Anshul Malik. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/anshul-malik-33584622a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/anshulmalik-bit" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:anshulmalik694@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
