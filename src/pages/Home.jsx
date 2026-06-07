import { FileText, Heart, MapPin, Search, Star } from 'lucide-react'
import { useMotionValueEvent, useScroll , motion, useTransform} from 'motion/react'
import React, { useRef } from 'react'

const Home = () => {
     const pageRef = useRef(null)
     const {scrollYProgress} = useScroll({
          target:pageRef,
          offset:["start start","end end"]
     })

     const cardsOpacity = useTransform(scrollYProgress,[.1,.4,1],[0,1,1])
     const cardsMove = useTransform(scrollYProgress,[.1,.4,1],[40,0,0])
     const numsOpacity = useTransform(scrollYProgress,[.4,.7 ,1],[0,1,1])
     const numsMove = useTransform(scrollYProgress,[.4,.7,1],[40,0,0])

     return (
          <div ref={pageRef} className='w-full h-[200vh] relative poppins400 text-zinc-900 p-4 lg:p-0' >

               <div className="sticky top-20 left-0 xl:top-[15vh] xl:left-[10vw] w-full xl:w-[45vw] h-screen flex flex-col gap-5 xl:gap-20">
                    <div className=' xl:w-[40vw] flex flex-col gap-5 relative'>
                         <p className='text-3xl xl:text-5xl xl:w-[60%] poppins500'>
                              Find spaces that fit your vibe.
                         </p>
                         <p className='poppins300 text-sm xl:w-[80%]'>
                              Kribb helps you navigate every step of your property journey. From discovering homes and apartments to exploring detailed insights and verified locations, everything you need is always within reach.
                         </p>
                    </div>

                    <div className="w-full flex flex-col gap-7 xl:gap-20">
                         <motion.div style={{opacity:cardsOpacity , y:cardsMove}} className={`grid grid-cols-2 grid-rows-2 xl:flex xl:justify-between xl:items-center `}>
                              <div className='functionalityCards'>
                                   <div className='p-2 bg-white w-12 h-12 flex justify-center items-center rounded-xl aspect-square'>
                                        <Search className='' />
                                   </div>
                                   <div>
                                        <p className='poppins400'>Smart Search</p>
                                        <p className='text-xs poppins300 hidden xl:block'>Find property that matches your prefferences.</p>
                                   </div>
                              </div>
                              <div className='functionalityCards'>
                                   <div className='p-2 bg-white w-12 h-12 flex justify-center items-center rounded-xl aspect-square'>
                                        <MapPin className='' />
                                   </div>
                                   <div>
                                        <p className='poppins400'>Verified locations</p>
                                        <p className='text-xs poppins300 hidden xl:block'>All locations are verified for your peace of mind.</p>
                                   </div>
                              </div>
                              <div className='functionalityCards'>
                                   <div className='p-2 bg-white w-12 h-12 flex justify-center items-center rounded-xl aspect-square'>
                                        <FileText className='' />
                                   </div>
                                   <div>
                                        <p className='poppins400'>Detailed Insights</p>
                                        <p className='text-xs poppins300 hidden xl:block'>Get complete property details in one place.</p>
                                   </div>
                              </div>
                              <div className='functionalityCards'>
                                   <div className='p-2 bg-white w-12 h-12 flex justify-center items-center rounded-xl aspect-square'>
                                        <Heart className='' />
                                   </div>
                                   <div>
                                        <p className='poppins400'>Save & Compare</p>
                                        <p className='text-xs poppins300 hidden xl:block'>Save favorites and compare to decide better.</p>
                                   </div>
                              </div>
                         </motion.div>
                         <motion.div style={{opacity:numsOpacity , y:numsMove}} className='numbersCards'> 
                              <div className='numberCard'>
                                   <p className='poppins500 text-3xl mb-3'>10+</p>
                                   <p className='poppins500 text-sm mb-1'>Properties</p>
                                   <p className='poppins300 text-zinc-500 text-xs'>Across top cities</p>
                              </div>
                              <div className='numberCard'>
                                   <p className='poppins500 text-3xl mb-3'>5+</p>
                                   <p className='poppins500 text-sm mb-1'>Cities</p>
                                   <p className='poppins300 text-zinc-500 text-xs'>To explore</p>
                              </div>
                              <div className='numberCard'>
                                   <p className='poppins500 text-3xl mb-3'>1+</p>
                                   <p className='poppins500 text-sm mb-1'>Verified agents</p>
                                   <p className='poppins300 text-zinc-500 text-xs'>Ready to help</p>
                              </div>
                              <div className='xl:w-[20%] xl:h-full flex justify-center pl-5 flex-col'>
                                   <p className='poppins500 text-3xl mb-3 flex items-center gap-2'>3 <Star className='w-4 h-4'/></p>
                                   <p className='poppins500 text-sm mb-1'>User Ratings</p>
                                   <p className='poppins300 text-zinc-500 text-xs'>Rated by me</p>
                              </div>
                         </motion.div>
                         
                    </div>
               </div>
          </div>
     )
}

export default Home
