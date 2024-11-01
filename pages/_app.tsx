import Navbar from '../components/Navbar';
import  Sidebar from '../components/Sidebar'; 
import "@/styles/globals.css";
import { ThemeProvider } from 'next-themes';
import type { AppProps } from "next/app";
 export default function App({ Component, pageProps }: AppProps) {
  return (
     <ThemeProvider attribute="class">

    
     <div className='grid grid-cols-12 gap-6 px-5 lg:px-48  my-14 sm:px-20 md:px-32'>
      <div className='col-span-12 p-6 text-center  lg:col-span-3 bg-white dark:bg-black rounded-2xl '><Sidebar/></div>
      <div className='col-span-12 lg:col-span-9 bg-white rounded-2xl flex flex-col'><Navbar/>
        <Component {...pageProps} />
         </div>
     </div>
     </ThemeProvider>
    <Component {...pageProps} />
  );
  
}

