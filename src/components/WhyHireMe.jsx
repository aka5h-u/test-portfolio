import { TrendingUp, Target, Users, BarChart } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description:
      "Consistently delivered 300%+ ROI on marketing campaigns across multiple industries",
  },
  {
    icon: Target,
    title: "Strategic Thinking",
    description:
      "Data-driven approach to identify opportunities and optimize campaigns for maximum impact",
  },
  {
    icon: Users,
    title: "Brand Building",
    description:
      "Expert in building authentic brand connections that convert followers into loyal customers",
  },
  {
    icon: BarChart,
    title: "Analytics Mastery",
    description:
      "Advanced proficiency in Google Analytics, Facebook Ads Manager, and marketing automation",
  },
];

const Card = ({ children, className, ...props }) => (
  <div
    className={`relative bg-[var(--gradient-subtle)] border-[hsl(var(--border))/0.5] rounded-[var(--radius)] transition-all duration-300 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-glow)] overflow-hidden ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-[hsl(var(--primary)/0.05)] rounded-[var(--radius)] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-6 pt-0 text-center ${className}`} {...props}>
    {children}
  </div>
);

const WhyHireMe = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[hsl(var(--primary))]">
            Why Choose Me?
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            I combine creative vision with analytical precision to deliver
            marketing campaigns that don't just look good—they perform
            exceptionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent>
                <div className="w-16 h-16 bg-[var(--gradient-primary)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-glow transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--primary))]">
                  {reason.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
