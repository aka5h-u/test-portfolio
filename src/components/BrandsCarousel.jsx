import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ children, className, ...props }) => (
  <div
    className={`relative bg-[var(--gradient-subtle)] border-[hsl(var(--border))/0.5] rounded-[var(--radius)] transition-all duration-300 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-glow)] overflow-hidden ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-[hsl(var(--primary)/0.05)] rounded-[var(--radius)] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

const BrandsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const brands = [
    {
      name: "Walmart Global Tech",
      logoUrl: "/walmart.png",
      route: "walmart",
    },
    {
      name: "DHL eCommerce Malaysia",
      logoUrl: "/dhl.png",
      route: "dhl",
    },
    {
      name: "R3SET",
      logoUrl: "reset.png",
      route: "r3set",
    },
    {
      name: "Superset",
      logoUrl: "/superset.jpg",
      route: "superset",
    },
    {
      name: "MTV India",
      logoUrl: "/mtv.png",
      route: "mtv",
    },
    {
      name: "CRISIL Limited",
      logoUrl: "/crisil.png",
      route: "crisil",
    },
    {
      name: "TATA CLIQ LUXURY",
      logoUrl: "/tatacliq.png",
      route: "tatacliq",
    },
    {
      name: "HDFC Bank",
      logoUrl: "https://placehold.co/100x100?text=HDFC",
      route: "hdfc",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[hsl(var(--primary))]">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            I've had the privilege of working with innovative companies across
            various industries, helping them achieve remarkable growth through
            strategic digital marketing.
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll hover:animation-pause">
            {[...brands, ...brands].map((brand, index) => (
              <Card
                key={`${brand.name}-${index}`}
                onClick={() => navigate(`/brands/${brand.route}`)}
                className="flex-shrink-0 mx-8 w-32 h-32 flex items-center justify-center group cursor-pointer"
              >
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </Card>
            ))}
          </div>
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[hsl(var(--background))] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[hsl(var(--background))] to-transparent pointer-events-none"></div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-slide-up">
          <div className="text-center">
            <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">
              8+
            </div>
            <div className="text-[hsl(var(--muted-foreground))]">
              Brands Partnered
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">
              150%
            </div>
            <div className="text-[hsl(var(--muted-foreground))]">
              Average Growth Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">
              95%
            </div>
            <div className="text-[hsl(var(--muted-foreground))]">
              Client Retention Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
