export default function Features() {
  const features = [
    {
      title: 'For developers',
      image: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp',
      imageAlt: 'Card Cover Sdk Install',
      items: [
        'Subscriptions SDK',
        'Refund Saver',
        'Remote config',
        'Fallback paywalls'
      ],
      link: 'https://adapty.io/for-developers/'
    },
    {
      title: 'For app owners',
      image: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp',
      imageAlt: 'Card Cover Charts',
      items: [
        'Revenue analytics',
        'LTV analytics',
        'AI LTV and revenue predictions'
      ],
      link: 'https://adapty.io/for-app-owners/'
    },
    {
      title: 'For marketers',
      image: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp',
      imageAlt: 'Card Cover Paywalls',
      items: [
        'A/B testing',
        'No-code Builder',
        'Localizations',
        'Targeting'
      ],
      link: 'https://adapty.io/for-marketers/'
    }
  ];

  return (
    <section 
      className="flex flex-col items-center bg-white w-full"
      style={{
        paddingBlock: 'var(--section-space-m)',
        paddingInline: 'var(--section-padding-x)'
      }}
    >
      <div className="w-full" style={{ maxWidth: 'var(--a-container-width--desktop)', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 
          className="text-center mb-12 md:mb-16"
          style={{
            fontSize: 'var(--h2)',
            lineHeight: 'var(--h2-lh)',
            fontWeight: 400
          }}
        >
          Help your team run the mobile subscription business.{' '}
          <br className="hidden md:block" />
          Faster and cheaper.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              className="group block border border-gray-200 rounded-xl overflow-hidden hover:border-violet-300 hover:shadow-lg transition-all duration-200 bg-white"
            >
              <picture className="block w-full">
                <img 
                  src={feature.image} 
                  alt={feature.imageAlt}
                  className="w-full h-auto object-cover"
                  decoding="async"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </picture>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-base font-medium text-gray-900">
                    {feature.title}
                  </div>
                  <img 
                    src="https://adapty.io/assets/uploads/2025/02/icon-arrow-acute-angle-pink.svg"
                    alt="Arrow Acute Angle Pink"
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    loading="lazy"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {feature.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="inline-block px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

