import { Header } from '@/components/Header'
import { FilterContextProvider } from '@/components/contexts/filter-context'
import { client } from '@/services/api'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <FilterContextProvider>

        <Header />
        <Component {...pageProps} />

      </FilterContextProvider>

    </ApolloProvider>

  );
}
