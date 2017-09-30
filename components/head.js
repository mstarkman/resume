/* eslint-disable react/self-closing-comp */
import NextHead from 'next/head'

const Head = () => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Mark Starkman's Resume" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />

    {/* Add to homescreen for Chrome on Android */}
    <meta name="mobile-web-app-capable" content="yes" />
    <link rel="icon" sizes="192x192" href="/static/img/android-desktop.png" />

    {/* Add to homescreen for Safari on iOS  */}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="Mark Starkman's Resume" />
    <link rel="apple-touch-icon-precomposed" href="/static/img/ios-desktop.png" />

    {/* Add favicon */}
    <link rel="shortcut icon" href="/static/img/favicon.png" />

    <title>Mark Starkman&#39;s Resume</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css"
      integrity="sha256-spCEAaZMKebC3rE/ZTt8jITn65b0Zan45WXblWjyDyQ="
      crossOrigin="anonymous"
    />
    <script src="https://use.fontawesome.com/640f2595b4.js"></script>
  </NextHead>
)

export default Head
