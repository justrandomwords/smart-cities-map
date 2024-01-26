'use client'

import { useState } from "react";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./_components/Map/Map"), {
  ssr: false
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [ isOpen, setIsOpen ] = useState(true); 

  return (
    <section className='relative overflow-hidden'>
      <Map/>
      <div className={`absolute bottom-0 top-8 inset-x-20 z-[1001] bg-primary-background/25 backdrop-blur-lg rounded-t-3xl  transition-transform duration-300 ${!isOpen && 'translate-y-full'}`}>
        <div className={`grid place-items-center py-4 transition-transform ${!isOpen && 'translate-y-[calc(-2rem-2.775rem)]'}`}>
          <div className={`grid place-items-center rounded-3xl cursor-pointer px-6 py-2 transition-colors
          ${!isOpen && 'bg-background'}`}
          onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close': 'Click'}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}