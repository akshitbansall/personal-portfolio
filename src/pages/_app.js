import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'

import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        html,
        body,
        #__next {
          height: 100%;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background-color: #f2f2f2;
        }
      `}</style>


      <NavBar />
      <Component {...pageProps} />
      <Footer />









    </>
  )
}




