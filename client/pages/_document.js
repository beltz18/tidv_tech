import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>TIDV Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport"    content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/icon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}