import Link from 'next/link'
import React, { useState } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'

function Header() {
    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
    }

    const scrollPosition = useScrollPosition()
    console.log(scrollPosition, 'px')
  return (
      <header className={classNames(
          scrollPosition > 400 ? "bg-white" :"bg-mediumYellow" ,
          'fixed flex justify-between w-full p-5 px-20 mx-auto border-b boder-black '
      )}>
          <div className='flex items-center space-x-5'>
              <Link href="/">
                  <img className="object-contain cursor-pointer w-44"
                      src="https://links.papareact.com/yvf" alt="" />
              </Link>
          </div>
          <div className='flex items-center space-x-5 text-sm text-black-200'>
              <div className='items-center hidden space-x-5 md:inline-flex'>
                  <h3>Our story</h3>
                  <h3>Membership</h3>
                  <h3 >Write</h3>
              </div>
              <h3>
                  Sign in
              </h3>
              <h3 className={
                  classNames(
                      scrollPosition > 400 ? "bg-green" : "bg-black",
                      'px-4 py-1 text-white   rounded-full border-black-200'
                  )
              }>
                  Get Started
                  
              </h3>
              
          </div>
    </header>
  )
}

export default Header