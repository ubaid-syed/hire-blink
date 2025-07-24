import React from "react";

const logos = [
  {
    src: '/ignite_sales_academy_logo_11zon.webp',
    width: 160,
    height: 40,
  },
  {
    src: '/Layer_1-26.webp',
    width: 160,
    height: 40,
  },
  {
    src: '/logo.webp',
    width: 160,
    height: 40,
  },
  {
    src: '/syndicate_legal_group_logo_11zon.webp',
    width: 160,
    height: 40,
  },
  {
    src: 'star_11zon.webp',
    width: 160,
    height: 40,
  },
];

const CompanyLogo = () => {
  return (
    <div
      className="w-full container mx-auto py-20 overflow-hidden flex flex-col sm:flex-row sm:items-center items-start"
      style={{ minHeight: 120 }} // Reserve space to prevent layout shift
    >
      <div
        className="baloo-text w-[300px] shrink-0 px-8 text-gray-300 border-l-4 border-[#C7F380] bg-[#0D263A] py-2 z-10 sm:text-base text-xl font-semibold sm:text-left mb-8 sm:mb-0"
        style={{ minHeight: 56, lineHeight: "2.5rem" }} // Reserve space for text
      >
        Clients Supported
      </div>
      <div
        className="flex animate-marquee whitespace-nowrap items-center"
        style={{
          minHeight: 56, // Reserve space for logos
        }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={`Company Logo ${index + 1}`}
            width={logo.width}
            height={logo.height}
            className="mx-12 h-10 w-40 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            style={{ minWidth: logo.width, minHeight: logo.height }}
            loading="lazy"
            decoding="async"
          />
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo.src}
            alt={`Company Logo ${index + 1}`}
            width={logo.width - 16}
            height={logo.height - 4}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            style={{ minWidth: logo.width - 16, minHeight: logo.height - 4 }}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;