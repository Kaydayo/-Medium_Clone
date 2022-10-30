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
              <div>
                  <h3></h3>
                  <h3></h3>
                  <h3></h3>
              </div>
          </div>
          <div></div>
    </header>
  )
}

export default Header