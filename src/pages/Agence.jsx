import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDiv = useRef(null)
  const imageref = useRef(null)


  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function () {

    gsap.to(imageDiv.current, {
      scrollTrigger: {
        trigger: imageDiv.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -180%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageref.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <>
      <div className='section1agence'>

        <div ref={imageDiv} className='h-[40vh] w-[30vh] rounded-4xl bg-red-700 absolute top-30 left-95 overflow-hidden '>
          <img ref={imageref} src="https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg" className='h-full w-full object-cover' alt="" />
        </div>

        <div className='text-black relative'>

          <div className='mt-[55vh] '>
            <h1 className='text-center font-[font2] text-[20vw] uppercase leading-[17vw]'>
              Soixan7e <br />
              Douze
            </h1>
          </div>

          <div className='lg:pl-[40%]   p-3'>
            <p className='lg:text-[4.5vw] font-[font2] text-xl leading-[4.3vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>

        </div>
      </div>
      <div className='section2agence h-screen'>


      </div>
    </>
  )
}

export default Agence