export default function Hero() {
  return (
    <section className="relative flex items-center bg-[#f7f4f2] text-gray-900 overflow-x-hidden py-12 lg:py-16">
      <div className="container mx-auto px-6 overflow-visible">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div>
            <a
              href="https://adapty.io/ebooks/100k-app-playbook/"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 hover:bg-violet-200 rounded-full text-sm font-medium mb-8 transition-colors"
            >
              <span className="text-violet-700">Ebook</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-violet-900">$100K playbook | download</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 8 12" width="8" height="12">
                  <path
                    d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z"
                    fill="#242424"
                  />
                </svg>
              </div>
            </a>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Revenue management for in-app purchases
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Save months on integrating subscriptions and double your app revenue with paywall
              management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <form className="flex gap-2 flex-1 min-w-0">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 flex-1 text-sm min-w-0"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap text-sm flex items-center gap-2"
                >
                  Start for free
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 8 12">
                    <path
                      d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
              <a
                href="https://adapty.io/schedule-demo/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-violet-600 text-violet-600 hover:bg-violet-50 font-semibold rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Book a demo
                <svg className="w-3 h-3" fill="none" viewBox="0 0 8 12" width="8" height="12">
                  <path
                    d="M1.54056 11.7453L0.124965 10.341L4.24317 6.20975L0.149247 2.10837L1.54056 0.722595L7.05192 6.23396L1.54056 11.7453Z"
                    fill="#242424"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative overflow-visible lg:pr-0 lg:ml-8 xl:ml-12">
            <div className="relative w-full overflow-visible">
              <picture className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-8 md:-translate-x-12 lg:-translate-x-16 w-36 md:w-40 lg:w-48 z-10">
                <img
                  src="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
                  alt="Adapty Paywall Demo Preview"
                  className="w-full rounded-2xl shadow-2xl"
                  decoding="async"
                  draggable="false"
                  loading="eager"
                />
              </picture>
              <picture className="relative w-full">
                <img
                  src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
                  alt="Adapty Overview"
                  className="w-full rounded-xl shadow-2xl lg:translate-x-8 lg:mr-[-20%] xl:mr-[-25%]"
                  decoding="async"
                  draggable="false"
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
