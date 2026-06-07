import { ContactShadows, useGLTF, useTexture, useTrailTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMotionValueEvent, useScroll, motion, useTransform, useSpring } from 'motion/react'
import { div } from 'motion/react-client'
import React, { useEffect, useMemo, useRef } from 'react'
import { useFormState } from 'react-dom'
import * as THREE from "three"

const PhoneModel = () => {

     let model;
     let textures;

     const ref = useRef(null)
     const { scrollYProgress } = useScroll()

     model = useGLTF("./models/iphone_15_pro_max_black/scene.gltf")

     textures = useTexture([
          "./images/home2.webp",
          "./images/propertyDetail.webp",
          "./images/map.webp",
          "./images/saved.webp",
     ])

     const phoneScreen = useMemo(() => {
          let mesh;

          model.scene.traverse((child) => {
               if (
                    child.isMesh &&
                    child.material?.name === "pIJKfZsazmcpEiU"
               ) {
                    mesh = child;
               }
          });

          return mesh;
     }, [model]);
     
     phoneScreen.material.map = textures[0]
     phoneScreen.material.emissiveMap = textures[0]
     phoneScreen.material.emissiveIntensity = 1
     phoneScreen.material.color.set(0xffffff);
     phoneScreen.material.emissive.set(0xffffff);
     phoneScreen.material.toneMapped = false;

     textures.map((_, i) => {
          textures[i].colorSpace = THREE.SRGBColorSpace;
          textures[i].magFilter = THREE.NearestFilter;
     })

     model.scene.rotation.y = THREE.MathUtils.degToRad(170)



     // useMotionValueEvent(scrollYProgress, "change", (latest) => {
     //      console.log("model scroll : ", latest)
     // })
     // transformed variables

     // texture index
     const textureIndex = useTransform(scrollYProgress, (s) => {
          if (s < .39) { return 0 }
          if (s > .39 && s < .61) { return 1 }
          if (s > .61 && s < .67) { return 2 }
          if (s > .67) { return 3 }
     })

     // rotation
     const rotateY = useTransform(scrollYProgress, [0, .15, .33, .52, 1], [Math.PI * 1, Math.PI * .8, Math.PI * .8, -Math.PI * .8, -Math.PI * .8])
     const rotateX = useTransform(scrollYProgress, [0, .15, .33, .52, 1], [Math.PI * 0, -Math.PI * .085, -Math.PI * .085, -Math.PI * .085, -Math.PI * .085,])
     const rotateZ = useTransform(scrollYProgress, [0, .15, .33, .52, 1], [Math.PI * 0, Math.PI * .06, Math.PI * .06, -Math.PI * .06, -Math.PI * .06])


     // move
     const moveX = useTransform(scrollYProgress, [0, .15, .33, .52], [0, .15, .15, -.15])
     const moveUp = useTransform(scrollYProgress, [0, .15], [-0.15, 0])

     // scale
     const scaleDown = useTransform(scrollYProgress, [0, .15], [2, 1.3])


     useMotionValueEvent(textureIndex, "change", (idx) => {
          phoneScreen.material.map = textures[idx]
          phoneScreen.material.emissiveMap = textures[idx]

          phoneScreen.material.needsUpdate = true
     })

     useFrame((state, delta) => {


          model.scene.rotation.y = rotateY.get();
          model.scene.rotation.x = rotateX.get();
          model.scene.rotation.z = rotateZ.get();


          ref.current.position.set(moveX.get(), moveUp.get(), 0)
          ref.current.scale.setScalar(scaleDown.get());


     })

     return (
          <group ref={ref}>
               <primitive object={model.scene} />
          </group>


     )
}

export default PhoneModel
