import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium-Cloned by Adebowale Mujeeb</title>
        <link rel="icon" href="/med-ico.png" />
      </Head>
      <Header />
      <div className='flex items-center justify-between px-20 py-10 bborder-black order-b bg-mediumYellow'>
        <div className='px-20 py-20 space-y-10 w-fit'>
          <h1 className='font-serif w-fit text-8xl'>
            {/* <span className='underline decoration-black decoration-4'>Medium </span> */}
            Stay Curious.</h1>
          <h2 className='w-3/4 text-2xl'>Discover stories, thinking, and expertise from writers on any topic.</h2>

          <h3 className='px-10 py-2 text-xl text-center text-white bg-black rounded-full cursor-pointer w-fit border-black-200'>
            Start reading

          </h3>
        </div>

        <div className='hidden p-0 m-0 w-fit md:block'>
          <img src="/med-anima.gif" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Home
