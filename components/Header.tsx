import Link from 'next/link'
import React from 'react'

function Header() {
  return (
      <header>
          <div>
              <Link href="/">
                  <img className="object-contain cursor-pointer w-44"
                      src="https://links.papareact.com/yvf" alt="" />
              </Link>
          </div>
          <div>
              
          </div>
    </header>
  )
}

export default Header