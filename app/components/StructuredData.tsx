import React from 'react';

export const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Juntamos",
    "description": "Extensão do Chrome para provador virtual de roupas com IA. Funciona em qualquer e-commerce.",
    "applicationCategory": "BrowserExtension",
    "operatingSystem": "Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "author": {
      "@type": "Organization",
      "name": "Juntamos"
    },
    "featureList": [
       "Provador virtual em tempo real",
       "Compatibilidade com qualquer loja online",
       "Privacidade garantida",
       "IA de alta precisão para caimento de roupas"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
