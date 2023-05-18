import { Header } from '@/components/Header'
import { client } from '@/services/api'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>

      <Header />
      <Component {...pageProps} />

    </ApolloProvider>

  );
}
