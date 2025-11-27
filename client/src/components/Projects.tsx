import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Users2, PieChart } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "HR KPI Dashboard",
      tool: "Power BI / Excel",
      icon: <BarChart3 className="h-10 w-10 text-primary mb-4" />,
      description: "A comprehensive dashboard visualizing critical HR metrics including headcount trends, hiring efficiency, attrition rates, and daily attendance tracking.",
      tags: ["Power BI", "Data Viz", "HR Metrics"],
      link: "#",
    },
    {
      title: "Attrition Analysis",
      tool: "Python",
      icon: <Users2 className="h-10 w-10 text-primary mb-4" />,
      description: "Exploratory data analysis on a large HR dataset to identify key factors correlating with employee turnover. Built predictive models to flag high-risk employees.",
      tags: ["Python", "Pandas", "Scikit-learn"],
      link: "#",
    },
    {
      title: "Employee Survey Analysis",
      tool: "Excel / Power BI",
      icon: <PieChart className="h-10 w-10 text-primary mb-4" />,
      description: "Analyzed qualitative and quantitative data from employee engagement surveys to identify sentiment trends and actionable areas for cultural improvement.",
      tags: ["Excel", "Sentiment Analysis", "Reporting"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              Real-world applications of data analytics in HR and business contexts.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            View All Projects <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    {project.icon}
                    <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    Tool: {project.tool}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-background/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="gap-2">
            View All Projects <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
