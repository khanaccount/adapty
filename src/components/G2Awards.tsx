export default function G2Awards() {
  const awards = [
    { name: 'Best Results', src: 'https://adapty.io/assets/uploads/2025/03/g2-best_results-winter_2025.svg' },
    { name: 'High Performer', src: 'https://adapty.io/assets/uploads/2025/03/g2-high_performer-winter_2025.svg' },
    { name: 'Best Usability', src: 'https://adapty.io/assets/uploads/2025/03/g2-best_usability-winter_2025.svg' },
    { name: 'Best Relationship', src: 'https://adapty.io/assets/uploads/2025/03/g2-best_relationship-winter_2025.svg' },
    { name: 'Most Implementable', src: 'https://adapty.io/assets/uploads/2025/03/g2-most_implementable-winter_2025.svg' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Trusted for usability and customer service
          </h2>
          <a 
            href="https://www.g2.com/products/adapty-io/reviews" 
            target="_blank"
            className="inline-block mb-8"
          >
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-sm">Based on 500+ reviews</p>
          </a>
          
          <div className="flex flex-wrap justify-center gap-4">
            {awards.map((award, index) => (
              <a
                key={index}
                href="https://www.g2.com/products/adapty-io/reviews"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={award.src} alt={`G2 Award: ${award.name}, winter 2025`} className="h-20" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

