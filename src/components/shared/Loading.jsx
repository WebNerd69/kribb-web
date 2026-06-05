import { useProgress } from '@react-three/drei'
import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'

const Loading = () => {
  const { progress, active } = useProgress()
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (!active && progress === 100) {
      const timer = setTimeout(() => {
        setShow(false)
      }, 1000) // optional delay before removing

      return () => clearTimeout(timer)
    }
  }, [active, progress])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="w-screen h-screen fixed top-0 left-0 z-50 bg-[#f5f5f5] flex justify-center items-center"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <div className="w-full flex flex-col justify-center items-center">

            <div className="w-[90%] h-16 grid grid-cols-[2fr_3fr_1fr] gap-10 pt-28">
              <span />

              <div className="w-full h-full overflow-hidden">
                <motion.div
                  className="bg-zinc-950 h-full"
                  animate={{ width: `${Math.round(progress)}%` }}
                />
              </div>

              <p className="text-[6vh] unbounded600">
                {Math.round(progress)}%
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loading