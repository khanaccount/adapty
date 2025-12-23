import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SDKIntegration() {
  const [activeTab, setActiveTab] = useState(0);
  
  const codeExamples = [
    {
      language: 'Swift',
      lang: 'swift',
      icon: '🟠',
      code: `// Your app's code
import Adapty
 
do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
 
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
      github: 'https://github.com/adaptyteam/AdaptySDK-iOS'
    },
    {
      language: 'Kotlin',
      lang: 'kotlin',
      icon: '🟣',
      code: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())
 
// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
  when (result) {
    is AdaptyResult.Success -> {
      if (result.value is AdaptyPurchaseResult.Success)
        // successful purchase
    }
    is AdaptyResult.Error -> {
      // handle the error
    }
  }
}`,
      github: 'https://github.com/adaptyteam/AdaptySDK-Android'
    },
    {
      language: 'React Native',
      lang: 'javascript',
      icon: '⚛️',
      code: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');
 
// Make a purchase, Adapty handles the rest
try {
  const profile = await adapty.makePurchase(product);
  // successful purchase
} catch (error) {
  // handle the error
}`,
      github: 'https://github.com/adaptyteam/AdaptySDK-React-Native'
    },
    {
      language: 'Flutter',
      lang: 'dart',
      icon: '💙',
      code: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';
 
try {
  await Adapty().activate();
 
  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
      github: 'https://github.com/adaptyteam/AdaptySDK-Flutter'
    },
    {
      language: 'Unity',
      lang: 'csharp',
      icon: '🎮',
      code: `// Your app's code
using AdaptySDK;
 
Adapty.makePurchase(product, (profile, error) => {
  if (error == null) {
    // successful purchase
  }
});`,
      github: 'https://github.com/adaptyteam/AdaptySDK-Unity'
    }
  ];

  return (
    <section 
      className="flex flex-col items-center w-full text-white"
      style={{
        paddingBlock: 'var(--section-space-m)',
        paddingInline: 'var(--section-padding-x)',
        backgroundColor: 'var(--a-const-gray-1000)',
        paddingTop: 'var(--space-xxl)',
        paddingBottom: 'var(--space-xxl)'
      }}
    >
      <div className="w-full" style={{ maxWidth: 'var(--a-container-width--desktop)', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 
          className="mb-8 md:mb-12"
          style={{
            width: '100%',
            lineHeight: '110%',
            textAlign: 'left',
            fontSize: 'clamp(2rem, 4vw, var(--h2))',
            fontFamily: '"Gilroy", sans-serif',
            fontWeight: 400,
            color: 'var(--a-const-white)',
            marginBottom: 'var(--space-m)'
          }}
        >
          Integrate in-app purchases with a few lines of code
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <p 
              className="mb-6"
              style={{
                fontSize: 'var(--text-m)',
                lineHeight: 'var(--text-m-lh)',
                color: 'var(--a-const-white)'
              }}
            >
              Integrate IAPs within a few hours without server coding. Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in&nbsp;a&nbsp;simple, developer-friendly SDK.
            </p>
            
            <a 
              href="https://adapty.io/sdk/"
              className="inline-flex items-center gap-2 mb-6 border border-white hover:bg-white hover:text-black transition-all duration-200"
              style={{
                paddingBlock: 'var(--btn-padding-block)',
                paddingInline: 'var(--btn-padding-inline)',
                color: 'var(--a-const-white)',
                textDecoration: 'none',
                fontSize: 'var(--text-m)'
              }}
            >
              Make subscriptions easy
              <svg className="w-3 h-3" fill="none" viewBox="0 0 13 12" width="13" height="12">
                <path d="M6.88104 11.9205L5.71058 10.7614L9.21626 7.25568H0.699219V5.5625H9.21626L5.71058 2.0625L6.88104 0.897727L12.3924 6.40909L6.88104 11.9205Z" fill="#111111"/>
              </svg>
            </a>
            
            <div className="border-t pt-6" style={{ borderColor: 'var(--a-gray-800)' }}>
              <div
                style={{
                  paddingTop: 'var(--space-m)',
                  paddingRight: 'var(--space-s)',
                  paddingBottom: 'var(--space-s)',
                  paddingLeft: 'var(--space-s)',
                  color: 'var(--a-const-white)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-m)',
                  transition: 'var(--a-anim)',
                  position: 'relative'
                }}
              >
                <img 
                  src="https://adapty.io/assets/uploads/2024/08/quotes-white.svg" 
                  alt="Quotes (white)" 
                  className="mb-4"
                  style={{ height: 'auto', width: 'auto' }}
                />
                <div className="mb-4">
                  <img 
                    src="https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp" 
                    alt="Smitten" 
                    style={{ height: '58px', width: 'auto' }}
                  />
                </div>
                <p 
                  className="mb-6"
                  style={{
                    fontSize: 'var(--text-m)',
                    lineHeight: 'var(--text-m-lh)',
                    color: 'var(--a-const-white)'
                  }}
                >
                  "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android."
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://adapty.io/assets/uploads/2024/02/Magnus-Olafsson-Smitten@2x.webp" 
                    alt="Magnus Olafsson Smitten" 
                    className="rounded-full"
                    style={{ width: '4rem', height: '4rem' }}
                  />
                  <div>
                    <div 
                      style={{
                        fontSize: 'var(--text-m)',
                        lineHeight: 'var(--text-m-lh)',
                        color: 'var(--a-const-white)',
                        fontWeight: 400,
                        marginBottom: '0.25rem'
                      }}
                    >
                      Magnús Ólafsson
                    </div>
                    <div 
                      style={{
                        fontSize: 'var(--text-s)',
                        lineHeight: 'var(--text-s-lh)',
                        color: 'var(--a-gray-400)'
                      }}
                    >
                      Chief Technology Officer at Smitten
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full">
            <div className="rounded-xl overflow-hidden w-full" style={{ backgroundColor: '#212121' }}>
              <div className="flex border-b overflow-x-auto" style={{ borderColor: 'var(--a-gray-800)' }}>
                {codeExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-3 py-2.5 text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
                      activeTab === index
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    style={{
                      backgroundColor: activeTab === index ? 'transparent' : 'transparent',
                      borderBottom: activeTab === index ? '2px solid var(--a-primary)' : 'none',
                      fontSize: 'var(--text-s)'
                    }}
                  >
                    <span>{example.icon}</span>
                    <span>{example.language}</span>
                  </button>
                ))}
              </div>
              
              <div className="p-4 md:p-6">
                <div className="mb-4 overflow-x-auto" style={{ fontSize: 'clamp(14px, 0.875rem, 21px)' }}>
                  <SyntaxHighlighter
                    language={codeExamples[activeTab].lang}
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: 0,
                      background: 'transparent',
                      fontFamily: 'Code-Pro-Roboto-Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      fontSize: 'inherit',
                      lineHeight: 'clamp(20px, 1.25rem, 30px)',
                      minWidth: '100%'
                    }}
                    codeTagProps={{
                      style: {
                        fontFamily: 'inherit',
                        fontSize: 'inherit'
                      }
                    }}
                    PreTag={({ children, ...props }) => (
                      <pre {...props} style={{ ...props.style, overflow: 'visible' }}>
                        {children}
                      </pre>
                    )}
                  >
                    {codeExamples[activeTab].code}
                  </SyntaxHighlighter>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--a-gray-800)' }}>
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://adapty.io/assets/uploads/2024/01/github-logo.svg" 
                      alt="GitHub Logo" 
                      style={{ width: '1.25rem', height: '1.25rem' }}
                    />
                    <span 
                      style={{
                        fontSize: 'var(--text-s)',
                        lineHeight: 'var(--text-s-lh)',
                        color: 'var(--a-const-white)'
                      }}
                    >
                      100% Open Source
                    </span>
                  </div>
                  <a 
                    href={codeExamples[activeTab].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                    style={{
                      backgroundColor: 'var(--a-gray-800)',
                      color: 'var(--a-const-white)',
                      textDecoration: 'none',
                      fontSize: 'var(--text-s)'
                    }}
                  >
                    Go to GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
