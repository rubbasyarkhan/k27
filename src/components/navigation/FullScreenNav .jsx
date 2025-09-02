import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Globe } from 'lucide-react'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [navOpen]);



    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`;





    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.from('.right-nav', {
            x: 400,
            opacity: 0,
            duration: 0.1,
            ease: 'power3.out'
        },)
        tl.to('.navlink', {
            opacity: 1
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })


    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.from('.right-nav', {
            x: 400,
            // opacity: 0,
            duration: 0.1,
            ease: 'power4.out'
        },)
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

    return (
        <div
            ref={fullScreenRef}
            id="fullscreennav"
            className="fullscreennav hidden text-white overflow-x-hidden overflow-y-hidden fixed top-0 left-0 h-screen w-screen z-50"
        >
            <div className='h-screen w-full  fixed'>
                <div className='h-full w-full  flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative '>
                <div className=" flex  w-full justify-between lg:p-3 p-2 items-start">
                    <div className='navlink'>
                        <div className='lg:w-36 w-24'>
                            <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className="right-nav lg:h-20  n h-14 w-14 lg:w-20 relative cursor-pointer"
                    >
                        <div className="lg:h-28 h-20 lg:w-0.5 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
                        <div className="lg:h-28 h-20 lg:w-0.5 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>

                    </div>
                </div>
                <div className='py-6'>
                    {['Projets', 'Agence', 'Contact', 'Blogue'].map((title, i) => (
                        <div
                            key={i}
                            className={`link origin-top relative ${title === 'Blogue' ? 'border-y-1' : 'border-t-1'
                                } border-white`}
                        >
                            <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] pt-3 uppercase'>
                                {title}
                            </h1>
                            <div className='moveLink absolute inset-0 text-black flex items-center overflow-hidden bg-[#D3FD50] z-10 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'>
                                {[1, 2].map((_, idx) => (
                                    <div key={idx} className='moveX flex items-center animate-marquee whitespace-nowrap'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] pt-4 uppercase'>
                                            Pour Tout voir
                                        </h2>
                                        <img
                                            className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4'
                                            src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg'
                                            alt=''
                                        />
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] pt-4 uppercase'>
                                            Pour Tout voir
                                        </h2>
                                        <img
                                            className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover mx-4'
                                            src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg'
                                            alt=''
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className=" link mt-5 flex  justify-between ">
                    <div className='flex items-center gap-4 '>
                        <Globe className='h-6 w-6' />
                        <span className='font-mono text-xs sm:text-sm md:text-base uppercase'>
                            Montreal_ <span>{formattedTime}</span>
                        </span>
                    </div>
                    <div className="flex items-center justify-center text-[11px] uppercase font-[font2] gap-2">
                        <h3 className="hover:text-[#D3FD50]">Politique de confidentialité</h3>
                        <h3 className="hover:text-[#D3FD50]">Avis de confidentialité
                        </h3>
                        <h3 className="hover:text-[#D3FD50]">Rapport éthique
                        </h3>
                        <h3 className="hover:text-[#D3FD50]">Options de consentement</h3>
                    </div>
                    <div className="flex gap-2 items-center justify-center ">
                        <span className="font-[font2] border-2 rounded-full text-[2.5vw] font-bold w-15  h-7 py-4 items-center flex justify-center  hover:text-[#D3FD50]">
                            FB
                        </span>
                        <span className="font-[font2] border-2 rounded-full text-[2.5vw] font-bold w-15  h-7 py-4 items-center flex justify-center hover:text-[#D3FD50]">
                            IG
                        </span>
                        <span className="font-[font2] border-2 rounded-full text-[2.5vw] font-bold w-15  h-7 py-4 items-center flex justify-center hover:text-[#D3FD50]">
                            IN
                        </span>
                        <span className="font-[font2] border-2 rounded-full text-[2.5vw] font-bold w-15  h-7 py-4 items-center flex justify-center hover:text-[#D3FD50] ">
                            BE
                        </span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FullScreenNav