import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Card = ({ children, className, ...props }) => (
  <div
    className={`relative bg-[var(--gradient-card)] border-[hsl(var(--border))/0.5] rounded-[var(--radius)] transition-all duration-300 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-glow)] overflow-hidden ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-[hsl(var(--primary)/0.05)] rounded-[var(--radius)] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

const BrandDetail = () => {
  const { brandName } = useParams();

  const brands = [
    {
      name: "Walmart Global Tech",
      route: "walmart",
      work: [
        {
          description:
            "CODEHERS social media teaser: 'She is programmed to solve any problem'",
          image: "/codehers.png",
        },
        {
          description:
            "COVID-19 campaign: 'Double mask to encrypt your safety'",
          image: "/covid19.png",
        },
        {
          description: "Print Ads",
          image: "/printads.png",
        },
        {
          description: "Static Ads",
          image: "/staticads.png",
        },
      ],
    },
    {
      name: "DHL eCommerce Malaysia",
      route: "dhl",
      work: [
        {
          description: "Carousel ad: 'Get a Quote'",
          image: "/dhlcarouselads.png",
        },
        {
          description: "Social media post for service awareness",
          image: "/dhlsolution.png",
        },
      ],
    },
    {
      name: "R3SET",
      route: "r3set",
      work: [
        {
          description:
            "Social media post: '#RunFree so you can order more boba tea'",
          image: "/reset1.png",
        },
        {
          description: "Assisted illustration for campaign",
          image: "/reset2.png",
        },
        {
          description: "Topicals",
          image: "/reset3.png",
        },
        {
          description: "Emailers",
          image: "/reset4.png",
        },
      ],
    },
    {
      name: "Superset",
      route: "superset",
      work: [
        {
          description:
            "Website UX content: 'Explore the powerful all-in-one platform'",
          image: "/superset1.png",
        },
        {
          description:
            "Social media campaign: 'Stay super set for campus placements'",
          image: "/superset2.png",
        },
      ],
    },
    {
      name: "MTV India",
      route: "mtv",
      work: [
        {
          description: "This is NEON Women's Day campaign YouTube video",
          image: "/mtv1.png",
        },
        {
          description: "Golden Award of Montreux submission",
          image: "/mtv2.png",
        },
      ],
    },
    {
      name: "CRISIL Limited",
      route: "crisil",
      work: [
        {
          description:
            "#RebootAtCRISIL campaign: 'Women on a career break, deserve opportunities'",
          image: "https://placehold.co/600x400?text=CRISIL+Reboot+Campaign",
        },
      ],
    },
    {
      name: "TATA CLIQ LUXURY",
      route: "tatacliq",
      work: [
        {
          description: "Social copy for luxury brands event",
          image: "/tatacliq1.png",
        },
        {
          description: "Social copy for luxury brands event",
          image: "/tatacliq2.png",
        },
      ],
    },
    {
      name: "HDFC Bank",
      route: "hdfc",
      work: [
        {
          description: "Social media campaign leveraging engagement and ROI",
          image: "https://placehold.co/600x400?text=HDFC+Bank+Social+Media",
        },
      ],
    },
  ];

  const brand = brands.find((b) => b.route === brandName);

  if (!brand) {
    return (
      <section className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--primary)/0.9)] mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
          </Link>
          <h2 className="text-4xl font-bold text-[hsl(var(--primary))] animate-slide-up">
            Brand Not Found
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--primary)/0.9)] mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[hsl(var(--primary))] animate-slide-up">
          {brand.name} Portfolio
        </h2>
        <div className="grid gap-8 md:grid-cols-2 animate-slide-up">
          {brand.work.map((item, index) => (
            <Card key={index} className="p-6">
              <img
                src={item.image}
                alt={item.description}
                className="w-full h-64 object-cover rounded-[var(--radius)] mb-4"
              />
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {item.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--primary)/0.9)]"
              >
                View Details <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandDetail;
