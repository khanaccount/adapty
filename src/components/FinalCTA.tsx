export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-violet-600 to-purple-700 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get started today or schedule a demo
            <br />
            <span className="text-violet-200">for your personal onboarding</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <a 
              href="https://app.adapty.io/registration-by-email/"
              className="px-8 py-4 bg-white text-violet-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start for free
            </a>
            <a 
              href="https://adapty.io/schedule-demo/"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Schedule a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

