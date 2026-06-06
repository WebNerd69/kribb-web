import { ArrowRight, FileText, Heart, LandPlot, MapPin, ShieldCheck } from 'lucide-react'
import { useMotionValueEvent, useScroll, motion, useTransform, useSpring } from 'motion/react'
import React, { useRef } from 'react'

const Property = () => {

     const propertyRef = useRef(null)

     const { scrollYProgress } = useScroll({
          target: propertyRef,
          offset: ['start start', 'end end']
     })
     // transformed vars

     const opacity1 = useTransform(scrollYProgress, [.1, .2, 1], [0, 100, 100])
     const opacity2 = useTransform(scrollYProgress, [.2, .3, 1], [0, 100, 100])
     const opacity3 = useTransform(scrollYProgress, [.3, .4, 1], [0, 100, 100])
     const opacity4 = useTransform(scrollYProgress, [.4, .5, 1], [0, 100, 100])
     const opacity5 = useTransform(scrollYProgress, [.5, .6, 1], [0, 100, 100])
     const opacity6 = useTransform(scrollYProgress, [.6, .7, 1], [0, 100, 100])

     const y1 = useTransform(scrollYProgress, [.1, .2], [-20, 0])
     const y2 = useTransform(scrollYProgress, [.2, .3], [-20, 0])
     const y3 = useTransform(scrollYProgress, [.3, .4], [-20, 0])
     const y4 = useTransform(scrollYProgress, [.4, .5], [-20, 0])
     const y5 = useTransform(scrollYProgress, [.5, .6], [-20, 0])

     const x1 = useSpring(useTransform(scrollYProgress, [.7, .85], [-40, 0]))

     return (
          <div ref={propertyRef} className='w-full h-[250vh] relative flex justify-end'>
               <div className="sticky top-[10%] w-[60%] h-[80vh] flex flex-col gap-5 justify-between mb-20">
                    <div className='flex flex-col gap-5'>

                         <p className='text-5xl w-[70%] poppins500'>
                              Everything you need to know before you decide.
                         </p>
                         <p className=' text-zinc-500 poppins400'>Property details all in one place.</p>
                    </div>
                    <div className='flex flex-col gap-10'>
                         <motion.div
                              style={{ opacity: opacity1, y: y1 }}
                              className='flex gap-5 items-center'>
                              <div className=''>
                                   <FileText className='w-12 h-12 p-3 rounded-full bg-zinc-200' />
                              </div>
                              <div>
                                   <p className='text-lg poppins500'>Complete Property overview.</p>
                                   <p className='poppins400 text-zinc-500'>Access all the key details of the property in one place.</p>
                              </div>
                         </motion.div>
                         <motion.div
                              style={{ opacity: opacity2, y: y2 }}
                              className='flex gap-5 items-center'>
                              <div className=''>
                                   <LandPlot className='w-12 h-12 p-3 rounded-full bg-zinc-200' />
                              </div>
                              <div>
                                   <p className='text-lg poppins500'>Key features at a glance.</p>
                                   <p className='poppins400 text-zinc-500'>Bedrooms, bathrooms, area, type and more.</p>
                              </div>
                         </motion.div>
                         <motion.div
                              style={{ opacity: opacity3, y: y3 }}
                              className='flex gap-5 items-center'>
                              <div className=''>
                                   <MapPin className='w-12 h-12 p-3 rounded-full bg-zinc-200' />
                              </div>
                              <div>
                                   <p className='text-lg poppins500'>Prime location.</p>
                                   <p className='poppins400 text-zinc-500'>See the exact locations and neighbourhood insights.</p>
                              </div>
                         </motion.div>
                         <motion.div
                              style={{ opacity: opacity4, y: y4 }}
                              className='flex gap-5 items-center'>
                              <div className=''>
                                   <ShieldCheck className='w-12 h-12 p-3 rounded-full bg-zinc-200' />
                              </div>
                              <div>
                                   <p className='text-lg poppins500'>Verified & trusted.</p>
                                   <p className='poppins400 text-zinc-500'>Every listing is verified for your peace of mind.</p>
                              </div>
                         </motion.div>
                         <motion.div
                              style={{ opacity: opacity5, y: y5 }}
                              className='flex gap-5 items-center'>
                              <div className=''>
                                   <Heart className='w-12 h-12 p-3 rounded-full bg-zinc-200' />
                              </div>
                              <div>
                                   <p className='text-lg poppins500'>Save & compare.</p>
                                   <p className='poppins400 text-zinc-500'>Save and compare your favourites in a single click.</p>
                              </div>
                         </motion.div>
                    </div>
                    <motion.div style={{ opacity: opacity6 }} className='border-t-2 border-zinc-200 w-[50%] flex justify-between py-5'>
                         <div className='flex flex-col gap-1'>
                              <p className='text-lg poppins500'>Find your perfect place.</p>
                              <p className='poppins400 text-zinc-500'>Book a visit or connect with our agents.</p>
                         </div>
                         <motion.div style={{ x: x1 }}>
                              <ArrowRight className='w-16 h-16 p-5 border border-zinc-900/50 rounded-full' />
                         </motion.div>
                    </motion.div>
               </div>
          </div>
     )
}

export default Property
