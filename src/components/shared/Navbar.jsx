import Lenis from 'lenis'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Navbar = () => {
     const lenis = new Lenis()
     const scrollToBottom = () => {
          window.scrollTo({
               top: document.documentElement.scrollHeight,
               behavior: "smooth",
          })
     }
     return (
          <nav className='w-full p-4 flex justify-between fixed top-0 left-0 text-zinc-900 z-40 bg-[#f5f5f5] lg:bg-transparent'>
               <div className='w-16'>
                    <img src={"./icon/kribbIcon.svg"} alt="kribb" className='w-16 h-8.75 bg-contain' />
               </div>

               <button onClick={scrollToBottom} className='flex gap-1 text-xs justify-center items-center px-5 py-2 rounded-full bg-white shadow-2xl poppins500 cursor-pointer'>
                    Download the app <ArrowUpRight className='w-4 h-4 cursor-pointer' />
               </button>
          </nav>
     )
}

export default Navbar
