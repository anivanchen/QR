import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>QR</title>
        <meta name="description" content="A QR code generator and reader." />
        <link rel="icon" href="https://anivanchen.github.io/favicon.ico" />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
