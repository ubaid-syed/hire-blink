const CompanyLogo = () => {
  const logos = [
    '/ignite_sales_academy_logo.jfif',
    '/Layer_1-26.png', 
    '/logo.webp',
    '/syndicate_legal_group_logo.jfif',
    'https://media.licdn.com/dms/image/v2/D560BAQEtFMaSYifWFA/company-logo_200_200/company-logo_200_200/0/1713883468746/designbake_logo?e=1755129600&v=beta&t=sKuJ04rHwYuwqcCcKpaPj_NccOxGnMI93VwXdwMsApw'
  ];

  return (
    <div className="w-full container mx-auto py-20 overflow-hidden flex  flex-col sm:flex-row sm:items-center items-start ">
      <div className="baloo-text w-[300px] shrink-0 px-8 text-gray-300 border-l-4 border-[#C7F380] bg-[#0D263A] py-2 z-10 sm:text-base text-xl font-semibold sm:text-left  mb-8 sm:mb-0">
      Clients Supported
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-10 w-40 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo; 