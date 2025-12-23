export default function SDKPlatforms() {
  const platforms = [
    { name: 'Swift SDK', icon: '⚡', href: 'https://adapty.io/sdk/ios/' },
    { name: 'Kotlin SDK', icon: '☕', href: 'https://adapty.io/sdk/android/' },
    { name: 'React Native SDK', icon: '⚛️', href: 'https://adapty.io/sdk/react-native/' },
    { name: 'Unity SDK', icon: '🎮', href: 'https://adapty.io/sdk/unity/' },
    { name: 'Flutter SDK', icon: '📱', href: 'https://adapty.io/sdk/flutter/' },
    { name: 'Capacitor SDK', icon: '🔌', href: 'https://adapty.io/sdk/capacitor/' },
    { name: 'KMP SDK', icon: '🔀', href: 'https://adapty.io/sdk/kmp/' },
    { name: 'FlutterFlow', icon: '🎨', href: 'https://adapty.io/sdk/flutterflow/' },
    { name: 'Web API', icon: '🌐', href: 'https://adapty.io/sdk/web/' },
    { name: 'Stripe', icon: '💳', href: 'https://adapty.io/integrations/stripe/' }
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get the SDK for your platform
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.href}
              className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
            >
              <div className="text-4xl mb-3">{platform.icon}</div>
              <h3 className="text-sm font-semibold text-center mb-2">{platform.name}</h3>
              <svg className="w-4 h-4 text-violet-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 8 12">
                <path d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z" fill="currentColor"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

