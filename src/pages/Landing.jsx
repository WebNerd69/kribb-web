import { ArrowDown } from 'lucide-react'
import React from 'react'

const Landing = () => {
  return (
    <div className='w-full h-screen text-zinc-900 flex justify-center items-center relative'>
      <h1 className='text-[40vh] unbounded600'>
        Kribb
      </h1>
      <div className="w-[33vw] h-[33vh] flex flex-col gap-20 absolute bottom-0 right-0 ">
        <div className='text-xl poppins400 text-zinc-900'>

          <p>
            Real estate made real simple.
          </p>
          <p>
            Find. Explore. Own.
          </p>
        </div>
        <span className='flex justify-center gap-3 items-center w-44 py-3 text-sm poppins300'>
          <ArrowDown className='w-6 h-6' />
          Scroll to explore
        </span>

      </div>
    </div>
  )
}

export default Landing
