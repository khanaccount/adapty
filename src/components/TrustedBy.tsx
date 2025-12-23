export default function TrustedBy() {
  const logos = [
    { name: 'Feeld', src: 'https://adapty.io/assets/uploads/2024/01/logo-feeld-gray.svg' },
    { name: 'Bumble', src: 'https://adapty.io/assets/uploads/2024/01/logo-bumble-gray.svg' },
    { name: 'Weewoo', src: 'https://adapty.io/assets/uploads/2025/02/weewoo.svg' },
    { name: 'AppNation', src: 'https://adapty.io/assets/uploads/2025/02/AppNation.webp' },
    { name: 'Almus', src: 'https://adapty.io/assets/uploads/2025/02/almus.svg' },
    { name: 'Impala Studios', src: 'https://adapty.io/assets/uploads/2024/01/logo-text-impala-studios-gray.svg' },
    { name: 'HUBX', src: 'https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg' }
  ];

  return (
    <section className="py-16 bg-[#f7f4f2]">
      <div className="container mx-auto px-6">
        <h2 
          className="flex self-center justify-center text-center font-medium mb-12"
          style={{ 
            fontSize: 'calc(var(--text-m) + 2px)',
            color: 'var(--a-gray-600)'
          }}
        >
          Trusted by <span className="font-bold">15,000+ apps</span> and the world's largest app publishers
        </h2>
        
        <div className="flex flex-nowrap justify-center items-center gap-2 md:gap-3 lg:gap-4">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="h-5 md:h-6 lg:h-7 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

