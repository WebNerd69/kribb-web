import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Navbar = () => {
     return (
          <nav className='w-full p-4 flex justify-between fixed top-0 left-0 text-zinc-900 z-30'>
               <div className='w-16'>
                    <img src={"./icon/kribb.png"} alt="kribb" className='w-full bg-contain' />
               </div>

               <button className='flex gap-1 text-xs justify-center items-center px-5 py-2 rounded-full bg-white shadow-2xl poppins500 cursor-pointer'>
                    Download the app <ArrowUpRight className='w-4 h-4 cursor-pointer'/>
               </button>
          </nav>
     )
}

export default Navbar
