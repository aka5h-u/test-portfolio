import { ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    title: "Copywriting Senior Analyst",
    company: "Accenture",
    period: "June 23 - Present",
    work: [
      " Acting as the Copywriting Senior Analyst for Accenture’s ecomm clients based in UK",
      "Devising content strategy to improve customer acquisiton, increasing retention for the client",
      "Building user-experience content for client website and other marketing deliverables",
      "Leading business improvement conversations with multiple stakeholders based in the UK",
    ],
  },
  {
    title: "Copywriting Specialist",
    company: "Zensciences Marketing Solutions",
    period: "April 21 - May 23",
    work: [
      "Led the marketing team to build content strategy and brand structure for B2B and B2C brands like CRISIL Limited, Walmart, DHL eCommerce, Omega Healthcare Services and Superset.",
      "Collated and wireframed the website widgets for R3set Pain Relief Solutions that led to 50% spike on sales. Set up storefront on Amazon too.",
      "Built user-experience content for e-mailers, social media calendars and large-scale tech events.",
    ],
  },
  {
    title: "Copywriter",
    company: "Dentu Aegies Network",
    period: "May 19 - October 19",
    work: [
      "Collaborated on projects with the design team to work with clients like MTV, HDFC, Sony Pictures, and",
      "Platinum Days of Love to create digital content comprising scripts, posts, and daily posts for brand campaigns.",
      "Won the Golden Montreux Award for MTV’s Baar Bra Dekho campaign.",
      "Pitched for brands like Airtel, TikTok, BMW and big Bazaar",
    ],
  },
];

const internships = [
  {
    title: "Communications Associate",
    company: "GLOBAL CITIZENSHIP FOUNDATION",
    period: "August 20 - Oct 20",
    work: [
      "Led internal communications for the Foundation team.",
      "Established rapport with various primary and secondary schools as a part of outreach.",
      "Collaborated with PR agencies.",
    ],
  },
  {
    title: "English Reporter",
    company: "NDTV 24x7",
    period: "Nov 16 - Dec 16",
    work: [
      " Assisted senior reporters in report writing and VOXPOPs for primetime news.",
      "Conceptualized and interviewed Sania Mirza and Parineeti Chopra for 24x7 entertainment segment",
    ],
  },
];
const education = [
  {
    year: "2016 - 2020",
    college: "University of Marketing Excellence",
    course: "Bachelor of Business Administration in Marketing",
  },
  {
    year: "2014 - 2016",
    college: "City College",
    course: "High School Diploma, Commerce Stream",
  },
];
const Card = ({ children, className, ...props }) => (
  <div
    className={`relative bg-[var(--gradient-subtle)] border-[hsl(var(--border))/0.5] rounded-[var(--radius)] transition-all duration-500 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-glow)] overflow-hidden ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-[hsl(var(--primary)/0.05)] rounded-[var(--radius)] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`px-6 pt-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`px-6 pb-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className, ...props }) => (
  <h3 className={`text-2xl font-bold ${className}`} {...props}>
    {children}
  </h3>
);

const Button = ({ children, className, variant, size, ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default:
      "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)]",
    outline:
      "border-[hsl(var(--primary))/0.5] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/0.1]",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.default} ${
        sizes[size] || sizes.default
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[hsl(var(--primary))]">
            Work Experience
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            A showcase of my professional contributions in digital marketing
            across diverse industries.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-[hsl(var(--muted-foreground))] my-4">
                      <span className="font-semibold text-[hsl(var(--primary))]">
                        {project.company}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2 text-[hsl(var(--primary))]" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="list-disc pl-5 text-[hsl(var(--muted-foreground))] space-y-2">
                  {project.work.map((task, i) => (
                    <li key={i} className="text-sm">
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-24 mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[hsl(var(--primary))]">
            Internships
          </h2>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                      {internship.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-[hsl(var(--muted-foreground))]">
                      <span className="font-semibold text-[hsl(var(--primary))]">
                        {internship.company}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span>{internship.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2 text-[hsl(var(--primary))]" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="list-disc pl-5 text-[hsl(var(--muted-foreground))] space-y-2">
                  {internship.work.map((task, i) => (
                    <li key={i} className="text-sm">
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 border-[hsl(var(--border))/0.5]">
            <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--primary))]">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-xl text-[hsl(var(--muted-foreground))] mb-6">
              Let's discuss how I can help drive results for your business.
            </p>
            <Button
              size="lg"
              className="hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              Schedule a Consultation
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
