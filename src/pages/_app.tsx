import { Header } from "@/components/Header";
import { FilterContextProvider } from "@/components/contexts/filter-context";
import "@/styles/globals.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FilterContextProvider>
      <Header />
      <Component {...pageProps} />
    </FilterContextProvider>
  );
}
