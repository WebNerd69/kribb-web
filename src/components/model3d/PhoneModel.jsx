import { useGLTF, useTexture, useTrailTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMotionValueEvent, useScroll ,motion, useTransform, useSpring} from 'motion/react'
import { div } from 'motion/react-client'
import React, { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import * as THREE from "three"

const PhoneModel = () => {

     const model = useGLTF("./models/iphone_15_pro_max_black/scene.gltf")
     let tex = useTexture("./images/home2.jpg")

     tex.colorSpace = THREE.SRGBColorSpace;
     tex.magFilter = THREE.NearestFilter;

     model.scene.rotation.y = THREE.MathUtils.degToRad(170)

     let phoneScreen;
     let screenGlass;

     model.scene.traverse((child) => {
          if (child.isMesh) {
               if (child.material?.name === "pIJKfZsazmcpEiU") {
                    // console.log("SCREEN FOUND:", child);
                    phoneScreen = child
               }
          }
     });
     model.scene.traverse((child) => {
          if (child.isMesh) {
               if (child.material?.name === "sxNzrmuTqVeaXdg") {
                    console.log("Glass FOUND:", child);
                    screenGlass = child

               }
          }
     });

     phoneScreen.material.emissiveMap = tex
     phoneScreen.material.emissiveIntensity = 1
     phoneScreen.material.map = tex
     phoneScreen.material.color.set(0xffffff);
     phoneScreen.material.emissive.set(0xffffff);
     phoneScreen.material.toneMapped = false;

     screenGlass.material.roughness = .8


     const ref = useRef(null)

     const { scrollYProgress } = useScroll()


     // transformed variables

     // rotation
     const rotateY = useTransform(scrollYProgress,[0,.2,1],[Math.PI*1 , Math.PI*.8 ,Math.PI*.8])
     const rotateX = useTransform(scrollYProgress,[0,.2,1],[Math.PI*0 , -Math.PI*.085 ,-Math.PI*.085])
     const rotateZ = useTransform(scrollYProgress,[0,.2,1],[Math.PI*0 , Math.PI*.06 ,Math.PI*.06])


     // move
     const moveRight = useTransform(scrollYProgress,[0,.2],[0,.15])
     const moveUp = useTransform(scrollYProgress,[0,.2],[-0.15 ,0])

     // scale
     const scaleDown = useTransform(scrollYProgress,[0,.2],[2,1.3])
     

     useFrame((state , delta)=>{
          model.scene.rotation.y = rotateY.get();
          model.scene.rotation.x = rotateX.get();
          model.scene.rotation.z = rotateZ.get();


          ref.current.position.set(moveRight.get(),moveUp.get(),0)
          ref.current.scale.setScalar(scaleDown.get());
     })

     return (
          <group ref={ref}>
               <primitive object={model.scene}  />
          </group>


     )
}

export default PhoneModel
