import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-sans bg-light w-full min-h-screen text-dark`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
