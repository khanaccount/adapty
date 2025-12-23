export default function FeatureCards() {
  const features = [
    {
      title: 'Increase subscription revenue without app releases',
      description: 'Manage, target, localize and personalize paywalls without leaving your browser.',
      cta: 'Increase app revenue',
      ctaLink: 'https://adapty.io/paywall-ab-testing/',
      image: 'https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@2x.webp',
      quote: {
        text: "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
        author: 'Ilgar Tali',
        role: 'Founder & Chief Vision Officer',
        company: 'Smartist',
        avatar: 'https://adapty.io/assets/uploads/2024/02/Ilgar-Tali-Smartist@2x.webp',
        logo: 'https://adapty.io/assets/uploads/2024/03/logo-smartist-black@2x.png'
      },
      reverse: false
    },
    {
      title: 'Cut refund rate by 40%',
      description: 'Stop losing revenue on refunds – Adapty automatically shares user activity data with Apple for refund requests and reduces it.',
      cta: 'Set up Refund Saver',
      ctaLink: 'https://adapty.io/refund-saver/',
      image: 'https://adapty.io/assets/uploads/2025/05/refund-rate@2x-1024x768.webp',
      quote: {
        text: "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away.",
        author: 'Berk Çağatay Albayrak',
        role: 'Sr. Product Manager',
        company: 'Fotorama',
        avatar: 'https://adapty.io/assets/uploads/2024/12/avatar-berk-cagatay-gray@3x.webp',
        logo: 'https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp'
      },
      reverse: true
    },
    {
      title: 'Know your subscription numbers at any moment',
      description: 'Measure your in-app economy from trials to refunds with a ready-to-go, real-time subscription BI.',
      cta: 'See subscription BI',
      ctaLink: 'https://adapty.io/ltv-analytics/',
      image: 'https://adapty.io/assets/uploads/2024/01/app-monetization-strategies@2x.webp',
      quote: {
        text: "Adapty's analytics provides invaluable insights into our app's performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy.",
        author: 'Nikolay Chebotarev',
        role: 'Head of UA at Moonly.app',
        company: 'Moonly',
        avatar: 'https://adapty.io/assets/uploads/2024/02/Nikolay.png',
        logo: 'https://adapty.io/assets/uploads/2023/12/app_icon_Moonly.svg'
      },
      reverse: false
    },
    {
      title: 'No-code paywall builder',
      description: 'Build beautiful native paywalls for iOS, Android, Flutter, and React Native without a dev team.',
      cta: 'Create paywalls within minutes',
      ctaLink: 'https://adapty.io/paywall-builder/',
      image: 'https://adapty.io/assets/uploads/2024/01/no-code-paywall-builder@2x.webp',
      quote: {
        text: "Adapty's Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins.",
        author: 'Mike McSweeney',
        role: 'Chief Product Officer',
        company: 'Moodworks Inc',
        avatar: 'https://adapty.io/assets/uploads/2024/02/Mike-McSweeney-Moodworks-inc@2x.webp',
        logo: 'https://adapty.io/assets/uploads/2024/02/app-icon-cat.png'
      },
      reverse: true
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {features.map((feature, index) => (
          <div key={index} className="max-w-7xl mx-auto mb-24 last:mb-0">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className={feature.reverse ? 'lg:order-2' : ''}>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                <a 
                  href={feature.ctaLink}
                  className="inline-flex items-center gap-2 px-6 py-3 text-gray-900 font-semibold hover:text-violet-600 transition-colors group"
                >
                  {feature.cta}
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 13 12">
                    <path d="M6.88104 11.9205L5.71058 10.7614L9.21626 7.25568H0.699219V5.5625H9.21626L5.71058 2.0625L6.88104 0.897727L12.3924 6.40909L6.88104 11.9205Z" fill="currentColor"/>
                  </svg>
                </a>
                
                <div className="border-t border-gray-200 mt-8 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={feature.quote.logo} alt={feature.quote.company} className="h-8" />
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{feature.quote.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={feature.quote.avatar} alt={feature.quote.author} className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="font-semibold text-gray-900">{feature.quote.author}</div>
                      <div className="text-sm text-gray-600">{feature.quote.role}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={feature.reverse ? 'lg:order-1' : ''}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

