import { Environment, ScrollControls, useTrail } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import PhoneModel from './PhoneModel'
import { motion, useScroll, useTransform } from "motion/react"
import Loading from '../shared/Loading'
const PhoneScene = () => {

     return (
          <div className="fixed top-0 left-0 w-screen h-screen z-30">

               <Canvas
                    camera={{ fov: 1, position: [0, 0, 15] }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: true }}

               >
                    <Environment
                         files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/ferndale_studio_11_1k.hdr"]}
                    />

                    <PhoneModel />


               </Canvas>
          </div>
     )
}

export default PhoneScene
