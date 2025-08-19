import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        
        {/* PWA Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/web-app-manifest-512x512.png" />
        
        {/* Theme and App Configuration */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Clean Neubrutalism" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <body className="bg-white text-zinc-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
