'use client';

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Header( {links} : {links: {href: string, label: string}[]}) {
    const pathname = usePathname();
    return (
      <header className="flex justify-around sm:justify-end bg-neutral-700 list-none px-2 sm:px-12 pb-4 pt-2 items-end sticky top-0 z-50">
        <div className="w-24 sm:w-36 float-start hidden sm:block absolute -start-3 sm:-start-1  top-0 rounded-full p-5 bg-neutral-700 z-20">
          <Image className="w-24 sm:w-36" src="https://i.postimg.cc/N5cfWVfm/logo-TYL-circulo.png" alt="TYL" width={208} height={52} />
        </div>
        <div className='hidden sm:block'></div>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-center sm:mx-5 text-lime-300 font-light text-m flex items-center lg:text-3xl md:text-2xl">
            <span className={`hover:text-neutral-600 rounded-full hover:bg-lime-300 hover:shadow-lg shadow-neutral-600 px-4 transition-colors duration-500 ${pathname === link.href ? 'text-neutral-600 bg-lime-300' : ''}`}>
              {link.label}
            </span>
          </Link>
        ))}
      </header>
    )
}