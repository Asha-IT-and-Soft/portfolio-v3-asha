import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/fav.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
