import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import Maryan008 from "../public/Maryan008.jpg"
import Layout from "../components/layout"
import 'styles/globals.scss'



// при піключенні шрифту, потрібно перед закриваючою  > поставити /, щоб було  />

export default function App({ Component, pageProps }: AppProps) {
  return (
     <Layout>
       <Head>       
       <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&family=Montserrat:ital,wght@0,500;1,300;1,400&family=Open+Sans&display=swap" rel="stylesheet"/>
       </Head>
         <main>
            <Component {...pageProps} />
         </main>
     <Image className='myfoto'
     src={Maryan008}
     width={500}
     height={500}
     alt='preview'
     placeholder='blur'
     />
     </ Layout>
)
}


// <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&family=Montserrat:ital,wght@1,300;1,400&family=Open+Sans&display=swap" rel="stylesheet" />


