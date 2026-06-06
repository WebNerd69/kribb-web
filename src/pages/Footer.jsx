import React from 'react'

const Footer = () => {
     return (
          <div id='bottom' className='w-full h-[110vh] bg-zinc-950 relative rounded-t-[7vh] z-50 flex justify-center items-center'>
               <div className='mt-[15vh] relative'>
                    <span className='w-10 h-10 absolute top-2 -left-4 '>
                         <img className='w-10 h-10' src="./icon/doodleLine.svg" alt="" />
                    </span>
                    <h1 className='text-[40vh] unbounded600 text-[#f5f5f5] leading-none'>
                         Kribb
                    </h1>
                    <div className='flex justify-between'>
                         <div className='text-xl text-[#f5f5f5]/80 poppins400 px-5'>
                              <p>
                                   Real estate made real simple.
                              </p>
                              <p>
                                   Find. Explore. Own.
                              </p>
                         </div>

                         <div className='flex items-end'>
                              <span className='pb-5'>
                                   <svg width="140" height="140" viewBox="0 0 252 287" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.50049 1.5004C30.2867 77.0867 108.519 212.675 200.175 167.913C262.753 137.352 214.922 70.0129 147.753 106.102C80.5842 142.19 100.308 271.239 248.983 258.752M218.143 284.545L248.983 258.752L229.024 236.129" stroke="#F5F5F5" stroke-width="3" stroke-linecap="round" />
                                   </svg>
                              </span>
                              <div className='relative group'>
                                   <span className='w-8 h-8 absolute -top-10 -right-4 rotate-[-18deg] opacity-30 group-hover:opacity-100 transition-all duration-100'>
                                        <img className='w-6 h-6' src="./icon/doodleLineMirrored.svg" alt="" />
                                   </span>
                                   <button className='px-5 py-3 rounded-full poppins500 bg-[#f5f5f5] cursor-pointer -rotate-12'>
                                        Download the app
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
               <footer className='absolute bottom-2 w-full px-5 py-3 flex justify-between items-center'>
                    <a href="https://sketchfab.com/Tech_Freak-2511" target='_blank' className='poppins400 text-[#f5f5f5] text-sm opacity-55 hover:opacity-100' >Model by - Tech Freak</a>

                    <div className='flex gap-10'>
                         <a href="https://github.com/WebNerd69/kribb" target='_blank' className='poppins400 text-[#f5f5f5] flex items-center gap-1 opacity-55 hover:opacity-100' >
                              <p className='text-sm '>
                                   Kribb
                              </p>
                              <i class="ri-github-line"></i>
                         </a>
                         <a href="https://github.com/WebNerd69" target='_blank' className='poppins400 text-[#f5f5f5] flex items-center gap-1 opacity-55 hover:opacity-100' ><p className='texxtsm
                         '>WebNerd69</p>
                              <i class="ri-github-line"></i>
                         </a>
                    </div>
               </footer>
          </div>
     )
}

export default Footer
