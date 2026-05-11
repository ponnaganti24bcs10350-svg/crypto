'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import path from 'path'
import { cn } from '@/lib/utils'

const Header = () => {
    const pathname = usePathname();
  return (
    <header>
      <div className='main-container inner'>
        <Link href="/">
          <Image 
            src="logo.svg" 
            alt="CoinPulse logo" 
            width={132} 
            height={40}
          />
        </Link>
        <nav>
            <Link href="/" className={cn('nav-link',{
                'is-active':pathname === '/',
                'is-home':true
            })}>
            Home
            
            </Link>
            <p>search model</p>
            <Link href="/coins" className={cn('nav-link',{
                'is-active':pathname === '/coins',
                'is-home':true
            })}>All coins</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header