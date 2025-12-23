export default function Stats() {
  const stats = [
    {
      value: (
        <>
          <span className="prefix">$</span>
          <span className="count">2</span>
          <span className="suffix">B</span>
        </>
      ),
      label: 'tracked revenue'
    },
    {
      value: (
        <>
          <span className="count">99</span>
          <span className="text-base">.</span>
          <span className="count">99</span>
          <span className="suffix">%</span>
        </>
      ),
      label: 'historical uptime'
    },
    {
      value: (
        <>
          <span className="count">2</span>
          <span className="text-base">.</span>
          <span className="count">5</span>
          <span className="suffix">B</span>
        </>
      ),
      label: 'users served'
    },
    {
      value: (
        <>
          <span className="count">60</span>
          <span className="suffix">B</span>
        </>
      ),
      label: 'API calls / month'
    }
  ];

  return (
    <section 
      className="flex flex-col items-center w-full"
      style={{
        paddingBlock: 'var(--section-space-m)',
        paddingInline: 'var(--section-padding-x)',
        backgroundColor: 'var(--a-bg-cold)'
      }}
    >
      <div className="w-full" style={{ maxWidth: 'var(--a-container-width--desktop)', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 
          className="text-center mb-12 md:mb-16"
          style={{
            fontSize: 'var(--h2)',
            lineHeight: 'var(--h2-lh)',
            fontWeight: 400,
            color: 'var(--a-black)'
          }}
        >
          Adapty processes subscription revenue with the industry's highest SLA Rate
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="mb-3"
                style={{
                  fontSize: 'var(--text-xxl)',
                  lineHeight: 'var(--text-xxl-lh)',
                  fontWeight: 400,
                  color: 'var(--a-black)'
                }}
              >
                {stat.value}
              </div>
              <div 
                style={{
                  fontSize: 'var(--text-m)',
                  lineHeight: 'var(--text-m-lh)',
                  color: 'var(--a-gray-600)'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

