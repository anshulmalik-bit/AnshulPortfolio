import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code2, Users, BrainCircuit } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Python", "Pandas", "NumPy", "SQL", "Excel", "Power BI", "Data Visualization", "Intro to ML"],
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "HR & Business Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["HR Metrics & KPIs", "People Analytics", "Survey Analysis", "Workforce Analytics", "Strategic Planning"],
      color: "bg-teal-500/10 text-teal-600",
    },
    {
      title: "Soft Skills",
      icon: <BrainCircuit className="h-6 w-6" />,
      skills: ["Communication", "Problem Solving", "Presentation", "Teamwork", "Adaptability", "Critical Thinking"],
      color: "bg-purple-500/10 text-purple-600",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">My Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit combining technical proficiency with business acumen and interpersonal strengths.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
