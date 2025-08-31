import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NavbarContext } from "../../context/NavContext";
import { Globe } from "lucide-react";

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null);
    const fullScreenRef = useRef(null);

    const [navOpen, setNavOpen] = useContext(NavbarContext);

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`;

    // ✅ Prevent body scroll when nav is open
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [navOpen]);

    function gsapAnimation() {
        const tl = gsap.timeline();
        tl.to(".fullscreennav", { display: "block" })
            .to(".stairing", {
                delay: 0.2,
                height: "100%",
                stagger: { amount: -0.3 },
            })
            .to(".link", {
                opacity: 1,
                rotateX: 0,
                stagger: { amount: 0.3 },
            })
            .to(".navlink", { opacity: 1 });
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline();
        tl.to(".link", {
            opacity: 0,
            rotateX: 90,
            stagger: { amount: 0.1 },
        })
            .to(".stairing", {
                height: 0,
                stagger: { amount: 0.1 },
            })
            .to(".navlink", { opacity: 0 })
            .to(".fullscreennav", { display: "none" });
    }

    useGSAP(
        function () {
            if (navOpen) {
                gsapAnimation();
            } else {
                gsapAnimationReverse();
            }
        },
        [navOpen]
    );

    // ✅ Reusable Nav Item Component
    const NavItem = ({ title, images }) => (
        <div className="link relative border-t-1 border-white overflow-x-hidden group ">
            <h1 className="font-[font2] text-3xl sm:text-4xl lg:text-[8vw] text-center uppercase transition-colors duration-300 leading-[8vw] flex items-center justify-center">
                {title}
            </h1>

            {/* Hover Element */}
            <div className="moveLink absolute inset-0 h-full w-full bg-[#D3FD50] flex items-center overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="moveX flex items-center animate-marquee">
                    {images.map((img, i) => (
                        <React.Fragment key={i}>
                            <h2 className="whitespace-nowrap text-black font-[font2] text-xl sm:text-3xl lg:text-[6vw] text-center uppercase ">
                                Pour Tout voir
                            </h2>
                            <img
                                className="h-16 sm:h-24 lg:h-36 w-32 sm:w-56 lg:w-96 object-cover rounded-full shrink-0 mx-2"
                                src={img}
                                alt="preview"
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div
            ref={fullScreenRef}
            id="fullscreennav"
            className="fullscreennav text-white overflow-x-hidden h-screen w-full z-50 hidden absolute "
        >
            {/* Black Stairing Background */}
            <div className="h-screen w-full fixed">
                <div className="h-full w-full flex">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="stairing h-full w-1/5 bg-black"></div>
                    ))}
                </div>
            </div>

            {/* Navigation Links */}
            <div ref={fullNavLinksRef} className="relative px-2 pt-2 ">
                {/* Top Logo + Close */}
                <div className="navlink flex w-full justify-between px-1 items-start">
                    {/* Logo */}
                    <div className="lg:w-30 w-22">
                        <svg
                            className="w-full"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 103 44"
                        >
                            <path
                                fill="white"
                                fillRule="evenodd"
                                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                            ></path>
                        </svg>
                    </div>

                    {/* Close Button */}
                    <div
                        onClick={() => setNavOpen(false)}
                        className="lg:h-20 h-14 w-14 lg:w-20 relative cursor-pointer"
                    >
                        <div className="lg:h-28 h-20 lg:w-0.5 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
                        <div className="lg:h-28 h-20 lg:w-0.5 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
                    </div>
                </div>

                {/* Nav Items */}
                <div className="mt-8">
                    <NavItem
                        title="Projets"
                        images={[
                            "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
                            "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
                        ]}
                    />
                    <NavItem
                        title="Agence"
                        images={[
                            "https://k72.ca/uploads/teamMembers/Claire_640X290-640x290.jpg",
                            "https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg",
                        ]}
                    />
                    <NavItem
                        title="Contact"
                        images={[
                            "https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg",
                            "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
                        ]}
                    />
                    <NavItem
                        title="Blogs"
                        images={[
                            "https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png",
                            "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
                        ]}
                    />
                </div>

                <div className=" mt-5 flex  justify-between ">
                    <div className='flex items-center gap-4 '>
                        <Globe className='h-6 w-6' />
                        <span className='font-mono text-xs sm:text-sm md:text-base uppercase'>
                            Montreal_ <span>{formattedTime}</span>
                        </span>
                    </div>
                    <div className="flex items-center justify-center text-[11px] uppercase font-[font2] gap-2">
                        <h3>Politique de confidentialité</h3>
                        <h3>Avis de confidentialité
                        </h3>
                        <h3>Rapport éthique
                        </h3>
                        <h3>Options de consentement</h3>
                    </div>
                    <div className="flex gap-2 items-center justify-center ">
                        <span className="font-[font2] border-2 rounded-full text-[2.5vw] font-bold w-15  h-7 py-4 items-center flex justify-center ">
                            FB
                        </span>
                        <span className="font-[font2] border-2 rounded-full text-[2.5vw] font-bold w-15  h-7 py-4 items-center flex justify-center ">
                            IG
                        </span>
                        <span className="font-[font2] border-2 rounded-full text-[2.5vw] font-bold w-15  h-7 py-4 items-center flex justify-center ">
                            IN
                        </span>
                        <span className="font-[font2] border-2 rounded-full text-[2.5vw] font-bold w-15  h-7 py-4 items-center flex justify-center ">
                            BE
                        </span>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default FullScreenNav;
