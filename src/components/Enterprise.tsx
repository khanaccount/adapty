export default function Enterprise() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Enterprise-grade platform
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Secure</h3>
              <ul className="space-y-2 text-gray-600">
                <li>SOC2 verified</li>
                <li>Encrypted</li>
                <li>24/7 global fraud monitoring</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Reliable</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="https://status.adapty.io/" target="_blank" className="hover:text-violet-600">
                    99.99% SLA
                  </a>
                </li>
                <li>Over $500M/year of in-app purchases processed</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Responsive</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Dedicated customer success manager</li>
                <li>Direct communication via Slack</li>
                <li>Live chat on the website</li>
                <li>Four ways to reach us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

