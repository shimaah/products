import React from 'react';
import {Header} from '../components/Header';
import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '400' });
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Products</title>
    </Head>
      <Header />
      <main>
        <style jsx global>{`
            html {
                font-family: ${inter.style.fontFamily};
            }
         `}
        </style>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;