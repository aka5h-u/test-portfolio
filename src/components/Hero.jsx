import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById("work-experience");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-light mb-2 text-[hsl(var(--muted-foreground))]">
            Hello, I'm
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold mb-4 text-[hsl(var(--primary))]">
            Gargi Pandey
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8 text-[hsl(var(--primary))]">
            Digital Marketing Specialist
          </h3>
          <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] mb-12 max-w-2xl mx-auto">
            Crafting impactful campaigns for B2C, B2B, and D2C brands with 4.5
            years of expertise
          </p>

          <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToWork}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius)] text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] px-8 py-6 shadow-[var(--shadow-glow)]"
            >
              View My Work
            </button>
            <button className="relative inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius)] text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[hsl(var(--border))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] px-8 py-6">
              Get In Touch
              <div
                className="absolute bottom-0 left-0 translate-y-12 -translate-x-2 animate-bounce cursor-pointer"
                onClick={scrollToWork}
              >
                <ArrowDown className="w-6 h-6 text-[hsl(var(--primary))]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-20 w-72 h-72 bg-[hsl(var(--primary)/0.05)] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[hsl(var(--primary)/0.05)] rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
