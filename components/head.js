/* eslint-disable react/self-closing-comp */
import NextHead from 'next/head'
import './global.css'

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

    {/* Load fonts and Bulma */}
    <link href="https://fonts.googleapis.com/css?family=Asap:400,400i,600,600i" rel="stylesheet" />
    <link href="/static/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css"
      integrity="sha256-spCEAaZMKebC3rE/ZTt8jITn65b0Zan45WXblWjyDyQ="
      crossOrigin="anonymous"
    />

    {/* Let's have some fun with FontAwesome */}
    <script src="https://use.fontawesome.com/640f2595b4.js"></script>
  </NextHead>
)

export default Head
