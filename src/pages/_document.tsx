import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta data-rh="true" name="theme-color" content="#FFFFFF" />
      <meta name="google-site-verification" content="7b2EE30qUvzkuPsb2Ee-Q-0rv5LljYAB4_CWRgLtfu4" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCNM7FL8F0"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZCNM7FL8F0', {
        page_path: window.location.pathname
      });
      console.log('🟢 Google Analytics initialized:', 'G-ZCNM7FL8F0');
    `,
  }}
/>

      {/* <script
        crossOrigin="anonymous"
        src="//unpkg.com/react-scan/dist/auto.global.js"
      /> */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /> */}
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
