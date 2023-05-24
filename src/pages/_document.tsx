import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Capputeeno - Ecommerce" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className='bg-gray-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
