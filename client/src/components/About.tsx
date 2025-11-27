import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Search, Star } from "lucide-react";

export default function About() {
  const quickFacts = [
    {
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      label: "Education",
      value: "B.Tech CSE, MBA Data Analytics & HR",
    },
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      label: "Focus Areas",
      value: "Python, SQL, Power BI, HR Analytics",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      label: "Looking For",
      value: "Analyst roles / Internships",
    },
    {
      icon: <Star className="h-5 w-5 text-primary" />,
      label: "Strengths",
      value: "Fast learner, Analytical, Detail-oriented",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a driven professional with a unique dual background in Computer Science Engineering and Business Administration. This combination allows me to bridge the gap between technical data solutions and strategic human resource management.
              </p>
              <p>
                My passion lies in uncovering actionable insights from complex datasets. Whether it's optimizing workforce planning through predictive modeling or visualizing key performance indicators for better decision-making, I love turning raw numbers into stories that drive change.
              </p>
              <p>
                Currently, I am deepening my expertise in advanced analytics tools and looking for opportunities to apply my skills in a dynamic business environment where data meets people strategy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      {fact.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{fact.label}</h3>
                      <p className="text-muted-foreground">{fact.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
